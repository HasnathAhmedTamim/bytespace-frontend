import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section } from "@/components/shared/section";
import { CourseResults } from "@/components/sections/courses/course-results";
import { CoursesToolbar } from "@/components/sections/courses/courses-toolbar";
import { CreatorHero } from "@/components/sections/creators/creator-hero";
import { routes } from "@/constants/navigation";
import { catalogue } from "@/data/catalogue";
import { getCreator } from "@/data/creators";
import { categoryOptions, parseCourseFilters } from "@/lib/course-filters";

const creatorCoursesPerPage = 6;

export async function generateMetadata({ params }: PageProps<"/creators/[slug]">): Promise<Metadata> {
  const creator = getCreator((await params).slug);
  if (!creator) return {};

  return {
    title: creator.displayName,
    description: `${creator.headline}. Browse courses by ${creator.displayName} on ByteSpace.`,
  };
}

export default async function CreatorPage({ params, searchParams }: PageProps<"/creators/[slug]">) {
  const creator = getCreator((await params).slug);
  if (!creator) notFound();

  const filters = parseCourseFilters(await searchParams);
  const courses = catalogue.filter((course) => course.creator.slug === creator.slug);
  const categories = categoryOptions.filter((option) =>
    courses.some((course) => course.categories.includes(option.value))
  );
  const pathname = routes.creator(creator.slug);

  return (
    <>
      <CreatorHero creator={creator} products={courses.length} />
      <Section aria-label="Course filters" containerClassName="@container">
        <div className="pt-10 md:pt-12 xl:pt-15.5 3xl:frame-zoom">
          <CoursesToolbar filters={filters} pathname={pathname} categories={categories} />
        </div>
      </Section>
      <CourseResults
        filters={filters}
        courses={courses}
        pathname={pathname}
        perPage={creatorCoursesPerPage}
        className="pt-8 md:pt-10 xl:pt-10 xl:pb-15.25 3xl:pt-10"
        gridClassName="3xl:-ml-px 3xl:pl-0 3xl:pr-0.5"
      />
    </>
  );
}
