"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const unbanUsre = async (usreId: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/admin/users`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify({
      id: usreId,
      status: "ACTIVE",
    }),

    cache: "no-cache",
  });

  revalidateTag("all-users", { expire: 0 });

  const result = await res.json();

  return result;
};
