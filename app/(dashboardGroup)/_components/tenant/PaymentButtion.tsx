"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPaymentSession } from "../../_actions/createPaymentSession";

type PaymentButtonProps = {
  bookingId: string;
};

const PaymentButton = ({ bookingId }: PaymentButtonProps) => {
  const [pending, startTransition] = useTransition();

  const handlePayment = () => {
    startTransition(async () => {
      const result = await createPaymentSession(bookingId);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      window.location.href = result.data;
    });
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={pending}
      className="h-10 rounded-xl bg-[#d9a66b] px-5 text-xs font-semibold text-[#18342d] shadow-xs transition hover:bg-[#e8c18f] disabled:opacity-50 cursor-pointer"
    >
      <CreditCard className="mr-2 size-4 text-[#18342d]" />
      {pending ? "Redirecting to Stripe..." : "Complete Payment"}
    </Button>
  );
};

export default PaymentButton;
