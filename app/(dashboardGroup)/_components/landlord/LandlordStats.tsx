"use client";

import React from "react";
import { House, CalendarCheck, Sparkles, TrendingUp } from "lucide-react";
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
      description: "Active listings available to prospective tenants",
      icon: House,
      badgeText: "Listed Portfolio",
      theme: {
        glow: "from-[#d9a66b]/20 via-[#18342d]/10 to-transparent",
        iconBg: "bg-[#18342d] text-[#e5bd8b] shadow-sm",
        borderHover: "hover:border-[#18342d]/40 hover:shadow-xl",
        accent: "text-[#18342d]",
      },
    },
    {
      id: "bookings",
      title: "Total Bookings",
      value: totalBookings,
      description: "Total tenant booking reservations requested & confirmed",
      icon: CalendarCheck,
      badgeText: "Tenant Inquiries",
      theme: {
        glow: "from-emerald-500/20 via-[#18342d]/10 to-transparent",
        iconBg: "bg-[#d9a66b] text-[#18342d] shadow-sm",
        borderHover: "hover:border-[#d9a66b]/60 hover:shadow-xl",
        accent: "text-[#18342d]",
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
              "group relative overflow-hidden rounded-3xl border border-[#e7e5df] bg-white p-7 text-[#1c2925] shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg",
              card.theme.borderHover
            )}
          >
            {/* Subtle background glow on hover */}
            <div
              className={cn(
                "pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-all duration-500 ease-out group-hover:scale-125 group-hover:opacity-100",
                card.theme.glow
              )}
            />

            <div className="relative z-10 flex flex-col justify-between space-y-6">
              {/* Card Header: Icon & Title */}
              <div className="flex items-start justify-between space-x-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b77940]">
                      {card.title}
                    </span>
                    <Sparkles className="size-3 text-[#d9a66b]" />
                  </div>
                  <p className="text-xs text-[#64716c]">
                    {card.description}
                  </p>
                </div>

                <div
                  className={cn(
                    "flex size-13 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105",
                    card.theme.iconBg
                  )}
                >
                  <Icon className="size-6" />
                </div>
              </div>

              {/* Card Body: Metric Value */}
              <div className="flex items-baseline justify-between pt-2">
                <div>
                  <span className="text-4xl font-semibold tracking-tight text-[#18342d] sm:text-5xl">
                    {card.value.toLocaleString()}
                  </span>
                  <span className="ml-2 text-xs font-medium text-[#64716c]">
                    units tracked
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full border border-[#18342d]/10 bg-[#18342d]/5 px-3 py-1 text-xs font-medium text-[#18342d]">
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

export default LandlordStats;
