/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProperty } from "@/lib/types";
import { getProperties } from "../../_actions/getProperties";
import { PropertyCard } from "./PropertyCard";
import { getMe } from "@/app/(authGroup)/_actions/getMe";

export async function PropertyList({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = await searchParams;
  const user = await getMe();

  const role = user.data.role;

  const result = await getProperties({ query });

  if (!result.success || !result.data?.length) {
    return (
      <p className="py-12 text-center text-muted-foreground">No news found.</p>
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
