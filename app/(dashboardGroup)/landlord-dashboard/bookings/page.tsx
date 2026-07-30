import React from "react";
import BookingList from "../../_components/landlord/BookingList";
import { getBookings } from "../../_actions/getBookings";

const GetLandlordBookings = async () => {
  const bookings = await getBookings();
  console.log("bookgings", bookings);
  return (
    <div>
      bookings
      <BookingList />
    </div>
  );
};

export default GetLandlordBookings;
