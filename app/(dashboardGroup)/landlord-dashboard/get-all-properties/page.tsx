import { Suspense } from "react";
import GetLandlordPropertyList from "../../_components/landlord/GetLandlordProperyList";
import Link from "next/link";
import { HousePlus } from "lucide-react";

const GetAllProperties = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-6 rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-8 shadow-xs sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
            <span className="h-px w-6 bg-[#d9a66b]" />
            Listed Portfolio
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-[#18342d] sm:text-4xl">
            My <em className="font-serif italic font-normal">Properties</em>
          </h1>
          <p className="mt-1 text-xs text-[#64716c]">
            Inspect, edit, update pricing, or manage all accommodations you have published on RentNest.
          </p>
        </div>

        <Link
          href="/landlord-dashboard/create-property"
          className="inline-flex items-center gap-2 rounded-full bg-[#18342d] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[#102b25]"
        >
          <HousePlus className="size-4 text-[#e5bd8b]" />
          Create New Listing
        </Link>
      </div>

      {/* Property Grid */}
      <Suspense
        fallback={
          <div className="rounded-3xl border border-[#e7e5df] bg-white p-12 text-center text-xs text-[#64716c]">
            Loading your property portfolio...
          </div>
        }
      >
        <GetLandlordPropertyList />
      </Suspense>
    </div>
  );
};

export default GetAllProperties;
