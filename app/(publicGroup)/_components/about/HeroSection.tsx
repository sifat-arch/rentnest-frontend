import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/8 via-background to-secondary/50" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6">
          <h1 className="font-heading text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            About <span className="text-primary">RentNest</span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Helping people discover safe, comfortable and affordable rental
            homes across Bangladesh.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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
              <Link href="#contact">
                <Mail className="size-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-sm ring-1 ring-foreground/10">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            alt="Modern city buildings"
            fill
            priority
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
