"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="text-white/30 text-xs tracking-wider uppercase mb-2 block"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full bg-white/[0.04] border rounded-2xl px-5 py-4 text-white text-sm",
            "placeholder:text-white/15 focus:outline-none focus:bg-white/[0.06] transition-all",
            error
              ? "border-red-500/50 focus:border-red-500"
              : "border-white/[0.08] focus:border-[#c9a96e]/50",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-red-400 text-xs">{error}</p>}
        {hint && !error && <p className="mt-1.5 text-white/20 text-xs">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;

// Textarea variant
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="text-white/30 text-xs tracking-wider uppercase mb-2 block"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            "w-full bg-white/[0.04] border rounded-2xl px-5 py-4 text-white text-sm resize-none",
            "placeholder:text-white/15 focus:outline-none focus:bg-white/[0.06] transition-all",
            error
              ? "border-red-500/50 focus:border-red-500"
              : "border-white/[0.08] focus:border-[#c9a96e]/50",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-red-400 text-xs">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

// Select variant
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="text-white/30 text-xs tracking-wider uppercase mb-2 block"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={cn(
            "w-full bg-white/[0.04] border rounded-2xl px-5 py-4 text-white text-sm appearance-none",
            "focus:outline-none focus:bg-white/[0.06] transition-all cursor-pointer",
            error
              ? "border-red-500/50 focus:border-red-500"
              : "border-white/[0.08] focus:border-[#c9a96e]/50",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" className="bg-[#0a0a0a] text-white/30">
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#0a0a0a]">
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1.5 text-red-400 text-xs">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
