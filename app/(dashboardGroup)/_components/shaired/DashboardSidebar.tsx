/* eslint-disable react/jsx-key */
// "use client";
// import { ISidebarItems, NavbarProps } from "@/lib/types";
// import { usePathname } from "next/navigation";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuSubItem,
// } from "@/components/ui/sidebar";
// import Link from "next/link";
// import { sidebarMenuItems } from "../../_config/sidebarmenuItems";

// const DashboardSidebar = ({ user }: NavbarProps) => {
//   const pathname = usePathname();

//   let navItem: ISidebarItems[] = [];

//   if (user.data.role === "TENANT") {
//     navItem = sidebarMenuItems.TENANT;
//   } else if (user.data.role === "ADMIN") {
//     navItem = sidebarMenuItems.ADMIN;
//   } else if (user.data.role === "LANDLORD") {
//     navItem = sidebarMenuItems.LANDLORD;
//   }

//   return (
//     <Sidebar
//       collapsible="none"
//       className=" h-[calc(100svh-0rem)] border-r border-sidebar-border"
//     >
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarMenu>
//             {navItem.map((item, i) => (
//               <SidebarMenuSubItem key={i}>
//                 <SidebarMenuButton asChild isActive={pathname === item.href}>
//                   <Link href={item.href}>
//                     <item.icon />
//                     <span>{item.label}</span>
//                   </Link>
//                 </SidebarMenuButton>
//               </SidebarMenuSubItem>
//             ))}
//           </SidebarMenu>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   );
// };

// export default DashboardSidebar;

/* eslint-disable react/jsx-key */
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
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { LogOut, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { sidebarMenuItems } from "../../_config/sidebarmenuItems";
import { toast } from "sonner";
import { logout } from "@/service/logout";

const DashboardSidebar = ({ user }: NavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  let navItem: ISidebarItems[] = [];

  if (user.data.role === "TENANT") {
    navItem = sidebarMenuItems.TENANT;
  } else if (user.data.role === "ADMIN") {
    navItem = sidebarMenuItems.ADMIN;
  } else if (user.data.role === "LANDLORD") {
    navItem = sidebarMenuItems.LANDLORD;
  }

  const handleLogout = async () => {
    await logout();
    toast.success("User Logged Out Successfully!");
    router.push("/login");

    router.push("/login");
  };

  return (
    <Sidebar collapsible="offcanvas" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border px-4 py-3">
        <Link href="/" className="text-lg font-bold tracking-tight">
          RentNext
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navItem.map((item, i) => (
              <SidebarMenuSubItem key={i}>
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

      <SidebarFooter className="border-t border-sidebar-border p-3">
        <Button
          variant="outline"
          className="w-full justify-start gap-2.5 border-slate-200 text-slate-700 hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-red-900/50 dark:hover:bg-red-950/30 dark:hover:text-red-400 transition-all duration-200 group"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          <LogOutIcon />
          <span className="text-sm font-bold">Logout</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
