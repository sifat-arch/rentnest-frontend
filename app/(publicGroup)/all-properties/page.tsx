import { Suspense } from "react";
import { PropertyList } from "../_components/propertiy/PropertyList";
import { Skeleton } from "../_components/propertiy/NewsSkeleton";
import { SearchBar } from "../_components/propertiy/NewsSearchBar";
import { PropertyFilters } from "../_components/propertiy/PropertyFilters";
import { Footer } from "@/components/shaired/Footer";
import ScrollReveal from "@/components/shaired/ScrollReveal";

const GetAllProperties = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#1c2925] flex flex-col justify-between">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-5 py-12 lg:px-8 lg:py-16">
        {/* Page Header */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-2xl">
            <p className="eyebrow">Curated listings</p>
            <h1 className="mt-3 text-4xl font-medium leading-[.98] tracking-[-.06em] sm:text-6xl text-[#18342d]">
              Explore All <em className="font-serif font-normal">Properties.</em>
            </h1>
            <p className="mt-4 text-base leading-7 text-[#64716c]">
              Discover verified spaces, compare pricing across neighborhoods, and
              find a home that fits your everyday life.
            </p>
          </div>
        </ScrollReveal>

        {/* Unified Search & Filters Card */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="rounded-3xl border border-[#dfe5dc] bg-white p-5 shadow-sm space-y-4">
            <div className="grid gap-4 lg:grid-cols-[1.4fr_1.6fr] lg:items-center">
              {/* Search Input */}
              <SearchBar />

              {/* Price & Sort Filters */}
              <div className="flex justify-end">
                <PropertyFilters />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Property Grid List */}
        <section>
          <Suspense fallback={<Skeleton />}>
            <PropertyList searchParams={searchParams} />
          </Suspense>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GetAllProperties;
