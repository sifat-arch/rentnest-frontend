import { Suspense } from "react";
import GetLandlordPropertyList from "../../_components/landlord/GetLandlordProperyList";

const GetAllProperties = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-xl border bg-background p-6 shadow-sm">
        <h1 className="text-3xl font-bold">My Properties</h1>

        <p className="mt-2 text-muted-foreground">
          View, update and manage all the properties you have listed.
        </p>
      </div>

      {/* Property List */}
      <Suspense
        fallback={
          <div className="rounded-xl border bg-background p-10 text-center">
            Loading properties...
          </div>
        }
      >
        <GetLandlordPropertyList />
      </Suspense>
    </div>
  );
};

export default GetAllProperties;
