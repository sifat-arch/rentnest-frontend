import {
  Handshake,
  Heart,
  Lightbulb,
  Shield,
  type LucideIcon,
} from "lucide-react";

const values: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Shield,
    title: "Trust",
    description:
      "We verify listings and protect every booking so renters and landlords can move forward with confidence.",
  },
  {
    icon: Handshake,
    title: "Transparency",
    description:
      "Clear pricing, honest property details, and open communication — no surprises along the way.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We keep improving search, booking, and payments to make renting feel modern and effortless.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Every decision starts with people — making the rental journey simpler, safer, and more human.",
  },
];

export function ValuesSection() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">Principles</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            The standards that shape how we design products, support users, and
            grow our marketplace.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <value.icon className="size-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
