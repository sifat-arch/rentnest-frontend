import React from "react";
import TenantBookingList from "../../_components/tenant/TenantBookingList";
import { CalendarCheck } from "lucide-react";

const MyBookings = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto py-5">
      {/* Page Header */}
      <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <CalendarCheck className="h-7 w-7 text-primary" />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              My Bookings
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            View and manage all your property booking history and statuses.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm">
        <TenantBookingList />
      </div>
    </div>
  );
};

export default MyBookings;
