import Image from "next/image";

import { images } from "@/constants/images";
import type { CourseDetail } from "@/types/course";

export function CourseAbout({ course }: { course: CourseDetail }) {
  return (
    <div>
      <section aria-labelledby="course-description">
        <h2 id="course-description" className="heading-xs text-neutral-950">
          Description
        </h2>
        <div className="mt-6 flex max-w-[45.1875rem] flex-col gap-6.5 body-m leading-6.5 text-neutral-700">
          {course.description.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </section>

      {course.gallery.length > 0 && (
        <section aria-labelledby="course-sneak-peek" className="mt-6">
          <h2 id="course-sneak-peek" className="heading-xs text-neutral-950">
            Sneak Peak
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-4.75">
            {course.gallery.map((image) => (
              <li key={image.src} className="relative aspect-167/125 overflow-hidden rounded-xl bg-neutral-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1440px) 13vw, (min-width: 1280px) 167px, (min-width: 640px) 22vw, 45vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="course-key-points" className="mt-6">
        <h2 id="course-key-points" className="heading-xs text-neutral-950">
          Key Points
        </h2>
        <ul className="mt-6 flex flex-col gap-3">
          {course.keyPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 body-m leading-6.5 text-neutral-700">
              <Image
                src={images.icons.checkCircle}
                alt=""
                width={20}
                height={20}
                className="size-6 shrink-0 p-0.5"
              />
              {point}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
