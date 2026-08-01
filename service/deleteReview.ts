"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const deleteReview = async (id: string) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/reviews/${id}`, {
    method: "DELETE",
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });

  const result = await res.json();

  if (res.ok) {
    revalidateTag("reviews", { expire: 0 });
  }

  return result;
};
