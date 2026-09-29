"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/courses/course-card";
import { routes } from "@/constants/navigation";
import { courseCategories } from "@/data/categories";
import { cn } from "@/lib/utils";
import type { Course } from "@/types/course";

const FEATURED = "featured";

const chipRows = [
  [FEATURED, "music", "drawing-painting", "marketing", "animation", "social-media", "ui-ux-design", "creative-marketing"],
  ["digital-illustration", "film-video", "crafts", "freelance-entrepreneurship", "graphic-design", "photography"],
  ["productivity", "web-development", "data-science", "cooking"],
];

const labels: Record<string, string> = Object.fromEntries([
  [FEATURED, "Featured"],
  ...courseCategories.map((category) => [category.slug, category.label]),
]);

export function CourseExplorer({ courses }: { courses: Course[] }) {
  const [active, setActive] = useState(FEATURED);

  const visible =
    active === FEATURED
      ? courses.filter((course) => course.featured)
      : courses.filter((course) => course.categories.includes(active));

  return (
    <>
      <div
        role="group"
        aria-label="Filter courses by category"
        className="-mx-5 mt-8 flex gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:-mx-10 md:mt-10.75 md:px-10 lg:mx-0 lg:flex-wrap lg:justify-center lg:gap-x-4 lg:gap-y-5 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {chipRows.map((row, index) => (
          <div key={index} className="contents xl:flex xl:w-full xl:justify-center xl:gap-4">
            {row.map((slug) => {
              const isActive = slug === active;
              return (
                <button
                  key={slug}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(slug)}
                  className={cn(
                    "h-11 shrink-0 rounded-full px-4.5 body-m whitespace-nowrap transition-colors outline-none focus-visible:ring-3 focus-visible:ring-primary-800/30",
                    isActive
                      ? "bg-secondary-400 text-neutral-950"
                      : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                  )}
                >
                  {labels[slug]}
                </button>
              );
            })}
            {index === chipRows.length - 1 && (
              <Link
                href={routes.courses}
                className="inline-flex h-11 shrink-0 items-center body-m whitespace-nowrap text-primary-800 hover:underline"
              >
                + More
              </Link>
            )}
          </div>
        ))}
      </div>

      <div aria-live="polite" className="mt-8 md:mt-12 xl:mt-19">
        {visible.length > 0 ? (
          <ul className="grid gap-5 md:grid-cols-2 md:gap-4 lg:gap-6 xl:grid-cols-3 xl:gap-10">
            {visible.map((course) => (
              <li key={course.slug} className="flex min-w-0">
                <CourseCard course={course} className="w-full" />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-neutral-200 px-6 py-16 text-center">
            <p className="heading-xs text-ink">No {labels[active]} courses yet</p>
            <p className="max-w-md body-m text-neutral-400">
              New courses are added every week. Explore the full catalogue in the meantime.
            </p>
            <Button asChild variant="primary">
              <Link href={routes.courses}>Browse all courses</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
