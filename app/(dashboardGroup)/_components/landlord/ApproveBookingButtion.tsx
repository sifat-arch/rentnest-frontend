"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { statusUpdate } from "../../_actions/statusUpdate";

type Props = {
  bookingId: string;
};

const ApproveBookingButton = ({ bookingId }: Props) => {
  const [pending, startTransition] = useTransition();

  const handleApprove = () => {
    startTransition(async () => {
      const result = await statusUpdate(bookingId, "APPROVED");

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <Button onClick={handleApprove} disabled={pending}>
      <CheckCircle className="mr-2 h-4 w-4" />
      {pending ? "Approving..." : "Approve"}
    </Button>
  );
};

export default ApproveBookingButton;
