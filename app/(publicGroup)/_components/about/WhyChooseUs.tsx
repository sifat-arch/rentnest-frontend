import {
  BadgeCheck,
  CreditCard,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: BadgeCheck,
    title: "Verified Listings",
    description:
      "Every property is reviewed so you browse real homes with accurate photos and details.",
  },
  {
    icon: Users,
    title: "Trusted Landlords",
    description:
      "Connect with verified owners committed to transparent, reliable rental experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Booking",
    description:
      "Reserve with confidence through a protected booking flow built for peace of mind.",
  },
  {
    icon: Search,
    title: "Fast Search",
    description:
      "Find homes by location, budget, and lifestyle in seconds with smart filters.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description:
      "See clear rent and fees upfront — no hidden charges or last-minute surprises.",
  },
  {
    icon: Sparkles,
    title: "Easy Experience",
    description:
      "A clean, modern interface that makes searching, booking, and managing rentals simple.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">Advantages</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose RentNest
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Built for renters and landlords who value trust, clarity, and a
            smoother path to the perfect home.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7"
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="size-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
