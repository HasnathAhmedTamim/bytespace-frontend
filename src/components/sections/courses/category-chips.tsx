import Link from "next/link";

import { coursesHref, optionLabel, categoryOptions, type CourseFilters } from "@/lib/course-filters";
import { cn } from "@/lib/utils";

const quickCategories = [
  "music",
  "drawing-painting",
  "marketing",
  "animation",
  "social-media",
  "ui-ux-design",
  "creative-marketing",
  "cooking",
];

export function CategoryChips({ filters }: { filters: CourseFilters }) {
  const chips = [
    { slug: undefined, label: "Featured" },
    ...quickCategories.map((slug) => ({ slug, label: optionLabel(categoryOptions, slug) ?? slug })),
  ];

  return (
    <nav aria-label="Quick categories" className="-mx-5 mt-5 md:-mx-10 md:mt-7 xl:mx-0 xl:mt-8">
      <ul className="flex gap-3 overflow-x-auto px-5 py-1 [scrollbar-width:none] md:gap-4 md:px-10 xl:justify-between xl:gap-3 xl:overflow-visible xl:px-0 xl:py-0 [&::-webkit-scrollbar]:hidden">
        {chips.map(({ slug, label }) => {
          const isActive = filters.category === slug;
          return (
            <li key={label} className="shrink-0">
              <Link
                href={coursesHref(filters, { category: slug })}
                scroll={false}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "inline-flex h-11 items-center rounded-full px-4.5 body-m whitespace-nowrap transition-colors outline-none focus-visible:ring-3 focus-visible:ring-primary-800/30",
                  isActive
                    ? "bg-secondary-400 text-neutral-950"
                    : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
