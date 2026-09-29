import { Container } from "@/components/shared/container";
import { CategoryChips } from "@/components/sections/courses/category-chips";
import { CoursesToolbar } from "@/components/sections/courses/courses-toolbar";
import type { CourseFilters } from "@/lib/course-filters";

export function CoursesFilters({ filters }: { filters: CourseFilters }) {
  return (
    <section aria-label="Course filters" className="pt-10 md:pt-14 xl:pt-18">
      <Container>
        <CoursesToolbar filters={filters} />
        <CategoryChips filters={filters} />
      </Container>
    </section>
  );
}
