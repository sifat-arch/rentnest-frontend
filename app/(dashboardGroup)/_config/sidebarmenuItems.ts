// import { ISidebarItems } from "@/lib/types";
// import { FileText, LayoutDashboard } from "lucide-react";

// const TEANT_SIDEBAR_ITEMS: ISidebarItems[] = [
//   {
//     label: "Dashboard",
//     href: "/tenant-dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     label: "my-bookings",
//     href: "/tenant-dashboard/my-bookings",
//     icon: LayoutDashboard,
//   },
// ];
// const ADMIN_SIDEBAR_ITEMS: ISidebarItems[] = [
//   {
//     label: "Admin Dashboard",
//     href: "/admin-dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     label: "Create Categorys",
//     href: "/admin-dashboard/create-category",
//     icon: LayoutDashboard,
//   },
//   {
//     label: "All Bookings",
//     href: "/admin-dashboard/all-bookings",
//     icon: LayoutDashboard,
//   },
//   {
//     label: "All Users",
//     href: "/admin-dashboard/all-users",
//     icon: LayoutDashboard,
//   },
// ];
// const LANDLORD_SIDEBAR_ITEMS: ISidebarItems[] = [
//   {
//     label: "Landlord Dashboard",
//     href: "/landlord-dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     label: "create bookings",
//     href: "/landlord-dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     label: "All properties",
//     href: "/landlord-dashboard/get-all-properties",
//     icon: LayoutDashboard,
//   },
//   {
//     label: "Bookings",
//     href: "/landlord-dashboard/bookings",
//     icon: LayoutDashboard,
//   },
// ];

// export const sidebarMenuItems = {
//   TENANT: TEANT_SIDEBAR_ITEMS,
//   LANDLORD: LANDLORD_SIDEBAR_ITEMS,
//   ADMIN: ADMIN_SIDEBAR_ITEMS,
// };
import { ISidebarItems } from "@/lib/types";
import {
  LayoutDashboard,
  BookOpen,
  Building2,
  FolderPlus,
  Users,
  ClipboardList,
  HousePlus,
  Home,
} from "lucide-react";

const TEANT_SIDEBAR_ITEMS: ISidebarItems[] = [
  {
    label: "Dashboard",
    href: "/tenant-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Bookings",
    href: "/tenant-dashboard/my-bookings",
    icon: BookOpen,
  },
];

const ADMIN_SIDEBAR_ITEMS: ISidebarItems[] = [
  {
    label: "Dashboard",
    href: "/admin-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Create Categories",
    href: "/admin-dashboard/create-category",
    icon: FolderPlus,
  },
  {
    label: "All Bookings",
    href: "/admin-dashboard/all-bookings",
    icon: ClipboardList,
  },
  {
    label: "All Users",
    href: "/admin-dashboard/all-users",
    icon: Users,
  },
];

const LANDLORD_SIDEBAR_ITEMS: ISidebarItems[] = [
  {
    label: "Dashboard",
    href: "/landlord-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Create Property",
    href: "/landlord-dashboard/create-property",
    icon: HousePlus,
  },
  {
    label: "All Properties",
    href: "/landlord-dashboard/get-all-properties",
    icon: Building2,
  },
  {
    label: "Bookings",
    href: "/landlord-dashboard/bookings",
    icon: ClipboardList,
  },
];

export const sidebarMenuItems = {
  TENANT: TEANT_SIDEBAR_ITEMS,
  LANDLORD: LANDLORD_SIDEBAR_ITEMS,
  ADMIN: ADMIN_SIDEBAR_ITEMS,
};
