import Image from "next/image";
import Link from "next/link";
import { LevelIcon } from "@/components/courses/filter-icons";
import { CourseImageTransition } from "@/components/shared/page-transition";
import { cardVariants } from "@/components/ui/card";
import { images } from "@/constants/images";
import { routes } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import type { Course } from "@/types/course";

function StarIcon({ large = false, className }: { large?: boolean; className?: string }) {
  return (
    <svg
      viewBox={large ? "0 0 24 24" : "-3.225 -3.725 30.45 30.45"}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

type CourseCardProps = {
  course: Course;
  tone?: "default" | "inverse";
  className?: string;
  imageSizes?: string;
  imagePreload?: boolean;
  /** Morph the image into the course page preview; only where each course appears once on the page. */
  imageTransition?: boolean;
};

export function CourseCard({
  course,
  tone = "default",
  className,
  imageSizes = "(min-width: 1280px) 341px, (min-width: 768px) 45vw, 90vw",
  imagePreload = false,
  imageTransition = false,
}: CourseCardProps) {
  const meta = [`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`];
  const isInverse = tone === "inverse";
  const image = (
    <Image
      src={course.image}
      alt=""
      fill
      sizes={imageSizes}
      preload={imagePreload}
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );

  return (
    <article
      className={cn(
        cardVariants(),
        "group relative flex flex-col p-3.75 transition-shadow duration-300 hover:shadow-float",
        isInverse ? "pb-3.75" : "pb-5",
        className
      )}
    >
      <div className="relative aspect-341/196 overflow-hidden rounded-lg bg-neutral-100">
        {imageTransition ? (
          <CourseImageTransition slug={course.slug}>
            <div className="absolute inset-0 overflow-hidden rounded-lg">{image}</div>
          </CourseImageTransition>
        ) : (
          image
        )}
        <ul
          className={cn(
            "absolute right-1 flex flex-wrap",
            isInverse ? "bottom-3.5 left-3 gap-3" : "bottom-5 left-2 gap-1 3xl:left-3 3xl:gap-3",
          )}
        >
          {meta.map((item) => (
            <li
              key={item}
              className={cn(
                "flex items-center rounded-3xl bg-neutral-50/60 label-xs whitespace-nowrap text-black-700 backdrop-blur-xs",
                isInverse ? "h-8 px-3 leading-5" : "h-6.5 px-2 3xl:px-3",
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className={cn("truncate heading-xs text-black", isInverse && "leading-7")}>
            <Link
              href={routes.course(course.slug)}
              className="outline-none after:absolute after:inset-0 after:rounded-3xl focus-visible:after:ring-3 focus-visible:after:ring-primary-800/40"
            >
              {course.title}
            </Link>
          </h3>
          <p className={cn("body-xs text-black-700", isInverse ? "leading-5" : "leading-4.75")}>
            by{" "}
            <Link
              href={routes.creator(course.creator.slug)}
              className="relative z-10 text-primary-800 hover:underline"
            >
              {course.creator.name}
            </Link>
          </p>
        </div>
        <p className={cn("flex shrink-0 items-center text-black-700", isInverse ? "label-l leading-7" : "body-l")}>
          <span className="sr-only">Rated</span>
          {course.rating}
          <StarIcon large={isInverse} className={cn("size-6", isInverse ? "text-secondary-400" : "text-neutral-200")} />
        </p>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="inline-flex h-8 items-center gap-1 rounded-3xl bg-neutral-50 px-3 label-xs text-neutral-700">
          <LevelIcon className="size-5" />
          {course.level}
        </span>
        <div className="flex items-center -space-x-2" aria-label={`${course.enrolled}+ students enrolled`}>
          {images.enrolledAvatars.map((src) => (
            <Image key={src} src={src} alt="" width={32} height={32} className="size-8 rounded-full object-cover" />
          ))}
          <span
            aria-hidden="true"
            className={cn(
              "relative grid size-8 place-items-center rounded-full label-xs",
              isInverse ? "bg-black text-white" : "bg-secondary-400 text-neutral-950",
            )}
          >
            {course.enrolled}+
          </span>
        </div>
      </div>

      <p className="mt-4 flex items-end">
        <span className="heading-xs text-primary-800">{course.price > 0 ? `$${course.price}` : "Free"}</span>
        {course.price > 0 && (
          <span className={cn("body-xs text-black-700", isInverse && "leading-5")}>/lifetime</span>
        )}
      </p>
    </article>
  );
}
