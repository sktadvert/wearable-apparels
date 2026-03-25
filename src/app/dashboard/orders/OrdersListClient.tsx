"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import OrderTimeline from "@/components/dashboard/OrderTimeline";
import { formatDate, formatCurrency } from "@/lib/utils";

interface Props {
  orders: any[];
}

export default function OrdersListClient({ orders }: Props) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black">Orders</h1>
          <p className="text-white/30 text-sm mt-1">
            Track your production orders
          </p>
        </div>
      </div>

      {orders.length === 0 ? (
        <Card padding="lg" className="text-center py-20">
          <div className="w-16 h-16 rounded-2xl bg-white/[0.04] flex items-center justify-center mx-auto mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.2">
              <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <p className="text-white/30 text-sm mb-2">No orders yet</p>
          <p className="text-white/15 text-xs mb-6">
            Orders are created after you accept a quote on an RFQ
          </p>
          <Link href="/dashboard/rfq/new">
            <Button size="sm">Submit a Request</Button>
          </Link>
        </Card>
      ) : (
        <div className="space-y-4">
          {orders.map((order, i) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card padding="lg" hover>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold">
                        Order #{order.id.slice(-6).toUpperCase()}
                      </h3>
                      <StatusBadge status={order.status} />
                    </div>
                    <p className="text-white/25 text-xs">
                      {order.rfq?.projectType} × {order.rfq?.quantity} units •{" "}
                      {formatCurrency(order.totalAmount)} • Created{" "}
                      {formatDate(order.createdAt)}
                    </p>
                  </div>
                  <Link href={`/dashboard/orders/${order.id}`}>
                    <Button variant="outline" size="sm">
                      View Details →
                    </Button>
                  </Link>
                </div>

                <OrderTimeline
                  currentStatus={order.status}
                  updates={order.updates}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
