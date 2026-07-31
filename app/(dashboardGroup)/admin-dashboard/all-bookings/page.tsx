import { getAllBookings } from "../_actions/getAllBookings";
import AdminBookingList from "../_components/AdminBookingLIst";
import BookingSearchBar from "../_components/BookingSearchBar";

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
    <div className="space-y-4">
      <BookingSearchBar />
      <AdminBookingList result={result} />
    </div>
  );
};

export default AllBookings;
