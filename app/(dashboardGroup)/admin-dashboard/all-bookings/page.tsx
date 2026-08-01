import { Suspense } from "react";
import { getAllBookings } from "../_actions/getAllBookings";
import AdminBookingList from "../_components/AdminBookingLIst";
import BookingSearchBar from "../_components/BookingSearchBar";
import AllBookingsSkeletons from "@/service/AllBookingsSkeletonsProps";

type AllBookingsProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const AllBookings = async ({ searchParams }: AllBookingsProps) => {
  const query = await searchParams;

  const result = await getAllBookings({ query });

  if (!result.success) {
    return <p className="text-center text-red-500">{result.message}</p>;
  }

  if (result.data.length === 0) {
    return (
      <p className="text-center text-muted-foreground">No bookings found.</p>
    );
  }

  return (
    <Suspense fallback={<AllBookingsSkeletons />}>
      <div className="space-y-4 max-w-7xl py-5 mx-auto">
        <BookingSearchBar />
        <AdminBookingList result={result} />
      </div>
    </Suspense>
  );
};

export default AllBookings;
