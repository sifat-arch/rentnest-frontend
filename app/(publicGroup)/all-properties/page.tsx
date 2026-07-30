import { Suspense } from "react";
import { PropertyList } from "../_components/propertiy/PropertyList";
import { Skeleton } from "../_components/propertiy/NewsSkeleton";
import { SearchBar } from "../_components/propertiy/NewsSearchBar";
import { PropertyFilters } from "../_components/propertiy/PropertyFilters";

const GetAllProperties = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Properties</h1>
          <p className="text-sm text-muted-foreground">
            Browse the latest Properties.
          </p>
        </div>
        <div className="flex gap-5">
          <SearchBar />
          <PropertyFilters />
        </div>
      </div>

      <Suspense fallback={<Skeleton />}>
        <PropertyList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default GetAllProperties;
