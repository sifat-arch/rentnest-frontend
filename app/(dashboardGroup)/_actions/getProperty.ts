"use server";

import { cookies } from "next/headers";

export const getProperty = async (propertyId: string) => {
  const cookieStore = await cookies();
  console.log("the server property id", propertyId);

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/property/${propertyId}`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "no-store",
    },
  );

  return await res.json();
};
