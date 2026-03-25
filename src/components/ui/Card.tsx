"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export default function Card({
  children,
  className,
  hover = false,
  padding = "md",
  onClick,
}: CardProps) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "glass rounded-2xl",
        paddings[padding],
        hover && "hover:bg-white/[0.06] transition-all duration-300 cursor-pointer",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

// Stat card for dashboard
interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: { value: number; positive: boolean };
  color?: string;
}

export function StatCard({ label, value, icon, trend, color = "#c9a96e" }: StatCardProps) {
  return (
    <Card className="relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-[0.05]"
        style={{ background: color, filter: "blur(30px)" }}
      />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white/30 text-xs tracking-wider uppercase mb-2">
            {label}
          </p>
          <p className="text-3xl font-black text-white">{value}</p>
          {trend && (
            <p
              className={cn(
                "text-xs mt-2 font-medium",
                trend.positive ? "text-green-400" : "text-red-400"
              )}
            >
              {trend.positive ? "↑" : "↓"} {Math.abs(trend.value)}%
            </p>
          )}
        </div>
        {icon && (
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: `${color}15` }}
          >
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}
