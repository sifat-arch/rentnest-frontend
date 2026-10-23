import { getLandlordProperties } from "../_actions/getLandLordPropeties";
import { getBookings } from "../_actions/getBookings";
import LandlordStats from "../_components/landlord/LandlordStats";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  HousePlus,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const LandlordDashboard = async () => {
  const [propertiesResult, bookingsResult] = await Promise.all([
    getLandlordProperties(),
    getBookings(),
  ]);

  const totalProperties = propertiesResult?.success && propertiesResult?.data
    ? propertiesResult.data.length
    : 0;

  const totalBookings = bookingsResult?.success && bookingsResult?.data
    ? bookingsResult.data.length
    : 0;

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
              <span className="h-px w-6 bg-[#d9a66b]" />
              Host Workspace
            </p>
            <h1 className="mt-2 text-3xl font-medium tracking-tight text-[#18342d] sm:text-4xl">
              Welcome back to your <em className="font-serif italic font-normal">Host Suite</em>
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#64716c]">
              Track your property listings, manage tenant stay requests, and keep occupancy high with RentNest.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/landlord-dashboard/create-property"
              className="inline-flex items-center gap-2 rounded-full bg-[#18342d] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[#102b25]"
            >
              <HousePlus className="size-4 text-[#e5bd8b]" />
              Add Property
            </Link>
            <Link
              href="/landlord-dashboard/bookings"
              className="inline-flex items-center gap-2 rounded-full border border-[#e7e5df] bg-white px-5 py-2.5 text-xs font-semibold text-[#18342d] shadow-2xs transition hover:bg-[#f7f6f2]"
            >
              <CalendarCheck className="size-4 text-[#b77940]" />
              Booking Requests
            </Link>
          </div>
        </div>
      </div>

      {/* Dynamic Metric Statistics */}
      <LandlordStats
        totalProperties={totalProperties}
        totalBookings={totalBookings}
      />

      {/* Feature & Management Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/landlord-dashboard/create-property"
          className="group rounded-3xl border border-[#e7e5df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex size-12 items-center justify-center rounded-2xl bg-[#18342d]/5 text-[#18342d] transition-colors group-hover:bg-[#18342d] group-hover:text-white">
            <HousePlus className="size-6" />
          </div>
          <h3 className="mt-4 text-base font-semibold text-[#18342d]">
            List New Property
          </h3>
          <p className="mt-1 text-xs text-[#64716c]">
            Upload high-res photos, set rental prices, specify amenities, and reach verified tenants.
          </p>
          <div className="mt-4 flex items-center text-xs font-semibold text-[#b77940] group-hover:text-[#18342d]">
            Create a listing <ArrowRight className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        <Link
          href="/landlord-dashboard/get-all-properties"
          className="group rounded-3xl border border-[#e7e5df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex size-12 items-center justify-center rounded-2xl bg-[#d9a66b]/20 text-[#18342d] transition-colors group-hover:bg-[#d9a66b]">
            <Building2 className="size-6" />
          </div>
          <h3 className="mt-4 text-base font-semibold text-[#18342d]">
            Manage Listings
          </h3>
          <p className="mt-1 text-xs text-[#64716c]">
            Review all active listings, modify rental rates, change descriptions, or delete unlisted units.
          </p>
          <div className="mt-4 flex items-center text-xs font-semibold text-[#b77940] group-hover:text-[#18342d]">
            View portfolio <ArrowRight className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        <Link
          href="/landlord-dashboard/bookings"
          className="group rounded-3xl border border-[#e7e5df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex size-12 items-center justify-center rounded-2xl bg-[#18342d]/5 text-[#18342d] transition-colors group-hover:bg-[#18342d] group-hover:text-white">
            <CalendarCheck className="size-6" />
          </div>
          <h3 className="mt-4 text-base font-semibold text-[#18342d]">
            Review Inquiries
          </h3>
          <p className="mt-1 text-xs text-[#64716c]">
            Evaluate prospective tenant requests, accept reservations, and manage stay schedules.
          </p>
          <div className="mt-4 flex items-center text-xs font-semibold text-[#b77940] group-hover:text-[#18342d]">
            Inspect bookings <ArrowRight className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </div>

      {/* Host Assurance & Guarantees */}
      <div className="rounded-3xl border border-[#e7e5df] bg-gradient-to-r from-[#18342d] to-[#102b25] p-6 sm:p-8 text-white shadow-md">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e5bd8b]">
              <ShieldCheck className="size-4" />
              RentNest Host Protection
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Verified Tenants, Guaranteed Rent Transfers
            </h2>
            <p className="max-w-xl text-xs text-white/75 leading-relaxed">
              Every tenant is pre-screened with digital identity verification. Receive seamless digital payouts straight into your account once bookings are approved.
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <div className="flex items-center gap-2 text-xs text-white/85">
              <CheckCircle2 className="size-3.5 text-[#e5bd8b]" />
              Zero hidden listing charges
            </div>
            <div className="flex items-center gap-2 text-xs text-white/85">
              <CheckCircle2 className="size-3.5 text-[#e5bd8b]" />
              Integrated Stripe payment security
            </div>
            <div className="flex items-center gap-2 text-xs text-white/85">
              <CheckCircle2 className="size-3.5 text-[#e5bd8b]" />
              24/7 dedicated host concierge
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordDashboard;
