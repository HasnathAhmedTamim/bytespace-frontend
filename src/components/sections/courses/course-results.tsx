import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CourseCard } from "@/components/courses/course-card";
import { Section } from "@/components/shared/section";
import { Pagination } from "@/components/shared/pagination";
import { routes } from "@/constants/navigation";
import { catalogue } from "@/data/catalogue";
import { courseResultsId, coursesHref, queryCourses, type CourseFilters } from "@/lib/course-filters";
import { cn } from "@/lib/utils";
import type { Course } from "@/types/course";

type CourseResultsProps = {
  filters: CourseFilters;
  courses?: readonly Course[];
  /** Page the filters and pagination link to; defaults to the Courses page. */
  pathname?: string;
  className?: string;
};

export function CourseResults({ filters, courses = catalogue, pathname = routes.courses, className }: CourseResultsProps) {
  const { items, total, page, pageCount, start } = queryCourses(courses, filters);

  return (
    <Section
      id={courseResultsId}
      aria-labelledby="course-results-heading"
      className={cn("scroll-mt-(--header-height) pt-10 pb-16 md:pt-12 md:pb-20 xl:pt-19 xl:pb-18 3xl:pt-19.25", className)}
    >
        <h2 id="course-results-heading" className="sr-only">
          Courses
        </h2>
        <p aria-live="polite" className="sr-only">
          {total > 0
            ? `Showing ${start + 1}–${start + items.length} of ${total} courses`
            : "No courses match your filters"}
        </p>

        {items.length > 0 ? (
          <ul className="grid gap-5 md:grid-cols-2 md:gap-4 lg:gap-6 xl:grid-cols-3 xl:gap-10 3xl:pl-px">
            {items.map((course, index) => (
              <li key={course.slug} className="flex min-w-0">
                <CourseCard course={course} className="w-full" imagePreload={index < 3} />
              </li>
            ))}
          </ul>
        ) : (
          <Card variant="dashed" className="flex flex-col items-center gap-4 px-6 py-16 text-center">
            <p className="heading-xs text-ink">No courses found</p>
            <p className="max-w-md body-m text-neutral-400">
              Try a different search term or remove some filters to see more courses.
            </p>
            <Button asChild variant="primary">
              <Link href={coursesHref({}, {}, undefined, pathname)}>Clear all filters</Link>
            </Button>
          </Card>
        )}

        <Pagination
          page={page}
          pageCount={pageCount}
          hrefForPage={(target) => coursesHref(filters, { page: target }, courseResultsId, pathname)}
          className="mt-12 md:mt-16 xl:mt-18"
        />
    </Section>
  );
}
