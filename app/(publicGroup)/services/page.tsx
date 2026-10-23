"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/shaired/ScrollReveal";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Check,
  ChevronDown,
  ClipboardList,
  Home,
  Link as LinkIcon,
  Play,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Tenant screening",
    text: "Confidently choose the right home with secure identity, income, and rental-history checks.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Lease management",
    text: "Keep applications, documents, renewals, and signatures organized in one simple place.",
  },
  {
    icon: Home,
    number: "03",
    title: "Property valuation",
    text: "Understand your property’s potential with market-informed pricing guidance from our team.",
  },
  {
    icon: CalendarCheck,
    number: "04",
    title: "Instant booking",
    text: "Schedule viewings and apply for verified homes without the usual back-and-forth.",
  },
  {
    icon: Wrench,
    number: "05",
    title: "Maintenance support",
    text: "Get help when you need it, from reporting an issue to coordinating a trusted repair.",
  },
];

const faqs = [
  {
    question: "Is RentNest available for landlords and property managers?",
    answer:
      "Yes, landlords can list multiple properties, manage tenant inquiries, review applications, and track payments through our dedicated landlord dashboard.",
  },
  {
    question: "How does tenant screening protect my information?",
    answer:
      "All screening information is encrypted using industry-standard protocols. Personal identifiers are never sold or shared beyond the verified application process.",
  },
  {
    question: "Can I use RentNest for a single property?",
    answer:
      "Absolutely. Whether you are leasing a single studio apartment or managing an entire residential building, our tools adapt to your specific needs.",
  },
  {
    question: "What happens after I request a service?",
    answer:
      "We keep the process clear and personal. Share what you need and a dedicated member of our team will follow up within 24 hours with practical guidance for your situation.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f6f2] text-[#1c2925]">
      {/* 1. HERO SECTION */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <ScrollReveal animation="fade-up">
          <p className="eyebrow">How we help</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[.96] tracking-[-.065em] sm:text-7xl">
            Everything you need to make{" "}
            <em className="font-serif font-normal">moving feel simple.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#64716c]">
            From your first search to the day you settle in, RentNest brings the
            tools, people, and confidence to make every step feel easier.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="bg-[#18342d] px-5 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal animation="fade-up">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#e5bd8b]">Our services</p>
                <h2 className="section-title text-white">
                  Support for every
                  <br />
                  <em>kind of move.</em>
                </h2>
              </div>
              <p className="max-w-md text-lg leading-8 text-white/65">
                A thoughtful suite of services for renters, owners, and property
                teams who want a clearer way forward.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/15 md:grid-cols-2 lg:grid-cols-5">
            {services.map(({ icon: Icon, number, title, text }, idx) => (
              <ScrollReveal key={title} animation="fade-up" delay={idx * 100}>
                <article
                  className="bg-[#214238] p-6 transition-all duration-300 hover:bg-[#2a5044] lg:p-7 h-full"
                >
                  <div className="flex items-start justify-between">
                    <Icon className="text-[#e5bd8b] size-6" />
                    <span className="text-xs text-white/40">{number}</span>
                  </div>
                  <h3 className="mt-16 text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <ScrollReveal animation="fade-right">
            <div>
              <p className="eyebrow">The process</p>
              <h2 className="section-title">
                Good things happen <em>step by step.</em>
              </h2>
              <p className="mt-7 max-w-sm leading-7 text-[#64716c]">
                Wherever you are in your journey, our team keeps the next step
                clear and manageable.
              </p>
              <Link
                href="/all-properties"
                className="mt-8 inline-flex items-center rounded-full bg-[#18342d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#254d42]"
              >
                Get started <ArrowRight className="ml-2 inline" size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left">
            <div className="divide-y divide-[#dfe5dc]">
              {[
                [
                  "01",
                  "Tell us what you need",
                  "Choose a service and share a few details about your home, search, or property.",
                ],
                [
                  "02",
                  "Get a clear plan",
                  "A RentNest specialist reviews your request and guides you through the best next step.",
                ],
                [
                  "03",
                  "Feel at home",
                  "We handle the details while you focus on finding, managing, or enjoying your place.",
                ],
              ].map(([num, title, text]) => (
                <div
                  key={num}
                  className="grid gap-5 py-8 sm:grid-cols-[60px_1fr]"
                >
                  <span className="text-sm font-semibold text-[#b77940]">
                    {num}
                  </span>
                  <div>
                    <h3 className="text-2xl tracking-[-.03em] text-[#18342d]">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-[#64716c]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. FOR PROPERTY OWNERS */}
      <section className="bg-[#e9eee7] px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal animation="fade-right">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <p className="eyebrow">For property owners</p>
                <h2 className="section-title">
                  A better way to <em>manage more.</em>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#64716c]">
                Reach better residents, reduce busywork, and keep your portfolio
                moving with tools designed around real life.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="rounded-2xl bg-[#d9a66b] p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <BadgeCheck className="mb-16 size-8 text-[#18342d]" />
                <h3 className="text-xl font-semibold text-[#18342d]">
                  Verified demand
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#18342d]/75">
                  Put your property in front of ready, qualified renters.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="rounded-2xl bg-[#18342d] p-8 text-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <Building2 className="mb-16 size-8 text-[#e5bd8b]" />
                <h3 className="text-xl font-semibold">One clear dashboard</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  Keep listings, leads, and maintenance requests together.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-[#dfe5dc] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <Check className="mb-16 size-8 text-[#b77940]" />
                <h3 className="text-xl font-semibold text-[#18342d]">
                  Less to manage
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#64716c]">
                  Spend less time coordinating and more time growing.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. CLIENT STORIES */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <ScrollReveal animation="fade-right">
            <div>
              <p className="eyebrow">Client stories</p>
              <h2 className="section-title">
                A little help
                <br />
                <em>goes a long way.</em>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left">
            <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12 border border-[#dfe5dc]">
              <div className="flex gap-1 text-[#d9a66b]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} fill="currentColor" size={17} />
                ))}
              </div>
              <blockquote className="mt-8 max-w-2xl text-2xl leading-snug tracking-[-.03em] sm:text-4xl text-[#18342d]">
                “RentNest made every part of our move feel considered. We found
                our home, signed with confidence, and never felt like we were
                figuring it out alone.”
              </blockquote>
              <div className="mt-10 flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-full bg-[#18342d] text-sm font-semibold text-white">
                  AR
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#18342d]">
                    Avery & Rowan
                  </p>
                  <p className="text-xs text-[#64716c]">
                    RentNest residents, Denver
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="mx-auto max-w-4xl px-5 pb-24 lg:px-8 lg:pb-32">
        <ScrollReveal animation="fade-up">
          <div className="text-center">
            <p className="eyebrow">Good to know</p>
            <h2 className="section-title">
              Questions, <em>answered.</em>
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

      {/* 7. CTA BANNER */}
      <section className="px-5 pb-24 lg:px-8">
        <ScrollReveal animation="zoom-in">
          <div className="mx-auto max-w-7xl rounded-3xl bg-[#18342d] px-6 py-14 text-center text-white sm:px-12 sm:py-20 shadow-xl">
            <p className="eyebrow text-[#e5bd8b]">Ready when you are</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-medium tracking-[-.05em] sm:text-6xl">
              Let’s make your next move{" "}
              <em className="font-serif font-normal">feel easy.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/65">
              Explore homes, list your property, or talk to our team about the
              right service for you.
            </p>
            <Link
              href="/all-properties"
              className="mt-8 inline-flex items-center rounded-full bg-[#d9a66b] px-6 py-3.5 text-sm font-semibold text-[#18342d] transition hover:bg-[#e8c18f] cursor-pointer"
            >
              Talk to RentNest <ArrowRight className="ml-2 inline" size={17} />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* 8. FOOTER */}
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
                  href="#top"
                  aria-label="Instagram"
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-[#d9a66b] hover:text-[#d9a66b]"
                >
                  <LinkIcon size={16} />
                </a>
                <a
                  href="#top"
                  aria-label="Facebook"
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-[#d9a66b] hover:text-[#d9a66b]"
                >
                  <Play size={16} />
                </a>
                <a
                  href="#top"
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
                <Link href="/services">Our services</Link>
                <Link href="/about">About RentNest</Link>
              </div>
            </div>
            <div>
              <p className="footer-heading">Company</p>
              <div className="footer-links">
                <Link href="/about">About RentNest</Link>
                <Link href="/about">Careers</Link>
                <Link href="/about">Contact us</Link>
                <Link href="/about">Help center</Link>
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
          <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/40">
            <p>© {new Date().getFullYear()} RentNest, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
