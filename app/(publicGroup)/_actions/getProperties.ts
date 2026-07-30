"use server";

import { cookies } from "next/headers";

export const getProperties = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
  const params = new URLSearchParams();

  if (query && query.search) {
    params.set("search", query.search as string);
  }

  if (query && query.minPrice) {
    params.set("minPrice", query.minPrice as string);
  }

  if (query?.maxPrice) {
    params.set("maxPrice", query.maxPrice as string);
  }

  if (query?.sortBy) {
    params.set("sortBy", query.sortBy as string);
  }

  if (query?.sortOrder) {
    params.set("sortOrder", query.sortOrder as string);
  }

  if (query?.page) {
    params.set("page", query.page as string);
  }

  if (query?.limit) {
    params.set("limit", query.limit as string);
  }

  console.log("the params", params.toString());

  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

  console.log(params.toString(), "params is morning");
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/property?${params.toString()}`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },

      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 24,
        tags: ["all-properties"],
      },
    },
  );

  const result = await res.json();

  return result;
};
