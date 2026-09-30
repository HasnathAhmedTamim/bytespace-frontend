import Image from "next/image";

import { CourseCard } from "@/components/courses/course-card";
import { HappyStudentsCard } from "@/components/shared/happy-students-card";
import { images } from "@/constants/images";
import { courses } from "@/data/courses";

const [backCourse, frontCourse] = ["build-digital-asset", "the-power-of-big-data"].map(
  (slug) => courses.find((course) => course.slug === slug)!,
);

export function AuthShowcase({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      inert
      className={className}
    >
      <div className="relative h-[calc(557px*var(--stage-scale))] [--stage-scale:0.75] 3xl:[--stage-scale:1]">
        <div className="absolute top-0 left-0 h-[557px] w-[496px] origin-top-left scale-(--stage-scale)">
          <CourseCard
            course={backCourse}
            tone="inverse"
            imageSizes="341px"
            className="absolute top-[90px] left-0 w-[373px]"
          />
          <CourseCard
            course={frontCourse}
            tone="inverse"
            imageSizes="341px"
            className="absolute top-0 left-[111px] w-[373px]"
          />
          <HappyStudentsCard tone="lime" className="absolute top-[435px] left-[226px]" />
          <Image
            src={images.shapes.springWhite}
            alt=""
            width={177}
            height={176}
            className="absolute top-[321px] left-[350px] max-w-none"
          />
          <Image
            src={images.shapes.torusLimeRing}
            alt=""
            width={238}
            height={219}
            className="absolute top-[40px] left-[50px] w-[103px] max-w-none"
          />
          <Image
            src={images.shapes.pyramidLime}
            alt=""
            width={190}
            height={189}
            className="absolute top-[396px] left-[-27px] max-w-none"
          />
        </div>
      </div>
    </div>
  );
}
