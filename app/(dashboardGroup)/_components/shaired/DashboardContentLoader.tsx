"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function DashboardContentLoader() {
  return (
    <div className="w-full space-y-6 animate-in fade-in-50 duration-200">
      {/* Top Animated Progress Line */}
      <div className="relative h-1 w-full overflow-hidden rounded-full bg-[#18342d]/10 dark:bg-white/10">
        <div className="absolute inset-y-0 h-full w-1/3 rounded-full bg-gradient-to-r from-transparent via-[#d9a66b] to-transparent animate-pulse" />
      </div>

      {/* Header Skeleton */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <div className="h-7 w-48 rounded-lg bg-[#18342d]/10 dark:bg-white/10 animate-pulse" />
          <div className="h-4 w-72 rounded-md bg-[#18342d]/5 dark:bg-white/5 animate-pulse" />
        </div>
        <div className="h-9 w-32 rounded-xl bg-[#18342d]/10 dark:bg-white/10 animate-pulse" />
      </div>

      {/* 3 Metric / Stat Cards Skeleton */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((card) => (
          <div
            key={card}
            className="flex h-28 flex-col justify-between rounded-2xl border border-[#e7e5df] dark:border-[#223a32] bg-white/70 dark:bg-[#12211c]/70 p-5 shadow-2xs backdrop-blur-xs"
          >
            <div className="flex items-center justify-between">
              <div className="h-3.5 w-24 rounded bg-[#18342d]/10 dark:bg-white/10 animate-pulse" />
              <div className="size-8 rounded-lg bg-[#d9a66b]/20 dark:bg-[#d9a66b]/15 animate-pulse" />
            </div>
            <div className="h-6 w-32 rounded bg-[#18342d]/15 dark:bg-white/15 animate-pulse" />
          </div>
        ))}
      </div>

      {/* Main Content Skeleton Area with Centered Loader */}
      <div className="flex min-h-[360px] w-full flex-col items-center justify-center rounded-2xl border border-[#e7e5df] dark:border-[#223a32] bg-white/70 dark:bg-[#12211c]/70 p-8 shadow-2xs backdrop-blur-xs text-center">
        <div className="relative flex items-center justify-center mb-4">
          <div className="size-11 rounded-full border-3 border-[#d9a66b]/20 border-t-[#d9a66b] animate-spin" />
          <Sparkles className="absolute size-4 text-[#d9a66b] animate-pulse" />
        </div>
        <p className="text-sm font-semibold text-[#18342d] dark:text-[#f4f3ee]">
          Loading dashboard content...
        </p>
        <p className="mt-1 text-xs text-[#18342d]/60 dark:text-[#9eb0a8]">
          Fetching the latest data for your workspace
        </p>
      </div>
    </div>
  );
}
