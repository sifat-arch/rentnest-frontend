import { ISidebarItems } from "@/lib/types";
import { FileText, LayoutDashboard } from "lucide-react";

const USER_SIDEBAR_ITEMS: ISidebarItems[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Posts",
    href: "/dashboard/my-posts",
    icon: FileText,
  },
];
const AUTHOR_SIDEBAR_ITEMS: ISidebarItems[] = [
  {
    label: "Admin Dashboard",
    href: "/author-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Posts ",
    href: "/author-dashboard/my-posts",
    icon: FileText,
  },
];
const ADMIN_SIDEBAR_ITEMS: ISidebarItems[] = [
  {
    label: "Landlord Dashboard",
    href: "/admin-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Posts ",
    href: "/author-dashboard/my-post",
    icon: FileText,
  },
];

export const sidebarMenuItems = {
  TENANT: USER_SIDEBAR_ITEMS,
  LANDLORD: AUTHOR_SIDEBAR_ITEMS,
  ADMIN: ADMIN_SIDEBAR_ITEMS,
};
