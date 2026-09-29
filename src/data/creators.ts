import { images } from "@/constants/images";
import type { Creator } from "@/types/course";

export const purepearlStudio: Creator = {
  slug: "purepearl-studio",
  name: "purepearl studio",
  displayName: "PurePearl Studio",
  role: "Professional Creator",
  avatar: images.creators.purepearlStudio,
  portrait: images.creators.purepearlStudioPortrait,
  bio: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  headline: "Passionate UI/UX, Web designer",
  about: [
    "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
    "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  ],
  followers: 12,
};

export const creators: Creator[] = [
  purepearlStudio,
  {
    slug: "northwind-academy",
    name: "northwind academy",
    displayName: "Northwind Academy",
    role: "Education Partner",
    avatar: images.creators.northwindAcademy,
    bio: "Clear, structured lessons that take you from first steps to confident practice.",
    headline: "Structured courses for curious minds",
    about: [
      "Northwind Academy builds clear, structured courses that take you from your very first steps to confident, everyday practice.",
      "Every lesson is short, focused and paired with an exercise, so you always know what to practise next.",
    ],
    followers: 248,
  },
  {
    slug: "pixel-pine-studio",
    name: "pixel pine studio",
    displayName: "Pixel Pine Studio",
    role: "Design Studio",
    avatar: images.creators.pixelPineStudio,
    bio: "Hands-on projects from working designers, built to sharpen your creative eye.",
    headline: "Working designers sharing real projects",
    about: [
      "Pixel Pine Studio is a small team of working designers who teach the way they work: through real, hands-on projects.",
      "Follow along to sharpen your creative eye, build a portfolio you're proud of and pick up the habits that keep projects on track.",
    ],
    followers: 96,
  },
  {
    slug: "lumen-labs",
    name: "lumen labs",
    displayName: "Lumen Labs",
    role: "Tech Educator",
    avatar: images.creators.lumenLabs,
    bio: "Practical, industry-led courses that turn new skills into real results.",
    headline: "Industry-led tech and data courses",
    about: [
      "Lumen Labs creates practical, industry-led courses in development, data and digital business.",
      "Each course is built around the tools and workflows teams use today, so new skills turn into real results quickly.",
    ],
    followers: 173,
  },
  {
    slug: "bluebird-school",
    name: "bluebird school",
    displayName: "Bluebird School",
    role: "Professional Creator",
    avatar: images.creators.bluebirdSchool,
    bio: "Friendly, step-by-step teaching for curious learners at every level.",
    headline: "Friendly lessons for every level",
    about: [
      "Bluebird School offers friendly, step-by-step teaching for curious learners at every level.",
      "Whether you're picking up a new hobby or growing your career, you'll find patient explanations and plenty of practice.",
    ],
    followers: 61,
  },
];

export function getCreator(slug: string) {
  return creators.find((creator) => creator.slug === slug);
}
