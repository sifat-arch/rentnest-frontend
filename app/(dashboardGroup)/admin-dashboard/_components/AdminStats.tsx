"use client";

import React from "react";
import {
  Users,
  Building2,
  CalendarCheck,
  Clock,
  Sparkles,
  TrendingUp,
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
  className,
}) => {
  const usersCount = stats?.totalUsers ?? propTotalUsers ?? 0;
  const propertiesCount = stats?.totalProperties ?? propTotalProperties ?? 0;
  const bookingsCount = stats?.totalBookings ?? propTotalBookings ?? 0;
  const pendingCount = stats?.pendingBookings ?? propPendingBookings ?? 0;

  const cardItems = [
    {
      id: "users",
      title: "Total Platform Users",
      value: usersCount,
      description: "Active tenant and landlord accounts",
      icon: Users,
      badgeText: "Accounts",
      theme: {
        glow: "from-[#18342d]/20 via-[#d9a66b]/10 to-transparent",
        iconBg: "bg-[#18342d] text-[#e5bd8b]",
        borderHover: "hover:border-[#18342d]/40",
      },
    },
    {
      id: "properties",
      title: "Active Properties",
      value: propertiesCount,
      description: "Total accommodations listed on platform",
      icon: Building2,
      badgeText: "Listings",
      theme: {
        glow: "from-[#d9a66b]/25 via-[#18342d]/10 to-transparent",
        iconBg: "bg-[#d9a66b] text-[#18342d]",
        borderHover: "hover:border-[#d9a66b]/60",
      },
    },
    {
      id: "bookings",
      title: "Total Reservations",
      value: bookingsCount,
      description: "All tenant booking transactions recorded",
      icon: CalendarCheck,
      badgeText: "Bookings",
      theme: {
        glow: "from-emerald-500/20 via-[#18342d]/10 to-transparent",
        iconBg: "bg-[#18342d] text-emerald-300",
        borderHover: "hover:border-emerald-500/40",
      },
    },
    {
      id: "pending",
      title: "Pending Inquiries",
      value: pendingCount,
      description: "Bookings waiting for landlord approval",
      icon: Clock,
      badgeText: "Requires Action",
      theme: {
        glow: "from-amber-500/20 via-[#d9a66b]/10 to-transparent",
        iconBg: "bg-amber-100 text-amber-900 border border-amber-200",
        borderHover: "hover:border-amber-400",
      },
    },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {cardItems.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.id}
            className={cn(
              "group relative overflow-hidden rounded-3xl border border-[#e7e5df] bg-white p-6 text-[#1c2925] shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg",
              card.theme.borderHover
            )}
          >
            {/* Glow on hover */}
            <div
              className={cn(
                "pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br opacity-0 blur-xl transition-all duration-500 ease-out group-hover:scale-125 group-hover:opacity-100",
                card.theme.glow
              )}
            />

            <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b77940]">
                      {card.title}
                    </span>
                    <Sparkles className="size-3 text-[#d9a66b]" />
                  </div>
                  <p className="text-xs text-[#64716c] line-clamp-1">
                    {card.description}
                  </p>
                </div>

                <div
                  className={cn(
                    "flex size-11 shrink-0 items-center justify-center rounded-2xl shadow-xs transition-transform duration-300 group-hover:scale-105",
                    card.theme.iconBg
                  )}
                >
                  <Icon className="size-5" />
                </div>
              </div>

              <div className="flex items-baseline justify-between pt-2">
                <span className="text-3xl font-semibold tracking-tight text-[#18342d] sm:text-4xl">
                  {card.value.toLocaleString()}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-[#18342d]/10 bg-[#18342d]/5 px-2.5 py-0.5 text-[11px] font-medium text-[#18342d]">
                  <TrendingUp className="size-3 text-[#b77940]" />
                  {card.badgeText}
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
