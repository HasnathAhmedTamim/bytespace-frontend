import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CourseReviews } from "@/components/sections/course-details/course-reviews";
import { getCourseDetail } from "@/lib/course-details";

export const revalidate = 86400;

export async function generateMetadata({ params }: PageProps<"/courses/[slug]/reviews">): Promise<Metadata> {
  const course = getCourseDetail((await params).slug);
  if (!course) return {};

  return {
    title: `Reviews · ${course.headline}`,
    description: `Read what learners say about ${course.title} and see its rating breakdown.`,
  };
}

export default async function CourseReviewsPage({ params }: PageProps<"/courses/[slug]/reviews">) {
  const course = getCourseDetail((await params).slug);
  if (!course) notFound();

  return <CourseReviews course={course} />;
}
