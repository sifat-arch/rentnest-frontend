import { getMe } from "../(authGroup)/_actions/getMe";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DashboardSidebar from "./_components/shaired/DashboardSidebar";
import { Suspense } from "react";
import GlobalLoading from "../loading";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  return (
    <div>
      <SidebarProvider>
        <DashboardSidebar user={user} />
        <SidebarInset>
          <header className="flex h-14 items-center border-b px-4">
            <SidebarTrigger />
          </header>
          <main className="flex-1 p-4">
            <Suspense fallback={<GlobalLoading />}>{children}</Suspense>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
