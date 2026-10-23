"use client";

import { useActionState, useEffect, useState } from "react";
import { registerAction } from "../_actions/authActions";
import { toast } from "sonner";
import GoogleAuthButton from "./GoogleAuthButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Lucide Icons
import {
  AlertCircle,
  Mail,
  User,
  Lock,
  Loader2,
  Building2,
  Home,
  ArrowRight,
  Check,
} from "lucide-react";

const RegisterForm = () => {
  const [state, action, pending] = useActionState(registerAction, false);
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<"TENANT" | "LANDLORD">("TENANT");

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Account created successfully! Please sign in.");
      router.push("/login");
    } else {
      toast.error(state.message || "Registration failed. Please check your information.");
    }
  }, [state, router]);

  return (
    <div className="space-y-6">
      <form className="space-y-4" action={action}>
        {/* ROLE SELECTION CARDS */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#18342d]/80">
            I am joining as
          </label>
          <input type="hidden" name="role" value={selectedRole} />
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setSelectedRole("TENANT")}
              className={`flex items-start gap-3 rounded-2xl border p-3.5 text-left transition-all duration-200 cursor-pointer ${
                selectedRole === "TENANT"
                  ? "border-[#18342d] bg-[#f0f5f3] shadow-xs ring-1 ring-[#18342d]"
                  : "border-[#e7e5df] bg-[#fdfdfc] hover:bg-[#f7f6f2]"
              }`}
            >
              <div
                className={`size-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  selectedRole === "TENANT"
                    ? "bg-[#18342d] text-[#e5bd8b]"
                    : "bg-[#e7e5df] text-[#64716c]"
                }`}
              >
                <Home className="size-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#18342d]">Tenant</span>
                  {selectedRole === "TENANT" && (
                    <Check className="size-3.5 text-[#18342d]" />
                  )}
                </div>
                <p className="text-[11px] text-[#64716c] leading-tight mt-0.5 truncate">
                  Looking to rent a home
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedRole("LANDLORD")}
              className={`flex items-start gap-3 rounded-2xl border p-3.5 text-left transition-all duration-200 cursor-pointer ${
                selectedRole === "LANDLORD"
                  ? "border-[#18342d] bg-[#f0f5f3] shadow-xs ring-1 ring-[#18342d]"
                  : "border-[#e7e5df] bg-[#fdfdfc] hover:bg-[#f7f6f2]"
              }`}
            >
              <div
                className={`size-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  selectedRole === "LANDLORD"
                    ? "bg-[#18342d] text-[#e5bd8b]"
                    : "bg-[#e7e5df] text-[#64716c]"
                }`}
              >
                <Building2 className="size-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#18342d]">Landlord</span>
                  {selectedRole === "LANDLORD" && (
                    <Check className="size-3.5 text-[#18342d]" />
                  )}
                </div>
                <p className="text-[11px] text-[#64716c] leading-tight mt-0.5 truncate">
                  Looking to rent out
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* NAME INPUT FIELD */}
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-wider text-[#18342d]/80"
          >
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8a9691]" />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="e.g. John Doe"
              required
              className={`w-full rounded-2xl border border-[#e7e5df] bg-[#fdfdfc] pl-10 pr-4 py-2.5 text-sm text-[#1c2925] placeholder:text-[#9aa5a1] transition-all duration-200 focus:border-[#18342d] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#18342d]/10 ${
                state?.errors?.name ? "border-red-400 focus:ring-red-100" : ""
              }`}
            />
          </div>
          {state?.errors?.name && (
            <p className="flex items-center gap-1.5 text-xs font-medium text-red-600 mt-1">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              {state.errors.name[0]}
            </p>
          )}
        </div>

        {/* EMAIL INPUT FIELD */}
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-wider text-[#18342d]/80"
          >
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8a9691]" />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              required
              className={`w-full rounded-2xl border border-[#e7e5df] bg-[#fdfdfc] pl-10 pr-4 py-2.5 text-sm text-[#1c2925] placeholder:text-[#9aa5a1] transition-all duration-200 focus:border-[#18342d] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#18342d]/10 ${
                state?.errors?.email ? "border-red-400 focus:ring-red-100" : ""
              }`}
            />
          </div>
          {state?.errors?.email && (
            <p className="flex items-center gap-1.5 text-xs font-medium text-red-600 mt-1">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              {state.errors.email[0]}
            </p>
          )}
        </div>

        {/* PASSWORD INPUT FIELD */}
        <div className="space-y-1.5">
          <label
            htmlFor="password"
            className="text-xs font-semibold uppercase tracking-wider text-[#18342d]/80"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8a9691]" />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="At least 6 characters"
              required
              className={`w-full rounded-2xl border border-[#e7e5df] bg-[#fdfdfc] pl-10 pr-4 py-2.5 text-sm text-[#1c2925] placeholder:text-[#9aa5a1] transition-all duration-200 focus:border-[#18342d] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#18342d]/10 ${
                state?.errors?.password
                  ? "border-red-400 focus:ring-red-100"
                  : ""
              }`}
            />
          </div>
          {state?.errors?.password && (
            <p className="flex items-center gap-1.5 text-xs font-medium text-red-600 mt-1">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              {state.errors.password[0]}
            </p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={pending}
          className="w-full flex items-center justify-center gap-2 rounded-full bg-[#18342d] px-6 py-3.5 text-sm font-semibold text-[#e5bd8b] shadow-sm transition-all duration-200 hover:bg-[#122822] hover:shadow-md disabled:opacity-70 cursor-pointer active:scale-[0.99] mt-3"
        >
          {pending ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin text-[#e5bd8b]" />
              Creating account...
            </span>
          ) : (
            <>
              <span>Create Account</span>
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      {/* OR DIVIDER */}
      <div className="relative flex items-center justify-center">
        <div className="w-full border-t border-[#e7e5df]" />
        <span className="absolute bg-white px-3 text-[11px] font-medium uppercase tracking-wider text-[#8a9691]">
          Or continue with
        </span>
      </div>

      {/* GOOGLE SIGN IN */}
      <div className="flex justify-center">
        <GoogleAuthButton />
      </div>

      {/* LOGIN LINK */}
      <div className="pt-2 text-center text-sm text-[#64716c] border-t border-[#f0eee6]">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-[#18342d] hover:text-[#b77940] underline underline-offset-4 transition-colors"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
