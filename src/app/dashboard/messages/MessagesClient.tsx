"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { formatDateTime } from "@/lib/utils";

interface Props {
  messages: any[];
}

export default function MessagesClient({ messages }: Props) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-black">Messages</h1>
        <p className="text-white/30 text-sm mt-1">
          Communication with Wearable Apparels team
        </p>
      </div>

      {messages.length === 0 ? (
        <Card padding="lg" className="text-center py-20">
          <div className="w-16 h-16 rounded-2xl bg-white/[0.04] flex items-center justify-center mx-auto mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>
          <p className="text-white/30 text-sm mb-2">No messages yet</p>
          <p className="text-white/15 text-xs">
            Messages will appear here when our team responds to your requests
          </p>
        </Card>
      ) : (
        <div className="space-y-3">
          {messages.map((msg, i) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <Card
                className={`flex gap-4 ${
                  msg.isAdmin
                    ? "border-l-2 border-l-[#c9a96e]/30"
                    : "border-l-2 border-l-white/10"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#c9a96e]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#c9a96e] text-[10px] font-bold">
                    {msg.isAdmin ? "WA" : "ME"}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xs font-medium text-white/60">
                      {msg.isAdmin ? "Wearable Apparels" : "You"}
                    </p>
                    <span className="text-[10px] text-white/15">
                      {formatDateTime(msg.createdAt)}
                    </span>
                    {!msg.read && msg.isAdmin && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                    )}
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {msg.content}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
