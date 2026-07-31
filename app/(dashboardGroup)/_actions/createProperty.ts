/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

type PropertyState = {
  success: boolean;
  statusCode?: number;
  message: string;
  data?: Record<string, any>;
  errors?: Record<string, string[]>;
};

export const createProperty = async (
  prevState: PropertyState,
  formData: FormData,
): Promise<PropertyState> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

  const payload = {
    title: formData.get("title"),
    description: formData.get("description"),
    image: formData.get("image"),
    location: formData.get("location"),
    price: Number(formData.get("price")),
    categoryId: formData.get("categoryId"),
  };

  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/property`, {
      method: "POST",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    revalidateTag("landlord-properties", { expire: 0 });
    const result = await res.json();
    return result;
  } catch {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
};
