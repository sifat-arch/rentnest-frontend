"use server";

import { cookies } from "next/headers";

export const getProperties = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
  const params = new URLSearchParams();

  if (query?.search) {
    params.set("search", query.search as string);
  }

  if (query?.minPrice) {
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

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;

  const headers: Record<string, string> = {};
  if (accessToken) {
    headers["Cookie"] = `accessToken=${accessToken}`;
  }

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/property?${params.toString()}`,
      {
        headers,
        cache: "force-cache",
        next: {
          revalidate: 60,
          tags: ["all-properties"],
        },
      },
    );

    const result = await res.json();
    return result;
  } catch (err) {
    console.error("Error fetching properties:", err);
    return {
      success: false,
      message: "Failed to fetch properties",
      data: [],
    };
  }
};
