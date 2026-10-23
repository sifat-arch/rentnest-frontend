"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { createBooking } from "../../_actions/createBooking";

type BookingButtonProps = {
  propertyId: string;
};

const BookingButton = ({ propertyId }: BookingButtonProps) => {
  const [state, action, pending] = useActionState(
    createBooking.bind(null, propertyId),
    null,
  );

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Booking created successfully");
    } else {
      toast.error(state.message || "Booking failed");
    }
  }, [state]);

  return (
    <Button
      className="w-full rounded-full bg-[#18342d] text-white hover:bg-[#254d42] py-2 font-medium transition cursor-pointer shadow-sm"
      disabled={pending}
      onClick={() => action()}
    >
      {pending ? "Booking..." : "Book Now"}
    </Button>
  );
};

export default BookingButton;
