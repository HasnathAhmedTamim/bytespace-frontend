import { images } from "@/constants/images";
import type { CourseCategory } from "@/types/course";

export const featuredCategories: (CourseCategory & { icon: string })[] = [
  { slug: "design", label: "Design", icon: images.categories.design },
  { slug: "development", label: "Development", icon: images.categories.development },
  { slug: "it-software", label: "IT & Software", icon: images.categories.itSoftware },
  { slug: "business", label: "Business", icon: images.categories.business },
  { slug: "marketing", label: "Marketing", icon: images.categories.marketing },
  { slug: "photography", label: "Photography", icon: images.categories.photography },
];

export const courseCategories: CourseCategory[] = [
  { slug: "music", label: "Music" },
  { slug: "drawing-painting", label: "Drawing & Painting" },
  { slug: "marketing", label: "Marketing" },
  { slug: "animation", label: "Animation" },
  { slug: "social-media", label: "Social Media" },
  { slug: "ui-ux-design", label: "UI/UX Design" },
  { slug: "creative-marketing", label: "Creative Marketing" },
  { slug: "digital-illustration", label: "Digital Illustration" },
  { slug: "film-video", label: "Film & Video" },
  { slug: "crafts", label: "Crafts" },
  { slug: "freelance-entrepreneurship", label: "Freelance & Entrepreneurship" },
  { slug: "graphic-design", label: "Graphic Design" },
  { slug: "photography", label: "Photography" },
  { slug: "productivity", label: "Productivity" },
  { slug: "web-development", label: "Web Development" },
  { slug: "data-science", label: "Data Science" },
  { slug: "cooking", label: "Cooking" },
];
