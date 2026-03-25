import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { sendTransactionalEmail, rfqConfirmationEmail, rfqAdminNotification } from "@/lib/email";
import { z } from "zod";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const rfqSchema = z.object({
  projectType: z.string().min(1, "Project type is required"),
  quantity: z.string().transform((v) => parseInt(v, 10)).pipe(z.number().min(50, "Minimum order is 50 units")),
  description: z.string().optional().default(""),
  fabricType: z.string().optional(),
  colors: z.string().optional(),
  sizes: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const formData = await req.formData();

    // Parse form fields
    const fields: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        fields[key] = value;
      }
    }

    const validated = rfqSchema.parse(fields);

    // Handle file uploads
    const files = formData.getAll("files") as File[];
    const attachments: { fileName: string; fileUrl: string; fileType: string; fileSize: number }[] = [];

    if (files.length > 0) {
      const uploadDir = path.join(process.cwd(), "public", "uploads", userId);
      await mkdir(uploadDir, { recursive: true });

      for (const file of files) {
        if (file.size > 0) {
          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);
          const uniqueName = `${Date.now()}-${file.name}`;
          const filePath = path.join(uploadDir, uniqueName);
          await writeFile(filePath, buffer);

          attachments.push({
            fileName: file.name,
            fileUrl: `/uploads/${userId}/${uniqueName}`,
            fileType: file.type,
            fileSize: file.size,
          });
        }
      }
    }

    // Create RFQ
    const rfq = await prisma.rFQ.create({
      data: {
        userId,
        projectType: validated.projectType,
        quantity: validated.quantity,
        description: validated.description,
        fabricType: validated.fabricType || null,
        colors: validated.colors || null,
        sizes: validated.sizes || null,
        budget: validated.budget || null,
        timeline: validated.timeline || null,
        attachments: {
          create: attachments,
        },
      },
      include: { attachments: true },
    });

    // Send confirmation email to user
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user?.email) {
      const emailContent = rfqConfirmationEmail(user.name || "there", rfq.id.slice(-8).toUpperCase());
      sendTransactionalEmail({
        to: user.email,
        ...emailContent,
      });
    }

    // Notify admin
    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail) {
      const adminContent = rfqAdminNotification({
        name: user?.name || "Unknown",
        email: user?.email || "",
        company: user?.company || "",
        projectType: rfq.projectType,
        quantity: rfq.quantity,
        description: rfq.description,
      });
      sendTransactionalEmail({
        to: adminEmail,
        ...adminContent,
      });
    }

    return NextResponse.json(rfq, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error("RFQ creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET: List user's RFQs
export async function GET() {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const isAdmin = (session.user as any).role === "ADMIN";

    const rfqs = await prisma.rFQ.findMany({
      where: isAdmin ? {} : { userId },
      include: {
        quotes: true,
        attachments: true,
        user: { select: { name: true, email: true, company: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(rfqs);
  } catch (error) {
    console.error("RFQ fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
