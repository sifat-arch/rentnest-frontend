"use client";

import { useState, useEffect, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/service/logout";
import {
  Building2,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  User,
  X,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";
import ThemeToggle from "@/components/theme/ThemeToggle";

import { triggerRouteLoading } from "./GlobalRouteLoader";

// Navigation items configuration - kept exact routes
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "All Properties", href: "/all-properties" },
];

// User menu items configuration - kept exact actions
const userMenuItems = [
  { label: "Dashboard", icon: LayoutDashboard, action: "dashboard" },
  { label: "Profile", icon: User, action: "profile" },
  { label: "Settings", icon: Settings, action: "settings" },
];

export type IUser = {
  success: boolean;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
    createdAt: string;
  };
};

type NavbarProps = {
  user: IUser;
};

export function Navbar({ user }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  // Close mobile drawer and reveal navbar on route change
  useEffect(() => {
    setIsVisible(true);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Smart hide-on-scroll-down, reveal-on-scroll-up with 60fps rAF
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Check if page is scrolled beyond top
          setIsScrolled(currentScrollY > 20);

          // Always visible near top of the page
          if (currentScrollY <= 60) {
            setIsVisible(true);
          } else {
            const diff = currentScrollY - lastScrollY.current;
            // Scroll down: hide navbar
            if (diff > 8) {
              setIsVisible(false);
            }
            // Scroll up: immediately show navbar
            else if (diff < -6) {
              setIsVisible(true);
            }
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleUserMenuAction = async (action: string) => {
    if (action === "dashboard") {
      triggerRouteLoading();
      if (user.data.role === "TENANT") {
        router.push("/tenant-dashboard");
      } else if (user.data.role === "LANDLORD") {
        router.push("/landlord-dashboard");
      } else if (user.data.role === "ADMIN") {
        router.push("/admin-dashboard");
      }
      return;
    }

    if (action === "profile") {
      triggerRouteLoading();
      router.push("/profile");
      return;
    }

    if (action === "settings") {
      triggerRouteLoading();
      router.push("/profile");
      return;
    }

    if (action === "logout") {
      triggerRouteLoading();
      await logout();
      toast.success("User Logged Out Successfully!");
      router.push("/login");
    }
  };

  // Keep navbar visible if mobile drawer is open or near top
  const showNavbar = isVisible || mobileMenuOpen;

  return (
    <header
      className={`sticky top-0 z-50 w-full text-white backdrop-blur-md transition-transform duration-300 ease-in-out will-change-transform border-b border-white/15 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-[#18342d]/98 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] border-white/20"
          : "bg-[#18342d]/95"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => triggerRouteLoading()}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-95"
          aria-label="RentNest home"
        >
          <span className="grid size-9 place-items-center rounded-full bg-[#d9a66b] text-[#18342d]">
            <Building2 className="size-5" />
          </span>
          <span className="text-xl font-semibold tracking-[-0.04em] text-white">
            RentNest
          </span>
        </Link>

        {/* Desktop Nav Links - Exact routes preserved */}
        <nav className="hidden items-center gap-8 text-sm text-white/75 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => triggerRouteLoading()}
                className={`transition-colors hover:text-white ${
                  isActive ? "font-semibold text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Action Button & Profile Dropdown */}
        <div className="flex items-center gap-4">
          <Link
            href={user?.success ? (user.data.role === "LANDLORD" ? "/landlord-dashboard" : "/all-properties") : "/login"}
            onClick={() => triggerRouteLoading()}
            className="hidden items-center rounded-full border border-white/35 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-[#18342d] sm:inline-flex"
          >
            List your property <ArrowRight className="ml-1.5 inline size-4" />
          </Link>

          {/* Theme Mode Toggle */}
          <ThemeToggle />

          {/* User Profile Dropdown - Exact functionality preserved */}
          {user?.success ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#d9a66b]"
                  aria-label="User menu"
                >
                  <User className="size-5 text-[#d9a66b]" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-[#18342d] border border-white/15 text-white shadow-xl">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-white">{user.data?.name}</p>
                    <p className="text-xs text-white/60 truncate">
                      {user.data?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />
                {userMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <DropdownMenuItem
                      key={item.action}
                      onClick={() => handleUserMenuAction(item.action)}
                      className="cursor-pointer text-white/80 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white"
                    >
                      <Icon className="mr-2 size-4 text-[#d9a66b]" />
                      <span>{item.label}</span>
                    </DropdownMenuItem>
                  );
                })}
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem
                  onClick={async () => {
                    await handleUserMenuAction("logout");
                  }}
                  className="cursor-pointer text-red-300 hover:text-red-200 hover:bg-red-500/20 focus:bg-red-500/20 focus:text-red-200"
                >
                  <LogOut className="mr-2 size-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login" onClick={() => triggerRouteLoading()}>
              <Button className="cursor-pointer rounded-full bg-[#d9a66b] px-6 py-2.5 text-sm font-semibold text-[#18342d] hover:bg-[#e8c18f] border-none">
                Login
              </Button>
            </Link>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-[#18342d] px-5 pb-5 pt-3 lg:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerRouteLoading();
                }}
                className={`rounded-lg px-3 py-2.5 text-base transition-colors ${
                  isActive
                    ? "bg-white/10 font-semibold text-white"
                    : "text-white/75 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={user?.success ? (user.data.role === "LANDLORD" ? "/landlord-dashboard" : "/all-properties") : "/login"}
            onClick={() => {
              setMobileMenuOpen(false);
              triggerRouteLoading();
            }}
            className="mt-2 flex items-center justify-center rounded-xl bg-white/10 py-3 text-sm font-medium text-white hover:bg-white/15"
          >
            List your property <ArrowRight className="ml-1.5 inline size-4" />
          </Link>

          <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/70 px-1">
            <span>Appearance / Theme</span>
            <ThemeToggle variant="simple" />
          </div>
        </nav>
      )}
    </header>
  );
}
