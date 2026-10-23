"use server";

import { cookies } from "next/headers";
import { getBackendUrl } from "@/lib/apiConfig";

export const getMe = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

  const backendUrl = getBackendUrl();
  const res = await fetch(`${backendUrl}/api/auth/me`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },

    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24, // 1day
      tags: ["my-profile"],
    },
  });

  const result = await res.json();

  return result;
};
