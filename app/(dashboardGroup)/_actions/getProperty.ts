"use server";

import { cookies } from "next/headers";

export const getProperty = async (propertyId: string) => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const headers: Record<string, string> = {};
    if (accessToken) {
      headers["Cookie"] = `accessToken=${accessToken}`;
    }

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/property/${propertyId}`,
      {
        headers,
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return {
        success: false,
        message: `HTTP error: ${res.status}`,
        data: null,
      };
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to get property:", error);
    return {
      success: false,
      message: "Could not fetch property details",
      data: null,
    };
  }
};
