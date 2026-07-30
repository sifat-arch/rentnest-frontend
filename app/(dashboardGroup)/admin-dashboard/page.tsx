import { Building2, FolderTree, House, Users } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="rounded-xl border bg-background p-6 shadow-sm">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Manage users, categories, properties and monitor the entire RentNest
            platform.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Users</p>
                <h2 className="mt-2 text-3xl font-bold">0</h2>
              </div>

              <Users className="h-10 w-10 text-primary" />
            </div>
          </div>

          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Properties</p>
                <h2 className="mt-2 text-3xl font-bold">0</h2>
              </div>

              <House className="h-10 w-10 text-primary" />
            </div>
          </div>

          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Categories</p>
                <h2 className="mt-2 text-3xl font-bold">0</h2>
              </div>

              <FolderTree className="h-10 w-10 text-primary" />
            </div>
          </div>

          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Bookings</p>
                <h2 className="mt-2 text-3xl font-bold">0</h2>
              </div>

              <Building2 className="h-10 w-10 text-primary" />
            </div>
          </div>
        </div>

        {/* Management Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Category Management</h2>

            <p className="mb-6 text-muted-foreground">
              Create, update and delete property categories.
            </p>

            {/* CreateCategoryForm */}
          </div>

          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">User Management</h2>

            <p className="mb-6 text-muted-foreground">
              View all users, change roles and manage account status.
            </p>

            {/* UserTable */}
          </div>
        </div>

        {/* Tables */}
        <div className="rounded-xl border bg-background p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Recent Activities</h2>

          <div className="rounded-lg border border-dashed p-10 text-center text-muted-foreground">
            Tables for Properties, Categories, Users and Bookings will appear
            here.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
