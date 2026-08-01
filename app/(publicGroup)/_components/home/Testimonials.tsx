import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Rahman",
    initials: "AR",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    review:
      "RentNest made finding my apartment surprisingly easy. The listings were accurate, and booking felt secure from start to finish.",
  },
  {
    name: "Karim Hossain",
    initials: "KH",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    review:
      "As a landlord, listing my property took minutes. I started receiving quality inquiries almost immediately.",
  },
  {
    name: "Nadia Islam",
    initials: "NI",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    review:
      "I loved the clean experience — verified homes, clear pricing, and a smooth payment process. Highly recommend RentNest.",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">Reviews</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Real stories from tenants and landlords who trust RentNest for their
            rental journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <Avatar size="lg">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">Verified user</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
