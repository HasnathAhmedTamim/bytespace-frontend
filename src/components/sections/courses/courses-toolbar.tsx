"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { FilterMenu } from "@/components/courses/filter-menu";
import { CategoryIcon, FunnelIcon, LevelIcon, SortIcon } from "@/components/courses/filter-icons";
import {
  categoryOptions,
  coursesHref,
  defaultSort,
  levelOptions,
  optionLabel,
  priceOptions,
  ratingOptions,
  sortOptions,
  type CourseFilters,
  type FilterKey,
} from "@/lib/course-filters";

export function CoursesToolbar({ filters }: { filters: CourseFilters }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const select = (key: FilterKey, value: string | undefined) => {
    startTransition(() => router.push(coursesHref(filters, { [key]: value }), { scroll: false }));
  };

  const extraFilterCount = [filters.price, filters.rating].filter(Boolean).length;

  return (
    <div
      aria-busy={isPending}
      className="flex flex-wrap items-center justify-between gap-2 md:gap-4"
    >
      <div role="group" aria-label="Filter courses" className="flex flex-wrap gap-2 md:gap-4 3xl:-ml-px">
        <FilterMenu
          label="Filter"
          icon={<FunnelIcon />}
          active={extraFilterCount > 0}
          badge={extraFilterCount}
          groups={[
            { key: "price", label: "Price", options: priceOptions, value: filters.price, allLabel: "Any price" },
            { key: "rating", label: "Rating", options: ratingOptions, value: filters.rating, allLabel: "Any rating" },
          ]}
          onSelect={select}
        />
        <FilterMenu
          label={optionLabel(levelOptions, filters.level) ?? "Level"}
          icon={<LevelIcon />}
          active={Boolean(filters.level)}
          groups={[{ key: "level", options: levelOptions, value: filters.level, allLabel: "All levels" }]}
          onSelect={select}
        />
        <FilterMenu
          label={optionLabel(categoryOptions, filters.category) ?? "Category"}
          icon={<CategoryIcon />}
          active={Boolean(filters.category)}
          groups={[{ key: "category", options: categoryOptions, value: filters.category, allLabel: "All categories" }]}
          contentClassName="max-h-(--radix-dropdown-menu-content-available-height) md:max-h-96"
          onSelect={select}
        />
      </div>

      <FilterMenu
        label={optionLabel(sortOptions, filters.sort ?? defaultSort) ?? "Sort"}
        icon={<SortIcon />}
        align="end"
        groups={[{ key: "sort", label: "Sort by", options: sortOptions, value: filters.sort ?? defaultSort }]}
        onSelect={select}
      />
    </div>
  );
}
