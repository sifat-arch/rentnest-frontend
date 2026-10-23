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
    <Button
      variant="outline"
      onClick={handleReject}
      disabled={pending}
      className="h-9 rounded-xl border-rose-200 bg-rose-50 px-3.5 text-xs font-semibold text-rose-700 shadow-2xs transition hover:bg-rose-100 hover:border-rose-300 disabled:opacity-50 cursor-pointer"
    >
      <XCircle className="mr-1.5 size-3.5 text-rose-600" />
      {pending ? "Rejecting..." : "Reject"}
    </Button>
  );
};

export default RejectBookingButton;
