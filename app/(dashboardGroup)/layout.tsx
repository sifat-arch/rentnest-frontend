import { getMe } from "../(authGroup)/_actions/getMe";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "./_components/shaired/DashboardSidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  return (
    <div>
      <SidebarProvider>
        <div className="flex flex-1">
          <DashboardSidebar user={user} />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
