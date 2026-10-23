import Link from "next/link";
import { XCircle, ArrowLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PaymentCancelPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-6 bg-[#f7f6f2] dark:bg-[#0b1412] text-[#1c2925] dark:text-[#f4f3ee]">
      <Card className="w-full max-w-md border border-[#e7e5df] dark:border-[#223a32] bg-white dark:bg-[#12211c] shadow-lg">
        <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
          <div className="grid size-16 place-items-center rounded-full bg-amber-500/10 text-amber-500 dark:bg-amber-500/20">
            <XCircle className="size-10" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-[#18342d] dark:text-[#f4f3ee]">
            Payment Cancelled
          </h1>

          <p className="text-sm text-[#64716c] dark:text-[#9eb0a8] max-w-xs">
            Your booking payment session was cancelled. No charges were made to your account.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full justify-center">
            <Button
              asChild
              className="rounded-xl bg-[#d9a66b] text-[#18342d] hover:bg-[#e8c18f] font-semibold"
            >
              <Link href="/tenant-dashboard/my-bookings" className="flex items-center gap-2">
                <RotateCcw className="size-4" />
                Retry from Bookings
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-xl border-[#e7e5df] dark:border-[#223a32] hover:bg-[#f7f6f2] dark:hover:bg-[#182b25]"
            >
              <Link href="/tenant-dashboard" className="flex items-center gap-2">
                <ArrowLeft className="size-4" />
                Dashboard
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
