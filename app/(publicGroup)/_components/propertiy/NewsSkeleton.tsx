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
        className
      )}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-3xl border border-[#dfe5dc] bg-white p-3 shadow-xs"
        >
          <div className="animate-pulse space-y-4">
            {/* 1. Image Placeholder */}
            <div className="h-60 w-full rounded-2xl bg-[#e6ede7]" />

            {/* 2. Content */}
            <div className="space-y-3 p-3">
              <div className="flex items-center justify-between">
                <div className="h-5 w-3/5 rounded-lg bg-[#e6ede7]" />
                <div className="h-5 w-1/4 rounded-lg bg-[#e6ede7]" />
              </div>

              <div className="h-4 w-1/2 rounded-md bg-[#e6ede7]" />
              <div className="h-4 w-4/5 rounded-md bg-[#e6ede7]" />

              <div className="flex items-center justify-between pt-4 border-t border-[#dfe5dc]">
                <div className="h-4 w-24 rounded-md bg-[#e6ede7]" />
                <div className="h-4 w-16 rounded-md bg-[#e6ede7]" />
              </div>

              <div className="h-10 w-full rounded-full bg-[#e6ede7]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
