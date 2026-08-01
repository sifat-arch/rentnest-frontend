import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "Sunny 2BR Apartment in Gulshan",
    location: "Gulshan, Dhaka",
    price: 45000,
    category: "Apartment",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Modern Studio Near Campus",
    location: "Dhanmondi, Dhaka",
    price: 22000,
    category: "Studio",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Spacious Family Duplex",
    location: "Uttara, Dhaka",
    price: 65000,
    category: "House",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3be42?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Cozy Lakeview Flat",
    location: "Banani, Dhaka",
    price: 38000,
    category: "Apartment",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Luxury Penthouse Suite",
    location: "Bashundhara, Dhaka",
    price: 95000,
    category: "Penthouse",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Quiet Garden Cottage",
    location: "Mirpur, Dhaka",
    price: 28000,
    category: "Cottage",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`size-3.5 ${
            index < Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
      <span className="ml-1.5 text-xs font-medium text-muted-foreground">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export function FeaturedProperties() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-medium text-primary">Featured</p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Properties
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Hand-picked homes ready for your next chapter — stylish,
              convenient, and move-in ready.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/all-properties">View all properties</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <article
              key={property.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <Badge className="absolute top-3 left-3 rounded-lg">
                  {property.category}
                </Badge>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
                    {property.title}
                  </h3>
                  <p className="shrink-0 font-heading text-base font-bold text-primary">
                    ৳{property.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-4 shrink-0" />
                  {property.location}
                </div>

                <StarRating rating={property.rating} />

                <div className="mt-auto pt-2">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-xl"
                  >
                    <Link href="/all-properties">View Details</Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
