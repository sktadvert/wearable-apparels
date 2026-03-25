"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "info" | "gold";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-white/10 text-white/60 border-white/10",
    success: "bg-green-500/10 text-green-400 border-green-500/20",
    warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    danger: "bg-red-500/10 text-red-400 border-red-500/20",
    info: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    gold: "bg-[#c9a96e]/10 text-[#c9a96e] border-[#c9a96e]/20",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium tracking-wider uppercase",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}

// Status badge helper
export function StatusBadge({ status }: { status: string }) {
  const statusMap: Record<string, { variant: BadgeProps["variant"]; label: string }> = {
    PENDING: { variant: "warning", label: "Pending" },
    REVIEWING: { variant: "info", label: "Reviewing" },
    QUOTED: { variant: "gold", label: "Quoted" },
    ACCEPTED: { variant: "success", label: "Accepted" },
    REJECTED: { variant: "danger", label: "Rejected" },
    CONFIRMED: { variant: "info", label: "Confirmed" },
    DESIGNING: { variant: "info", label: "Designing" },
    SAMPLING: { variant: "gold", label: "Sampling" },
    PRODUCTION: { variant: "warning", label: "In Production" },
    QC: { variant: "info", label: "Quality Check" },
    SHIPPING: { variant: "gold", label: "Shipping" },
    DELIVERED: { variant: "success", label: "Delivered" },
    SENT: { variant: "info", label: "Sent" },
  };

  const config = statusMap[status] || { variant: "default" as const, label: status };

  return (
    <Badge variant={config.variant}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {config.label}
    </Badge>
  );
}
