import { images } from "@/constants/images";
import type { Creator } from "@/types/course";

export const purepearlStudio: Creator = {
  slug: "purepearl-studio",
  name: "purepearl studio",
  displayName: "PurePearl Studio",
  role: "Professional Creator",
  avatar: images.creators.purepearlStudio,
  bio: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
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
  },
  {
    slug: "pixel-pine-studio",
    name: "pixel pine studio",
    displayName: "Pixel Pine Studio",
    role: "Design Studio",
    avatar: images.creators.pixelPineStudio,
    bio: "Hands-on projects from working designers, built to sharpen your creative eye.",
  },
  {
    slug: "lumen-labs",
    name: "lumen labs",
    displayName: "Lumen Labs",
    role: "Tech Educator",
    avatar: images.creators.lumenLabs,
    bio: "Practical, industry-led courses that turn new skills into real results.",
  },
  {
    slug: "bluebird-school",
    name: "bluebird school",
    displayName: "Bluebird School",
    role: "Professional Creator",
    avatar: images.creators.bluebirdSchool,
    bio: "Friendly, step-by-step teaching for curious learners at every level.",
  },
];
