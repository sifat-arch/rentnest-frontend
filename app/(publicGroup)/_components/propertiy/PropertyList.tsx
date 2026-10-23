/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProperty } from "@/lib/types";
import { getProperties } from "../../_actions/getProperties";
import { PropertyCard } from "./PropertyCard";
import { getMe } from "@/app/(authGroup)/_actions/getMe";
import { Building2 } from "lucide-react";
import Link from "next/link";

export async function PropertyList({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = await searchParams;
  const user = await getMe();
  const role = user?.data?.role;

  const result = await getProperties({ query });

  if (!result.success || !result.data?.length) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-[#dfe5dc] dark:border-[#223a32] bg-white/70 dark:bg-[#12211c] px-6 py-16 text-center my-6 shadow-sm">
        <div className="grid size-16 place-items-center rounded-full bg-[#f1f3ed] dark:bg-[#182b25] text-[#b77940] dark:text-[#d9a66b] mb-4 border border-transparent dark:border-[#223a32]">
          <Building2 size={32} />
        </div>
        <h3 className="text-xl font-semibold text-[#18342d] dark:text-[#f4f3ee]">
          No properties found
        </h3>
        <p className="mt-2 max-w-md text-sm text-[#64716c] dark:text-[#9eb0a8]">
          We couldn&apos;t find any properties matching your current search or
          filter criteria. Try adjusting your search keywords or resetting your
          price range.
        </p>
        <Link
          href="/all-properties"
          className="mt-6 inline-flex items-center rounded-full bg-[#18342d] dark:bg-[#d9a66b] dark:text-[#18342d] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#254d42] dark:hover:bg-[#e8c18f] shadow-sm"
        >
          Reset and view all
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {result.data.map((post: IProperty | any) => (
          <PropertyCard key={post.id} post={post} role={role as string} />
        ))}
      </div>
    </div>
  );
}
