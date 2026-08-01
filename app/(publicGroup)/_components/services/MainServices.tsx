import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  CalendarCheck,
  CreditCard,
  Search,
  Star,
  Tags,
  type LucideIcon,
} from "lucide-react";

const services: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Building2,
    title: "Property Listing",
    description:
      "Landlords can publish detailed listings with photos, pricing, and amenities in minutes.",
  },
  {
    icon: Search,
    title: "Property Search",
    description:
      "Tenants discover homes by location, budget, and lifestyle with fast, smart filters.",
  },
  {
    icon: CalendarCheck,
    title: "Online Booking",
    description:
      "Reserve a property in a few clicks with a clear, guided booking experience.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Pay rent and deposits through encrypted checkout with transparent pricing.",
  },
  {
    icon: Star,
    title: "Property Reviews",
    description:
      "Share honest feedback after staying so others can rent with greater confidence.",
  },
  {
    icon: Tags,
    title: "Category Browsing",
    description:
      "Explore apartments, studios, houses, and more organized into clear categories.",
  },
];

export function MainServices() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">Platform</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Main Services
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Everything you need to list, discover, book, and manage rentals —
            all in one place.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="rounded-3xl py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6 sm:p-7">
                <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <service.icon className="size-7" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
