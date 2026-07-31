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
    <div className="relative max-w-md">
      <SearchIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

      <Input
        defaultValue={searchParams.get("search") || ""}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search bookings..."
        className="pl-9"
      />
    </div>
  );
}

export default BookingSearchBar;
