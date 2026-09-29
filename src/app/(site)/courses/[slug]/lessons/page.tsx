import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CourseLessons } from "@/components/sections/course-details/course-lessons";
import { getCourseDetail } from "@/lib/course-details";

export async function generateMetadata({ params }: PageProps<"/courses/[slug]/lessons">): Promise<Metadata> {
  const course = getCourseDetail((await params).slug);
  if (!course) return {};

  return {
    title: `Lessons · ${course.headline}`,
    description: `Explore the ${course.modules.length} modules of ${course.title} and track your learning progress.`,
  };
}

export default async function CourseLessonsPage({ params }: PageProps<"/courses/[slug]/lessons">) {
  const course = getCourseDetail((await params).slug);
  if (!course) notFound();

  return <CourseLessons course={course} />;
}
