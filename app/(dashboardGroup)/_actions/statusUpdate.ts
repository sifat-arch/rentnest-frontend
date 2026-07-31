"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const statusUpdate = async (
  bookingId: string,
  status: "APPROVED" | "REJECTED",
) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/bookings/${bookingId}/status`,
    {
      method: "PATCH",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    },
  );

  const result = await res.json();

  console.log("booking status adiming ", result);

  if (!res.ok) {
    return {
      success: false,
      message: result.message || "Failed to update booking",
    };
  }

  revalidateTag("landlord-bookings", { expire: 0 });
  revalidateTag("all-bookings", { expire: 0 });

  return {
    success: true,
    message: result.message,
  };
};
