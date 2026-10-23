/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";
import { getAllUsers } from "./_actions/getAllUsers";
import { getProperties } from "@/app/(publicGroup)/_actions/getProperties";
import { getAllBookings } from "./_actions/getAllBookings";
import AdminStats from "./_components/AdminStats";
import GlobalLoading from "@/app/loading";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  FolderPlus,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

const AdminDashboard = async () => {
  const users = await getAllUsers();
  const properties = await getProperties({ query: {} });
  const bookings = await getAllBookings({ query: {} });

  const totalUsers = users?.success && users?.data ? users.data.length : 0;
  const totalProperties =
    properties?.success && properties?.data ? properties.data.length : 0;
  const totalBookings =
    bookings?.success && bookings?.data ? bookings.data.length : 0;
  const pendingBookings =
    bookings?.success && bookings?.data
      ? bookings.data.filter((item: any) => item.status === "PENDING").length
      : 0;

  return (
    <Suspense fallback={<GlobalLoading />}>
      <div className="space-y-8">
        {/* Header Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-8 shadow-xs">
          <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
                <span className="h-px w-6 bg-[#d9a66b]" />
                Administrative Console
              </p>
              <h1 className="mt-2 text-3xl font-medium tracking-tight text-[#18342d] sm:text-4xl">
                RentNest <em className="font-serif italic font-normal">Platform Overview</em>
              </h1>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#64716c]">
                Real-time oversight of community activity, listed inventory, rental transactions, and account verifications.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/admin-dashboard/all-bookings"
                className="inline-flex items-center gap-2 rounded-full bg-[#18342d] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[#102b25]"
              >
                <CalendarCheck className="size-4 text-[#e5bd8b]" />
                Manage Bookings
              </Link>
              <Link
                href="/admin-dashboard/create-category"
                className="inline-flex items-center gap-2 rounded-full border border-[#e7e5df] bg-white px-5 py-2.5 text-xs font-semibold text-[#18342d] shadow-2xs transition hover:bg-[#f7f6f2]"
              >
                <FolderPlus className="size-4 text-[#b77940]" />
                Categories
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Cards */}
        <AdminStats
          totalUsers={totalUsers}
          totalProperties={totalProperties}
          totalBookings={totalBookings}
          pendingBookings={pendingBookings}
        />

        {/* Quick Management Shortcuts */}
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/admin-dashboard/all-users"
            className="group rounded-3xl border border-[#e7e5df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#18342d]/5 text-[#18342d] transition-colors group-hover:bg-[#18342d] group-hover:text-white">
              <Users className="size-6" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-[#18342d]">
              Manage Users
            </h3>
            <p className="mt-1 text-xs text-[#64716c]">
              View all tenants and landlords, monitor account status, or apply security blocks.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-[#b77940] group-hover:text-[#18342d]">
              Browse user directory <ArrowRight className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            href="/admin-dashboard/all-bookings"
            className="group rounded-3xl border border-[#e7e5df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#d9a66b]/20 text-[#18342d] transition-colors group-hover:bg-[#d9a66b]">
              <CalendarCheck className="size-6" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-[#18342d]">
              All Bookings
            </h3>
            <p className="mt-1 text-xs text-[#64716c]">
              Track all stay reservations, rental transaction statuses, and tenant requests.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-[#b77940] group-hover:text-[#18342d]">
              Review reservations <ArrowRight className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            href="/admin-dashboard/create-category"
            className="group rounded-3xl border border-[#e7e5df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#18342d]/5 text-[#18342d] transition-colors group-hover:bg-[#18342d] group-hover:text-white">
              <FolderPlus className="size-6" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-[#18342d]">
              Property Categories
            </h3>
            <p className="mt-1 text-xs text-[#64716c]">
              Add new property classification tags, manage rental types, and taxonomies.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-[#b77940] group-hover:text-[#18342d]">
              Configure tags <ArrowRight className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </Suspense>
  );
};

export default AdminDashboard;
