"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/shaired/ScrollReveal";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Link as LinkIcon,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Trust, built in",
    text: "Every home and host is carefully verified so you can search with confidence.",
  },
  {
    icon: Sparkles,
    title: "Thoughtfully simple",
    text: "From first search to signed lease, we remove the friction from renting.",
  },
  {
    icon: Users,
    title: "People first",
    text: "Real support, useful guidance, and a team that understands moving is personal.",
  },
];

const team = [
  {
    name: "Amelia Hart",
    role: "Co-founder & CEO",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Jon Bell",
    role: "Head of Community",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Maya Chen",
    role: "Design Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85",
  },
];

const faqs = [
  {
    question: "How does RentNest verify its listings?",
    answer:
      "We keep things clear and simple. Our team verifies every listing, supports you through the process, and is always here when you need a hand.",
  },
  {
    question: "Where is RentNest available?",
    answer:
      "RentNest is actively operating in 24 major metropolitan areas across the country, with new neighborhoods and cities added each month.",
  },
  {
    question: "How can I partner with RentNest?",
    answer:
      "Whether you are an independent homeowner or a multi-property manager, you can reach out through our landlord dashboard to explore partnership options.",
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f6f2] text-[#1c2925]">
      {/* 1. HERO SECTION */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <ScrollReveal animation="fade-up">
          <p className="eyebrow">Our story</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[.96] tracking-[-.065em] sm:text-7xl">
            Making the search for home feel{" "}
            <em className="font-serif font-normal">more human.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#64716c]">
            RentNest exists to make renting clearer, kinder, and more inspiring.
            We connect people with places where their next chapter can take
            shape.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE BEGINNING */}
      <section className="bg-[#18342d] px-5 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <ScrollReveal animation="fade-right">
            <div>
              <p className="eyebrow text-[#e5bd8b]">The beginning</p>
              <h2 className="section-title text-white">
                A better way to
                <br />
                <em>feel at home.</em>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left">
            <div className="text-lg leading-8 text-white/70">
              <p>
                RentNest started with a simple frustration: finding a home had
                become too transactional, too opaque, and too difficult to
                navigate.
              </p>
              <p className="mt-6">
                So we built a place that puts people back at the center. Today,
                our platform helps thousands of renters discover verified spaces
                and neighborhoods they are proud to call home.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. WHAT GUIDES US */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <ScrollReveal animation="fade-up">
          <div className="max-w-2xl">
            <p className="eyebrow">What guides us</p>
            <h2 className="section-title">
              The details that make
              <br />
              <em>the difference.</em>
            </h2>
          </div>
        </ScrollReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }, idx) => (
            <ScrollReveal key={title} animation="fade-up" delay={idx * 150}>
              <article className="rounded-2xl border border-[#dfe5dc] bg-white p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <Icon className="mb-14 size-8 text-[#b77940]" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#64716c]">{text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 4. RENTNEST IN NUMBERS */}
      <section className="bg-[#e9eee7] px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal animation="fade-right">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <p className="eyebrow">RentNest in numbers</p>
                <h2 className="section-title">
                  Growing with our <em>community.</em>
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-[#64716c]">
                A growing network of people, places, and possibilities.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="zoom-in" delay={150}>
            <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-[#cfd9cf] sm:grid-cols-3 shadow-sm">
              <div className="bg-[#d9a66b] p-8 sm:p-10 transition-transform hover:scale-[1.01]">
                <p className="text-5xl font-medium tracking-[-.06em] text-[#18342d]">
                  48k+
                </p>
                <p className="mt-3 text-sm text-[#18342d]/85">happy residents</p>
              </div>
              <div className="bg-[#18342d] p-8 text-white sm:p-10 transition-transform hover:scale-[1.01]">
                <p className="text-5xl font-medium tracking-[-.06em]">24</p>
                <p className="mt-3 text-sm text-white/65">cities and growing</p>
              </div>
              <div className="bg-white p-8 sm:p-10 transition-transform hover:scale-[1.01]">
                <p className="text-5xl font-medium tracking-[-.06em] text-[#18342d]">
                  4.9
                </p>
                <p className="mt-3 text-sm text-[#64716c]">
                  average resident rating
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. MEET THE TEAM */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <ScrollReveal animation="fade-up">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="eyebrow">The people behind the place</p>
              <h2 className="section-title">
                Meet the <em>team.</em>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#64716c]">
              A small, thoughtful team working to make a big experience feel
              effortless.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {team.map((person, idx) => (
            <ScrollReveal key={person.name} animation="fade-up" delay={idx * 150}>
              <article className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.image}
                    alt={person.name}
                    className="aspect-[.9] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#18342d]">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm text-[#64716c]">{person.role}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="mx-auto max-w-4xl px-5 pb-24 lg:px-8 lg:pb-32">
        <ScrollReveal animation="fade-up">
          <div className="text-center">
            <p className="eyebrow">Good to know</p>
            <h2 className="section-title">
              A few things you may <em>wonder.</em>
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
            <p className="eyebrow text-[#e5bd8b]">Your next chapter</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-medium tracking-[-.05em] sm:text-6xl">
              Find somewhere that feels like{" "}
              <em className="font-serif font-normal">yours.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/65">
              Explore verified homes and discover the places that make everyday
              life better.
            </p>
            <Link
              href="/all-properties"
              className="mt-8 inline-flex items-center rounded-full bg-[#d9a66b] px-6 py-3.5 text-sm font-semibold text-[#18342d] transition hover:bg-[#e8c18f] cursor-pointer"
            >
              Explore homes <ArrowRight className="ml-2 inline" size={17} />
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
                <Link href="/all-properties">List your property</Link>
                <Link href="/about">About RentNest</Link>
              </div>
            </div>
            <div>
              <p className="footer-heading">Company</p>
              <div className="footer-links">
                <Link href="/services">Our services</Link>
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
