import { images } from "@/constants/images";
import { purepearlStudio } from "@/data/creators";
import type { Course } from "@/types/course";

const defaults = {
  featured: true,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  level: "Beginner",
  price: 25,
  enrolled: 26,
  creator: purepearlStudio,
} satisfies Partial<Course>;

export const courses: Course[] = [
  {
    ...defaults,
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: images.courses.figma,
    categories: ["ui-ux-design", "graphic-design"],
  },
  {
    ...defaults,
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    image: images.courses.digitalAsset,
    categories: ["graphic-design", "digital-illustration"],
    lessons: 112,
    duration: "24 hours",
    rating: 4.8,
    level: "Intermediate",
    enrolled: 199,
  },
  {
    ...defaults,
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    image: images.courses.bigData,
    categories: ["data-science"],
  },
  {
    ...defaults,
    slug: "balancing-productivity-and-wellbeing",
    title: "Balancing Productivity and Wellbeing",
    image: images.courses.productivity,
    categories: ["productivity"],
  },
  {
    ...defaults,
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    image: images.courses.money,
    categories: ["freelance-entrepreneurship"],
  },
  {
    ...defaults,
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: images.courses.startup,
    categories: ["freelance-entrepreneurship", "marketing"],
  },
];
