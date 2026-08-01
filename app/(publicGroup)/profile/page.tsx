"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  ShieldCheck,
  Activity,
  Calendar,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// API Response Data Types
export interface UserProfileData {
  id: string;
  name: string;
  email: string;
  role: "TENANT" | "LANDLORD" | "ADMIN" | string;
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | string;
  createdAt: string;
}

export interface ProfileProps {
  user?: UserProfileData;
  className?: string;
}

export const Profile: React.FC<ProfileProps> = ({ user, className }) => {
  const [copied, setCopied] = useState(false);

  // Fallback default values if user data is loading/null
  const {
    id = "N/A",
    name = "User Profile",
    email = "email@example.com",
    role = "TENANT",
    status = "ACTIVE",
    createdAt = new Date().toISOString(),
  } = user || {};

  // Formatted Created Date
  const joinedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // User Initials for Avatar
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  // Copy User ID function
  const handleCopyId = () => {
    if (id && id !== "N/A") {
      navigator.clipboard.writeText(id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Role Badge Color Mapping
  const roleStyles = {
    TENANT:
      "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-500/30",
    LANDLORD:
      "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 border-indigo-200/60 dark:border-indigo-500/30",
    ADMIN:
      "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 border-amber-200/60 dark:border-amber-500/30",
  }[role] || "bg-slate-500/10 text-slate-600 border-slate-200";

  return (
    <div className={cn("mx-auto w-full max-w-3xl mt-40", className)}>
      <Card className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/40 p-6 shadow-xl sm:p-8 dark:border-zinc-800/80 dark:from-zinc-900 dark:via-zinc-900/90 dark:to-zinc-950 dark:shadow-zinc-950/60">
        {/* Background Mesh Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
            backgroundSize: "16px 16px",
          }}
        />

        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-transparent blur-3xl dark:from-indigo-500/10" />

        <div className="relative z-10 space-y-8">
          {/* Header Section: Avatar, Name & Status */}
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              {/* Profile Avatar */}
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 font-mono text-xl font-bold text-white shadow-md shadow-indigo-500/20 sm:h-20 sm:w-20 sm:text-2xl">
                {initials || <User className="h-8 w-8 text-white" />}
              </div>

              {/* User Name & Role Badge */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                    {name}
                  </h2>
                  <Sparkles className="h-4 w-4 text-amber-400" />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider shadow-2xs",
                      roleStyles
                    )}
                  >
                    <ShieldCheck className="h-3 w-3" />
                    {role}
                  </span>
                </div>
              </div>
            </div>

            {/* Active Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/20 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                {status === "ACTIVE" && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                )}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{status}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200/70 dark:border-zinc-800/80" />

          {/* Profile Details Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Email Field */}
            <div className="rounded-2xl border border-slate-200/60 bg-white/80 p-4 shadow-2xs dark:border-zinc-800/60 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-200/60 bg-blue-500/10 text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/20 dark:text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <span className="text-[11px] font-bold tracking-wider text-muted-foreground/80 uppercase">
                    Email Address
                  </span>
                  <p className="truncate text-sm font-semibold text-foreground">
                    {email}
                  </p>
                </div>
              </div>
            </div>

            {/* Joined Date Field */}
            <div className="rounded-2xl border border-slate-200/60 bg-white/80 p-4 shadow-2xs dark:border-zinc-800/60 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-200/60 bg-violet-500/10 text-violet-600 dark:border-violet-500/30 dark:bg-violet-500/20 dark:text-violet-400">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold tracking-wider text-muted-foreground/80 uppercase">
                    Member Since
                  </span>
                  <p className="text-sm font-semibold text-foreground">
                    {joinedDate}
                  </p>
                </div>
              </div>
            </div>

            {/* Account Role Info */}
            <div className="rounded-2xl border border-slate-200/60 bg-white/80 p-4 shadow-2xs dark:border-zinc-800/60 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-200/60 bg-emerald-500/10 text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/20 dark:text-emerald-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold tracking-wider text-muted-foreground/80 uppercase">
                    Account Role
                  </span>
                  <p className="text-sm font-semibold text-foreground">
                    {role}
                  </p>
                </div>
              </div>
            </div>

            {/* Account Status Info */}
            <div className="rounded-2xl border border-slate-200/60 bg-white/80 p-4 shadow-2xs dark:border-zinc-800/60 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-200/60 bg-amber-500/10 text-amber-600 dark:border-amber-500/30 dark:bg-amber-500/20 dark:text-amber-400">
                  <Activity className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold tracking-wider text-muted-foreground/80 uppercase">
                    Account Status
                  </span>
                  <p className="text-sm font-semibold text-foreground">
                    {status}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* User ID Copy Section */}
          <div className="flex items-center justify-between rounded-2xl border border-dashed border-slate-200/80 bg-slate-50/50 px-4 py-3 dark:border-zinc-800/80 dark:bg-zinc-900/30">
            <div className="flex items-center gap-2 overflow-hidden text-xs text-muted-foreground">
              <span className="font-semibold uppercase">User ID:</span>
              <span className="truncate font-mono">{id}</span>
            </div>
            <button
              onClick={handleCopyId}
              type="button"
              className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 text-xs font-medium text-foreground shadow-2xs transition-all hover:bg-slate-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;