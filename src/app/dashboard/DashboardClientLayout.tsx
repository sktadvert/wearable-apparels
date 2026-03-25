"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNav from "@/components/dashboard/DashboardNav";
import { useDashboardStore } from "@/store/dashboard";
import { cn } from "@/lib/utils";

interface Props {
  user: any;
  children: React.ReactNode;
}

export default function DashboardClientLayout({ user, children }: Props) {
  const { sidebarOpen } = useDashboardStore();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Sidebar />
      <div
        className={cn(
          "transition-all duration-300",
          sidebarOpen ? "ml-64" : "ml-20"
        )}
      >
        <DashboardNav user={user} />
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
