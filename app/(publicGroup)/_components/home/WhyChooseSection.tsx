import {
  BadgeCheck,
  CreditCard,
  ShieldCheck,
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
    title: "Verified Properties",
    description:
      "Every listing is reviewed so you browse real homes with accurate details and photos.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Booking",
    description:
      "Reserve with confidence through a protected booking flow designed for peace of mind.",
  },
  {
    icon: Users,
    title: "Trusted Landlords",
    description:
      "Connect with verified owners who care about transparent, reliable rental experiences.",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description:
      "Pay rent and deposits securely with clear pricing and simple digital checkout.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">Why RentNest</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose RentNest
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Everything you need for a smooth, trustworthy rental journey — from
            discovery to move-in.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
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
