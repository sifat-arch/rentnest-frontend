"use client";

import React from "react";
import { House, CalendarCheck, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type LandlordStatsProps = {
  totalProperties: number;
  totalBookings: number;
};

export const LandlordStats: React.FC<LandlordStatsProps> = ({
  totalProperties = 0,
  totalBookings = 0,
}) => {
  const cardItems = [
    {
      id: "properties",
      title: "Total Properties",
      value: totalProperties,
      description: "Active listed accommodations & units",
      icon: House,
      theme: {
        glow: "from-emerald-500/20 via-emerald-500/5 to-transparent",
        iconBg:
          "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-500/30",
        borderHover:
          "hover:border-emerald-300/80 dark:hover:border-emerald-500/40 hover:shadow-emerald-500/5",
      },
    },
    {
      id: "bookings",
      title: "Total Bookings",
      value: totalBookings,
      description: "Confirmed tenant reservations",
      icon: CalendarCheck,
      theme: {
        glow: "from-blue-500/20 via-blue-500/5 to-transparent",
        iconBg:
          "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border border-blue-200/60 dark:border-blue-500/30",
        borderHover:
          "hover:border-blue-300/80 dark:hover:border-blue-500/40 hover:shadow-blue-500/5",
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {cardItems.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.id}
            className={cn(
              "group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/40 p-7 text-card-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-xl dark:border-zinc-800/80 dark:from-zinc-900 dark:via-zinc-900/90 dark:to-zinc-950 dark:shadow-zinc-950/50",
              card.theme.borderHover,
            )}
          >
            {/* Subtle background dotted mesh pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
                backgroundSize: "16px 16px",
              }}
            />

            {/* Subtle animated glow on hover */}
            <div
              className={cn(
                "pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-all duration-500 ease-out group-hover:scale-125 group-hover:opacity-100",
                card.theme.glow,
              )}
            />

            {/* Soft background light-reflection sheen */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-50 dark:via-white/5" />

            <div className="relative z-10 flex flex-col justify-between space-y-6">
              {/* Card Header: Icon & Metadata */}
              <div className="flex items-start justify-between space-x-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold tracking-widest text-muted-foreground/90 uppercase">
                      {card.title}
                    </span>
                    <Sparkles className="h-3 w-3 text-muted-foreground/40 transition-colors group-hover:text-amber-400/80" />
                  </div>
                  <p className="text-xs font-medium text-muted-foreground/75">
                    {card.description}
                  </p>
                </div>

                {/* Large Icon inside colored rounded container */}
                <div
                  className={cn(
                    "flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md",
                    card.theme.iconBg,
                  )}
                >
                  <Icon className="h-6 w-6 stroke-[2.2]" />
                </div>
              </div>

              {/* Statistic Value */}
              <div className="pt-2">
                <span className="font-mono text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                  {card.value.toLocaleString()}
                </span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default LandlordStats;
