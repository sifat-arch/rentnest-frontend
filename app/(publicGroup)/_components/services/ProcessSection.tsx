import {
  CalendarCheck,
  CreditCard,
  Home,
  MapPin,
  Search,
  type LucideIcon,
} from "lucide-react";

const steps: {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    step: 1,
    icon: Search,
    title: "Browse Properties",
    description:
      "Explore verified listings filtered by location, budget, and lifestyle.",
  },
  {
    step: 2,
    icon: MapPin,
    title: "Select Your Home",
    description:
      "Compare details, photos, and amenities to find the perfect match.",
  },
  {
    step: 3,
    icon: CalendarCheck,
    title: "Book Instantly",
    description:
      "Submit your booking request in a few clicks with a clear process.",
  },
  {
    step: 4,
    icon: CreditCard,
    title: "Complete Secure Payment",
    description:
      "Pay safely through encrypted checkout with transparent pricing.",
  },
  {
    step: 5,
    icon: Home,
    title: "Move In",
    description:
      "Get confirmation, collect keys, and settle into your new rental home.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">Process</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How Our Platform Works
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Five simple steps from browsing to moving in — designed to feel
            effortless.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="relative hidden lg:block">
          <div className="absolute top-8 right-0 left-0 h-px bg-border" />
          <div className="grid grid-cols-5 gap-4">
            {steps.map((item) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-5 flex size-16 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-sm">
                  <span className="font-heading text-lg font-bold">
                    {item.step}
                  </span>
                </div>
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet stacked */}
        <div className="relative space-y-6 lg:hidden">
          <div className="absolute top-0 bottom-0 left-5 w-px bg-border" />
          {steps.map((item) => (
            <div key={item.step} className="relative flex gap-4 pl-0">
              <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                <span className="font-heading text-sm font-bold">
                  {item.step}
                </span>
              </div>
              <div className="flex-1 rounded-3xl border border-border bg-card p-5 shadow-sm">
                <div className="mb-3 flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-4" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
