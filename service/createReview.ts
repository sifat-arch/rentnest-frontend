"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { getBackendUrl } from "@/lib/apiConfig";

type ReviewState = {
  success: boolean;
  message: string;
  data?: unknown;
  errors?: Record<string, string[]>;
};

export const createReview = async (
  prevState: ReviewState,
  formData: FormData,
): Promise<ReviewState> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

  const payload = {
    rating: Number(formData.get("rating")),
    comment: formData.get("comment") as string,
    propertyId: formData.get("propertyId") as string,
  };

  try {
    const backendUrl = getBackendUrl();
    const res = await fetch(`${backendUrl}/api/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message,
        errors: result.errors,
      };
    }

    revalidateTag("reviews", { expire: 0 });

    return {
      success: true,
      message: result.message,
      data: result.data,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
};
