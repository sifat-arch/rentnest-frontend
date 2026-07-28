"use server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});
type LoginState = {
  success?: boolean;
  statusCode?: number;
  message?: string;
  data?: {
    accessToken: string;
    refreshToken: string;
  };
};

export const loginAction = async (
  redirectTo: string,
  prevState: LoginState,
  formData: FormData,
) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const rowPayload = {
    email,
    password,
  };

  const validation = loginSchema.safeParse(rowPayload);

  if (!validation.success) {
    return {
      success: false,
      message: "Validation Error",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const payload = validation.data;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });
    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    });

    const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;

    // if (
    //   redirectTo &&
    //   typeof redirectTo === "string" &&
    //   redirectTo.startsWith("/") &&
    //   !redirectTo.startsWith("//")
    // ) {
    //   redirect(redirectTo);
    // }
    // if (decodedToken.role === "TENANT") {
    //   redirect("/dashboard/tenant");
    // } else if (decodedToken.role === "LANDLORD") {
    //   redirect("/dashboard/landlord");
    // } else if (decodedToken.role === "ADMIN") {
    //   redirect("/dashboard/admin");
    // } else {
    //   redirect("/dashboard");
    // }

    if (decodedToken) {
      redirect("/dashobard");
    }
  }

  return result;
};
