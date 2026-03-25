import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import RFQListClient from "./RFQListClient";

export default async function RFQListPage() {
  const session = await auth();
  const userId = (session?.user as any)?.id;

  const rfqs = await prisma.rFQ.findMany({
    where: { userId },
    include: { quotes: true, attachments: true },
    orderBy: { createdAt: "desc" },
  });

  return <RFQListClient rfqs={JSON.parse(JSON.stringify(rfqs))} />;
}
