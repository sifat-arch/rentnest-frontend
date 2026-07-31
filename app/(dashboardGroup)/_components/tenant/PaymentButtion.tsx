"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

type PaymentButtonProps = {
  bookingId: string;
};

const PaymentButton = ({ bookingId }: PaymentButtonProps) => {
  const [pending, startTransition] = useTransition();

  const handlePayment = () => {
    startTransition(async () => {
      // const result = await createPaymentSession(bookingId);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      window.location.href = result.data.url;
    });
  };

  return (
    <Button className="w-full" onClick={handlePayment} disabled={pending}>
      <CreditCard className="mr-2 h-4 w-4" />

      {pending ? "Redirecting..." : "Pay Now"}
    </Button>
  );
};

export default PaymentButton;
