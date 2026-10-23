/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { Calendar, CheckCircle2, Mail, MapPin, Sparkles, User } from "lucide-react";
import { getTenantBookings } from "../../_actions/getTenantBookings";
import PaymentButton from "./PaymentButtion";
import Link from "next/link";

const TenantBookingList = async () => {
  const result = await getTenantBookings();

  if (!result.success || result.data.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-[#e7e5df] bg-white p-12 text-center text-[#64716c]">
        <p className="text-sm font-semibold text-[#18342d]">No reservations found.</p>
        <p className="mt-1 text-xs text-[#64716c]">
          You haven&apos;t submitted any property booking requests yet.
        </p>
        <div className="mt-5">
          <Link
            href="/all-properties"
            className="inline-flex items-center gap-2 rounded-full bg-[#18342d] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[#102b25]"
          >
            Explore Available Homes
          </Link>
        </div>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "APPROVED":
        return "border-emerald-200 bg-emerald-50 text-emerald-800";
      case "PAID":
        return "border-[#18342d]/20 bg-[#18342d]/10 text-[#18342d]";
      case "REJECTED":
        return "border-rose-200 bg-rose-50 text-rose-700";
      default:
        return "border-amber-200 bg-amber-50 text-amber-800";
    }
  };

  return (
    <div className="space-y-4">
      {result.data.map((booking: any) => (
        <div
          key={booking.id}
          className="group relative overflow-hidden rounded-3xl border border-[#e7e5df] bg-white p-5 shadow-xs transition-all duration-300 hover:shadow-md md:p-6"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            {/* Left: Property Preview & Details */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-2xl border border-[#e7e5df] sm:h-24 sm:w-28">
                <Image
                  src={
                    booking.property.image ||
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                  }
                  alt={booking.property.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-[#18342d]">
                    {booking.property.title}
                  </h3>
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${getStatusBadge(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-x-4 gap-y-1 text-xs text-[#64716c] sm:grid-cols-2">
                  <div className="flex items-center gap-1.5">
                    <User className="size-3.5 text-[#b77940]" />
                    <span>
                      <strong className="text-[#18342d]">Host:</strong>{" "}
                      {booking.user.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Mail className="size-3.5 text-[#b77940]" />
                    <span className="truncate">{booking.user.email}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-[#b77940]" />
                    <span>{booking.property.location}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Calendar className="size-3.5 text-[#b77940]" />
                    <span>
                      Reserved:{" "}
                      {new Date(booking.createdAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Rent & Payment Button */}
            <div className="flex flex-row items-center justify-between border-t border-[#e7e5df] pt-4 md:flex-col md:items-end md:justify-center md:border-t-0 md:pt-0">
              <div className="text-left md:text-right">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#b77940]">
                  Monthly Rent
                </span>
                <p className="text-xl font-bold text-[#18342d]">
                  ৳ {booking.property.price.toLocaleString()}
                </p>
              </div>

              <div className="mt-2.5">
                {booking.status === "APPROVED" && (
                  <PaymentButton bookingId={booking.id} />
                )}
                {booking.status === "PAID" && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800">
                    <CheckCircle2 className="size-3.5" />
                    Paid & Confirmed
                  </span>
                )}
                {booking.status === "PENDING" && (
                  <span className="text-xs font-medium text-[#64716c]">
                    Awaiting Host Approval
                  </span>
                )}
                {booking.status === "REJECTED" && (
                  <span className="text-xs font-medium text-rose-600">
                    Host Declined
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TenantBookingList;
