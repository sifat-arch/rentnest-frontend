"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function PropertyFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Input
        type="number"
        placeholder="Min Price"
        defaultValue={searchParams.get("minPrice") || ""}
        onBlur={(e) => updateQuery("minPrice", e.target.value)}
      />

      <Input
        type="number"
        placeholder="Max Price"
        defaultValue={searchParams.get("maxPrice") || ""}
        onBlur={(e) => updateQuery("maxPrice", e.target.value)}
      />

      <Select
        value={searchParams.get("sortBy") || ""}
        onValueChange={(value) => updateQuery("sortBy", value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="price">Price</SelectItem>
          <SelectItem value="createdAt">Newest</SelectItem>
          <SelectItem value="title">Title</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={searchParams.get("sortOrder") || ""}
        onValueChange={(value) => updateQuery("sortOrder", value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Order" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="asc">Ascending</SelectItem>
          <SelectItem value="desc">Descending</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
