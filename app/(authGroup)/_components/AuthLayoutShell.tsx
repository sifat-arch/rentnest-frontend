import Link from "next/link";
import Image from "next/image";
import { Building2, ArrowLeft, ShieldCheck, Star, Sparkles } from "lucide-react";

interface AuthLayoutShellProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  eyebrow?: string;
  heroImage: string;
  quoteText: string;
  quoteAuthor: string;
  quoteRole: string;
  highlights: string[];
}

export default function AuthLayoutShell({
  children,
  title,
  subtitle,
  eyebrow = "RentNest",
  heroImage,
  quoteText,
  quoteAuthor,
  quoteRole,
  highlights,
}: AuthLayoutShellProps) {
  return (
    <div className="min-h-screen w-full bg-[#f7f6f2] text-[#1c2925] flex flex-col lg:flex-row">
      {/* LEFT SHOWCASE PANEL (Desktop: lg+) */}
      <div className="relative hidden lg:flex lg:w-1/2 xl:w-5/12 flex-col justify-between p-12 bg-[#18342d] text-white overflow-hidden">
        {/* Background architectural image with deep green overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="RentNest Luxury Interior"
            fill
            className="object-cover opacity-25 mix-blend-luminosity scale-105 transition-transform duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18342d] via-[#18342d]/85 to-[#18342d]/90" />
        </div>

        {/* Ambient Warm Glow */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#d9a66b]/15 blur-3xl pointer-events-none" />

        {/* Top: Logo & Back Link */}
        <div className="relative z-10 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-90 group"
          >
            <span className="grid size-10 place-items-center rounded-full bg-[#d9a66b] text-[#18342d] shadow-sm transition-transform group-hover:scale-105">
              <Building2 className="size-5" />
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-semibold tracking-[-0.04em] text-white">
                RentNest
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#e5bd8b] font-medium">
                Sanctuary & Living
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-medium text-white/75 hover:text-white transition-colors bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10"
          >
            <ArrowLeft className="size-3.5" />
            Back to Home
          </Link>
        </div>

        {/* Middle: Feature statement & Highlights */}
        <div className="relative z-10 my-auto py-12 max-w-lg space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e5bd8b]/30 bg-[#e5bd8b]/10 px-3 py-1 text-xs font-medium text-[#e5bd8b]">
            <Sparkles className="size-3.5 text-[#d9a66b]" />
            <span>Curated Living Spaces</span>
          </div>

          <h2 className="text-4xl xl:text-5xl font-medium tracking-[-0.05em] leading-[1.05]">
            Find the place where your next chapter{" "}
            <span className="font-serif italic font-normal text-[#e5bd8b]">
              takes shape.
            </span>
          </h2>

          <div className="space-y-3 pt-2">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3 text-sm text-white/80">
                <span className="flex size-5 items-center justify-center rounded-full bg-[#d9a66b]/20 text-[#d9a66b]">
                  <ShieldCheck className="size-3.5" />
                </span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* Testimonial Quote */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md">
            <div className="flex items-center gap-1 text-[#d9a66b] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3.5 fill-[#d9a66b]" />
              ))}
            </div>
            <p className="text-sm italic text-white/90 leading-relaxed">
              &ldquo;{quoteText}&rdquo;
            </p>
            <div className="mt-3 flex items-center justify-between text-xs text-white/60 border-t border-white/10 pt-2.5">
              <span className="font-medium text-white/80">{quoteAuthor}</span>
              <span className="text-[#e5bd8b]">{quoteRole}</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="relative z-10 flex items-center justify-between text-xs text-white/50 border-t border-white/10 pt-6">
          <span>&copy; {new Date().getFullYear()} RentNest Inc. All rights reserved.</span>
          <span className="hover:text-white/80 transition-colors cursor-pointer">
            Privacy &amp; Terms
          </span>
        </div>
      </div>

      {/* RIGHT AUTH FORM SECTION (All screen sizes) */}
      <div className="flex-1 flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16 max-w-xl mx-auto w-full">
        {/* Mobile / Tablet Top Bar */}
        <div className="flex items-center justify-between lg:hidden mb-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-full bg-[#18342d] text-[#d9a66b]">
              <Building2 className="size-4" />
            </span>
            <span className="text-lg font-bold tracking-tight text-[#18342d]">
              RentNest
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-medium text-[#64716c] hover:text-[#18342d] bg-[#eae7df] px-3 py-1.5 rounded-full"
          >
            <ArrowLeft className="size-3.5" />
            Home
          </Link>
        </div>

        {/* Form Container */}
        <div className="my-auto w-full">
          {/* Header Typography */}
          <div className="mb-6 space-y-1.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
              {eyebrow}
            </p>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.04em] text-[#18342d]">
              {title}
            </h1>
            <p className="text-sm text-[#64716c] leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Form Content */}
          <div className="rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-8 shadow-sm">
            {children}
          </div>
        </div>

        {/* Bottom micro-footer on right side */}
        <div className="mt-8 text-center text-xs text-[#8a9691]">
          Protected by Google reCAPTCHA and RentNest security protocol.
        </div>
      </div>
    </div>
  );
}
