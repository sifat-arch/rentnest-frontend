"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { registerAction } from "../_actions/authActions";
import { toast } from "sonner";

// Lucide Icons
import {
  AlertCircle,
  Mail,
  User,
  Lock,
  Image as ImageIcon,
  Loader2,
  ChevronDown,
  UserCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [state, action, pending] = useActionState(registerAction, false);
  const router = useRouter();

  useEffect(() => {
    if (!state) return;

    setTimeout(() => {
      if (state.success) {
        toast.success(state.message || "Registered successfully!");
      } else {
        toast.error(state.message || "Registration failed");
      }
    }, 1000);
    router.push("/login");
  }, [state, router]);

  return (
    <form className="space-y-4" action={action}>
      {/* NAME INPUT FIELD */}
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="text-xs font-semibold uppercase tracking-wider text-zinc-400"
        >
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Your Name"
            className={`pl-10 transition-all duration-200 bg-zinc-950/60 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 ${
              state?.errors?.name
                ? "border-red-500/80 focus-visible:ring-red-500"
                : ""
            }`}
          />
        </div>
        {state?.errors?.name && (
          <p className="flex items-center gap-1.5 text-xs font-medium text-red-400 mt-1">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {state.errors.name[0]}
          </p>
        )}
      </div>

      {/* EMAIL INPUT FIELD */}
      <div className="space-y-1.5">
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
        {state?.errors?.email && (
          <p className="flex items-center gap-1.5 text-xs font-medium text-red-400 mt-1">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {state.errors.email[0]}
          </p>
        )}
      </div>

      {/* PASSWORD INPUT FIELD */}
      <div className="space-y-1.5">
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
        {state?.errors?.password && (
          <p className="flex items-center gap-1.5 text-xs font-medium text-red-400 mt-1">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {state.errors.password[0]}
          </p>
        )}
      </div>

      {/* ROLE SELECTION FIELD */}
      <div className="space-y-1.5">
        <label
          htmlFor="role"
          className="text-xs font-semibold uppercase tracking-wider text-zinc-400"
        >
          Select Role
        </label>
        <div className="relative">
          <UserCheck className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500 pointer-events-none z-10" />
          <select
            id="role"
            name="role"
            defaultValue=""
            required
            className={`w-full appearance-none pl-10 pr-8 py-2 text-sm rounded-md transition-all duration-200 bg-zinc-950/60 border border-zinc-800 text-zinc-100 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 cursor-pointer ${
              state?.errors?.role
                ? "border-red-500/80 focus-visible:ring-red-500"
                : ""
            }`}
          >
            <option value="" disabled className="bg-zinc-900 text-zinc-500">
              Select your role
            </option>
            <option value="TENANT" className="bg-zinc-900 text-zinc-100">
              Tenant
            </option>
            <option value="LANDLORD" className="bg-zinc-900 text-zinc-100">
              Landlord
            </option>
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500 pointer-events-none" />
        </div>

        {/* Zod Inline Error Message (Role) */}
        {state?.errors?.role && (
          <p className="flex items-center gap-1.5 text-xs font-medium text-red-400 mt-1">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {state.errors.role[0]}
          </p>
        )}
      </div>

      {/* SUBMIT BUTTON */}
      <Button
        type="submit"
        disabled={pending}
        className="w-full font-medium transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer mt-2"
      >
        {pending ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Registering...
          </span>
        ) : (
          "Register"
        )}
      </Button>
    </form>
  );
};

export default RegisterForm;
