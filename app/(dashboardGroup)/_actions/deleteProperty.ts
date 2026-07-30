"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const deleteProperty = async (propertyId: string) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/property/${propertyId}`,
    {
      method: "DELETE",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    },
  );

  const result = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: result.message || "Failed to delete property",
    };
  }

  revalidateTag("all-properties", "max");
  revalidateTag("landlord-properties", "max");

  return {
    success: true,
    message: result.message || "Property deleted successfully",
  };
};