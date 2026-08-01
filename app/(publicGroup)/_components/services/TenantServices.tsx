import { Card, CardContent } from "@/components/ui/card";
import {
  BadgeCheck,
  CalendarCheck,
  CreditCard,
  Eye,
  History,
  Star,
  type LucideIcon,
} from "lucide-react";

const tenantServices: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: BadgeCheck,
    title: "Search Verified Properties",
    description:
      "Browse homes that have been reviewed for accuracy, so you can trust what you see.",
  },
  {
    icon: Eye,
    title: "View Property Details",
    description:
      "Explore photos, amenities, location, and pricing before you decide to book.",
  },
  {
    icon: CalendarCheck,
    title: "Online Booking",
    description:
      "Reserve your preferred home instantly with a simple, guided booking flow.",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description:
      "Complete payments safely with clear fees and protected digital checkout.",
  },
  {
    icon: Star,
    title: "Review Landlords",
    description:
      "Leave ratings and reviews to help other tenants choose trusted hosts.",
  },
  {
    icon: History,
    title: "Booking History",
    description:
      "Track past and upcoming bookings in one place for easy reference.",
  },
];

export function TenantServices() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">For Tenants</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Services for Tenants
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            From discovery to move-in — tools designed to make renting simple,
            safe, and stress-free.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tenantServices.map((service) => (
            <Card
              key={service.title}
              className="group rounded-3xl py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-5" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">
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
