"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

export function BookingSearchBar() {
  const searchParams = useSearchParams();
  const debouncedRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (value: string) => {
    if (debouncedRef.current) {
      clearTimeout(debouncedRef.current);
    }

    debouncedRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }

      router.replace(`${pathname}?${params.toString()}`);
    }, 500);
  };

  return (
    <div className="relative w-full max-w-md">
      <SearchIcon className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#64716c]" />

      <Input
        defaultValue={searchParams.get("search") || ""}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search bookings by tenant, property, or city..."
        className="h-11 rounded-full border border-[#e7e5df] bg-white pl-10 pr-4 text-xs sm:text-sm text-[#18342d] placeholder:text-[#64716c]/60 shadow-2xs focus-visible:border-[#18342d] focus-visible:ring-1 focus-visible:ring-[#18342d]"
      />
    </div>
  );
}

export default BookingSearchBar;
