"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { z } from "zod";

const updatePropertySchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(10, "Description is required"),
  image: z
    .string()
    .url("Please enter a valid image URL")
    .optional()
    .or(z.literal("")),
  location: z.string().min(3, "Location is required"),
  categoryId: z.string().min(1, "Category is required"),
  price: z.coerce.number().positive("Price must be greater than 0"),
});

type PropertyState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export const updateProperty = async (
  propertyId: string,
  prevState: PropertyState,
  formData: FormData,
): Promise<PropertyState> => {
  const validatedFields = updatePropertySchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    image: formData.get("image"),
    location: formData.get("location"),
    categoryId: formData.get("categoryId"),
    price: formData.get("price"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

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
      method: "PUT",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields.data),
    },
  );

  const result = await res.json();

  console.log("update result", result);

  if (!res.ok) {
    return {
      success: false,
      message: result.message || "Failed to update property",
    };
  }

  revalidateTag("all-properties", { expire: 0 });
  revalidateTag("landlord-properties", { expire: 0 });

  return {
    success: true,
    message: result.message || "Property updated successfully",
  };
};
