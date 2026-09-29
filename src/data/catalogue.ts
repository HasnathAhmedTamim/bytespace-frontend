import { images } from "@/constants/images";
import { courses, purepearlStudio } from "@/data/courses";
import type { Course, CourseLevel, Creator } from "@/types/course";

const creators: Creator[] = [
  purepearlStudio,
  { slug: "northwind-academy", name: "northwind academy" },
  { slug: "pixel-pine-studio", name: "pixel pine studio" },
  { slug: "lumen-labs", name: "lumen labs" },
  { slug: "bluebird-school", name: "bluebird school" },
];

const categoryImages: Record<string, string[]> = {
  "ui-ux-design": [images.courses.figma, images.courses.digitalAsset],
  "graphic-design": [images.courses.digitalAsset, images.courses.figma],
  "drawing-painting": [images.courses.figma],
  "digital-illustration": [images.courses.digitalAsset, images.courses.figma],
  animation: [images.courses.digitalAsset],
  crafts: [images.courses.figma],
  "data-science": [images.courses.bigData, images.courses.money],
  "web-development": [images.courses.bigData, images.courses.productivity],
  productivity: [images.courses.productivity],
  music: [images.courses.productivity],
  "film-video": [images.courses.productivity, images.courses.startup],
  photography: [images.courses.productivity],
  cooking: [images.courses.startup],
  "freelance-entrepreneurship": [images.courses.money, images.courses.startup],
  marketing: [images.courses.startup, images.courses.money],
  "creative-marketing": [images.courses.startup],
  "social-media": [images.courses.startup, images.courses.digitalAsset],
};

const titlesByCategory: Record<string, string[]> = {
  music: ["Music Production Fundamentals", "Songwriting for Beginners", "Mixing and Mastering at Home", "Piano Chords Made Simple"],
  "drawing-painting": ["Watercolor Landscapes", "Drawing People with Confidence", "Acrylic Painting Basics", "Sketchbook Habits for Artists"],
  marketing: ["Marketing Strategy Essentials", "Email Marketing That Converts", "SEO for Small Businesses", "Brand Positioning Workshop"],
  animation: ["2D Animation with After Effects", "Character Animation Basics", "Motion Design for UI", "Stop Motion at Home"],
  "social-media": ["Grow on Instagram", "Short-Form Video Strategy", "Social Media Content Calendar", "Community Management 101"],
  "ui-ux-design": ["UX Research Methods", "Design Systems in Figma", "Mobile App UI Design", "Prototyping Interactions", "Accessibility for Designers"],
  "creative-marketing": ["Creative Campaign Thinking", "Copywriting for Brands", "Storytelling for Marketers", "Visual Branding Kit"],
  "digital-illustration": ["Procreate for Beginners", "Vector Illustration Techniques", "Editorial Illustration", "Flat Icon Design"],
  "film-video": ["Filmmaking on a Phone", "Video Editing with Premiere Pro", "Color Grading Basics", "Documentary Storytelling"],
  crafts: ["Hand Lettering Basics", "Modern Calligraphy", "Paper Craft Projects", "Handmade Jewelry Design"],
  "freelance-entrepreneurship": ["Launch Your Freelance Career", "Pricing Your Services", "Building a Client Pipeline", "Business Plan Bootcamp"],
  "graphic-design": ["Graphic Design Principles", "Typography Masterclass", "Logo Design Process", "Poster Design Studio", "Color Theory for Designers"],
  photography: ["Smartphone Photography", "Portrait Lighting Basics", "Lightroom Editing Workflow", "Street Photography"],
  productivity: ["Deep Work Habits", "Time Blocking Mastery", "Notion for Personal Productivity", "Remote Work Essentials"],
  "web-development": ["HTML & CSS from Scratch", "Modern JavaScript", "React for Beginners", "Next.js in Practice", "Responsive Web Design"],
  "data-science": ["Python for Data Analysis", "SQL for Everyone", "Data Visualization Basics", "Intro to Machine Learning", "Excel Dashboards"],
  cooking: ["Everyday Italian Cooking", "Baking Bread at Home", "Healthy Meal Prep", "Knife Skills 101"],
};

const levels: CourseLevel[] = ["Beginner", "Intermediate", "Advanced"];
const prices = [19, 25, 29, 35, 39, 49];
const ratings = [4.9, 4.5, 4.7, 4.2, 4.8, 3.9, 4.6, 4.4, 4.1, 4.3];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const additionalCourses: Course[] = Object.entries(titlesByCategory).flatMap(([category, titles], categoryIndex) =>
  titles.map((title, titleIndex) => {
    const i = categoryIndex * 5 + titleIndex;
    const categoryPool = categoryImages[category];
    const hours = 1 + (i % 6);
    const minutes = 5 + ((i * 13) % 55);

    return {
      slug: slugify(title),
      title,
      image: categoryPool[titleIndex % categoryPool.length],
      categories: [category],
      featured: false,
      lessons: 8 + ((i * 7) % 29),
      duration: `${hours} ${hours === 1 ? "hour" : "hours"} ${minutes} mins`,
      comments: 5 + ((i * 17) % 90),
      rating: ratings[i % ratings.length],
      level: levels[(i + titleIndex) % levels.length],
      price: i % 7 === 3 ? 0 : prices[i % prices.length],
      enrolled: 12 + ((i * 29) % 88),
      creator: creators[i % creators.length],
    } satisfies Course;
  })
);

export const catalogue: Course[] = [...courses, ...additionalCourses];
