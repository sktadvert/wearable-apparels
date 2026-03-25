"use client";

import { cn } from "@/lib/utils";
import { ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from "@/types";
import type { OrderStatus } from "@/types";

const ORDER_STEPS: OrderStatus[] = [
  "CONFIRMED",
  "DESIGNING",
  "SAMPLING",
  "PRODUCTION",
  "QC",
  "SHIPPING",
  "DELIVERED",
];

interface OrderTimelineProps {
  currentStatus: OrderStatus;
  updates?: {
    status: OrderStatus;
    note: string | null;
    createdAt: string;
  }[];
}

export default function OrderTimeline({ currentStatus, updates = [] }: OrderTimelineProps) {
  const currentIndex = ORDER_STEPS.indexOf(currentStatus);

  return (
    <div className="relative">
      {/* Desktop timeline */}
      <div className="hidden md:block">
        <div className="flex items-start justify-between relative">
          {/* Progress bar background */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-white/[0.06]" />
          {/* Progress bar fill */}
          <div
            className="absolute top-5 left-0 h-0.5 transition-all duration-1000 ease-out"
            style={{
              width: `${(currentIndex / (ORDER_STEPS.length - 1)) * 100}%`,
              background: `linear-gradient(90deg, #c9a96e, ${ORDER_STATUS_COLORS[currentStatus]})`,
            }}
          />

          {ORDER_STEPS.map((step, i) => {
            const isCompleted = i < currentIndex;
            const isCurrent = i === currentIndex;
            const isPending = i > currentIndex;
            const color = ORDER_STATUS_COLORS[step];

            return (
              <div
                key={step}
                className="relative flex flex-col items-center"
                style={{ width: `${100 / ORDER_STEPS.length}%` }}
              >
                {/* Step circle */}
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-500",
                    isCompleted && "bg-[#c9a96e]/20",
                    isCurrent && "ring-4 ring-offset-2 ring-offset-[#0a0a0a]",
                    isPending && "bg-white/[0.04] border border-white/[0.08]"
                  )}
                  style={{
                    backgroundColor: isCompleted ? `${color}20` : isCurrent ? `${color}30` : undefined,
                    borderColor: isCurrent ? color : undefined,
                    ringColor: isCurrent ? `${color}40` : undefined,
                  }}
                >
                  {isCompleted ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : isCurrent ? (
                    <div
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: color }}
                    />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                  )}
                </div>

                {/* Label */}
                <p
                  className={cn(
                    "text-[10px] mt-3 text-center font-medium tracking-wider uppercase transition-colors",
                    isCompleted && "text-white/50",
                    isCurrent && "text-[#c9a96e]",
                    isPending && "text-white/15"
                  )}
                >
                  {ORDER_STATUS_LABELS[step]}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile timeline (vertical) */}
      <div className="md:hidden space-y-0">
        {ORDER_STEPS.map((step, i) => {
          const isCompleted = i < currentIndex;
          const isCurrent = i === currentIndex;
          const isPending = i > currentIndex;
          const color = ORDER_STATUS_COLORS[step];
          const update = updates.find((u) => u.status === step);

          return (
            <div key={step} className="flex gap-4">
              {/* Line + dot */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    isPending && "bg-white/[0.04] border border-white/[0.08]"
                  )}
                  style={{
                    backgroundColor: isCompleted || isCurrent ? `${color}20` : undefined,
                  }}
                >
                  {isCompleted ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : isCurrent ? (
                    <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: color }} />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  )}
                </div>
                {i < ORDER_STEPS.length - 1 && (
                  <div
                    className="w-0.5 h-12"
                    style={{
                      backgroundColor: isCompleted ? `${color}30` : "rgba(255,255,255,0.04)",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <p
                  className={cn(
                    "text-sm font-medium",
                    isCompleted && "text-white/50",
                    isCurrent && "text-[#c9a96e]",
                    isPending && "text-white/15"
                  )}
                >
                  {ORDER_STATUS_LABELS[step]}
                </p>
                {update?.note && (
                  <p className="text-xs text-white/25 mt-1">{update.note}</p>
                )}
                {update?.createdAt && (
                  <p className="text-[10px] text-white/15 mt-0.5">
                    {new Date(update.createdAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
