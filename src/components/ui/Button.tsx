"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, icon, children, disabled, ...props }, ref) => {
    const variants = {
      primary:
        "bg-[#c9a96e] text-black font-semibold hover:bg-[#e0c992] hover:shadow-[0_0_30px_rgba(201,169,110,0.3)] hover:scale-[1.02]",
      secondary:
        "glass text-white/70 font-medium hover:text-[#c9a96e] hover:border-[#c9a96e]/30",
      ghost:
        "bg-transparent text-white/50 hover:text-white hover:bg-white/[0.05]",
      danger:
        "bg-red-500/20 text-red-400 border border-red-500/20 hover:bg-red-500/30",
      outline:
        "border border-white/10 text-white/70 hover:border-[#c9a96e]/50 hover:text-[#c9a96e]",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs rounded-xl",
      md: "px-6 py-3 text-sm rounded-2xl",
      lg: "px-8 py-4 text-base rounded-2xl",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 transition-all duration-300 font-medium disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
        ) : icon ? (
          icon
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
