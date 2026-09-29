import Link from "next/link";
import { Star, Users } from "lucide-react";

import { LevelIcon } from "@/components/courses/filter-icons";
import { ShareButton } from "@/components/courses/share-button";
import { routes } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import type { CourseDetail } from "@/types/course";

type CourseHeroProps = {
  course: CourseDetail;
  className?: string;
};

export function CourseHero({ course, className }: CourseHeroProps) {
  const stats = [
    { icon: LevelIcon, label: course.level },
    { icon: Star, label: `${course.rating} (${course.reviews} reviews)`, filled: true },
    { icon: Users, label: `${course.enrolled} Students` },
  ];

  return (
    <div className={cn("flex flex-col items-start gap-6 lg:flex-row lg:justify-between lg:gap-10", className)}>
      <div className="min-w-0">
        <h1 className="heading-s text-balance text-white max-md:text-[1.75rem]">{course.headline}</h1>
        <p className="mt-2 heading-xs text-white max-md:text-base">{course.subtitle}</p>
        <p className="mt-6.25 label-l text-white max-md:text-base">
          by{" "}
          <Link
            href={routes.creator(course.creator.slug)}
            className="text-secondary-400 underline-offset-4 outline-none hover:underline focus-visible:underline"
          >
            {course.creator.name}
          </Link>
        </p>
        <ul className="mt-6 flex flex-wrap gap-2 md:gap-4" aria-label="Course highlights">
          {stats.map(({ icon: Icon, label, filled }) => (
            <li
              key={label}
              className="flex h-10 items-center gap-2 rounded-full bg-white px-4 label-m text-neutral-950 md:px-6"
            >
              <Icon aria-hidden="true" className={cn("size-6 text-primary-800", filled && "fill-current")} />
              {label}
            </li>
          ))}
        </ul>
      </div>
      <ShareButton title={course.title} />
    </div>
  );
}
