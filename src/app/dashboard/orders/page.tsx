import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import OrdersListClient from "./OrdersListClient";

export default async function OrdersPage() {
  const session = await auth();
  const userId = (session?.user as any)?.id;

  const orders = await prisma.order.findMany({
    where: { userId },
    include: {
      rfq: true,
      updates: { orderBy: { createdAt: "desc" } },
    },
    orderBy: { createdAt: "desc" },
  });

  return <OrdersListClient orders={JSON.parse(JSON.stringify(orders))} />;
}
