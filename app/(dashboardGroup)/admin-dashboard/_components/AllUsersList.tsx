/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import AllUsersCard from "./AllUsersCard";

const AllUsersList = ({ result }: any) => {
  if (!result.success || result.data.length === 0) {
    return (
      <div className="rounded-xl border border-dashed p-10 text-center text-muted-foreground">
        No booking requests found.
      </div>
    );
  }
  console.log(result);
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {result.data.map((user: any) => (
        <AllUsersCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default AllUsersList;
