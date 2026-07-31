import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PaymentSuccessPage = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
          <CheckCircle2 className="h-20 w-20 text-green-600" />

          <h1 className="text-3xl font-bold">Payment Successful</h1>

          <p className="text-muted-foreground">
            Your payment has been completed successfully.
          </p>

          <div className="rounded-md bg-green-100 px-4 py-2 text-green-700">
            Payment Status: <strong>PAID</strong>
          </div>

          <Button asChild className="mt-4">
            <Link href="/tenant-dashboard">Back to Dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSuccessPage;
