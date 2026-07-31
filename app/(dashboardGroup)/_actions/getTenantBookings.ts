"use server";

import { cookies } from "next/headers";

export const getTenantBookings = async () => {
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
      `${process.env.BACKEND_API_URL}/api/bookings/tenant`,
      {
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
        cache: "no-store",
      },
    );

    const result = await res.json();

    return result;
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to fetch tenant bookings.",
      data: [],
    };
  }
};
