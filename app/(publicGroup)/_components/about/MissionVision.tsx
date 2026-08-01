import { Eye, Target } from "lucide-react";

export function MissionVision() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">Purpose</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Mission & Vision
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Everything we build is guided by a clear mission and a long-term
            vision for renting in Bangladesh.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-10">
            <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Target className="size-7" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground">
              Mission
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Help people find trusted rental homes easily — with verified
              listings, secure booking, and a seamless experience from search to
              move-in.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-10">
            <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Eye className="size-7" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground">
              Vision
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Become Bangladesh&apos;s most trusted rental marketplace — where
              every tenant feels confident and every landlord feels supported.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
