export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type CourseCategory = {
  slug: string;
  label: string;
};

export type Creator = {
  slug: string;
  name: string;
  displayName: string;
  role: string;
  avatar: string;
  /** Larger square photo for the profile page; falls back to `avatar`. */
  portrait?: string;
  bio: string;
  headline: string;
  about: string[];
  followers: number;
};

export type Course = {
  slug: string;
  title: string;
  image: string;
  categories: string[];
  featured: boolean;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: CourseLevel;
  price: number;
  enrolled: number;
  creator: Creator;
};

export type CourseLesson = {
  title: string;
  duration: string;
};

export type CourseImage = {
  src: string;
  alt: string;
};

export type CourseModule = {
  title: string;
  summary: string;
};

export type CourseReview = {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  /** ISO date the review was posted. */
  date: string;
  quote: string;
};

/** Number of reviews per star rating, from 5 stars down to 1. */
export type RatingCounts = [number, number, number, number, number];

export type CourseDetail = Course & {
  headline: string;
  subtitle: string;
  reviews: number;
  preview: string;
  lessonPreview: CourseLesson[];
  pitch: string;
  description: string[];
  gallery: CourseImage[];
  keyPoints: string[];
  modules: CourseModule[];
  /** Learner progress through the course, 0–100. */
  progress: number;
  reviewsIntro: string;
  ratingCounts: RatingCounts;
  learnerReviews: CourseReview[];
};
