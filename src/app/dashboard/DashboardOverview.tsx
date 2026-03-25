"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Card, { StatCard } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { formatDate, formatCurrency } from "@/lib/utils";
import type { DashboardStats } from "@/types";

interface Props {
  stats: DashboardStats;
  recentRFQs: any[];
  recentOrders: any[];
  unreadMessages: number;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DashboardOverview({
  stats,
  recentRFQs,
  recentOrders,
  unreadMessages,
}: Props) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black">Dashboard</h1>
          <p className="text-white/30 text-sm mt-1">
            Your manufacturing projects at a glance
          </p>
        </div>
        <Link href="/dashboard/rfq/new">
          <Button>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12h14" />
            </svg>
            New Request
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <motion.div
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <motion.div variants={fadeIn}>
          <StatCard
            label="Active Requests"
            value={stats.activeRFQs}
            color="#c9a96e"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="1" />
              </svg>
            }
          />
        </motion.div>
        <motion.div variants={fadeIn}>
          <StatCard
            label="Pending Quotes"
            value={stats.pendingQuotes}
            color="#8b5cf6"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </motion.div>
        <motion.div variants={fadeIn}>
          <StatCard
            label="Active Orders"
            value={stats.activeOrders}
            color="#3b82f6"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            }
          />
        </motion.div>
        <motion.div variants={fadeIn}>
          <StatCard
            label="Completed"
            value={stats.completedOrders}
            color="#22c55e"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </motion.div>
      </motion.div>

      {/* Recent Activity Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent RFQs */}
        <Card padding="lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Recent Requests</h3>
            <Link href="/dashboard/rfq" className="text-[#c9a96e] text-xs font-medium hover:text-[#e0c992]">
              View all →
            </Link>
          </div>
          {recentRFQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/20 text-sm mb-4">No requests yet</p>
              <Link href="/dashboard/rfq/new">
                <Button variant="secondary" size="sm">
                  Submit your first request
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {recentRFQs.map((rfq) => (
                <Link
                  key={rfq.id}
                  href={`/dashboard/rfq/${rfq.id}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
                >
                  <div>
                    <p className="text-sm font-medium text-white/80 group-hover:text-[#c9a96e] transition-colors">
                      {rfq.projectType} × {rfq.quantity}
                    </p>
                    <p className="text-xs text-white/25 mt-1">
                      {formatDate(rfq.createdAt)}
                    </p>
                  </div>
                  <StatusBadge status={rfq.status} />
                </Link>
              ))}
            </div>
          )}
        </Card>

        {/* Recent Orders */}
        <Card padding="lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Active Orders</h3>
            <Link href="/dashboard/orders" className="text-[#c9a96e] text-xs font-medium hover:text-[#e0c992]">
              View all →
            </Link>
          </div>
          {recentOrders.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/20 text-sm">No orders yet</p>
              <p className="text-white/10 text-xs mt-2">
                Orders appear after an RFQ quote is accepted
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {recentOrders.map((order) => (
                <Link
                  key={order.id}
                  href={`/dashboard/orders/${order.id}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
                >
                  <div>
                    <p className="text-sm font-medium text-white/80 group-hover:text-[#c9a96e] transition-colors">
                      Order #{order.id.slice(-6).toUpperCase()}
                    </p>
                    <p className="text-xs text-white/25 mt-1">
                      {formatCurrency(order.totalAmount)}
                    </p>
                  </div>
                  <StatusBadge status={order.status} />
                </Link>
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* Unread messages banner */}
      {unreadMessages > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href="/dashboard/messages">
            <Card hover className="flex items-center justify-between border border-[#c9a96e]/20 bg-[#c9a96e]/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/20 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#c9a96e]">
                    {unreadMessages} unread message{unreadMessages > 1 ? "s" : ""}
                  </p>
                  <p className="text-xs text-white/30">Click to view</p>
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Card>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
