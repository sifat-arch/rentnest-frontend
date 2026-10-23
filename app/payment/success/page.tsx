import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PaymentSuccessPage = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-6 bg-[#f7f6f2] dark:bg-[#0b1412] text-[#1c2925] dark:text-[#f4f3ee]">
      <Card className="w-full max-w-md border border-[#e7e5df] dark:border-[#223a32] bg-white dark:bg-[#12211c] shadow-xl rounded-3xl">
        <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
          <div className="grid size-16 place-items-center rounded-full bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20">
            <CheckCircle2 className="size-10" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-[#18342d] dark:text-[#f4f3ee]">
            Payment Successful
          </h1>

          <p className="text-sm text-[#64716c] dark:text-[#9eb0a8] max-w-xs">
            Your rental booking reservation has been successfully confirmed and paid.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            Status: Confirmed & Paid
          </div>

          <Button
            asChild
            className="mt-4 rounded-xl bg-[#d9a66b] text-[#18342d] hover:bg-[#e8c18f] font-semibold px-6"
          >
            <Link href="/tenant-dashboard/my-bookings" className="flex items-center gap-2">
              View My Bookings <ArrowRight className="size-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSuccessPage;
