"use server";

import { cookies } from "next/headers";

export const getReview = async (postId: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;

  try {
    const headers: Record<string, string> = {};
    if (accessToken) {
      headers["Cookie"] = `accessToken=${accessToken}`;
    }

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/reviews?propertyId=${postId}`,
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
