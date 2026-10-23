"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

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
    <Button
      onClick={handleApprove}
      disabled={pending}
      className="h-9 rounded-xl bg-[#18342d] px-4 text-xs font-semibold text-white shadow-xs transition hover:bg-[#102b25] disabled:opacity-50 cursor-pointer"
    >
      <CheckCircle2 className="mr-1.5 size-3.5 text-[#e5bd8b]" />
      {pending ? "Approving..." : "Approve Stay"}
    </Button>
  );
};

export default ApproveBookingButton;
