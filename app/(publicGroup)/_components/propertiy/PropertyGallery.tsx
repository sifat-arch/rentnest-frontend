"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight, Expand, Sparkles } from "lucide-react";

interface PropertyGalleryProps {
  mainImage?: string | null;
  title: string;
  category?: string;
}

export default function PropertyGallery({
  mainImage,
  title,
  category = "Residence",
}: PropertyGalleryProps) {
  const fallbackMain =
    mainImage ||
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85";

  // Gallery of photos (uses the provided main image + curated complementary views)
  const galleryImages = [
    fallbackMain,
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Showcase Grid */}
      <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-2 lg:h-[480px]">
        {/* Large Featured Main Image (Takes 2 cols & 2 rows on desktop) */}
        <div
          onClick={() => setFullscreenOpen(true)}
          className="group relative cursor-pointer overflow-hidden rounded-3xl border border-[#dfe5dc] bg-[#18342d] lg:col-span-2 lg:row-span-2 min-h-[300px] sm:min-h-[380px]"
        >
          <Image
            src={galleryImages[activeIndex]}
            alt={`${title} - Photo ${activeIndex + 1}`}
            fill
            priority
            unoptimized
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Badges Overlay */}
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#18342d]/90 px-3.5 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
              <Sparkles className="size-3 text-[#d9a66b]" />
              {category}
            </span>
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#18342d] shadow-sm backdrop-blur-md">
              Verified Listing
            </span>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
            <button
              onClick={handlePrev}
              type="button"
              className="grid size-10 place-items-center rounded-full bg-white/90 text-[#18342d] shadow-md transition hover:bg-white cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="grid size-10 place-items-center rounded-full bg-white/90 text-[#18342d] shadow-md transition hover:bg-white cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Fullscreen Trigger Pill */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-[#18342d]/80 px-3.5 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur-md">
            <Expand size={13} />
            <span>Click to expand ({activeIndex + 1}/{galleryImages.length})</span>
          </div>
        </div>

        {/* Thumbnail Grid: 4 Secondary Images */}
        {galleryImages.slice(1, 5).map((img, idx) => {
          const actualIndex = idx + 1;
          const isSelected = activeIndex === actualIndex;

          return (
            <div
              key={actualIndex}
              onClick={() => setActiveIndex(actualIndex)}
              className={`group relative hidden sm:block cursor-pointer overflow-hidden rounded-2xl border bg-[#18342d] transition-all duration-300 min-h-[140px] ${
                isSelected
                  ? "border-[#d9a66b] ring-2 ring-[#d9a66b]/60 scale-[0.98]"
                  : "border-[#dfe5dc] hover:border-[#18342d]/50"
              }`}
            >
              <Image
                src={img}
                alt={`${title} - Thumbnail ${actualIndex + 1}`}
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-[#18342d]/10 transition-colors ${
                  isSelected ? "bg-transparent" : "group-hover:bg-transparent"
                }`}
              />

              {actualIndex === 4 && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreenOpen(true);
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-[#18342d]/70 text-white backdrop-blur-2xs transition hover:bg-[#18342d]/60"
                >
                  <span className="flex items-center gap-1.5 text-xs font-semibold">
                    <Camera size={14} className="text-[#e5bd8b]" />
                    View All Photos
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Thumbnail Row */}
      <div className="flex gap-2.5 overflow-x-auto pb-2 sm:hidden">
        {galleryImages.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className={`relative size-18 shrink-0 overflow-hidden rounded-xl border-2 transition ${
              activeIndex === idx
                ? "border-[#d9a66b] ring-2 ring-[#d9a66b]/40"
                : "border-transparent opacity-75"
            }`}
          >
            <Image
              src={img}
              alt=""
              fill
              unoptimized
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {fullscreenOpen && (
        <div
          onClick={() => setFullscreenOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center max-w-5xl w-full"
          >
            <div className="relative h-[65vh] w-full max-w-4xl overflow-hidden rounded-3xl">
              <Image
                src={galleryImages[activeIndex]}
                alt={`${title} - Fullscreen`}
                fill
                unoptimized
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="grid size-11 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30 transition cursor-pointer"
              >
                <ChevronLeft size={22} />
              </button>
              <span className="text-sm font-medium text-white/80">
                {activeIndex + 1} of {galleryImages.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className="grid size-11 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30 transition cursor-pointer"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setFullscreenOpen(false)}
              className="mt-4 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold text-white hover:bg-white/20 transition cursor-pointer"
            >
              Close Gallery
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
