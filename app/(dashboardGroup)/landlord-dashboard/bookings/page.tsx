import React from "react";
import BookingList from "../../_components/landlord/BookingList";

const GetLandlordBookings = async () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-8 shadow-xs">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
          <span className="h-px w-6 bg-[#d9a66b]" />
          Stay Inquiries
        </p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight text-[#18342d] sm:text-4xl">
          Tenant <em className="font-serif italic font-normal">Booking Requests</em>
        </h1>
        <p className="mt-1 text-xs text-[#64716c]">
          Accept reservation dates, review tenant identities, and handle inquiries for your accommodations.
        </p>
      </div>

      {/* Booking List */}
      <BookingList />
    </div>
  );
};

export default GetLandlordBookings;
