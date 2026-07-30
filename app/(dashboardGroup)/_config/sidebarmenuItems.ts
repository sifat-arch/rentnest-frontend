import { ISidebarItems } from "@/lib/types";
import { FileText, LayoutDashboard } from "lucide-react";

const TEANT_SIDEBAR_ITEMS: ISidebarItems[] = [
  {
    label: "Dashboard",
    href: "/tenant-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "my-bookings",
    href: "/tenant-dashboard/my-bookings",
    icon: LayoutDashboard,
  },
];
const ADMIN_SIDEBAR_ITEMS: ISidebarItems[] = [
  {
    label: "Admin Dashboard",
    href: "/admin-dashboard",
    icon: LayoutDashboard,
  },
];
const LANDLORD_SIDEBAR_ITEMS: ISidebarItems[] = [
  {
    label: "Landlord Dashboard",
    href: "/landlord-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "create bookings",
    href: "/landlord-dashboard",
    icon: LayoutDashboard,
  },
];

export const sidebarMenuItems = {
  TENANT: TEANT_SIDEBAR_ITEMS,
  LANDLORD: LANDLORD_SIDEBAR_ITEMS,
  ADMIN: ADMIN_SIDEBAR_ITEMS,
};
