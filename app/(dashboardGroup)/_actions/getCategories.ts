"use server";

import { cookies } from "next/headers";

export const getCategories = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
      data: [],
    };
  }

  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`, {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 24,
        tags: ["categories"],
      },
    });

    return await res.json();

    console.log("categories", res.json());
  } catch {
    return {
      success: false,
      message: "Failed to load categories",
      data: [],
    };
  }
};
