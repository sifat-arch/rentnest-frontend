/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";
import { getAllUsers } from "./_actions/getAllUsers";
import { getProperties } from "@/app/(publicGroup)/_actions/getProperties";
import { getAllBookings } from "./_actions/getAllBookings";
import AdminStats from "./_components/AdminStats";
import GlobalLoading from "@/app/loading";
const users = await getAllUsers();
const properties = await getProperties({ query: {} });
const bookings = await getAllBookings({ query: {} });

const AdminDashobard = () => {
  return (
    <Suspense fallback={<GlobalLoading />}>
      <div>
        <AdminStats
          totalUsers={users.data.length}
          totalProperties={properties.data.length}
          totalBookings={bookings.data.length}
          pendingBookings={
            bookings.data.filter((item: any) => item.status === "PENDING")
              .length
          }
        />
      </div>
    </Suspense>
  );
};

export default AdminDashobard;
