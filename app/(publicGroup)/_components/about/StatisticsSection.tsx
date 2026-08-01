import {
  Building2,
  Smile,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";

const stats: {
  icon: LucideIcon;
  value: string;
  label: string;
}[] = [
  {
    icon: Building2,
    value: "500+",
    label: "Properties",
  },
  {
    icon: Users,
    value: "120+",
    label: "Landlords",
  },
  {
    icon: Smile,
    value: "1500+",
    label: "Happy Users",
  },
  {
    icon: Star,
    value: "98%",
    label: "Positive Reviews",
  },
];

export function StatisticsSection() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">Impact</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Company Statistics
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Growing trust across Bangladesh — one verified home and happy renter
            at a time.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <stat.icon className="size-5" />
              </div>
              <p className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
