"use client";

import React from "react";
import {
  Users,
  Building2,
  CalendarCheck,
  Clock,
  TrendingUp,
  TrendingDown,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface AdminStatsData {
  totalUsers?: number;
  totalProperties?: number;
  totalBookings?: number;
  pendingBookings?: number;
}

export interface AdminStatsProps {
  stats?: AdminStatsData;
  totalUsers?: number;
  totalProperties?: number;
  totalBookings?: number;
  pendingBookings?: number;
  isLoading?: boolean;
  className?: string;
}

export const AdminStats: React.FC<AdminStatsProps> = ({
  stats,
  totalUsers: propTotalUsers,
  totalProperties: propTotalProperties,
  totalBookings: propTotalBookings,
  pendingBookings: propPendingBookings,
  isLoading = false,
  className,
}) => {
  const usersCount = stats?.totalUsers ?? propTotalUsers ?? 0;
  const propertiesCount = stats?.totalProperties ?? propTotalProperties ?? 0;
  const bookingsCount = stats?.totalBookings ?? propTotalBookings ?? 0;
  const pendingCount = stats?.pendingBookings ?? propPendingBookings ?? 0;

  const cardItems = [
    {
      id: "users",
      title: "Users",
      value: usersCount,
      description: "Active platform accounts",
      icon: Users,
      trend: {
        value: "+12.5%",
        label: "vs last month",
        isPositive: true,
      },
      progress: 78, // Static decorative percentage for progress bar
      footerText: "142 registered today",
      theme: {
        glow: "from-blue-500/20 via-blue-500/5 to-transparent",
        iconBg:
          "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border border-blue-200/60 dark:border-blue-500/30",
        borderHover:
          "hover:border-blue-300/80 dark:hover:border-blue-500/40 hover:shadow-blue-500/5",
        progressGradient: "from-blue-500 to-indigo-500",
        dotColor: "bg-blue-500",
        badgeBg:
          "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-500/30",
      },
    },
    {
      id: "properties",
      title: "Properties",
      value: propertiesCount,
      description: "Listed accommodations",
      icon: Building2,
      trend: {
        value: "+8.2%",
        label: "vs last month",
        isPositive: true,
      },
      progress: 64,
      footerText: "95% active availability",
      theme: {
        glow: "from-emerald-500/20 via-emerald-500/5 to-transparent",
        iconBg:
          "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-500/30",
        borderHover:
          "hover:border-emerald-300/80 dark:hover:border-emerald-500/40 hover:shadow-emerald-500/5",
        progressGradient: "from-emerald-500 to-teal-500",
        dotColor: "bg-emerald-500",
        badgeBg:
          "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-500/30",
      },
    },
    {
      id: "bookings",
      title: "Bookings",
      value: bookingsCount,
      description: "Completed reservations",
      icon: CalendarCheck,
      trend: {
        value: "+18.4%",
        label: "vs last month",
        isPositive: true,
      },
      progress: 91,
      footerText: "High demand season",
      theme: {
        glow: "from-violet-500/20 via-violet-500/5 to-transparent",
        iconBg:
          "bg-violet-500/10 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400 border border-violet-200/60 dark:border-violet-500/30",
        borderHover:
          "hover:border-violet-300/80 dark:hover:border-violet-500/40 hover:shadow-violet-500/5",
        progressGradient: "from-violet-500 to-purple-500",
        dotColor: "bg-violet-500",
        badgeBg:
          "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-500/30",
      },
    },
    {
      id: "pending",
      title: "Pending",
      value: pendingCount,
      description: "Awaiting approval",
      icon: Clock,
      trend: {
        value: "-4.1%",
        label: "vs last month",
        isPositive: false,
      },
      progress: 32,
      footerText: "Requires admin review",
      theme: {
        glow: "from-amber-500/20 via-amber-500/5 to-transparent",
        iconBg:
          "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 border border-amber-200/60 dark:border-amber-500/30",
        borderHover:
          "hover:border-amber-300/80 dark:hover:border-amber-500/40 hover:shadow-amber-500/5",
        progressGradient: "from-amber-500 to-orange-500",
        dotColor: "bg-amber-500",
        badgeBg:
          "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 border-amber-200/50 dark:border-amber-500/30",
      },
    },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {cardItems.map((card) => {
        const Icon = card.icon;
        const TrendIcon = card.trend.isPositive ? TrendingUp : TrendingDown;

        return (
          <Card
            key={card.id}
            className={cn(
              "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/40 p-6 text-card-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-xl dark:border-zinc-800/80 dark:from-zinc-900 dark:via-zinc-900/90 dark:to-zinc-950 dark:shadow-zinc-950/50",
              card.theme.borderHover,
            )}
          >
            {/* 1. Subtle Dotted Mesh Pattern (Static Graphic Effect) */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
                backgroundSize: "16px 16px",
              }}
            />

            {/* 2. Animated Glow Effect on Hover */}
            <div
              className={cn(
                "pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-all duration-500 ease-out group-hover:scale-125 group-hover:opacity-100",
                card.theme.glow,
              )}
            />

            {/* 3. Soft Background Highlight */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-50 dark:via-white/5" />

            {/* Card Content Top Section */}
            <div className="relative z-10 space-y-5">
              {/* Header: Title, Description & Icon */}
              <div className="flex items-start justify-between space-x-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold tracking-widest text-muted-foreground/90 uppercase">
                      {card.title}
                    </span>
                    <Sparkles className="h-3 w-3 text-muted-foreground/40 transition-colors group-hover:text-amber-400/80" />
                  </div>
                  <p className="text-xs font-medium text-muted-foreground/70">
                    {card.description}
                  </p>
                </div>

                {/* Styled Icon */}
                <div
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md",
                    card.theme.iconBg,
                  )}
                >
                  <Icon className="h-5 w-5 stroke-[2.2]" />
                </div>
              </div>

              {/* Number and Static Trend Badge */}
              <div className="flex items-baseline justify-between gap-2 pt-1">
                {isLoading ? (
                  <div className="h-10 w-28 animate-pulse rounded-xl bg-muted/60" />
                ) : (
                  <span className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl font-mono">
                    {card.value.toLocaleString()}
                  </span>
                )}

                {/* Static Trend Pill Badge */}
                <div
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold shadow-xs transition-transform duration-300 group-hover:scale-105",
                    card.theme.badgeBg,
                  )}
                >
                  <TrendIcon className="h-3 w-3" />
                  <span>{card.trend.value}</span>
                </div>
              </div>
            </div>

            {/* Card Bottom Section (Decorative Enhancements) */}
            <div className="relative z-10 mt-6 pt-4 space-y-3 border-t border-slate-200/60 dark:border-zinc-800/60">
              {/* Mini Static Progress Bar Accent */}
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                <div
                  className={cn(
                    "h-full rounded-full bg-gradient-to-r transition-all duration-500 group-hover:brightness-110",
                    card.theme.progressGradient,
                  )}
                  style={{ width: `${card.progress}%` }}
                />
              </div>

              {/* Micro Footer with Pulsing Dot */}
              <div className="flex items-center justify-between text-[11px] text-muted-foreground/80 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span
                      className={cn(
                        "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                        card.theme.dotColor,
                      )}
                    />
                    <span
                      className={cn(
                        "relative inline-flex h-2 w-2 rounded-full",
                        card.theme.dotColor,
                      )}
                    />
                  </span>
                  <span>{card.footerText}</span>
                </div>
                <span className="text-[10px] uppercase font-semibold text-muted-foreground/50">
                  {card.trend.label}
                </span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default AdminStats;
