import { NextResponse } from "next/server";
import { sendTransactionalEmail } from "@/lib/email";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  brand: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = contactSchema.parse(body);

    // Send to admin
    const adminEmail = process.env.ADMIN_EMAIL || "hello@wearableapparels.com";
    await sendTransactionalEmail({
      to: adminEmail,
      subject: `Contact Form: ${validated.name} (${validated.brand || "No brand"})`,
      body: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validated.name}</p>
        <p><strong>Email:</strong> ${validated.email}</p>
        <p><strong>Brand:</strong> ${validated.brand || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${validated.message}</p>
      `,
    });

    // Auto-reply to user
    await sendTransactionalEmail({
      to: validated.email,
      subject: "Thanks for reaching out — Wearable Apparels",
      body: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f0f0f0; padding: 40px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <div style="display: inline-block; padding: 12px 20px; background: linear-gradient(135deg, #c9a96e, #e0c992); border-radius: 12px;">
              <span style="color: #0a0a0a; font-weight: 900; font-size: 18px;">WA</span>
            </div>
          </div>
          <h1 style="color: #c9a96e; font-size: 24px; margin-bottom: 16px;">We got your message</h1>
          <p style="color: #999; line-height: 1.6;">Hi ${validated.name},</p>
          <p style="color: #999; line-height: 1.6;">
            Thanks for reaching out. Our team will review your message and get back to you within 24 hours.
          </p>
          <p style="color: #999; line-height: 1.6;">
            In the meantime, check out our work on Instagram: <a href="https://instagram.com/wearable_apparels" style="color: #c9a96e;">@wearable_apparels</a>
          </p>
          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 32px 0;" />
          <p style="color: #555; font-size: 12px;">Wearable Apparels — Premium Custom Manufacturing</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
    }
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
