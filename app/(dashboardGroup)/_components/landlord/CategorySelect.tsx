"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type Category = {
  id: string;
  name: string;
};

type CategoryResponse = {
  success: boolean;
  message: string;
  data: Category[];
};

type CategorySelectProps = {
  defaultValue?: string;
  categories?: Category[];
};

const CategorySelect = ({ defaultValue, categories: propCategories }: CategorySelectProps) => {
  const [categories, setCategories] = useState<Category[]>(propCategories ?? []);
  const [selectedCategory, setSelectedCategory] = useState(defaultValue ?? "");

  useEffect(() => {
    if (propCategories && propCategories.length > 0) {
      setCategories(propCategories);
      if (!defaultValue && !selectedCategory) {
        setSelectedCategory(propCategories[0].id);
      }
      return;
    }

    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");

        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }

        const result: CategoryResponse = await res.json();

        if (result.success && result.data && Array.isArray(result.data)) {
          setCategories(result.data);

          if (!defaultValue && result.data.length > 0) {
            setSelectedCategory(result.data[0].id);
          }
        }
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    };

    fetchCategories();
  }, [defaultValue, propCategories, selectedCategory]);

  return (
    <div className="space-y-2">
      <Label htmlFor="category-select" className="text-xs font-semibold text-[#18342d]">
        Property Category
      </Label>

      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
        <SelectTrigger
          id="category-select"
          className="h-11 w-full rounded-xl border border-[#e7e5df] bg-white px-3.5 text-sm text-[#18342d] focus:border-[#18342d] focus:ring-1 focus:ring-[#18342d]"
        >
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>

        <SelectContent className="rounded-2xl border-[#e7e5df] bg-white p-1.5 shadow-lg">
          {categories.map((category) => (
            <SelectItem
              key={category.id}
              value={category.id}
              className="cursor-pointer rounded-xl text-xs font-medium text-[#18342d] focus:bg-[#f7f6f2] focus:text-[#18342d]"
            >
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <input type="hidden" name="categoryId" value={selectedCategory} />
    </div>
  );
};

export default CategorySelect;
