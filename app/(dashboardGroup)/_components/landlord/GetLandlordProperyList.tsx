/* eslint-disable @typescript-eslint/no-explicit-any */
import { getLandlordProperties } from "../../_actions/getLandLordPropeties";
import LandlordPropertyCard from "./LandlordPropertyCard";
import Link from "next/link";
import { HousePlus } from "lucide-react";

const GetLandlordPropertyList = async () => {
  const result = await getLandlordProperties();

  if (!result.success || result.data.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-[#e7e5df] bg-white p-12 text-center text-[#64716c]">
        <p className="text-sm font-semibold text-[#18342d]">No properties listed yet.</p>
        <p className="mt-1 text-xs text-[#64716c]">
          Start publishing accommodations to start welcoming tenants.
        </p>
        <div className="mt-5">
          <Link
            href="/landlord-dashboard/create-property"
            className="inline-flex items-center gap-2 rounded-full bg-[#18342d] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[#102b25]"
          >
            <HousePlus className="size-4 text-[#e5bd8b]" />
            List Your First Property
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {result.data.map((property: any) => (
        <LandlordPropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default GetLandlordPropertyList;
