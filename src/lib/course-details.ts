import { catalogue } from "@/data/catalogue";
import { courseCategories } from "@/data/categories";
import { courseDetailContent } from "@/data/course-details";
import type { Course, CourseDetail } from "@/types/course";

const previewDurations = ["12 mins", "18 mins", "9 mins", "24 mins", "15 mins", "21 mins"];

function fallbackContent(course: Course, index: number) {
  const category = courseCategories.find((item) => item.slug === course.categories[0])?.label ?? "creative";

  return {
    headline: course.title,
    subtitle: `Build real ${category.toLowerCase()} skills with step-by-step lessons and hands-on projects`,
    reviews: course.comments * 2 + (index % 9),
    preview: course.image,
    lessonPreview: [
      { title: "Welcome and Course Overview", duration: previewDurations[index % 6] },
      { title: `${category} Essentials`, duration: previewDurations[(index + 1) % 6] },
      { title: "Your First Hands-on Project", duration: previewDurations[(index + 2) % 6] },
    ],
    pitch: "Ready to Dive In? Enroll Now and Start Learning Something New Today!",
  };
}

export function getCourseDetail(slug: string): CourseDetail | undefined {
  const index = catalogue.findIndex((course) => course.slug === slug);
  if (index === -1) return undefined;

  const course = catalogue[index];
  return { ...course, ...(courseDetailContent[slug] ?? fallbackContent(course, index)) };
}

export function getCourseSlugs() {
  return catalogue.map((course) => course.slug);
}
