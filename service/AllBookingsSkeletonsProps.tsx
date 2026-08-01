import React from "react";
import { cn } from "@/lib/utils";

interface AllBookingsSkeletonsProps {
  count?: number;
  className?: string;
  showSearch?: boolean;
}

export function AllBookingsSkeletons({
  count = 4,
  className,
  showSearch = true,
}: AllBookingsSkeletonsProps) {
  return (
    <div className={cn("w-full space-y-6", className)}>
      {/* 1. Search Bar Skeleton Placeholder */}
      {showSearch && (
        <div className="h-10 w-full max-w-sm animate-pulse rounded-md border border-slate-200 bg-slate-100/80 dark:border-zinc-800 dark:bg-zinc-800/60" />
      )}

      {/* 2. Bookings List Skeleton Stack */}
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-5 shadow-2xs dark:border-zinc-800/80 dark:bg-zinc-900/60"
          >
            <div className="animate-pulse space-y-4">
              {/* Header: Title + Requested By on Left, Badge on Right */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 dark:border-zinc-800/60">
                <div className="space-y-1.5">
                  {/* Property Title Placeholder */}
                  <div className="h-5 w-48 sm:w-64 rounded-md bg-slate-200/80 dark:bg-zinc-800/80" />
                  {/* Requested by Placeholder */}
                  <div className="h-3.5 w-28 rounded-md bg-slate-200/70 dark:bg-zinc-800/60" />
                </div>

                {/* Status Badge Placeholder (PAID / REJECTED) */}
                <div className="h-6 w-16 shrink-0 rounded-md bg-slate-200/80 dark:bg-zinc-800/80" />
              </div>

              {/* Body: Property Image + Details List */}
              <div className="flex items-start gap-4">
                {/* Square Property Image Placeholder */}
                <div className="h-24 w-24 sm:h-28 sm:w-28 shrink-0 rounded-lg bg-slate-200/80 dark:bg-zinc-800/80" />

                {/* Details Lines (Tenant, Email, Location, Rent, Requested) */}
                <div className="space-y-2.5 flex-1 pt-1">
                  {/* Tenant */}
                  <div className="flex items-center gap-2">
                    <div className="h-3.5 w-12 rounded bg-slate-200/80 dark:bg-zinc-800/80" />
                    <div className="h-3.5 w-24 rounded bg-slate-200/60 dark:bg-zinc-800/60" />
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2">
                    <div className="h-3.5 w-10 rounded bg-slate-200/80 dark:bg-zinc-800/80" />
                    <div className="h-3.5 w-36 sm:w-48 rounded bg-slate-200/60 dark:bg-zinc-800/60" />
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2">
                    <div className="h-3.5 w-14 rounded bg-slate-200/80 dark:bg-zinc-800/80" />
                    <div className="h-3.5 w-32 sm:w-40 rounded bg-slate-200/60 dark:bg-zinc-800/60" />
                  </div>

                  {/* Rent */}
                  <div className="flex items-center gap-2">
                    <div className="h-3.5 w-10 rounded bg-slate-200/80 dark:bg-zinc-800/80" />
                    <div className="h-3.5 w-20 rounded bg-slate-200/60 dark:bg-zinc-800/60" />
                  </div>

                  {/* Requested Date */}
                  <div className="flex items-center gap-2">
                    <div className="h-3.5 w-16 rounded bg-slate-200/80 dark:bg-zinc-800/80" />
                    <div className="h-3.5 w-24 rounded bg-slate-200/60 dark:bg-zinc-800/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBookingsSkeletons;
