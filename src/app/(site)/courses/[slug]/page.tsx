import { notFound } from "next/navigation";

import { CourseAbout } from "@/components/sections/course-details/course-about";
import { getCourseDetail } from "@/lib/course-details";

export default async function CourseAboutPage({ params }: PageProps<"/courses/[slug]">) {
  const course = getCourseDetail((await params).slug);
  if (!course) notFound();

  return <CourseAbout course={course} />;
}
