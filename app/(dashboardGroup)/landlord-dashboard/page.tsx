import CreatePropertyForm from "../_components/landlord/CreateProperty";

const LandlordDashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8 rounded-xl border bg-background p-6 shadow-sm">
          <h1 className="text-3xl font-bold">Landlord Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Manage your properties, update listings, and monitor bookings from
            one place.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Side */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-semibold">
                Create New Property
              </h2>

              <CreatePropertyForm />
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>

              <div className="space-y-3">
                <button className="w-full rounded-lg border px-4 py-2 text-left transition hover:bg-muted">
                  ➕ Create Property
                </button>

                <button className="w-full rounded-lg border px-4 py-2 text-left transition hover:bg-muted">
                  📝 Update Property
                </button>

                <button className="w-full rounded-lg border px-4 py-2 text-left transition hover:bg-muted">
                  📅 View Bookings
                </button>
              </div>
            </div>

            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Statistics</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                  <span>Total Properties</span>
                  <span className="font-bold">0</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                  <span>Total Bookings</span>
                  <span className="font-bold">0</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                  <span>Pending Requests</span>
                  <span className="font-bold">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Section */}
      </div>
    </div>
  );
};

export default LandlordDashboard;
