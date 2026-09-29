import { images } from "@/constants/images";
import type { Course, CourseDetail } from "@/types/course";

type CourseDetailContent = Omit<CourseDetail, keyof Course>;

export const courseDetailContent: Record<string, CourseDetailContent> = {
  "build-digital-asset": {
    headline: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    reviews: 172,
    preview: images.previews.digitalAsset,
    lessonPreview: [
      { title: "Introduction to Digital Assets", duration: "12 mins" },
      { title: "Design Principles for Impacts", duration: "21 mins" },
      { title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
    ],
    pitch: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  },
};
