"use client";

import React from "react";
import { Building2, Sparkles } from "lucide-react";

interface RentNestLoaderProps {
  text?: string;
  subtext?: string;
  fullScreen?: boolean;
}

export default function RentNestLoader({
  text = "RentNest",
  subtext = "Curating your living experience...",
  fullScreen = false,
}: RentNestLoaderProps) {
  const content = (
    <div className="flex flex-col items-center justify-center text-center animate-in fade-in-50 zoom-in-95 duration-250">
      {/* Central Brand Badge with Pulsing Halo */}
      <div className="relative mb-5 flex items-center justify-center">
        {/* Soft Golden Ambient Glow */}
        <div className="absolute size-24 rounded-full bg-[#d9a66b]/20 blur-xl animate-pulse" />
        
        {/* Ripple Halo Rings */}
        <div className="absolute size-20 rounded-full border border-[#d9a66b]/30 animate-ping duration-1000 opacity-25" />
        <div className="absolute size-16 rounded-full border border-[#d9a66b]/40 animate-pulse duration-700" />

        {/* Floating Luxury Emblem */}
        <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-[#18342d] dark:bg-[#12211c] border-2 border-[#d9a66b] shadow-xl shadow-[#18342d]/30">
          <Building2 className="size-7 text-[#d9a66b] animate-pulse" />
          <span className="absolute -top-1 -right-1 flex size-3">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#d9a66b] opacity-75" />
            <span className="relative inline-flex size-3 rounded-full bg-[#d9a66b]" />
          </span>
        </div>
      </div>

      {/* Brand Title with Golden Sparkle */}
      <div className="flex items-center justify-center gap-1.5">
        <span className="text-xl font-bold tracking-tight text-[#18342d] dark:text-[#f4f3ee]">
          {text}
        </span>
        <Sparkles className="size-4 text-[#d9a66b] animate-bounce" />
      </div>

      {/* Subtitle Message */}
      {subtext && (
        <p className="mt-1 text-xs font-medium tracking-wide text-[#64716c] dark:text-[#9eb0a8]">
          {subtext}
        </p>
      )}

      {/* Thin Champagne Gold Progress Beam */}
      <div className="mt-4 h-1 w-32 overflow-hidden rounded-full bg-[#18342d]/10 dark:bg-white/10">
        <div className="h-full w-full rounded-full bg-gradient-to-r from-[#18342d] via-[#d9a66b] to-[#18342d] dark:from-[#d9a66b] dark:via-[#f4f3ee] dark:to-[#d9a66b] animate-pulse" />
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f7f6f2]/85 dark:bg-[#0b1412]/85 backdrop-blur-md transition-all duration-300">
        {/* Top Edge Golden Light Beam */}
        <div className="fixed top-0 left-0 right-0 h-0.5 overflow-hidden z-50">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#d9a66b] to-transparent animate-pulse" />
        </div>
        {content}
      </div>
    );
  }

  return (
    <div className="flex min-h-[380px] w-full flex-col items-center justify-center p-6">
      {content}
    </div>
  );
}
