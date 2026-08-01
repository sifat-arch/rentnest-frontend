import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  ClipboardList,
  List,
  MessageSquare,
  Upload,
  Wallet,
  type LucideIcon,
} from "lucide-react";

const landlordServices: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Upload,
    title: "Publish Properties",
    description:
      "List your home with photos, details, and pricing — ready for tenants to discover.",
  },
  {
    icon: List,
    title: "Manage Listings",
    description:
      "Update availability, edit details, and keep your properties organized with ease.",
  },
  {
    icon: ClipboardList,
    title: "View Booking Requests",
    description:
      "See incoming requests in one dashboard and respond without chasing messages.",
  },
  {
    icon: CheckCircle,
    title: "Accept Bookings",
    description:
      "Approve the right tenants quickly and confirm reservations in a few clicks.",
  },
  {
    icon: Wallet,
    title: "Track Payments",
    description:
      "Monitor payment status clearly so you always know when rent has been settled.",
  },
  {
    icon: MessageSquare,
    title: "Receive Reviews",
    description:
      "Build credibility with honest tenant reviews that help grow your rental success.",
  },
];

export function LandlordServices() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">For Landlords</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Services for Landlords
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Powerful tools to list properties, manage bookings, and grow your
            rental business with confidence.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {landlordServices.map((service) => (
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
