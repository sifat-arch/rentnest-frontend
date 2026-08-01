import Image from "next/image";

export function StorySection() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-medium text-primary">Our Journey</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Story
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              RentNest was created to make renting in Bangladesh simpler and
              safer. Too many people still rely on scattered Facebook posts,
              unverified agents, and word-of-mouth when searching for a place to
              live — and that process is stressful, slow, and often unreliable.
            </p>
            <p>
              Renters face incomplete listings, hidden costs, last-minute
              cancellations, and little protection when something goes wrong.
              Landlords struggle too: finding trustworthy tenants and managing
              inquiries across multiple channels takes time they do not have.
            </p>
            <p>
              We built RentNest as a trusted marketplace where every listing is
              verified, bookings are secure, and pricing is transparent. From
              search to move-in, our platform brings clarity and confidence to
              both tenants and landlords.
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-sm ring-1 ring-foreground/10">
          <Image
            src="https://images.unsplash.com/photo-1560448204-e02f11c3be42?auto=format&fit=crop&w=1000&q=80"
            alt="Comfortable modern living space"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
