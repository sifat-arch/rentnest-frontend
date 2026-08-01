import { getProperties } from "@/app/(publicGroup)/_actions/getProperties";
import LandlordStats from "../_components/landlord/LandlordStats";
import { getAllBookings } from "../admin-dashboard/_actions/getAllBookings";
import { getLandlordProperties } from "../_actions/getLandLordPropeties";
import { getBookings } from "../_actions/getBookings";

const LandlordDashboard = async () => {
  const [propertiesResult, bookingsResult] = await Promise.all([
    getLandlordProperties(),
    getBookings(),
  ]);

  const totalProperties = propertiesResult.success
    ? propertiesResult.data.length
    : 0;

  const totalBookings = bookingsResult.success ? bookingsResult.data.length : 0;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Landlord Dashboard
        </h1>
        <p className="mt-2 text-muted-foreground">
          Welcome back! Here's an overview of your rental business.
        </p>
      </div>

      <LandlordStats
        totalProperties={totalProperties}
        totalBookings={totalBookings}
      />

      <div className="rounded-2xl border bg-background p-8">
        <h2 className="text-xl font-semibold">Quick Overview</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">
            <h3 className="font-medium">🏠 Properties</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Manage your listed properties, update information and monitor
              availability.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-medium">📅 Bookings</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Review incoming booking requests and manage tenant reservations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordDashboard;
