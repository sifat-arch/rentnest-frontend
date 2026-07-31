"use server";

import { cookies } from "next/headers";

export const getAllBookings = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
  const params = new URLSearchParams();

  if (query?.search) {
    params.set("search", query.search as string);
  }

  console.log("Booking params:", params.toString());

  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
      data: [],
    };
  }

  console.log("the params ", params.toString());

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/bookings?${params.toString()}`,
      {
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
        cache: "force-cache",
        next: {
          revalidate: 60 * 60 * 24,
          tags: ["all-bookings"],
        },
      },
    );

    const result = await res.json();

    return result;
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to fetch bookings.",
      data: [],
    };
  }
};
