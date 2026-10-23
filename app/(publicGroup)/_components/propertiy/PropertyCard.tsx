import { IProperty } from "@/lib/types";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BookingButton from "./BookingButton";
import DeleteAdminPropertyButtion from "@/app/(dashboardGroup)/admin-dashboard/_components/DeleteAdminPropertyButtion";
import ReviewsPopup from "@/components/shaired/ReviewsPopup";
import { getMe } from "@/app/(authGroup)/_actions/getMe";

type PropertyCardProps = {
  post: IProperty;
  role?: string;
};

export async function PropertyCard({ post }: PropertyCardProps) {
  const user = await getMe();
  const role = user?.data?.role;

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#dfe5dc] bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Property Image with Category Badge - Clickable to Details */}
      <Link
        href={`/properties/${post.id}`}
        className="relative block h-60 w-full overflow-hidden rounded-2xl bg-[#18342d] cursor-pointer"
        aria-label={`View details for ${post.title}`}
      >
        <Image
          src={
            post?.image ||
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
          }
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        {post?.category?.name && (
          <span className="absolute left-3.5 top-3.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#18342d] shadow-sm backdrop-blur-md">
            {post.category.name}
          </span>
        )}
      </Link>

      {/* Property Content */}
      <div className="flex flex-1 flex-col justify-between p-3 pt-4">
        <div>
          <div className="flex items-start justify-between gap-3">
            <Link
              href={`/properties/${post.id}`}
              className="line-clamp-1 text-lg font-semibold text-[#18342d] transition-colors hover:text-[#b77940] group-hover:text-[#b77940]"
            >
              {post.title}
            </Link>
            <p className="shrink-0 text-lg font-bold text-[#18342d]">
              ৳{post.price.toLocaleString()}
              <span className="text-xs font-normal text-[#64716c]"> / mo</span>
            </p>
          </div>

          <p className="mt-1 flex items-center gap-1.5 text-sm text-[#64716c] line-clamp-1">
            <MapPin size={14} className="shrink-0 text-[#b77940]" />
            {post.location}
          </p>

          <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-[#64716c]">
            {post.description}
          </p>
        </div>

        {/* Card Footer: Metadata & Actions */}
        <div className="mt-5 space-y-3 border-t border-[#e5e7e1] pt-3.5">
          <div className="flex items-center justify-between text-xs text-[#64716c]">
            <div className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5 text-[#b77940]" />
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>

            <ReviewsPopup postId={post.id} role={role} />
          </div>

          <div className="flex items-center gap-2 pt-1">
            <Link
              href={`/properties/${post.id}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-[#dfe5dc] bg-[#fbfaf8] py-2 text-xs font-semibold text-[#18342d] shadow-2xs transition hover:border-[#18342d] hover:bg-[#18342d] hover:text-white"
            >
              View Details
              <ArrowRight className="size-3.5" />
            </Link>

            <div className="flex-1">
              <BookingButton propertyId={post.id} />
            </div>

            {role === "ADMIN" && (
              <div className="shrink-0">
                <DeleteAdminPropertyButtion propertyId={post.id} />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
