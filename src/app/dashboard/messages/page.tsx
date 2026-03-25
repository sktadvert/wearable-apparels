import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import MessagesClient from "./MessagesClient";

export default async function MessagesPage() {
  const session = await auth();
  const userId = (session?.user as any)?.id;

  const messages = await prisma.message.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  // Mark as read
  await prisma.message.updateMany({
    where: { userId, isAdmin: true, read: false },
    data: { read: true },
  });

  return <MessagesClient messages={JSON.parse(JSON.stringify(messages))} />;
}
