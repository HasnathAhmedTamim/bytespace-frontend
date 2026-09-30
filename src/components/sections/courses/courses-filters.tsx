import { Section } from "@/components/shared/section";
import { CategoryChips } from "@/components/sections/courses/category-chips";
import { CoursesToolbar } from "@/components/sections/courses/courses-toolbar";
import type { CourseFilters } from "@/lib/course-filters";

export function CoursesFilters({ filters }: { filters: CourseFilters }) {
  return (
    <Section aria-label="Course filters" containerClassName="@container">
      <div className="pt-10 md:pt-14 xl:pt-18 3xl:frame-zoom">
        <CoursesToolbar filters={filters} />
        <CategoryChips filters={filters} />
      </div>
    </Section>
  );
}
