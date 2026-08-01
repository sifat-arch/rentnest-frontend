// _components/shaired/StarRating.tsx
"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
  size?: number;
}

const StarRating = ({
  value,
  onChange,
  readOnly = false,
  size = 18,
}: StarRatingProps) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readOnly}
          onClick={() => onChange?.(star)}
          className={cn(!readOnly && "cursor-pointer")}
        >
          <Star
            size={size}
            className={cn(
              star <= value
                ? "fill-yellow-400 text-yellow-400"
                : "fill-none text-muted-foreground",
            )}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
