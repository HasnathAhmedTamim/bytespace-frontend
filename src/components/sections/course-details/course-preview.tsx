import Image from "next/image";

import { PreviewPlayButton } from "@/components/courses/preview-play-button";
import { cn } from "@/lib/utils";
import type { CourseDetail } from "@/types/course";

type CoursePreviewProps = {
  course: CourseDetail;
  className?: string;
};

export function CoursePreview({ course, className }: CoursePreviewProps) {
  return (
    <div className={cn("relative aspect-3/2 overflow-hidden rounded-2xl bg-neutral-100", className)}>
      <Image
        src={course.preview}
        alt=""
        fill
        preload
        sizes="(min-width: 1280px) 724px, (min-width: 1024px) 55vw, 100vw"
        className="object-cover"
      />
      <PreviewPlayButton title={course.title} className="absolute top-1/2 left-1/2 -translate-1/2" />
    </div>
  );
}
