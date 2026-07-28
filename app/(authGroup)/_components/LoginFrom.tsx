"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react";

import { loginAction } from "../_actions/authActions";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const [state, action, pending] = useActionState(
    loginAction.bind(null, redirectTo as string),
    false,
  );
  // const router = useRouter()

  console.log("the state is", state);

  useEffect(() => {
    if (!state) return;

    if (!state.success) {
      toast.error("Login failed");
      console.log("sooner should be triggered");
    }
  }, [state]);

  return (
    <form action={action} className="space-y-4">
      <Card className="p-5 space-y-4">
        {/* EMAIL INPUT FIELD */}
        <div className="space-y-1">
          <Input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            className={
              state?.errors?.email
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }
          />
          {/* 3. Zod Inline Error Message (Email) */}
          {state?.errors?.email && (
            <p className="text-xs font-medium text-red-500">
              {state.errors.email[0]}
            </p>
          )}
        </div>

        {/* PASSWORD INPUT FIELD */}
        <div className="space-y-1">
          <Input
            name="password"
            type="password"
            placeholder="Enter Your Password"
            className={
              state?.errors?.password
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }
          />
          {/* 3. Zod Inline Error Message (Password) */}
          {state?.errors?.password && (
            <p className="text-xs font-medium text-red-500">
              {state.errors.password[0]}
            </p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <Button type="submit" disabled={pending} className="w-full">
          {pending ? "Submitting..." : "Login"}
        </Button>
      </Card>
    </form>
  );
};

export default LoginForm;
