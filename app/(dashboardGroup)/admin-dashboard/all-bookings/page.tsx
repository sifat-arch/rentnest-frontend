import { Suspense } from "react";
import { getAllBookings } from "../_actions/getAllBookings";
import AdminBookingList from "../_components/AdminBookingLIst";
import BookingSearchBar from "../_components/BookingSearchBar";
import AllBookingsSkeletons from "@/service/AllBookingsSkeletonsProps";
import { CalendarCheck } from "lucide-react";

type AllBookingsProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const AllBookings = async ({ searchParams }: AllBookingsProps) => {
  const query = await searchParams;
  const result = await getAllBookings({ query });

  return (
    <Suspense fallback={<AllBookingsSkeletons />}>
      <div className="space-y-8">
        {/* Header */}
        <div className="rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
                <span className="h-px w-6 bg-[#d9a66b]" />
                Reservations Roster
              </p>
              <h1 className="mt-2 text-3xl font-medium tracking-tight text-[#18342d] sm:text-4xl">
                All Platform <em className="font-serif italic font-normal">Bookings</em>
              </h1>
              <p className="mt-1 text-xs text-[#64716c]">
                Overview of tenant reservation inquiries, rental agreements, and payment states.
              </p>
            </div>

            <div className="w-full sm:w-auto">
              <BookingSearchBar />
            </div>
          </div>
        </div>

        {/* List Content */}
        {!result.success ? (
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-center text-rose-700">
            {result.message}
          </div>
        ) : (
          <AdminBookingList result={result} />
        )}
      </div>
    </Suspense>
  );
};

export default AllBookings;
