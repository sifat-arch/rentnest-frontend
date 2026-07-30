"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { statusUpdate } from "../../_actions/statusUpdate";

type Props = {
  bookingId: string;
};

const RejectBookingButton = ({ bookingId }: Props) => {
  const [pending, startTransition] = useTransition();

  const handleReject = () => {
    startTransition(async () => {
      const result = await statusUpdate(bookingId, "REJECTED");

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <Button variant="destructive" onClick={handleReject} disabled={pending}>
      <XCircle className="mr-2 h-4 w-4" />
      {pending ? "Rejecting..." : "Reject"}
    </Button>
  );
};

export default RejectBookingButton;
