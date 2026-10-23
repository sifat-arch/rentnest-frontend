"use client";

import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState, useEffect } from "react";

export function SearchBar() {
  const searchParams = useSearchParams();
  const debouncedRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search")?.toString() || ""
  );

  useEffect(() => {
    setSearchTerm(searchParams.get("search")?.toString() || "");
  }, [searchParams]);

  const updateSearch = (value: string) => {
    setSearchTerm(value);
    if (debouncedRef.current) {
      clearTimeout(debouncedRef.current);
    }
    debouncedRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value.trim()) {
        params.set("search", value.trim());
      } else {
        params.delete("search");
      }
      params.delete("page");
      router.replace(`${pathname}?${params.toString()}`);
    }, 400);
  };

  const handleClear = () => {
    setSearchTerm("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#b77940]" />
      <input
        value={searchTerm}
        onChange={(e) => updateSearch(e.target.value)}
        placeholder="Search by title, city or neighborhood..."
        className="w-full rounded-2xl border border-[#dfe5dc] bg-white py-3 pl-11 pr-10 text-sm text-[#18342d] placeholder-[#64716c]/60 shadow-xs outline-none transition focus:border-[#b77940] focus:ring-2 focus:ring-[#b77940]/20"
      />
      {searchTerm && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#64716c] hover:bg-[#f2f4ef] hover:text-[#18342d]"
          aria-label="Clear search"
        >
          <X className="size-3.5" />
        </button>
      )}
    </div>
  );
}
