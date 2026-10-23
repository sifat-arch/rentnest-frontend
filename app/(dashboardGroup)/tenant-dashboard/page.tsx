"use client";

import React from "react";
import Link from "next/link";
import {
  Search,
  CalendarCheck,
  CreditCard,
  Heart,
  CheckCircle2,
  ShieldCheck,
  UserCheck,
  Clock,
  MessageSquare,
  Home,
  KeyRound,
  Sparkles,
  ArrowRight,
  Receipt,
  Compass,
  Star,
  Building2,
  ShieldAlert,
} from "lucide-react";

export default function RentNestTenantDashboard() {
  const quickActions = [
    {
      id: "search",
      title: "Explore Homes",
      description: "Search verified apartments, villas, and family houses across prime locations.",
      icon: Search,
      href: "/all-properties",
      badge: "Browse Listings",
      theme: {
        iconBg: "bg-[#18342d] text-[#e5bd8b]",
        glow: "hover:border-[#18342d]/40",
      },
    },
    {
      id: "bookings",
      title: "My Bookings",
      description: "Track your reservation requests, stay approval statuses, and move-in dates.",
      icon: CalendarCheck,
      href: "/tenant-dashboard/my-bookings",
      badge: "Reservations",
      theme: {
        iconBg: "bg-[#d9a66b] text-[#18342d]",
        glow: "hover:border-[#d9a66b]/60",
      },
    },
    {
      id: "services",
      title: "Rental Services",
      description: "Explore tenant moving assistance, verified cleaning, and property viewing services.",
      icon: Compass,
      href: "/services",
      badge: "Support Services",
      theme: {
        iconBg: "bg-[#18342d]/10 text-[#18342d]",
        glow: "hover:border-[#18342d]/30",
      },
    },
    {
      id: "about",
      title: "Trust & Safety",
      description: "Learn about RentNest multi-point host screening and tenant deposit guarantees.",
      icon: ShieldCheck,
      href: "/about",
      badge: "RentNest Story",
      theme: {
        iconBg: "bg-[#18342d] text-[#e5bd8b]",
        glow: "hover:border-[#18342d]/40",
      },
    },
  ];

  const tenantGuidelines = [
    {
      label: "Verified host screening",
      desc: "Every listed house is verified by our inspection team before publication.",
      icon: ShieldCheck,
    },
    {
      label: "Secure digital payments",
      desc: "Integrated Stripe payments protect your deposits and monthly transactions.",
      icon: CreditCard,
    },
    {
      label: "Direct host messaging",
      desc: "Connect seamlessly with property managers for viewing schedules.",
      icon: MessageSquare,
    },
    {
      label: "Instant digital lease",
      desc: "Legally transparent, fee-free lease contracts recorded in your portal.",
      icon: FileTextIcon,
    },
  ];

  function FileTextIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
              <span className="h-px w-6 bg-[#d9a66b]" />
              Tenant Sanctuary
            </p>
            <h1 className="mt-2 text-3xl font-medium tracking-tight text-[#18342d] sm:text-4xl">
              Welcome to your <em className="font-serif italic font-normal">RentNest Portal</em>
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#64716c]">
              Explore verified residences, check the status of active booking requests, and manage your stay journey effortlessly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/all-properties"
              className="inline-flex items-center gap-2 rounded-full bg-[#18342d] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[#102b25]"
            >
              <Search className="size-4 text-[#e5bd8b]" />
              Explore Homes
            </Link>
            <Link
              href="/tenant-dashboard/my-bookings"
              className="inline-flex items-center gap-2 rounded-full border border-[#e7e5df] bg-white px-5 py-2.5 text-xs font-semibold text-[#18342d] shadow-2xs transition hover:bg-[#f7f6f2]"
            >
              <CalendarCheck className="size-4 text-[#b77940]" />
              My Bookings
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Action Navigation Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.id}
              href={action.href}
              className={`group flex flex-col justify-between rounded-3xl border border-[#e7e5df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${action.theme.glow}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`grid size-12 place-items-center rounded-2xl shadow-xs transition-transform duration-300 group-hover:scale-105 ${action.theme.iconBg}`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#b77940]">
                    {action.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#18342d] group-hover:text-[#b77940] transition-colors">
                    {action.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#64716c]">
                    {action.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center text-xs font-semibold text-[#18342d] group-hover:text-[#b77940]">
                Open Section <ArrowRight className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Guidelines & Safety Assurance */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left: RentNest Renter Assurance */}
        <div className="rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-8 shadow-xs lg:col-span-2 space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b77940]">
                Renter Standards
              </span>
              <Sparkles className="size-3 text-[#d9a66b]" />
            </div>
            <h2 className="mt-1 text-2xl font-medium tracking-tight text-[#18342d]">
              Renting made <em className="font-serif italic font-normal">transparent and stress-free.</em>
            </h2>
            <p className="mt-1 text-xs text-[#64716c]">
              We protect tenants throughout every milestone of their leasing experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {tenantGuidelines.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#e7e5df] bg-[#fbfaf8] p-4.5 space-y-2 transition-colors hover:bg-white"
                >
                  <div className="flex items-center gap-2">
                    <div className="grid size-8 place-items-center rounded-xl bg-[#18342d]/5 text-[#18342d]">
                      <Icon className="size-4 text-[#b77940]" />
                    </div>
                    <h4 className="text-xs font-semibold text-[#18342d]">
                      {item.label}
                    </h4>
                  </div>
                  <p className="text-xs leading-relaxed text-[#64716c]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Tenant Protection Pill Card */}
        <div className="rounded-3xl border border-[#18342d]/10 bg-gradient-to-br from-[#18342d] to-[#102b25] p-6 sm:p-8 text-white shadow-md flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#e5bd8b]">
              <ShieldCheck className="size-3.5" />
              Verified Tenant Status
            </span>

            <h3 className="text-xl font-medium text-white sm:text-2xl">
              Zero Hidden Charges, Guaranteed Deposits
            </h3>

            <p className="text-xs leading-relaxed text-white/75">
              RentNest never charges surprise agent percentages or application processing fees. What you see is what you pay.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-white/90">
                <CheckCircle2 className="size-3.5 text-[#e5bd8b]" />
                Digital move-in condition checklist
              </div>
              <div className="flex items-center gap-2 text-xs text-white/90">
                <CheckCircle2 className="size-3.5 text-[#e5bd8b]" />
                Direct landlord message line
              </div>
              <div className="flex items-center gap-2 text-xs text-white/90">
                <CheckCircle2 className="size-3.5 text-[#e5bd8b]" />
                24-hour response turnaround
              </div>
            </div>
          </div>

          <Link
            href="/all-properties"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d9a66b] px-5 py-3 text-xs font-semibold text-[#18342d] transition hover:bg-[#e8c18f]"
          >
            Find Next Rental Home
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
