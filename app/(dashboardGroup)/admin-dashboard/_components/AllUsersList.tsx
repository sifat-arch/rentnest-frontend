/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import AllUsersCard from "./AllUsersCard";

const AllUsersList = ({ result }: any) => {
  if (!result.success || result.data.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-[#e7e5df] bg-white p-12 text-center text-[#64716c]">
        <p className="text-sm font-medium">No users found.</p>
        <p className="mt-1 text-xs text-[#64716c]/75">
          Registered tenant and landlord accounts will be listed here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {result.data.map((user: any) => (
        <AllUsersCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default AllUsersList;
