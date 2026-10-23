import { getMe } from "../(authGroup)/_actions/getMe";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DashboardSidebar from "./_components/shaired/DashboardSidebar";
import { Suspense } from "react";
import DashboardContentLoader from "./_components/shaired/DashboardContentLoader";
import {
  DashboardNavProvider,
  DashboardMainContent,
} from "./_components/shaired/DashboardNavigationContext";
import Link from "next/link";
import { ArrowUpRight, Building2, Home, Sparkles, UserCheck } from "lucide-react";
import NestBotChatbot from "@/components/ai/NestBotChatbot";
import ThemeToggle from "@/components/theme/ThemeToggle";

export const dynamic = "force-dynamic";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();

  const roleLabel =
    user?.data?.role === "ADMIN"
      ? "Admin Console"
      : user?.data?.role === "LANDLORD"
        ? "Landlord Workspace"
        : "Tenant Portal";

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#1c2925] antialiased">
      <DashboardNavProvider>
        <SidebarProvider>
          <DashboardSidebar user={user} />
          <SidebarInset className="bg-[#f7f6f2] flex flex-col min-h-screen">
            {/* Top Navigation Header */}
            <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-[#e7e5df] bg-white/80 px-4 md:px-8 backdrop-blur-md transition-all">
              <div className="flex items-center gap-3">
                <SidebarTrigger className="h-9 w-9 rounded-xl border border-[#e7e5df] bg-white text-[#18342d] hover:bg-[#f7f6f2] transition" />
                <div className="hidden h-5 w-px bg-[#e7e5df] sm:block" />
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#18342d]/10 bg-[#18342d]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#18342d]">
                    <Sparkles className="size-3 text-[#d9a66b]" />
                    {roleLabel}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                {/* Back to Home Link */}
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#e7e5df] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#18342d] shadow-2xs transition hover:bg-[#18342d] hover:text-white hover:border-[#18342d]"
                >
                  <Home className="size-3.5 text-[#b77940]" />
                  <span className="hidden sm:inline">Website</span>
                  <ArrowUpRight className="size-3 opacity-60" />
                </Link>

                {/* Theme Mode Toggle */}
                <ThemeToggle className="text-[#18342d] bg-white hover:bg-[#f7f6f2] border-[#e7e5df] dark:text-[#f3f2ee] dark:bg-[#182b25] dark:border-[#233b34]" />

                {/* User quick info badge */}
                {user?.data && (
                  <div className="flex items-center gap-2.5 rounded-full border border-[#e7e5df] bg-white py-1 pl-1 pr-3 shadow-2xs">
                    <span className="grid size-7 place-items-center rounded-full bg-[#18342d] text-xs font-bold text-[#e5bd8b]">
                      {user.data.name?.charAt(0)?.toUpperCase() || "U"}
                    </span>
                    <span className="hidden max-w-[120px] truncate text-xs font-semibold text-[#18342d] md:inline">
                      {user.data.name}
                    </span>
                  </div>
                )}
              </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 p-4 sm:p-6 lg:p-8">
              <div className="mx-auto max-w-7xl">
                <Suspense fallback={<DashboardContentLoader />}>
                  <DashboardMainContent>{children}</DashboardMainContent>
                </Suspense>
              </div>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </DashboardNavProvider>
      <NestBotChatbot />
    </div>
  );
};

export default DashboardLayout;
