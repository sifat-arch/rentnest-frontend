"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { loginAction } from "../_actions/authActions";

// UI Icons for better visual hierarchy (lucide-react is built-in with Shadcn)
import { Mail, Lock, Loader2, AlertCircle } from "lucide-react";

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
    <form action={action} className="space-y-5">
      {/* EMAIL INPUT FIELD */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-xs font-semibold uppercase tracking-wider text-zinc-400"
        >
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            className={`pl-10 transition-all duration-200 bg-zinc-950/60 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 ${
              state?.errors?.email
                ? "border-red-500/80 focus-visible:ring-red-500"
                : ""
            }`}
          />
        </div>
        {/* Zod Inline Error Message (Email) */}
        {state?.errors?.email && (
          <p className="flex items-center gap-1.5 text-xs font-medium text-red-400 mt-1">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {state.errors.email[0]}
          </p>
        )}
      </div>

      {/* PASSWORD INPUT FIELD */}
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-xs font-semibold uppercase tracking-wider text-zinc-400"
        >
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className={`pl-10 transition-all duration-200 bg-zinc-950/60 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 ${
              state?.errors?.password
                ? "border-red-500/80 focus-visible:ring-red-500"
                : ""
            }`}
          />
        </div>
        {/* Zod Inline Error Message (Password) */}
        {state?.errors?.password && (
          <p className="flex items-center gap-1.5 text-xs font-medium text-red-400 mt-1">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {state.errors.password[0]}
          </p>
        )}
      </div>

      {/* SUBMIT BUTTON */}
      <Button
        type="submit"
        disabled={pending}
        className="w-full font-medium transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer"
      >
        {pending ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </span>
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
};

export default LoginForm;