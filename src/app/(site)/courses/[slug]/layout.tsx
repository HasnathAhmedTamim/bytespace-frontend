import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CourseTabs } from "@/components/courses/course-tabs";
import { Container } from "@/components/shared/container";
import { CourseEnrollCard } from "@/components/sections/course-details/course-enroll-card";
import { CourseHero } from "@/components/sections/course-details/course-hero";
import { CoursePreview } from "@/components/sections/course-details/course-preview";
import { getCourseDetail, getCourseSlugs } from "@/lib/course-details";

export function generateStaticParams() {
  return getCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LayoutProps<"/courses/[slug]">): Promise<Metadata> {
  const course = getCourseDetail((await params).slug);
  if (!course) return {};

  return {
    title: course.headline,
    description: `${course.subtitle}. ${course.lessons} lessons by ${course.creator.displayName}.`,
  };
}

export default async function CourseLayout({ params, children }: LayoutProps<"/courses/[slug]">) {
  const course = getCourseDetail((await params).slug);
  if (!course) notFound();

  return (
    <div className="isolate overflow-x-clip pt-(--header-height)">
      <Container className="grid grid-cols-1 pb-16 md:pb-17 lg:grid-cols-[minmax(0,1fr)_22.5rem] lg:grid-rows-[auto_auto_1fr] lg:gap-x-10 xl:grid-cols-[minmax(0,1fr)_25.75rem] xl:gap-x-16">
        <div
          aria-hidden="true"
          className="-z-10 col-span-full row-span-2 row-start-1 -mx-[100vmax] -mt-(--header-height) -mb-10 bg-primary-800 bg-grid bg-position-[calc(50%+60px)_-2px] lg:-mb-15.5"
        />
        <CourseHero course={course} className="col-span-full row-start-1 pt-8 pb-8 md:pt-12 md:pb-10 xl:pt-18 xl:pb-14.5" />
        <CoursePreview course={course} className="col-start-1 row-start-2" />
        <CourseEnrollCard
          course={course}
          className="col-start-1 mt-20 self-start lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:mt-0"
        />
        <div className="col-start-1 mt-12 min-w-0 md:mt-16 lg:row-start-3 lg:mt-31.25">
          <CourseTabs slug={course.slug} />
          <div className="mt-9.5">{children}</div>
        </div>
      </Container>
    </div>
  );
}
