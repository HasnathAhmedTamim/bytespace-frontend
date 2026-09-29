import { images } from "@/constants/images";
import { catalogue } from "@/data/catalogue";
import { courseCategories } from "@/data/categories";
import { courseDetailContent } from "@/data/course-details";
import type { Course, CourseDetail, CourseReview, RatingCounts } from "@/types/course";

const previewDurations = ["12 mins", "18 mins", "9 mins", "24 mins", "15 mins", "21 mins"];

const reviewers = [
  { name: "PurePearl Studio", role: "UI/UX Designer", avatar: images.reviewers.purepearlStudio },
  { name: "Albert Flores", role: "Product Designer", avatar: images.reviewers.albertFlores },
  { name: "Cody Fisher", role: "Frontend Developer", avatar: images.reviewers.codyFisher },
  { name: "Brooklyn Simmons", role: "Marketing Lead", avatar: images.reviewers.brooklynSimmons },
];

const reviewQuotes = [
  "Clear explanations and well-paced lessons. I could apply what I learned to my own projects straight away.",
  "The hands-on exercises made all the difference. Every module built nicely on the one before it.",
  "Great value for the price. The final project tied everything together and gave me something to show.",
  "Friendly, practical teaching. I finally understand the fundamentals instead of just copying steps.",
];

const reviewDates = ["2026-08-14", "2026-05-02", "2025-11-20", "2025-07-08"];

/** Splits `total` reviews across 5★–1★ so the average matches `rating`. */
function fallbackRatingCounts(total: number, rating: number): RatingCounts {
  const gap = 5 - rating;
  const [three, two, one] = [0.05 * gap, 0.03 * gap, 0.02 * gap];
  const tail = three + two + one;
  const five = Math.max(0, rating - (3 * three + 2 * two + one) - 4 * (1 - tail));
  const counts = [five, 1 - tail - five, three, two, one].map((share) => Math.round(total * share)) as RatingCounts;
  counts[1] += total - counts.reduce((sum, count) => sum + count, 0);

  const stars = counts.reduce((sum, count, index) => sum + count * (5 - index), 0);
  const shift = Math.round(rating * total - stars);
  const moved = shift > 0 ? Math.min(shift, counts[1]) : -Math.min(-shift, counts[0]);
  counts[0] += moved;
  counts[1] -= moved;
  return counts;
}

function fallbackReviews(index: number): CourseReview[] {
  return [5, 4, 5].map((rating, offset) => {
    const pick = (index + offset) % reviewers.length;
    return { ...reviewers[pick], rating, date: reviewDates[pick], quote: reviewQuotes[pick] };
  });
}

function fallbackContent(course: Course, index: number) {
  const category = courseCategories.find((item) => item.slug === course.categories[0])?.label ?? "creative";
  const reviews = course.comments * 2 + (index % 9);

  return {
    headline: course.title,
    subtitle: `Build real ${category.toLowerCase()} skills with step-by-step lessons and hands-on projects`,
    reviews,
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
    reviewsIntro: `Discover what our learners have to say about their experience with '${course.title}.' Read reviews and ratings from people who have already taken the course and put their new ${category.toLowerCase()} skills to work.`,
    ratingCounts: fallbackRatingCounts(reviews, course.rating),
    learnerReviews: fallbackReviews(index),
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
