import Image from "next/image";
import Link from "next/link";
import { FileText, IdCardLanyard, Speech, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import { routes } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import type { CourseDetail } from "@/types/course";

const includes = [
  { icon: FileText, label: "Learning Resources" },
  { icon: Video, label: "Quality Lesson Videos" },
  { icon: IdCardLanyard, label: "Certificate of Completion" },
  { icon: Speech, label: "Private Consultation" },
];

type CourseEnrollCardProps = {
  course: CourseDetail;
  className?: string;
};

export function CourseEnrollCard({ course, className }: CourseEnrollCardProps) {
  const moreLessons = course.lessons - course.lessonPreview.length;

  return (
    <aside
      aria-label="Enrolment"
      className={cn(
        "rounded-2xl border border-neutral-200 bg-white p-5.75 md:grid md:grid-cols-2 md:gap-x-12 md:p-9.75 lg:block",
        className
      )}
    >
      <div>
        <h2 className="heading-xs text-neutral-950">
          {course.lessons} Lessons ({course.duration})
        </h2>
        <ol className="mt-6.25 flex flex-col gap-3">
          {course.lessonPreview.map((lesson, index) => (
            <li key={lesson.title} className="flex items-baseline label-m text-neutral-950">
              <span className="w-8 shrink-0">{String(index + 1).padStart(2, "0")}</span>
              <span className="min-w-0 flex-1 pr-6 xl:pr-10">{lesson.title}</span>
              <span className="w-15 shrink-0 font-normal text-primary-800">{lesson.duration}</span>
            </li>
          ))}
        </ol>
        {moreLessons > 0 && <p className="mt-3 body-m text-neutral-700">{moreLessons} more videos</p>}

        <p className="mt-6 body-m text-neutral-700">{course.pitch}</p>
        <p className="mt-6.5 flex items-baseline font-sans text-primary-800">
          <span className="text-4xl leading-none font-bold">
            {course.price > 0 ? `$${course.price}` : "Free"}
          </span>
          {course.price > 0 && <span className="ml-1 body-m text-neutral-700">/lifetime</span>}
        </p>
        <Button asChild className="mt-5.25 h-11.5 w-full text-lg font-normal">
          <Link href={routes.signUp}>Enroll Now</Link>
        </Button>
      </div>

      <div>
        <h2 className="mt-6 heading-xs text-neutral-950 md:mt-0 lg:mt-6">This course include</h2>
        <ul className="mt-5.5 flex flex-col gap-3">
          {includes.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 body-m text-neutral-700">
              <Icon aria-hidden="true" className="size-6 shrink-0 p-0.5 text-primary-800" />
              {label}
            </li>
          ))}
        </ul>

        <hr className="mt-7 mb-6 border-neutral-200" />

        <div className="flex items-center gap-3.5">
          <Image
            src={course.creator.avatar}
            alt=""
            width={52}
            height={52}
            className="size-13 shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="label-l text-neutral-950">{course.creator.displayName}</p>
            <p className="body-m text-neutral-700">{course.creator.role}</p>
          </div>
        </div>
        <p className="mt-6.25 body-m text-neutral-700">{course.creator.bio}</p>
        <Button asChild variant="outline" className="mt-6 h-8.75 px-4 label-m text-neutral-700">
          <Link href={routes.creator(course.creator.slug)}>See Full Profile</Link>
        </Button>
      </div>
    </aside>
  );
}
