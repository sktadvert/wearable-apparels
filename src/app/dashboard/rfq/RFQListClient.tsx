"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

interface Props {
  rfqs: any[];
}

export default function RFQListClient({ rfqs }: Props) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black">My Requests</h1>
          <p className="text-white/30 text-sm mt-1">
            {rfqs.length} total request{rfqs.length !== 1 ? "s" : ""}
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

      {rfqs.length === 0 ? (
        <Card padding="lg" className="text-center py-20">
          <div className="w-16 h-16 rounded-2xl bg-white/[0.04] flex items-center justify-center mx-auto mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.2">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="1" />
            </svg>
          </div>
          <p className="text-white/30 text-sm mb-2">No requests yet</p>
          <p className="text-white/15 text-xs mb-6">
            Submit your first project request and get a quote within 24-48 hours
          </p>
          <Link href="/dashboard/rfq/new">
            <Button size="sm">Get Started</Button>
          </Link>
        </Card>
      ) : (
        <div className="space-y-3">
          {rfqs.map((rfq, i) => (
            <motion.div
              key={rfq.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link href={`/dashboard/rfq/${rfq.id}`}>
                <Card hover className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center shrink-0">
                      <span className="text-[#c9a96e] text-xs font-bold">
                        {rfq.projectType.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-white/80">
                          {rfq.projectType}
                        </p>
                        <StatusBadge status={rfq.status} />
                      </div>
                      <p className="text-xs text-white/25 mt-0.5">
                        {rfq.quantity} units • {rfq.fabricType || "Fabric TBD"} •{" "}
                        {formatDate(rfq.createdAt)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {rfq.quotes.length > 0 && (
                      <span className="text-xs text-[#c9a96e] font-medium">
                        {rfq.quotes.length} quote{rfq.quotes.length > 1 ? "s" : ""}
                      </span>
                    )}
                    {rfq.attachments.length > 0 && (
                      <span className="text-xs text-white/20">
                        {rfq.attachments.length} file{rfq.attachments.length > 1 ? "s" : ""}
                      </span>
                    )}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
