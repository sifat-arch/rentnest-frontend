"use server";

import { cookies } from "next/headers";

export const getLandlordProperties = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
      data: [],
    };
  }

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/property/landlord-property`,
      {
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
        cache: "force-cache",
        next: {
          revalidate: 60 * 60 * 24,
          tags: ["landlord-properties"],
        },
      },
    );

    const result = await res.json();

    return result;
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to fetch landlord properties.",
      data: [],
    };
  }
};
