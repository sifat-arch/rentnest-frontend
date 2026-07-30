/* eslint-disable @typescript-eslint/no-explicit-any */

import { getLandlordProperties } from "../../_actions/getLandLordPropeties";
import LandlordPropertyCard from "./LandlordPropertyCard";

const GetLandlordPropertyList = async () => {
  const result = await getLandlordProperties();

  if (!result.success || result.data.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-10 text-center text-muted-foreground">
        No properties found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {result.data.map((property: any) => (
        <LandlordPropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default GetLandlordPropertyList;
