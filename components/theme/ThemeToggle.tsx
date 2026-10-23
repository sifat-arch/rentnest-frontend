"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Monitor } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeToggle({
  className = "",
  variant = "dropdown",
}: {
  className?: string;
  variant?: "simple" | "dropdown";
}) {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`size-9 rounded-full border border-white/15 bg-white/10 flex items-center justify-center opacity-70 ${className}`}
      >
        <span className="size-4 rounded-full bg-white/20 animate-pulse" />
      </div>
    );
  }

  // Simple one-click toggle button
  if (variant === "simple") {
    return (
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className={`relative inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 hover:bg-white/20 hover:scale-105 active:scale-95 cursor-pointer ${className}`}
      >
        {resolvedTheme === "dark" ? (
          <Sun className="size-4 text-[#e5bd8b] transition-transform rotate-0 scale-100" />
        ) : (
          <Moon className="size-4 text-[#d9a66b] transition-transform rotate-0 scale-100" />
        )}
      </button>
    );
  }

  // Dropdown variant with Light, Dark, System
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Theme settings"
          className={`relative inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 hover:bg-white/20 hover:scale-105 active:scale-95 cursor-pointer ${className}`}
        >
          {resolvedTheme === "dark" ? (
            <Moon className="size-4 text-[#e5bd8b]" />
          ) : (
            <Sun className="size-4 text-[#d9a66b]" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[130px] rounded-2xl border border-[#e7e5df] dark:border-[#233b34] bg-white dark:bg-[#13221e] p-1.5 shadow-xl text-xs font-medium z-50"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`flex items-center gap-2 rounded-xl px-2.5 py-2 cursor-pointer transition-colors ${
            theme === "light"
              ? "bg-[#18342d] text-[#e5bd8b] font-semibold"
              : "text-[#18342d] dark:text-[#f3f2ee] hover:bg-[#f7f6f2] dark:hover:bg-[#1c322b]"
          }`}
        >
          <Sun className="size-3.5 text-[#d9a66b]" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`flex items-center gap-2 rounded-xl px-2.5 py-2 cursor-pointer transition-colors ${
            theme === "dark"
              ? "bg-[#18342d] text-[#e5bd8b] font-semibold"
              : "text-[#18342d] dark:text-[#f3f2ee] hover:bg-[#f7f6f2] dark:hover:bg-[#1c322b]"
          }`}
        >
          <Moon className="size-3.5 text-[#e5bd8b]" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`flex items-center gap-2 rounded-xl px-2.5 py-2 cursor-pointer transition-colors ${
            theme === "system"
              ? "bg-[#18342d] text-[#e5bd8b] font-semibold"
              : "text-[#18342d] dark:text-[#f3f2ee] hover:bg-[#f7f6f2] dark:hover:bg-[#1c322b]"
          }`}
        >
          <Monitor className="size-3.5 text-[#8a9691]" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
