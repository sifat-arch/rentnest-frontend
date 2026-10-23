"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/shaired/ScrollReveal";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Link as LinkIcon,
  MapPin,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { toast } from "sonner";

const homes = [
  {
    title: "The Cedar House",
    location: "Austin, Texas",
    price: "$2,850",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    beds: 3,
    baths: 2,
    tag: "Featured",
  },
  {
    title: "Skyline Residence",
    location: "Denver, Colorado",
    price: "$3,420",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    beds: 2,
    baths: 2,
    tag: "New listing",
  },
  {
    title: "Casa Sol",
    location: "San Diego, California",
    price: "$4,100",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    beds: 4,
    baths: 3,
    tag: "Popular",
  },
];

const categories = [
  {
    title: "Apartments",
    count: "2,340 places",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Houses",
    count: "1,820 places",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Villas",
    count: "486 places",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Commercial",
    count: "612 places",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
];

const faqs = [
  {
    question: "How does RentNest verify its listings?",
    answer:
      "Every property on RentNest goes through a rigorous multi-point verification check including physical or virtual walkthroughs, proof of ownership documents, and landlord background screening before being listed.",
  },
  {
    question: "What fees are involved in renting a property?",
    answer:
      "RentNest charges zero hidden fees to renters. You only pay your monthly rent and standard security deposit as agreed directly in your digital lease agreement.",
  },
  {
    question: "Can I schedule a virtual viewing?",
    answer:
      "Yes! You can request a live interactive 3D virtual tour or schedule a 1-on-1 guided video call with the property manager directly from the listing page.",
  },
  {
    question: "How do I list my property on RentNest?",
    answer:
      "Landlords can click 'List your property', create an account, upload photos and details, and our verification team will review and approve your listing within 24 hours.",
  },
];

const articles = [
  {
    title: "How to make any rental feel like home",
    desc: "A few thoughtful details can turn four walls into your favorite place.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    tag: "Living well · 5 min read",
  },
  {
    title: "The renter’s guide to a stress-free move",
    desc: "From packing to settling in, a simple approach to your next chapter.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
    tag: "Moving tips · 4 min read",
  },
  {
    title: "Neighborhood notes: East Austin",
    desc: "Coffee, community, and the small things that make a neighborhood.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1000&q=80",
    tag: "City guide · 6 min read",
  },
];

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85",
    tagline: "ARCHITECTURAL RESIDENCE",
    headline: "Discover your next home effortlessly.",
    location: "Gulshan & Banani, Dhaka",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85",
    tagline: "CURATED MODERN LIVING",
    headline: "Thoughtfully crafted spaces for how you live.",
    location: "Dhanmondi, Dhaka",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=85",
    tagline: "TRANQUIL SANCTUARY",
    headline: "Where every evening feels like a deep breath.",
    location: "Uttara Sector 4, Dhaka",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85",
    tagline: "SUNLIT PENTHOUSE",
    headline: "Elevate your view and everyday lifestyle.",
    location: "Bashundhara R/A, Dhaka",
  },
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [homeIndex, setHomeIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [likedHomes, setLikedHomes] = useState<Record<string, boolean>>({});
  const [email, setEmail] = useState("");

  const home = homes[homeIndex];

  // Auto-advance hero carousel every 30 seconds smoothly
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 30000); // 30 Seconds Auto-Rotation
    return () => clearInterval(timer);
  }, [isPaused]);

  const toggleLike = (title: string) => {
    setLikedHomes((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thank you for subscribing to RentNest updates!");
    setEmail("");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f6f2] text-[#1c2925]">
      {/* 1. HERO SECTION WITH SMOOTH SLOW CAROUSEL */}
      <section
        id="top"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative flex min-h-[720px] items-end bg-[#18342d] pt-14 pb-16 text-white lg:min-h-[780px] lg:pb-24 overflow-hidden"
      >
        {/* Animated Background Carousel with Ken Burns Slow Zoom */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {heroSlides.map((slide, idx) => {
            const isActive = idx === heroIndex;
            return (
              <div
                key={slide.image}
                className={`absolute inset-0 bg-cover bg-center transition-all duration-[1600ms] ease-in-out ${
                  isActive
                    ? "opacity-80 scale-105 pointer-events-auto"
                    : "opacity-0 scale-100 pointer-events-none"
                }`}
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  transitionProperty: "opacity, transform",
                  transitionDuration: isActive ? "7000ms, 1600ms" : "1600ms",
                }}
                aria-hidden="true"
              />
            );
          })}

          {/* Deep Forest Gradient Lighting Mask */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#0d221c]/95 via-[#18342d]/75 to-[#18342d]/35"
            aria-hidden="true"
          />

          {/* Ambient Warm Golden Glow */}
          <div
            className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-[#d9a66b]/20 blur-3xl"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_420px] lg:items-end lg:px-8">
          <div>
            {/* Animated Eyebrow Badge */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md transition-all duration-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e5bd8b] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#d9a66b]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e5bd8b]">
                {heroSlides[heroIndex].tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="max-w-3xl text-5xl font-medium leading-[.98] tracking-[-0.065em] sm:text-7xl lg:text-[6.2rem] transition-all duration-700">
              Discover your{" "}
              <em className="font-serif italic font-normal text-[#e5bd8b] drop-shadow-sm">
                next home
              </em>{" "}
              effortlessly.
            </h1>

            <p className="mt-7 max-w-md text-base leading-7 text-white/80">
              A better way to find a place that feels like yours. Explore
              verified homes, neighborhoods, and possibilities.
            </p>

            {/* Call To Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/all-properties"
                className="group inline-flex items-center rounded-full bg-[#d9a66b] px-6 py-3.5 text-sm font-semibold text-[#18342d] shadow-lg transition-all duration-200 hover:bg-[#e8c18f] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Explore homes</span>
                <ArrowRight
                  className="ml-2 inline transition-transform group-hover:translate-x-1"
                  size={17}
                />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>How it works</span>
                <Play
                  className="ml-2 inline size-3.5 transition-transform group-hover:scale-110"
                  fill="currentColor"
                />
              </Link>
            </div>

            {/* Bottom Carousel Controls & Slide Indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/15 pt-6 text-xs text-white/70">
              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setHeroIndex(
                      (heroIndex + heroSlides.length - 1) % heroSlides.length
                    )
                  }
                  className="grid size-8 place-items-center rounded-full border border-white/20 bg-black/25 text-white transition hover:bg-white hover:text-[#18342d] cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setHeroIndex((heroIndex + 1) % heroSlides.length)
                  }
                  className="grid size-8 place-items-center rounded-full border border-white/20 bg-black/25 text-white transition hover:bg-white hover:text-[#18342d] cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Progress Slide Pills */}
              <div className="flex items-center gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroIndex(i)}
                    className="group flex items-center gap-1.5 py-1 cursor-pointer"
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    <span
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === heroIndex
                          ? "w-8 bg-[#d9a66b]"
                          : "w-2 bg-white/30 group-hover:bg-white/50"
                      }`}
                    />
                    {i === heroIndex && (
                      <span className="text-[11px] font-bold text-[#e5bd8b] ml-0.5">
                        0{i + 1}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Location Pill */}
              <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-white/60">
                <MapPin size={13} className="text-[#d9a66b]" />
                <span>{heroSlides[heroIndex].location}</span>
              </div>
            </div>
          </div>

          {/* Interactive Property Preview Card */}
          <div className="rounded-3xl bg-white p-2 text-[#18342d] shadow-2xl transition-transform hover:-translate-y-1 duration-300">
            <div className="relative h-56 overflow-hidden rounded-[1.35rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={home.image}
                alt={home.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur-sm">
                {home.tag}
              </span>
              <div className="absolute bottom-3 right-3 flex gap-1">
                <button
                  type="button"
                  onClick={() =>
                    setHomeIndex(
                      (homeIndex + homes.length - 1) % homes.length
                    )
                  }
                  className="grid size-9 place-items-center rounded-full bg-white/90 text-[#18342d] shadow-md transition hover:bg-white cursor-pointer active:scale-95"
                  aria-label="Previous property"
                >
                  <ChevronLeft size={17} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setHomeIndex((homeIndex + 1) % homes.length)
                  }
                  className="grid size-9 place-items-center rounded-full bg-white/90 text-[#18342d] shadow-md transition hover:bg-white cursor-pointer active:scale-95"
                  aria-label="Next property"
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-[#18342d]">{home.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-[#64716c]">
                    <MapPin size={14} className="text-[#b77940]" />
                    {home.location}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleLike(home.title)}
                  className={`rounded-full p-2 transition ${
                    likedHomes[home.title]
                      ? "bg-rose-50 text-rose-500"
                      : "bg-[#f1f3ed] text-[#18342d] hover:bg-[#e4e7e0]"
                  }`}
                  aria-label="Save property"
                >
                  <Heart
                    size={17}
                    fill={likedHomes[home.title] ? "currentColor" : "none"}
                  />
                </button>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-[#e5e7e1] pt-4 text-sm">
                <span>
                  <strong className="text-lg font-bold text-[#18342d]">
                    {home.price}
                  </strong>{" "}
                  / month
                </span>
                <span className="text-[#64716c]">
                  {home.beds} beds · {home.baths} baths
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE FEATURE HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <ScrollReveal animation="fade-up" delay={0}>
            <div className="rounded-2xl border border-[#dfe5dc] bg-white p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Search className="mb-10 size-8 text-[#b77940]" />
              <h3 className="text-xl font-semibold">Search your way</h3>
              <p className="mt-2 text-sm leading-6 text-[#64716c]">
                Smart filters that help you find the right place, faster.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={150}>
            <div className="rounded-2xl border border-[#dfe5dc] bg-white p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Sparkles className="mb-10 size-8 text-[#b77940]" />
              <h3 className="text-xl font-semibold">Instant booking</h3>
              <p className="mt-2 text-sm leading-6 text-[#64716c]">
                View, apply, and move in without the unnecessary wait.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="rounded-2xl border border-[#dfe5dc] bg-white p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <ShieldCheck className="mb-10 size-8 text-[#b77940]" />
              <h3 className="text-xl font-semibold">Verified listings</h3>
              <p className="mt-2 text-sm leading-6 text-[#64716c]">
                Every home and host is checked for your peace of mind.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. EXPLORE BY TYPE */}
      <section id="properties" className="bg-[#e9eee7] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal animation="fade-right">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Explore by type</p>
                <h2 className="section-title">
                  Find a place that <em>fits.</em>
                </h2>
              </div>
              <Link
                href="/all-properties"
                className="text-sm font-semibold underline underline-offset-4 transition hover:text-[#b77940]"
              >
                View all homes <ArrowRight className="ml-1 inline" size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, idx) => (
              <ScrollReveal key={category.title} animation="zoom-in" delay={idx * 100}>
                <Link
                  href="/all-properties"
                  className="group relative block h-72 overflow-hidden rounded-2xl bg-[#18342d]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102b25]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 text-white">
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{category.count}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY RENTNEST */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8"
      >
        <ScrollReveal animation="fade-right">
          <div>
            <p className="eyebrow">Why RentNest</p>
            <h2 className="section-title">
              More than a roof.
              <br />
              <em>A feeling of home.</em>
            </h2>
            <p className="mt-7 max-w-md leading-7 text-[#64716c]">
              We believe finding a home should feel exciting, not exhausting. Our
              people-first platform brings clarity and confidence to every step.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block rounded-full bg-[#18342d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#23473e]"
            >
              Our story <ArrowRight className="ml-2 inline" size={16} />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-[#d9a66b] p-7 sm:p-10 transition-transform duration-300 hover:scale-[1.02]">
              <Users className="mb-14 size-8 text-[#18342d]" />
              <p className="text-5xl font-medium tracking-[-.06em] text-[#18342d]">
                48k+
              </p>
              <p className="mt-2 text-sm text-[#18342d]/85">happy residents</p>
            </div>
            <div className="mt-10 rounded-3xl bg-[#18342d] p-7 text-white sm:p-10 transition-transform duration-300 hover:scale-[1.02]">
              <MapPin className="mb-14 size-8 text-[#e5bd8b]" />
              <p className="text-5xl font-medium tracking-[-.06em]">24</p>
              <p className="mt-2 text-sm text-white/70">cities and growing</p>
            </div>
            <div className="col-span-2 rounded-3xl bg-[#edf0e9] p-7 sm:p-10">
              <p className="text-sm uppercase tracking-[.18em] text-[#64716c]">
                The RentNest promise
              </p>
              <p className="mt-5 max-w-xl text-2xl leading-tight tracking-[-.03em] sm:text-3xl text-[#18342d]">
                “The right space can change everything. We’re here to help you
                find it.”
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. CURATED FOR YOU */}
      <section className="bg-[#18342d] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-[#e5bd8b]">Curated for you</p>
                <h2 className="section-title text-white">
                  Places worth <em>coming home to.</em>
                </h2>
              </div>
              <Link
                href="/all-properties"
                className="text-sm font-semibold text-[#e5bd8b] underline underline-offset-4 transition hover:text-white"
              >
                See all properties{" "}
                <ArrowRight className="ml-1 inline" size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {homes.map((item, idx) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={idx * 120}>
                <article className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[1.1] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <button
                      type="button"
                      onClick={() => toggleLike(item.title)}
                      className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/90 text-[#18342d] shadow-md transition hover:bg-white"
                      aria-label={`Save ${item.title}`}
                    >
                      <Heart
                        size={17}
                        className={
                          likedHomes[item.title]
                            ? "fill-rose-500 text-rose-500"
                            : ""
                        }
                      />
                    </button>
                  </div>
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/55">
                        {item.location} · {item.beds} beds · {item.baths} baths
                      </p>
                    </div>
                    <p className="font-semibold text-[#e5bd8b]">
                      {item.price}
                      <span className="text-xs font-normal text-white/50">
                        {" "}
                        / mo
                      </span>
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <ScrollReveal animation="fade-right">
            <div>
              <p className="eyebrow">Our services</p>
              <h2 className="section-title">
                Every detail,
                <br />
                <em>handled.</em>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left">
            <div className="divide-y divide-[#dfe5dc]">
              {[
                "Tenant screening",
                "Lease management",
                "Property valuation",
              ].map((service, i) => (
                <Link
                  href="/services"
                  key={service}
                  className="group flex items-center justify-between py-7 transition hover:px-2"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-sm font-semibold text-[#b77940]">
                      0{i + 1}
                    </span>
                    <h3 className="text-2xl tracking-[-.03em] transition group-hover:text-[#b77940]">
                      {service}
                    </h3>
                  </div>
                  <ArrowRight className="text-[#b77940] transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. GOOD TO KNOW */}
      <section className="bg-[#d9a66b] px-5 py-20 lg:px-8">
        <ScrollReveal animation="zoom-in">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <p className="eyebrow text-[#18342d]/65">Good to know</p>
              <h2 className="section-title max-w-xl text-[#18342d]">
                Real estate, <em>made human.</em>
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-4xl font-medium tracking-[-.06em] text-[#18342d]">
                  12k
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#18342d]/65">
                  active homes
                </p>
              </div>
              <div>
                <p className="text-4xl font-medium tracking-[-.06em] text-[#18342d]">
                  96%
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#18342d]/65">
                  satisfaction
                </p>
              </div>
              <div>
                <p className="text-4xl font-medium tracking-[-.06em] text-[#18342d]">
                  4.9
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#18342d]/65">
                  average rating
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <ScrollReveal animation="fade-right">
            <div>
              <p className="eyebrow">Kind words</p>
              <h2 className="section-title">
                Loved by
                <br />
                <em>neighbors.</em>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left">
            <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12 transition-all hover:shadow-md">
              <div className="flex gap-1 text-[#d9a66b]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} fill="currentColor" size={17} />
                ))}
              </div>
              <blockquote className="mt-8 max-w-2xl text-2xl leading-snug tracking-[-.03em] sm:text-4xl">
                “RentNest took the stress out of our move. We found a beautiful
                place in a neighborhood we never would have discovered ourselves.”
              </blockquote>
              <div className="mt-10 flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-full bg-[#18342d] text-sm font-semibold text-white">
                  LM
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#18342d]">
                    Lena & Marcus
                  </p>
                  <p className="text-xs text-[#64716c]">
                    RentNest residents, Austin
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. JOURNAL */}
      <section className="bg-[#edf0e9] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal animation="fade-up">
            <p className="eyebrow">From the journal</p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
              <h2 className="section-title">
                Ideas for <em>living well.</em>
              </h2>
              <Link
                href="/about"
                className="text-sm font-semibold underline underline-offset-4 transition hover:text-[#b77940]"
              >
                Read all stories <ArrowRight className="ml-1 inline" size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((item, idx) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={idx * 150}>
                <article className="group cursor-pointer">
                  <div className="overflow-hidden rounded-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[1.4] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[.15em] text-[#b77940]">
                    {item.tag}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-tight text-[#18342d] group-hover:text-[#b77940] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#64716c]">
                    {item.desc}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDION */}
      <section className="mx-auto max-w-4xl px-5 py-24 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center">
            <p className="eyebrow">Questions, answered</p>
            <h2 className="section-title">
              Curious? <em>We’ve got you.</em>
            </h2>
          </div>
          <div className="mt-12 divide-y divide-[#dfe5dc]">
            {faqs.map((faq, i) => (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between py-6 text-left text-lg font-medium text-[#18342d] cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`size-5 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180 text-[#b77940]" : "text-[#64716c]"
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <p className="max-w-2xl pb-6 pr-10 text-sm leading-6 text-[#64716c] animate-in fade-in-50 duration-200">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 11. NEWSLETTER CTA BANNER */}
      <section id="contact" className="px-5 pb-24 lg:px-8">
        <ScrollReveal animation="zoom-in">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#18342d] px-6 py-14 text-center text-white sm:px-12 sm:py-20 shadow-xl">
            <p className="eyebrow text-[#e5bd8b]">Stay in the know</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-medium tracking-[-.05em] sm:text-6xl">
              The right place is closer than you think.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/65">
              Get fresh listings, neighborhood guides, and good news delivered to
              your inbox.
            </p>
            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#e5bd8b]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#d9a66b] px-6 py-3.5 text-sm font-semibold text-[#18342d] transition hover:bg-[#e8c18f] cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </ScrollReveal>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-[#112720] px-5 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Link
                href="/"
                className="flex items-center gap-2.5 text-xl font-semibold"
              >
                <span className="grid size-9 place-items-center rounded-full bg-[#d9a66b] text-[#18342d]">
                  <Building2 size={20} />
                </span>
                RentNest
              </Link>
              <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
                Making the search for home feel a little more like coming home.
              </p>
              <div className="mt-7 flex gap-2">
                <a
                  href="#contact"
                  aria-label="Instagram"
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-[#d9a66b] hover:text-[#d9a66b]"
                >
                  <LinkIcon size={16} />
                </a>
                <a
                  href="#contact"
                  aria-label="Facebook"
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-[#d9a66b] hover:text-[#d9a66b]"
                >
                  <Play size={16} />
                </a>
                <a
                  href="#contact"
                  aria-label="LinkedIn"
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-[#d9a66b] hover:text-[#d9a66b]"
                >
                  <LinkIcon size={16} />
                </a>
              </div>
            </div>
            <div>
              <p className="footer-heading">Explore</p>
              <div className="footer-links">
                <Link href="/all-properties">Find a home</Link>
                <Link href="/all-properties">List your property</Link>
                <Link href="/about">How it works</Link>
                <Link href="/about">Journal</Link>
              </div>
            </div>
            <div>
              <p className="footer-heading">Company</p>
              <div className="footer-links">
                <Link href="/about">About RentNest</Link>
                <Link href="/services">Our services</Link>
                <Link href="/about">Careers</Link>
                <Link href="/about">Contact us</Link>
              </div>
            </div>
            <div>
              <p className="footer-heading">Visit us</p>
              <div className="footer-links">
                <p>hello@rentnest.com</p>
                <p>+1 800 555 0148</p>
                <p>
                  100 Congress Ave
                  <br />
                  Austin, TX 78701
                </p>
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40">
            <p>© {new Date().getFullYear()} RentNest, Inc. All rights reserved.</p>
            <div className="flex gap-5">
              <Link href="/about" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/about" className="hover:text-white">
                Terms
              </Link>
              <Link href="/about" className="hover:text-white">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
