import {
  CreditCard,
  Home,
  Search,
  CalendarCheck,
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
    title: "Search Property",
    description:
      "Browse verified listings by location, budget, and lifestyle preferences.",
  },
  {
    step: 2,
    icon: CalendarCheck,
    title: "Book Online",
    description:
      "Reserve your favorite home in a few clicks with a clear booking flow.",
  },
  {
    step: 3,
    icon: CreditCard,
    title: "Pay Securely",
    description:
      "Complete payment through our protected checkout with transparent fees.",
  },
  {
    step: 4,
    icon: Home,
    title: "Move In",
    description:
      "Get confirmation, collect keys, and settle into your new rental home.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">Process</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Four simple steps from search to settling in — designed to feel
            effortless.
          </p>
        </div>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-10 right-[12.5%] left-[12.5%] hidden h-px bg-border lg:block" />

          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative z-10 mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                <span className="font-heading text-sm font-bold">
                  {item.step}
                </span>
              </div>
              <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="size-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
