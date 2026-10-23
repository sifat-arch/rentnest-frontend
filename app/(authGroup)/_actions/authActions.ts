/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fromJSONSchema, z } from "zod";
import { getBackendUrl } from "@/lib/apiConfig";

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

type PrevStateRegister = {
  success: boolean;
  statusCode: number;
  message: string;
  data: any;
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
  const backendUrl = getBackendUrl();

  const res = await fetch(`${backendUrl}/api/auth/login`, {
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

    if (
      redirectTo &&
      typeof redirectTo === "string" &&
      redirectTo.startsWith("/") &&
      !redirectTo.startsWith("//")
    ) {
      redirect(redirectTo);
    }

    if (decodedToken?.role === "LANDLORD") {
      redirect("/landlord-dashboard");
    } else if (decodedToken?.role === "ADMIN") {
      redirect("/admin-dashboard");
    } else if (decodedToken?.role === "TENANT") {
      redirect("/tenant-dashboard");
    }

    redirect("/");
  }

  return result;
};

export const googleLoginAction = async (
  idToken: string,
  redirectTo?: string,
) => {
  try {
    const backendUrl = getBackendUrl();
    const res = await fetch(`${backendUrl}/api/auth/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    });

    const result = await res.json();

    if (!result.success) {
      return {
        success: false,
        message: result.message || "Google authentication failed",
      };
    }

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
    const role = decodedToken?.role;

    let target = "/";
    if (redirectTo && redirectTo.startsWith("/") && !redirectTo.startsWith("//")) {
      target = redirectTo;
    } else if (role === "LANDLORD") {
      target = "/landlord-dashboard";
    } else if (role === "ADMIN") {
      target = "/admin-dashboard";
    } else if (role === "TENANT") {
      target = "/tenant-dashboard";
    }

    return {
      success: true,
      message: "Logged in with Google successfully!",
      redirectTo: target,
    };
  } catch (error) {
    console.error("Google login action error:", error);
    return {
      success: false,
      message: "Could not connect to authentication server",
    };
  }
};

const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["TENANT", "LANDLORD"], {
    error: "Role is required",
  }),
});

export const registerAction = async (
  prevState: PrevStateRegister,
  formData: FormData,
) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");

  const rowPayload = {
    name,
    email,
    password,
    role,
  };

  const validation = registerSchema.safeParse(rowPayload);

  if (!validation.success) {
    return {
      success: false,
      message: "Validation Error",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const payload = validation.data;
  const backendUrl = getBackendUrl();

  const res = await fetch(`${backendUrl}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  if (result.success) {
    redirect("/login");
  }

  return result;
};
