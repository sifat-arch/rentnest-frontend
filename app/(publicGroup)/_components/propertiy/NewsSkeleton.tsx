import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  count?: number;
  className?: string;
}

export function Skeleton({ count = 6, className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/60"
        >
          {/* Subtle Skeleton Shimmer Effect */}
          <div className="animate-pulse space-y-5">
            {/* 1. Image / Banner Placeholder */}
            <div className="h-44 w-full rounded-2xl bg-slate-200/80 dark:bg-zinc-800/80" />

            {/* 2. Header & Title Placeholders */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                {/* Badge placeholder */}
                <div className="h-4 w-20 rounded-full bg-slate-200/80 dark:bg-zinc-800/80" />
                {/* Price or Tag placeholder */}
                <div className="h-5 w-16 rounded-full bg-slate-200/80 dark:bg-zinc-800/80" />
              </div>

              {/* Title line */}
              <div className="h-6 w-3/4 rounded-lg bg-slate-200/80 dark:bg-zinc-800/80" />

              {/* Subtitle line */}
              <div className="h-4 w-1/2 rounded-lg bg-slate-200/80 dark:bg-zinc-800/80" />
            </div>

            {/* 3. Footer / Action Section */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-zinc-800/60">
              {/* Rating or Info placeholder */}
              <div className="h-4 w-24 rounded-md bg-slate-200/80 dark:bg-zinc-800/80" />

              {/* Button placeholder */}
              <div className="h-9 w-28 rounded-xl bg-slate-200/80 dark:bg-zinc-800/80" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
