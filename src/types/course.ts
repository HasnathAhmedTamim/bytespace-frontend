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
  bio: string;
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
};
