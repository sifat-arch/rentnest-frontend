import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section id="contact" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-secondary to-primary/5 px-6 py-14 text-center shadow-sm ring-1 ring-foreground/5 sm:px-12 sm:py-16 lg:py-20">
          <div className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 size-56 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Find Your Dream Home?
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Explore verified listings today or create an account to start
              booking and listing on RentNest.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-xl px-6 text-sm"
              >
                <Link href="/all-properties">
                  Browse Properties
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 rounded-xl px-6 text-sm"
              >
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
