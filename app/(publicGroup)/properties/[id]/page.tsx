import { getProperty } from "@/app/(dashboardGroup)/_actions/getProperty";
import { getProperties } from "@/app/(publicGroup)/_actions/getProperties";
import { getReview } from "@/service/getReview";
import { getMe } from "@/app/(authGroup)/_actions/getMe";
import PropertyGallery from "../../_components/propertiy/PropertyGallery";
import PropertyReviewsSection from "../../_components/propertiy/PropertyReviewsSection";
import BookingButton from "../../_components/propertiy/BookingButton";
import { Footer } from "@/components/shaired/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Bed,
  Bath,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Heart,
  Home,
  Info,
  Layers,
  MapPin,
  Maximize2,
  ShieldCheck,
  Share2,
  Sparkles,
  Star,
  Tv,
  Wifi,
  Wind,
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PropertyDetailsPage({ params }: Props) {
  const { id } = await params;

  // Parallel fetch: Property details, Reviews, Related properties, Current user
  const [propertyRes, reviewsRes, relatedRes, userRes] = await Promise.all([
    getProperty(id),
    getReview(id),
    getProperties({ query: { limit: "4" } }),
    getMe(),
  ]);

  if (!propertyRes?.success || !propertyRes?.data) {
    notFound();
  }

  const property = propertyRes.data;
  const reviews = reviewsRes?.success && Array.isArray(reviewsRes?.data) ? reviewsRes.data : [];
  const relatedProperties =
    relatedRes?.success && Array.isArray(relatedRes?.data)
      ? relatedRes.data.filter((p: { id: string }) => p.id !== id).slice(0, 3)
      : [];
  const user = userRes?.data || null;

  // Derived or realistic specifications for full display
  const categoryName = property.category?.name || "Apartment";
  const landlordName = property.landlord?.name || "Verified Landlord";
  const landlordEmail = property.landlord?.email || "host@rentnest.com";

  // Pre-configured amenities with icons
  const amenities = [
    { icon: Wifi, label: "High-Speed Wi-Fi", desc: "Dedicated fiber line" },
    { icon: Wind, label: "Air Conditioning", desc: "Dual inverter units" },
    { icon: Zap, label: "Backup Generator", desc: "24/7 power coverage" },
    { icon: ShieldCheck, label: "24/7 Security", desc: "CCTV & guard stationed" },
    { icon: Layers, label: "Elevator Access", desc: "Modern passenger lift" },
    { icon: Home, label: "Spacious Balcony", desc: "Scenic neighborhood view" },
  ];

  const specifications = [
    { label: "Category", value: categoryName, icon: Building2 },
    { label: "Bedrooms", value: "3 Bedrooms", icon: Bed },
    { label: "Bathrooms", value: "2 Bathrooms", icon: Bath },
    { label: "Living Space", value: "1,550 sq.ft", icon: Maximize2 },
    { label: "Floor Level", value: "5th Floor", icon: Layers },
    { label: "Furnishing", value: "Semi-Furnished", icon: Home },
  ];

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#1c2925] flex flex-col justify-between selection:bg-[#d9a66b]/30">
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs font-medium text-[#64716c]">
            <Link href="/" className="transition hover:text-[#18342d]">
              Home
            </Link>
            <span>/</span>
            <Link href="/all-properties" className="transition hover:text-[#18342d]">
              Properties
            </Link>
            <span>/</span>
            <span className="truncate text-[#18342d] font-semibold max-w-[200px] sm:max-w-xs">
              {property.title}
            </span>
          </nav>

          <Link
            href="/all-properties"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#e7e5df] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#18342d] shadow-2xs transition hover:bg-[#18342d] hover:text-white"
          >
            <ArrowLeft className="size-3.5" />
            Back to listings
          </Link>
        </div>

        {/* Property Header Bar */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#18342d] px-3.5 py-1 text-xs font-semibold text-[#e5bd8b]">
                <Sparkles className="size-3" />
                {categoryName}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                <CheckCircle2 className="size-3 text-emerald-600" />
                Verified by RentNest
              </span>
            </div>

            <h1 className="text-3xl font-medium tracking-tight text-[#18342d] sm:text-4xl lg:text-5xl">
              {property.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#64716c]">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-4 text-[#b77940] shrink-0" />
                {property.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4 text-[#b77940] shrink-0" />
                Listed on {new Date(property.createdAt).toLocaleDateString("en-GB", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#18342d] font-semibold">
                <Star className="size-3.5 fill-[#d9a66b] text-[#d9a66b]" />
                {reviews.length > 0 ? "4.9" : "New listing"}
              </span>
            </div>
          </div>

          {/* Social Share & Favorite Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-[#e7e5df] bg-white px-4 py-2 text-xs font-semibold text-[#18342d] shadow-2xs transition hover:bg-[#f7f6f2] cursor-pointer"
            >
              <Share2 className="size-3.5 text-[#b77940]" />
              Share
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-[#e7e5df] bg-white px-4 py-2 text-xs font-semibold text-[#18342d] shadow-2xs transition hover:bg-[#f7f6f2] cursor-pointer"
            >
              <Heart className="size-3.5 text-rose-500" />
              Save
            </button>
          </div>
        </div>

        {/* 1. MEDIA & IMAGE GALLERY (একাধিক ছবি বা মিডিয়া) */}
        <PropertyGallery
          mainImage={property.image}
          title={property.title}
          category={categoryName}
        />

        {/* 2. MAIN DETAILS & STICKY BOOKING GRID */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT COLUMN: Specifications, Description, Host, Amenities, Reviews */}
          <div className="space-y-10 lg:col-span-8">
            {/* Host Identity Card */}
            <div className="flex flex-col gap-4 rounded-3xl border border-[#dfe5dc] bg-white p-6 shadow-xs sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="grid size-14 place-items-center rounded-2xl bg-[#18342d] text-lg font-bold text-[#e5bd8b] shadow-xs">
                  {landlordName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-[#18342d]">
                      Hosted by {landlordName}
                    </h3>
                    <ShieldCheck className="size-4 text-[#d9a66b]" />
                  </div>
                  <p className="text-xs text-[#64716c]">
                    Verified Property Host • Fast Response Rate (within 1 hr)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-[#e7e5df] pt-3 sm:border-t-0 sm:pt-0">
                <span className="rounded-full bg-[#18342d]/5 px-3 py-1 text-xs font-semibold text-[#18342d]">
                  Identity Verified
                </span>
              </div>
            </div>

            {/* SECTION 1: SPECIFICATIONS (আলাদা সেকশন: Specifications) */}
            <section className="rounded-3xl border border-[#dfe5dc] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
                  Unit Features
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-[#18342d]">
                  Property Specifications
                </h2>
                <p className="mt-1 text-xs text-[#64716c]">
                  Detailed physical dimensions and architectural specifications of this residence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {specifications.map((spec, idx) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-[#e7e5df] bg-[#fbfaf8] p-4 space-y-1 transition-colors hover:bg-white"
                    >
                      <div className="flex items-center gap-2 text-xs text-[#64716c]">
                        <Icon className="size-4 text-[#b77940]" />
                        <span>{spec.label}</span>
                      </div>
                      <p className="text-sm font-semibold text-[#18342d]">
                        {spec.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 2: DESCRIPTION (আলাদা সেকশন: Description) */}
            <section className="rounded-3xl border border-[#dfe5dc] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
                  Overview
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-[#18342d]">
                  About this Home
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-sm leading-relaxed text-[#1c2925] space-y-4">
                <p className="text-base font-normal leading-7 text-[#64716c]">
                  {property.description}
                </p>
                <p className="text-xs text-[#64716c] leading-relaxed">
                  Situated in a prime residential pocket of {property.location}, this home offers an exceptional balance of contemporary interior finishes, natural daylight, and urban connectivity. The layout has been designed for calm, comfortable everyday living with well-ventilated living areas and spacious rooms.
                </p>
              </div>

              {/* Highlights Checklist */}
              <div className="border-t border-[#e7e5df] pt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#18342d]">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  Pre-screened electrical & plumbing fixtures
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#18342d]">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  Direct landlord rental agreement
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#18342d]">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  Transparent move-in walkthrough guarantee
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#18342d]">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  Full deposit protection with digital receipt
                </div>
              </div>
            </section>

            {/* SECTION 3: AMENITIES & SERVICES */}
            <section className="rounded-3xl border border-[#dfe5dc] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
                  Living Conveniences
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-[#18342d]">
                  Included Amenities
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {amenities.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-2xl border border-[#e7e5df] bg-[#fbfaf8] p-4 transition-colors hover:bg-white"
                    >
                      <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#18342d]/5 text-[#18342d]">
                        <Icon className="size-4 text-[#b77940]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-[#18342d]">
                          {item.label}
                        </h4>
                        <p className="text-[11px] text-[#64716c]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 4: REVIEWS & RATINGS (আলাদা সেকশন: Reviews/Ratings) */}
            <PropertyReviewsSection
              propertyId={property.id}
              reviews={reviews}
              userRole={user?.role}
            />
          </div>

          {/* RIGHT COLUMN: Sticky Reservation & Booking Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="overflow-hidden rounded-3xl border border-[#dfe5dc] bg-white p-6 sm:p-8 shadow-lg space-y-6">
              {/* Pricing Header */}
              <div className="flex items-baseline justify-between border-b border-[#e7e5df] pb-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#b77940]">
                    Monthly Rent
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl font-bold tracking-tight text-[#18342d]">
                      ৳{property.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#64716c]">/ month</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available Now
                </span>
              </div>

              {/* Lease Breakdown Info */}
              <div className="space-y-3 rounded-2xl bg-[#fbfaf8] border border-[#e7e5df] p-4 text-xs text-[#64716c]">
                <div className="flex justify-between">
                  <span>Monthly Base Rent</span>
                  <span className="font-semibold text-[#18342d]">৳{property.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Security Deposit (Refundable)</span>
                  <span className="font-semibold text-[#18342d]">৳{(property.price * 2).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee (RentNest Guarantee)</span>
                  <span className="font-semibold text-emerald-700">৳0 (Free)</span>
                </div>
                <div className="border-t border-[#e7e5df] pt-2 flex justify-between font-bold text-[#18342d] text-sm">
                  <span>Move-in Total</span>
                  <span>৳{(property.price * 3).toLocaleString()}</span>
                </div>
              </div>

              {/* Booking CTA Button */}
              <div className="space-y-3">
                <BookingButton propertyId={property.id} />
                <p className="text-center text-[11px] text-[#64716c]">
                  You won&apos;t be charged yet. The landlord will review your request.
                </p>
              </div>

              {/* Assurance Trust Points */}
              <div className="border-t border-[#e7e5df] pt-5 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-[#1c2925]">
                  <ShieldCheck className="size-4 text-[#d9a66b] shrink-0 mt-0.5" />
                  <span>
                    <strong>RentNest Tenant Protection:</strong> Full deposit escrow guarantee until digital check-in.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#1c2925]">
                  <Clock className="size-4 text-[#d9a66b] shrink-0 mt-0.5" />
                  <span>
                    <strong>Flexible Schedule:</strong> Request 3D walkthrough or 1-on-1 viewing appointment.
                  </span>
                </div>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="rounded-3xl border border-[#18342d]/10 bg-gradient-to-br from-[#18342d] to-[#102b25] p-6 text-white shadow-md space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e5bd8b]">
                <Sparkles className="size-3.5" />
                Dedicated Concierge
              </div>
              <h3 className="text-base font-semibold text-white">
                Have questions about this home?
              </h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Our rental specialists are on standby to assist with lease reviews, landlord questions, and neighborhood insights.
              </p>
              <div className="pt-1">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#e5bd8b] hover:text-white transition"
                >
                  Learn how RentNest works <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: RELATED ITEMS (আলাদা সেকশন: Related items) */}
        {relatedProperties.length > 0 && (
          <section className="border-t border-[#dfe5dc] pt-12 space-y-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
                  Explore More
                </p>
                <h2 className="mt-1 text-2xl font-medium tracking-tight text-[#18342d] sm:text-3xl">
                  Similar Verified <em className="font-serif italic font-normal">Homes</em>
                </h2>
                <p className="mt-1 text-xs text-[#64716c]">
                  Browse other recommended accommodations in nearby locations.
                </p>
              </div>

              <Link
                href="/all-properties"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18342d] hover:text-[#b77940] transition"
              >
                View all properties <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProperties.map((rel: {
                id: string;
                title: string;
                location: string;
                price: number;
                image?: string;
                category?: { name: string };
              }) => (
                <Link
                  key={rel.id}
                  href={`/properties/${rel.id}`}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#dfe5dc] bg-white p-3 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#18342d]">
                    <Image
                      src={
                        rel.image ||
                        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                      }
                      alt={rel.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {rel.category?.name && (
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#18342d] shadow-sm backdrop-blur-md">
                        {rel.category.name}
                      </span>
                    )}
                  </div>

                  <div className="p-3 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="line-clamp-1 text-base font-semibold text-[#18342d] group-hover:text-[#b77940] transition-colors">
                        {rel.title}
                      </h3>
                      <p className="text-sm font-bold text-[#18342d] shrink-0">
                        ৳{rel.price.toLocaleString()}
                        <span className="text-[11px] font-normal text-[#64716c]">/mo</span>
                      </p>
                    </div>

                    <p className="flex items-center gap-1 text-xs text-[#64716c] line-clamp-1">
                      <MapPin className="size-3 text-[#b77940] shrink-0" />
                      {rel.location}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#b77940] group-hover:text-[#18342d] border-t border-[#e7e5df] mt-3">
                      <span>Inspect Details</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
