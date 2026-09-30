import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

type StarRatingProps = {
  rating: number;
  /** Accessible label; omit when the rating is already described nearby. */
  label?: string;
  className?: string;
  starClassName?: string;
};

export function StarRating({ rating, label, className, starClassName }: StarRatingProps) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("flex", className)}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          strokeWidth={0}
          className={cn(
            "shrink-0 fill-current",
            index < Math.round(rating) ? "text-neutral-700" : "text-neutral-200",
            starClassName
          )}
        />
      ))}
    </span>
  );
}
