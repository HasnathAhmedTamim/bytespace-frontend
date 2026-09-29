"use client";

import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";

import { StarRating } from "@/components/courses/star-rating";
import { cn } from "@/lib/utils";
import type { CourseReview } from "@/types/course";

export type CourseReviewItem = CourseReview & { timeAgo: string };

const filters = ["all", 5, 4, 3, 2, 1] as const;
type Filter = (typeof filters)[number];

export function CourseReviewList({ reviews }: { reviews: CourseReviewItem[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? reviews : reviews.filter((review) => review.rating === filter);

  return (
    <section aria-labelledby="course-individual-reviews" className="mt-6">
      <h2 id="course-individual-reviews" className="font-heading text-lg/[1.2] font-semibold text-neutral-950">
        Individual Reviews:
      </h2>

      <div role="group" aria-label="Filter reviews by rating" className="mt-7 flex flex-wrap gap-4">
        {filters.map((value) => {
          const active = filter === value;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(value)}
              className={cn(
                "inline-flex h-11 items-center gap-2 rounded-full px-4.25 body-m transition-colors outline-none focus-visible:ring-3 focus-visible:ring-primary-800/40",
                active
                  ? "bg-secondary-400 text-neutral-950"
                  : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
              )}
            >
              {value === "all" ? (
                "All rating"
              ) : (
                <>
                  <Star aria-hidden="true" strokeWidth={0} className="size-5 fill-current text-neutral-900" />
                  {value}
                  <span className="sr-only"> star reviews</span>
                </>
              )}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {`Showing ${visible.length} ${visible.length === 1 ? "review" : "reviews"}`}
      </p>

      {visible.length > 0 ? (
        <ul className="mt-7 flex flex-col gap-6">
          {visible.map((review) => (
            <li key={review.name} className="rounded-xl border border-neutral-200 p-5 md:p-9.75">
              <div className="flex items-start gap-3">
                <Image
                  src={review.avatar}
                  alt=""
                  width={52}
                  height={52}
                  className="size-13 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1 self-center">
                  <p className="label-l text-neutral-950">{review.name}</p>
                  <p className="body-m text-neutral-600">{review.role}</p>
                </div>
                <time dateTime={review.date} className="shrink-0 body-m text-neutral-600">
                  {review.timeAgo}
                </time>
              </div>
              <StarRating
                rating={review.rating}
                label={`Rated ${review.rating} out of 5`}
                className="mt-6.5 gap-1.5"
                starClassName="size-5.5"
              />
              <p className="mt-6 body-m text-neutral-700">{review.quote}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-7 rounded-xl border border-dashed border-neutral-200 p-10 text-center body-m text-neutral-700">
          {`No ${filter}-star reviews yet.`}
        </p>
      )}
    </section>
  );
}
