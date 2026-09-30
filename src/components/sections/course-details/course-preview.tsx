import Image from "next/image";

import { PreviewPlayButton } from "@/components/courses/preview-play-button";
import { CourseImageTransition } from "@/components/shared/page-transition";
import { cn } from "@/lib/utils";
import type { CourseDetail } from "@/types/course";

type CoursePreviewProps = {
  course: CourseDetail;
  className?: string;
};

export function CoursePreview({ course, className }: CoursePreviewProps) {
  return (
    <div className={cn("relative aspect-720/479 overflow-hidden rounded-3xl bg-neutral-100", className)}>
      <CourseImageTransition slug={course.slug}>
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <Image
            src={course.preview}
            alt=""
            fill
            preload
            sizes="(min-width: 1440px) 55vw, (min-width: 1280px) 720px, (min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
      </CourseImageTransition>
      <PreviewPlayButton
        title={course.title}
        className="absolute top-1/2 left-1/2 -translate-1/2 lg:top-[53.44%] lg:left-[52.22%]"
      />
    </div>
  );
}
