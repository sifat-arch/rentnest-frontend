import React from "react";
import { Users } from "lucide-react";
import { getAllUsers } from "../_actions/getAllUsers";
import AllUsersList from "../_components/AllUsersList";

const AllUsers = async () => {
  const result = await getAllUsers();
  const totalUsers = result.success ? result.data.length : 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-6 rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-8 shadow-xs md:flex-row md:items-center md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
            <span className="h-px w-6 bg-[#d9a66b]" />
            Community Directory
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-[#18342d] sm:text-4xl">
            All Registered <em className="font-serif italic font-normal">Users</em>
          </h1>
          <p className="mt-1 text-xs text-[#64716c]">
            Monitor platform accounts, verification states, and manage administrative privileges.
          </p>
        </div>

        {/* Total Users Pill Card */}
        <div className="flex items-center gap-4 rounded-2xl border border-[#e7e5df] bg-[#f7f6f2] p-4 sm:px-6">
          <div className="flex size-11 items-center justify-center rounded-xl bg-[#18342d] text-[#e5bd8b] shadow-xs">
            <Users className="size-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#64716c]">
              Total Users
            </span>
            <p className="text-2xl font-bold tracking-tight text-[#18342d]">
              {totalUsers}
            </p>
          </div>
        </div>
      </div>

      {/* User Directory Grid */}
      <AllUsersList result={result} />
    </div>
  );
};

export default AllUsers;
