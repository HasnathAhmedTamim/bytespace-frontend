import type { Metadata } from "next";

import { CourseResults } from "@/components/sections/courses/course-results";
import { CoursesFilters } from "@/components/sections/courses/courses-filters";
import { CoursesSearchBanner } from "@/components/sections/courses/courses-search-banner";
import { PendingNavigationProvider } from "@/components/shared/pending-navigation";
import { parseCourseFilters } from "@/lib/course-filters";

export const metadata: Metadata = {
  title: "Courses",
  description: "Browse and search ByteSpace courses by topic, category, level or creator.",
};

export default async function CoursesPage({ searchParams }: PageProps<"/courses">) {
  const filters = parseCourseFilters(await searchParams);

  return (
    <>
      <CoursesSearchBanner filters={filters} />
      <PendingNavigationProvider>
        <CoursesFilters filters={filters} />
        <CourseResults filters={filters} />
      </PendingNavigationProvider>
    </>
  );
}
