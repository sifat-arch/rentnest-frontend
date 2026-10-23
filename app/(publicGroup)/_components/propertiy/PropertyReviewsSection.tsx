"use client";

import { useState } from "react";
import { Star, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import ReviewsPopup from "@/components/shaired/ReviewsPopup";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface IReview {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

interface PropertyReviewsSectionProps {
  propertyId: string;
  reviews: IReview[];
  userRole?: string;
}

export default function PropertyReviewsSection({
  propertyId,
  reviews = [],
  userRole = "GUEST",
}: PropertyReviewsSectionProps) {
  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? (
          reviews.reduce((acc, curr) => acc + (Number(curr.rating) || 5), 0) /
          totalReviews
        ).toFixed(1)
      : "5.0";

  return (
    <div id="reviews" className="rounded-3xl border border-[#dfe5dc] bg-white p-6 sm:p-8 shadow-xs space-y-8">
      {/* Section Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#e7e5df] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
              Guest Experiences
            </span>
          </div>
          <div className="mt-1 flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-[#18342d]">
              Reviews & Ratings
            </h2>
            <div className="flex items-center gap-1 rounded-full bg-[#18342d]/5 px-3 py-1 text-sm font-bold text-[#18342d]">
              <Star className="size-4 fill-[#d9a66b] text-[#d9a66b]" />
              <span>{averageRating}</span>
              <span className="text-xs font-normal text-[#64716c]">
                ({totalReviews} {totalReviews === 1 ? "review" : "reviews"})
              </span>
            </div>
          </div>
        </div>

        {/* Action button to open full review submission modal */}
        <div>
          <ReviewsPopup postId={propertyId} role={userRole} />
        </div>
      </div>

      {/* Ratings Breakdown Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-[#e7e5df] bg-[#fbfaf8] p-4 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-semibold text-[#18342d]">
            <span>Cleanliness</span>
            <span>4.9</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#e7e5df]">
            <div className="h-full w-[96%] rounded-full bg-[#18342d]" />
          </div>
        </div>

        <div className="rounded-2xl border border-[#e7e5df] bg-[#fbfaf8] p-4 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-semibold text-[#18342d]">
            <span>Accuracy & Photos</span>
            <span>5.0</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#e7e5df]">
            <div className="h-full w-[98%] rounded-full bg-[#18342d]" />
          </div>
        </div>

        <div className="rounded-2xl border border-[#e7e5df] bg-[#fbfaf8] p-4 space-y-1.5 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between text-xs font-semibold text-[#18342d]">
            <span>Communication & Check-in</span>
            <span>4.8</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#e7e5df]">
            <div className="h-full w-[94%] rounded-full bg-[#18342d]" />
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {totalReviews === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#e7e5df] p-8 text-center text-xs text-[#64716c]">
            <MessageSquare className="mx-auto size-7 text-[#d9a66b]/60 mb-2" />
            <p className="font-semibold text-[#18342d]">No reviews written yet.</p>
            <p className="mt-0.5">
              Verified tenants can share their experiences after their stay.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {reviews.map((rev) => {
              const reviewerName = rev.user?.name || "Verified Tenant";
              const initial = reviewerName.charAt(0).toUpperCase();

              return (
                <div
                  key={rev.id}
                  className="flex flex-col justify-between rounded-2xl border border-[#e7e5df] bg-[#fbfaf8] p-5 space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="size-9 border border-[#e7e5df]">
                          <AvatarFallback className="bg-[#18342d] text-xs font-bold text-[#e5bd8b]">
                            {initial}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-xs font-semibold text-[#18342d]">
                            {reviewerName}
                          </p>
                          <p className="text-[11px] text-[#64716c]">
                            {new Date(rev.createdAt).toLocaleDateString("en-GB", {
                              month: "short",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`size-3.5 ${
                              i < Number(rev.rating)
                                ? "fill-[#d9a66b] text-[#d9a66b]"
                                : "text-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs leading-relaxed text-[#1c2925]">
                      &ldquo;{rev.comment}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-800">
                    <CheckCircle2 className="size-3 text-emerald-600" />
                    Verified Stay
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
