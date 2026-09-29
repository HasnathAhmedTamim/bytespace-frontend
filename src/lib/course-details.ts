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
    description: [
      `${course.title} is a ${course.level.toLowerCase()} course from ${course.creator.displayName} that turns ${category.toLowerCase()} theory into skills you can use straight away. Every lesson is short, focused and built around a practical outcome.`,
      `You'll start with the core ideas and tools, then work through guided exercises that build on each other. By the end you'll have completed a hands-on project you can share, along with the confidence to keep going on your own.`,
    ],
    gallery: [],
    keyPoints: [
      `${category} Fundamentals`,
      "Tools and Workflow Setup",
      "Guided Hands-on Exercises",
      "Common Mistakes and How to Avoid Them",
      "Final Project and Feedback",
    ],
    modules: [
      {
        title: "Getting Started",
        summary: `Meet your instructor, set up your tools and get a clear map of everything ${course.title} covers.`,
      },
      {
        title: `${category} Fundamentals`,
        summary: `Learn the core ideas behind ${category.toLowerCase()} through short lessons and quick practice tasks.`,
      },
      {
        title: "Guided Practice",
        summary: "Work through step-by-step exercises that build on each other and turn theory into habit.",
      },
      {
        title: "Real-World Techniques",
        summary: "Explore the workflows professionals rely on and learn how to avoid the most common mistakes.",
      },
      {
        title: "Final Project",
        summary: "Bring everything together in a hands-on project you can share, with a checklist to review your work.",
      },
    ],
    progress: 0,
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
