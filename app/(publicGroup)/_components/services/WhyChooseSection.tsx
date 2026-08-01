import { Card, CardContent } from "@/components/ui/card";
import {
  BadgeCheck,
  ShieldCheck,
  Users,
  Zap,
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
      "Every listing is reviewed so tenants browse real homes with accurate information.",
  },
  {
    icon: Users,
    title: "Trusted Community",
    description:
      "Connect with verified landlords and tenants who value transparency and respect.",
  },
  {
    icon: Zap,
    title: "Fast Booking Process",
    description:
      "Go from search to confirmed booking in minutes with a streamlined experience.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    description:
      "Protected payments and clear pricing keep every rental deal safe and fair.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">Why Us</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose RentNest
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            A rental platform built for trust, speed, and peace of mind — for
            both sides of every booking.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group rounded-3xl py-0 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="size-5" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
