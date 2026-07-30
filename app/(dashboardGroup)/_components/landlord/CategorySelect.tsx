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

type Category = {
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
};

const CategorySelect = ({ defaultValue }: CategorySelectProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(defaultValue ?? "");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // next.config.ts-এ rewrites কনফিগার থাকায় সরাসরি Relative Path কাজ করবে
        const res = await fetch("/api/categories");

        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }

        const result: CategoryResponse = await res.json();

        if (result.success && result.data) {
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
  }, [defaultValue]);

  return (
    <div className="space-y-2">
      <Label>Category</Label>

      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
        <SelectTrigger>
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>

        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
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
