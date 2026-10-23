"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { getBackendUrl } from "@/lib/apiConfig";

export const deleteReview = async (id: string) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const backendUrl = getBackendUrl();
  const res = await fetch(`${backendUrl}/api/reviews/${id}`, {
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
