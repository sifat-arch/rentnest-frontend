"use client";

import { ISidebarItems, NavbarProps } from "@/lib/types";
import { usePathname, useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Building2,
  ExternalLink,
  Home,
  LogOut,
  Shield,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { sidebarMenuItems } from "../../_config/sidebarmenuItems";
import { toast } from "sonner";
import { logout } from "@/service/logout";
import { useDashboardNav } from "./DashboardNavigationContext";

const DashboardSidebar = ({ user }: NavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { startNavigating } = useDashboardNav();

  let navItem: ISidebarItems[] = [];

  if (user?.data?.role === "TENANT") {
    navItem = sidebarMenuItems.TENANT;
  } else if (user?.data?.role === "ADMIN") {
    navItem = sidebarMenuItems.ADMIN;
  } else if (user?.data?.role === "LANDLORD") {
    navItem = sidebarMenuItems.LANDLORD;
  }

  const roleLabel =
    user?.data?.role === "ADMIN"
      ? "Admin Portal"
      : user?.data?.role === "LANDLORD"
        ? "Landlord Portal"
        : "Tenant Portal";

  const handleLogout = async () => {
    startNavigating("/login");
    await logout();
    toast.success("User Logged Out Successfully!");
    router.push("/login");
  };

  return (
    <Sidebar
      collapsible="offcanvas"
      data-no-global-loader="true"
      className="border-r border-[#102b25] bg-[#18342d] text-white selection:bg-[#d9a66b]/30"
    >
      {/* Brand Header */}
      <SidebarHeader className="border-b border-white/10 bg-[#18342d] px-5 py-4">
        <Link
          href="/"
          onClick={() => startNavigating("/")}
          className="group flex items-center gap-3 transition-opacity hover:opacity-95"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-[#d9a66b] text-[#18342d] shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Building2 className="size-5" />
          </span>
          <div className="flex flex-col">
            <span className="text-xl font-semibold tracking-[-0.04em] text-white">
              RentNest
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e5bd8b]">
              {roleLabel}
            </span>
          </div>
        </Link>
      </SidebarHeader>

      {/* Navigation Links */}
      <SidebarContent className="bg-[#18342d] px-3 py-4">
        <SidebarGroup>
          <div className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e5bd8b]/75">
            Navigation
          </div>
          <SidebarMenu className="gap-1.5">
            {navItem.map((item, i) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <SidebarMenuItem key={item.href || i}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    onClick={() => startNavigating(item.href)}
                    className={`h-11 rounded-xl px-3.5 text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? "!bg-[#d9a66b] !text-[#18342d] font-semibold shadow-sm hover:!bg-[#e8c18f] hover:!text-[#18342d]"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Link href={item.href} className="flex items-center gap-3 w-full">
                      <Icon
                        className={`size-4.5 shrink-0 ${
                          isActive ? "!text-[#18342d]" : "text-[#d9a66b]"
                        }`}
                      />
                      <span className={isActive ? "!text-[#18342d] font-semibold" : "text-white/90"}>
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer with User Details & Logout */}
      <SidebarFooter className="border-t border-white/10 bg-[#18342d] p-3.5 space-y-3">
        {/* User Card */}
        {user?.data && (
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2.5">
            <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#d9a66b] text-sm font-bold text-[#18342d]">
              {user.data.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-white">
                {user.data.name}
              </p>
              <p className="truncate text-[11px] text-white/60">
                {user.data.email}
              </p>
            </div>
          </div>
        )}

        {/* Home Link */}
        <Link
          href="/"
          onClick={() => startNavigating("/")}
          className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <span className="flex items-center gap-2">
            <Home className="size-3.5 text-[#d9a66b]" />
            Return to Homepage
          </span>
          <ExternalLink className="size-3 opacity-60" />
        </Link>

        {/* Logout Button */}
        <Button
          variant="outline"
          className="w-full justify-start gap-2.5 rounded-xl border border-white/15 bg-white/5 text-white hover:border-red-400/40 hover:bg-red-500/20 hover:text-red-200 transition-all duration-200 group cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4 text-red-400 transition-transform duration-200 group-hover:-translate-x-0.5" />
          <span className="text-sm font-semibold">Log out</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
