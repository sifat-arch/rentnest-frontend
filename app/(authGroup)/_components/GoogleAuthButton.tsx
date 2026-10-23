"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { googleLoginAction } from "../_actions/authActions";
import { Loader2 } from "lucide-react";

declare global {
  interface Window {
    google?: any;
  }
}

interface GoogleAuthButtonProps {
  redirectTo?: string;
  text?: string;
}

export default function GoogleAuthButton({
  redirectTo = "",
  text = "Continue with Google",
}: GoogleAuthButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const clientId =
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
    "142367284758-vc0apmrla3i270fn2o13enoov9q1q7ch.apps.googleusercontent.com";

  useEffect(() => {
    // Dynamically load Google Identity Services Script
    const scriptId = "google-jssdk";
    if (document.getElementById(scriptId)) {
      setIsScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!isScriptLoaded || !window.google || !buttonRef.current) return;

    try {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
        auto_select: false,
        cancel_on_tap_outside: true,
      });

      // Render standard Google button inside container
      window.google.accounts.id.renderButton(buttonRef.current, {
        theme: "outline",
        size: "large",
        shape: "pill",
        text: "continue_with",
        width: 320,
        logo_alignment: "left",
      });
    } catch (err) {
      console.error("Google Auth Init Error:", err);
    }
  }, [isScriptLoaded, clientId]);

  const handleCredentialResponse = (response: any) => {
    if (!response?.credential) {
      toast.error("Google login failed to retrieve credentials");
      return;
    }

    startTransition(async () => {
      const result = await googleLoginAction(response.credential, redirectTo);

      if (result.success) {
        toast.success(result.message || "Logged in with Google successfully!");
        router.push(result.redirectTo || "/");
      } else {
        toast.error(result.message || "Google authentication failed");
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-2">
      {isPending && (
        <div className="flex items-center gap-2 text-xs font-semibold text-[#18342d] py-1 animate-pulse">
          <Loader2 className="size-4 animate-spin text-[#d9a66b]" />
          Verifying with Google...
        </div>
      )}

      {/* Fallback skeleton while script initializes */}
      {!isScriptLoaded && (
        <div className="h-10 w-full max-w-[320px] rounded-full border border-[#e7e5df] bg-[#f7f6f2] flex items-center justify-center gap-2 text-xs text-[#8a9691] animate-pulse">
          <div className="size-4 rounded-full bg-[#e7e5df]" />
          <span>Loading Google Sign-In...</span>
        </div>
      )}

      {/* Google Identity Services Button Container */}
      <div
        ref={buttonRef}
        className={`flex justify-center w-full min-h-[40px] transition-opacity ${
          isPending ? "opacity-50 pointer-events-none" : "opacity-100"
        } ${!isScriptLoaded ? "hidden" : ""}`}
      />
    </div>
  );
}
