"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown, RotateCcw, SlidersHorizontal } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function PropertyFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value && value.trim()) {
      params.set(key, value.trim());
    } else {
      params.delete(key);
    }

    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  };

  const hasActiveFilters = Boolean(
    searchParams.get("minPrice") ||
      searchParams.get("maxPrice") ||
      searchParams.get("sortBy") ||
      searchParams.get("sortOrder")
  );

  const handleResetFilters = () => {
    const params = new URLSearchParams();
    const currentSearch = searchParams.get("search");
    if (currentSearch) {
      params.set("search", currentSearch);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Min Price */}
      <div className="relative min-w-[130px] flex-1 sm:flex-initial">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#64716c]">
          ৳
        </span>
        <input
          type="number"
          placeholder="Min Price"
          defaultValue={searchParams.get("minPrice") || ""}
          onBlur={(e) => updateQuery("minPrice", e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateQuery("minPrice", (e.target as HTMLInputElement).value);
            }
          }}
          className="w-full rounded-2xl border border-[#dfe5dc] bg-white py-2.5 pl-8 pr-3 text-sm text-[#18342d] placeholder-[#64716c]/60 shadow-xs outline-none transition focus:border-[#b77940] focus:ring-2 focus:ring-[#b77940]/20"
        />
      </div>

      {/* Max Price */}
      <div className="relative min-w-[130px] flex-1 sm:flex-initial">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#64716c]">
          ৳
        </span>
        <input
          type="number"
          placeholder="Max Price"
          defaultValue={searchParams.get("maxPrice") || ""}
          onBlur={(e) => updateQuery("maxPrice", e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateQuery("maxPrice", (e.target as HTMLInputElement).value);
            }
          }}
          className="w-full rounded-2xl border border-[#dfe5dc] bg-white py-2.5 pl-8 pr-3 text-sm text-[#18342d] placeholder-[#64716c]/60 shadow-xs outline-none transition focus:border-[#b77940] focus:ring-2 focus:ring-[#b77940]/20"
        />
      </div>

      {/* Sort By */}
      <div className="min-w-[140px] flex-1 sm:flex-initial">
        <Select
          value={searchParams.get("sortBy") || "all"}
          onValueChange={(value) =>
            updateQuery("sortBy", value === "all" ? "" : value)
          }
        >
          <SelectTrigger className="h-10.5 rounded-2xl border border-[#dfe5dc] bg-white px-3.5 text-sm text-[#18342d] shadow-xs focus:ring-2 focus:ring-[#b77940]/20">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="size-3.5 text-[#b77940]" />
              <SelectValue placeholder="Sort By" />
            </div>
          </SelectTrigger>

          <SelectContent className="rounded-2xl border border-[#dfe5dc] bg-white shadow-xl">
            <SelectItem value="all">Default sorting</SelectItem>
            <SelectItem value="createdAt">Newest first</SelectItem>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="title">Title (A-Z)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Sort Order */}
      <div className="min-w-[130px] flex-1 sm:flex-initial">
        <Select
          value={searchParams.get("sortOrder") || "desc"}
          onValueChange={(value) => updateQuery("sortOrder", value)}
        >
          <SelectTrigger className="h-10.5 rounded-2xl border border-[#dfe5dc] bg-white px-3.5 text-sm text-[#18342d] shadow-xs focus:ring-2 focus:ring-[#b77940]/20">
            <div className="flex items-center gap-2">
              <ArrowUpDown className="size-3.5 text-[#b77940]" />
              <SelectValue placeholder="Order" />
            </div>
          </SelectTrigger>

          <SelectContent className="rounded-2xl border border-[#dfe5dc] bg-white shadow-xl">
            <SelectItem value="asc">Ascending (Low-High)</SelectItem>
            <SelectItem value="desc">Descending (High-Low)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reset Filters Button */}
      {hasActiveFilters && (
        <button
          type="button"
          onClick={handleResetFilters}
          className="inline-flex items-center gap-1.5 rounded-2xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs font-semibold text-rose-600 transition hover:bg-rose-100 cursor-pointer"
        >
          <RotateCcw className="size-3.5" />
          Reset
        </button>
      )}
    </div>
  );
}
