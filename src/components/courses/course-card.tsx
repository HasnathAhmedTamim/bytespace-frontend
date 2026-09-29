import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { images } from "@/constants/images";
import { routes } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import type { Course } from "@/types/course";

function LevelIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <rect x="1.5" y="9" width="3" height="5.5" rx="1" />
      <rect x="6.5" y="5.5" width="3" height="9" rx="1" />
      <rect x="11.5" y="1.5" width="3" height="13" rx="1" />
    </svg>
  );
}

type CourseCardProps = {
  course: Course;
  className?: string;
  imageSizes?: string;
};

export function CourseCard({
  course,
  className,
  imageSizes = "(min-width: 1280px) 341px, (min-width: 768px) 45vw, 90vw",
}: CourseCardProps) {
  const meta = [`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`];

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-3xl border border-neutral-200 bg-white p-3.75 pb-4.5 transition-shadow duration-300 hover:shadow-float",
        className
      )}
    >
      <div className="relative aspect-341/196 overflow-hidden rounded-lg bg-neutral-100">
        <Image
          src={course.image}
          alt=""
          fill
          sizes={imageSizes}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <ul className="absolute inset-x-2.5 bottom-5 flex flex-wrap gap-1.5 xl:inset-x-3 xl:gap-3">
          {meta.map((item) => (
            <li
              key={item}
              className="flex h-6.5 items-center rounded-full bg-white/50 px-2 body-xs whitespace-nowrap text-neutral-700 backdrop-blur-sm xl:px-3"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4.75 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate heading-xs text-black">
            <Link
              href={routes.course(course.slug)}
              className="outline-none after:absolute after:inset-0 after:rounded-3xl focus-visible:after:ring-3 focus-visible:after:ring-primary-800/40"
            >
              {course.title}
            </Link>
          </h3>
          <p className="body-xs text-neutral-700">
            by{" "}
            <Link
              href={routes.creator(course.creator.slug)}
              className="relative z-10 text-primary-800 hover:underline"
            >
              {course.creator.name}
            </Link>
          </p>
        </div>
        <p className="flex shrink-0 items-center gap-1.5 font-sans text-xl leading-[1.6] text-neutral-700">
          <span className="sr-only">Rated</span>
          {course.rating}
          <Star aria-hidden="true" className="size-4 fill-neutral-200 text-neutral-200" />
        </p>
      </div>

      <div className="mt-4.5 flex items-center gap-3">
        <span className="inline-flex h-8 items-center gap-2 rounded-full bg-neutral-50 pr-3 pl-3.5 label-xs font-normal text-neutral-700">
          <LevelIcon className="size-4" />
          {course.level}
        </span>
        <div className="flex items-center -space-x-2" aria-label={`${course.enrolled}+ students enrolled`}>
          {images.avatars.slice(0, 4).map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={32}
              height={32}
              className="size-8 rounded-full border-2 border-white object-cover"
            />
          ))}
          <span
            aria-hidden="true"
            className="relative grid size-8 place-items-center rounded-full bg-secondary-400 label-xs text-neutral-950"
          >
            {course.enrolled}+
          </span>
        </div>
      </div>

      <p className="mt-4 flex items-baseline font-sans">
        <span className="text-xl leading-[1.2] font-bold text-primary-800">${course.price}</span>
        <span className="body-xs text-neutral-700">/lifetime</span>
      </p>
    </article>
  );
}
