/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { CheckCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getBookings } from "../../_actions/getBookings";
import ApproveBookingButton from "./ApproveBookingButtion";
import RejectBookingButton from "./RejectBookingButtion";

const BookingList = async () => {
  const result = await getBookings();

  if (!result.success || result.data.length === 0) {
    return (
      <div className="rounded-xl border border-dashed p-10 text-center text-muted-foreground">
        No booking requests found.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {result.data.map((booking: any) => (
        <Card key={booking.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{booking.property.title}</CardTitle>

                <p className="mt-1 text-sm text-muted-foreground">
                  Requested by{" "}
                  <span className="font-medium">{booking.user.name}</span>
                </p>
              </div>

              <Badge
                variant={
                  booking.status === "APPROVED"
                    ? "default"
                    : booking.status === "REJECTED"
                      ? "destructive"
                      : "secondary"
                }
              >
                {booking.status}
              </Badge>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col gap-5 md:flex-row md:justify-between">
              <div className="flex gap-4">
                <div className="relative h-24 w-24 overflow-hidden rounded-lg border">
                  <Image
                    src={booking.property.image || "/placeholder-property.jpg"}
                    alt={booking.property.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <p>
                    <span className="font-semibold">Tenant:</span>{" "}
                    {booking.user.name}
                  </p>

                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    {booking.user.email}
                  </p>

                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {booking.property.location}
                  </p>

                  <p>
                    <span className="font-semibold">Rent:</span> ৳
                    {booking.property.price.toLocaleString()}
                  </p>

                  <p>
                    <span className="font-semibold">Requested:</span>{" "}
                    {new Date(booking.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <ApproveBookingButton bookingId={booking.id} />

                <RejectBookingButton bookingId={booking.id} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BookingList;
