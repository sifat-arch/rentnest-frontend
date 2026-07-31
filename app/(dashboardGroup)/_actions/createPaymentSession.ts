"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createPaymentSession = async (bookingId: string) => {
  const cookieStore = await cookies();
  console.log("serve bookingid", bookingId);

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/payments/checkout/${bookingId}`,
    {
      method: "POST",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    },
  );

  const result = await res.json();

  return await result;
};
