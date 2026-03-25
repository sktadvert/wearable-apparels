import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardClientLayout from "./DashboardClientLayout";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <DashboardClientLayout user={session.user}>
      {children}
    </DashboardClientLayout>
  );
}
