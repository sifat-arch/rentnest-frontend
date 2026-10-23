"use client";
import { useActionState, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { loginAction } from "../_actions/authActions";
import Link from "next/link";
import GoogleAuthButton from "./GoogleAuthButton";

// UI Icons for better visual hierarchy
import {
  Mail,
  Lock,
  Loader2,
  AlertCircle,
  ShieldCheck,
  User,
  Building2,
  ArrowRight,
} from "lucide-react";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "";
  const [state, action, pending] = useActionState(
    loginAction.bind(null, redirectTo as string),
    false,
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleQuickFill = (
    userEmail: string,
    userPass: string,
    roleName: string,
  ) => {
    setEmail(userEmail);
    setPassword(userPass);
    toast.success(`${roleName} credentials filled!`);
  };

  useEffect(() => {
    if (!state) return;

    if (!state.success) {
      toast.error(state.message || "Login failed");
    }
  }, [state]);

  return (
    <div className="space-y-6">
      <form action={action} className="space-y-5">
        {/* QUICK DEMO CREDENTIAL BUTTONS */}
        <div className="space-y-2.5">
          <div className="relative flex items-center justify-center">
            <div className="w-full border-t border-[#e7e5df]" />
            <span className="absolute bg-white px-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8a9691]">
              Quick Demo Fill
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 pt-1">
            <button
              type="button"
              onClick={() =>
                handleQuickFill("admin@gmail.com", "12345678", "Admin")
              }
              className="group flex flex-col items-center justify-center rounded-2xl border border-[#e7e5df] bg-[#f7f6f2] p-2.5 text-center transition-all duration-200 hover:border-[#b77940] hover:bg-[#fff7ed] hover:shadow-sm cursor-pointer active:scale-95"
            >
              <div className="size-7 rounded-full bg-[#b77940]/10 flex items-center justify-center mb-1 text-[#b77940] group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span className="text-xs font-semibold text-[#18342d]">Admin</span>
              <span className="text-[10px] text-[#64716c] truncate max-w-full">
                admin@...
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                handleQuickFill("sifat@gmail.com", "12345678", "Tenant")
              }
              className="group flex flex-col items-center justify-center rounded-2xl border border-[#e7e5df] bg-[#f7f6f2] p-2.5 text-center transition-all duration-200 hover:border-[#18342d] hover:bg-[#eef5f2] hover:shadow-sm cursor-pointer active:scale-95"
            >
              <div className="size-7 rounded-full bg-[#18342d]/10 flex items-center justify-center mb-1 text-[#18342d] group-hover:scale-110 transition-transform">
                <User className="h-4 w-4" />
              </div>
              <span className="text-xs font-semibold text-[#18342d]">Tenant</span>
              <span className="text-[10px] text-[#64716c] truncate max-w-full">
                sifat@...
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                handleQuickFill("jaman@gmail.com", "12345678", "Landlord")
              }
              className="group flex flex-col items-center justify-center rounded-2xl border border-[#e7e5df] bg-[#f7f6f2] p-2.5 text-center transition-all duration-200 hover:border-[#2d6a4f] hover:bg-[#edf7f1] hover:shadow-sm cursor-pointer active:scale-95"
            >
              <div className="size-7 rounded-full bg-[#2d6a4f]/10 flex items-center justify-center mb-1 text-[#2d6a4f] group-hover:scale-110 transition-transform">
                <Building2 className="h-4 w-4" />
              </div>
              <span className="text-xs font-semibold text-[#18342d]">Landlord</span>
              <span className="text-[10px] text-[#64716c] truncate max-w-full">
                jaman@...
              </span>
            </button>
          </div>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              className={`w-full rounded-2xl border border-[#e7e5df] bg-[#fdfdfc] pl-10 pr-4 py-2.5 text-sm text-[#1c2925] placeholder:text-[#9aa5a1] transition-all duration-200 focus:border-[#18342d] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#18342d]/10 ${
                state?.errors?.email
                  ? "border-red-400 focus:ring-red-100"
                  : ""
              }`}
            />
          </div>
          {/* Zod Inline Error Message (Email) */}
          {state?.errors?.email && (
            <p className="flex items-center gap-1.5 text-xs font-medium text-red-600 mt-1">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              {state.errors.email[0]}
            </p>
          )}
        </div>

        {/* PASSWORD INPUT FIELD */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-xs font-semibold uppercase tracking-wider text-[#18342d]/80"
            >
              Password
            </label>
          </div>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8a9691]" />
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className={`w-full rounded-2xl border border-[#e7e5df] bg-[#fdfdfc] pl-10 pr-4 py-2.5 text-sm text-[#1c2925] placeholder:text-[#9aa5a1] transition-all duration-200 focus:border-[#18342d] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#18342d]/10 ${
                state?.errors?.password
                  ? "border-red-400 focus:ring-red-100"
                  : ""
              }`}
            />
          </div>
          {/* Zod Inline Error Message (Password) */}
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
          className="w-full flex items-center justify-center gap-2 rounded-full bg-[#18342d] px-6 py-3.5 text-sm font-semibold text-[#e5bd8b] shadow-sm transition-all duration-200 hover:bg-[#122822] hover:shadow-md disabled:opacity-70 cursor-pointer active:scale-[0.99] mt-2"
        >
          {pending ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin text-[#e5bd8b]" />
              Signing in...
            </span>
          ) : (
            <>
              <span>Sign in with Email</span>
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

      {/* GOOGLE ONE TAP / BUTTON */}
      <div className="flex justify-center">
        <GoogleAuthButton redirectTo={redirectTo} />
      </div>

      {/* REGISTER LINK */}
      <div className="pt-2 text-center text-sm text-[#64716c] border-t border-[#f0eee6]">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-[#18342d] hover:text-[#b77940] underline underline-offset-4 transition-colors"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
