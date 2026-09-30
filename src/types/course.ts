export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type CourseCategory = {
  slug: string;
  label: string;
};

export type Creator = {
  slug: string;
  name: string;
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
