"use client";

import { signOut } from "next-auth/react";
import { useDashboardStore } from "@/store/dashboard";

interface DashboardNavProps {
  user: {
    name?: string | null;
    email?: string | null;
    company?: string | null;
  };
}

export default function DashboardNav({ user }: DashboardNavProps) {
  const { toggleSidebar } = useDashboardStore();

  return (
    <header className="h-20 glass-strong border-b border-white/[0.06] flex items-center justify-between px-8">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/[0.08] transition-all"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <div>
          <h2 className="text-sm font-semibold text-white/80">
            Welcome back, {user.name?.split(" ")[0] || "there"}
          </h2>
          {user.company && (
            <p className="text-xs text-white/30">{user.company}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Notifications */}
        <button className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/[0.08] transition-all relative">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#c9a96e]" />
        </button>

        {/* User menu */}
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 px-4 py-2 rounded-xl glass hover:bg-white/[0.08] transition-all"
        >
          <div className="w-8 h-8 rounded-lg bg-[#c9a96e]/20 flex items-center justify-center text-[#c9a96e] text-xs font-bold">
            {user.name
              ?.split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase() || "U"}
          </div>
          <span className="text-xs text-white/40 hidden sm:block">Sign out</span>
        </button>
      </div>
    </header>
  );
}
