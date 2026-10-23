"use server";

import { cookies } from "next/headers";
import { getBackendUrl } from "@/lib/apiConfig";

export const getReview = async (postId: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;

  try {
    const headers: Record<string, string> = {};
    if (accessToken) {
      headers["Cookie"] = `accessToken=${accessToken}`;
    }

    const backendUrl = getBackendUrl();
    const res = await fetch(
      `${backendUrl}/api/reviews?propertyId=${postId}`,
      {
        headers,
        cache: "no-store",
      },
    );

    const result = await res.json();
    return result;
  } catch (err) {
    console.error("Failed to fetch reviews:", err);
    return {
      success: false,
      message: "Failed to load reviews",
      data: [],
    };
  }
};
