import React from "react";
import { Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { getAllUsers } from "../_actions/getAllUsers";
import AllUsersList from "../_components/AllUsersList";

const AllUsers = async () => {
  const result = await getAllUsers();

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6">
      {/* Header */}
      <div className="flex items-center justify-between rounded-xl border bg-background p-6 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">All Users</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            View and manage all registered users.
          </p>
        </div>

        <Card className="w-48">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Total Users</p>
              <h2 className="text-2xl font-bold">
                {result.success ? result.data.length : 0}
              </h2>
            </div>

            <Users className="h-10 w-10 text-primary" />
          </CardContent>
        </Card>
      </div>

      {/* User List */}
      <div className="rounded-xl border bg-background p-6 shadow-sm">
        <AllUsersList result={result} />
      </div>
    </div>
  );
};

export default AllUsers;
