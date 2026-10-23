import React from "react";
import TenantBookingList from "../../_components/tenant/TenantBookingList";
import Link from "next/link";
import { Search } from "lucide-react";

const MyBookings = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-6 rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-8 shadow-xs sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
            <span className="h-px w-6 bg-[#d9a66b]" />
            Tenant Itinerary
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-[#18342d] sm:text-4xl">
            My <em className="font-serif italic font-normal">Bookings</em>
          </h1>
          <p className="mt-1 text-xs text-[#64716c]">
            Track reservation approvals, review stay details, and complete your digital rent payments.
          </p>
        </div>

        <Link
          href="/all-properties"
          className="inline-flex items-center gap-2 rounded-full bg-[#18342d] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[#102b25]"
        >
          <Search className="size-4 text-[#e5bd8b]" />
          Browse More Homes
        </Link>
      </div>

      {/* Main Content Area */}
      <TenantBookingList />
    </div>
  );
};

export default MyBookings;
