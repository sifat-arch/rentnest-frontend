/* eslint-disable react/jsx-key */
"use client";
import { ISidebarItems, NavbarProps } from "@/lib/types";
import { usePathname } from "next/navigation";
import { Newspaper } from "lucide-react";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { sidebarMenuItems } from "../../_config/sidebarmenuItems";

const DashboardSidebar = ({ user }: NavbarProps) => {
  const pathname = usePathname();

  let navItem: ISidebarItems[] = [];

  if (user.data.role === "TENANT") {
    navItem = sidebarMenuItems.TENANT;
  } else if (user.data.role === "ADMIN") {
    navItem = sidebarMenuItems.ADMIN;
  } else if (user.data.role === "LANDLORD") {
    navItem = sidebarMenuItems.LANDLORD;
  }

  return (
    <Sidebar
      collapsible="none"
      className=" h-[calc(100svh-0rem)] border-r border-sidebar-border"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navItem.map((item) => (
              <SidebarMenuSubItem>
                <SidebarMenuButton asChild isActive={pathname === item.href}>
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
