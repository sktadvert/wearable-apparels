import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import DashboardOverview from "./DashboardOverview";

export default async function DashboardPage() {
  const session = await auth();
  const userId = (session?.user as any)?.id;

  // Fetch dashboard data
  const [rfqs, orders, recentMessages] = await Promise.all([
    prisma.rFQ.findMany({
      where: { userId },
      include: { quotes: true },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
    prisma.order.findMany({
      where: { userId },
      include: { updates: { orderBy: { createdAt: "desc" }, take: 1 } },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
    prisma.message.findMany({
      where: { userId, isAdmin: true, read: false },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ]);

  const stats = {
    activeRFQs: rfqs.filter((r) => !["ACCEPTED", "REJECTED"].includes(r.status)).length,
    pendingQuotes: rfqs.filter((r) => r.status === "QUOTED").length,
    activeOrders: orders.filter((o) => o.status !== "DELIVERED").length,
    completedOrders: orders.filter((o) => o.status === "DELIVERED").length,
  };

  return (
    <DashboardOverview
      stats={stats}
      recentRFQs={JSON.parse(JSON.stringify(rfqs))}
      recentOrders={JSON.parse(JSON.stringify(orders))}
      unreadMessages={recentMessages.length}
    />
  );
}
