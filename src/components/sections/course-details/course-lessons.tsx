import { Video } from "lucide-react";

import type { CourseDetail } from "@/types/course";

export function CourseLessons({ course }: { course: CourseDetail }) {
  return (
    <div>
      <section aria-labelledby="course-modules">
        <h2 id="course-modules" className="heading-xs text-neutral-950">
          Explore the Modules
        </h2>
        <p className="mt-6.5 body-m text-neutral-700">
          Immerse yourself in the course content as we break down each module into comprehensive lessons, providing
          practical insights and hands-on experiences.
        </p>
      </section>

      <section aria-labelledby="course-lesson-list" className="mt-6">
        <h2 id="course-lesson-list" className="heading-xs text-neutral-950">
          Lesson List
        </h2>
        <ol className="mt-6 flex flex-col gap-6.25">
          {course.modules.map((module, index) => (
            <li key={module.title} className="flex items-start gap-3 md:gap-3.5">
              <span
                aria-hidden="true"
                className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-secondary-400 text-neutral-950 md:size-18 md:rounded-2xl"
              >
                <Video className="size-7 md:size-9" />
              </span>
              <div className="min-w-0">
                <h3 className="label-m text-neutral-950">{`Module ${index + 1}: ${module.title}`}</h3>
                <p className="mt-1 body-m text-neutral-700">{module.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="course-lesson-content" className="mt-6">
        <h2 id="course-lesson-content" className="heading-xs text-neutral-950">
          Lesson Content
        </h2>
        <p className="mt-6.5 body-m text-neutral-700">
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive
          elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
      </section>

      <section aria-labelledby="course-progress" className="mt-6">
        <h2 id="course-progress" className="heading-xs text-neutral-950">
          Lesson Progress Tracking
        </h2>
        <p className="mt-6.5 body-m text-neutral-700">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through
          your learning journey.
        </p>
        <div className="mt-6 rounded-xl border border-neutral-200 p-4">
          <p id="course-progress-label" className="text-sm font-medium text-neutral-950">
            Learning Progress
          </p>
          <p className="mt-2 text-4xl leading-none font-bold text-neutral-950">{course.progress}%</p>
          <div
            role="progressbar"
            aria-labelledby="course-progress-label"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={course.progress}
            className="mt-2.75 h-2 overflow-hidden rounded-full bg-neutral-100"
          >
            <div className="h-full rounded-full bg-secondary-400" style={{ width: `${course.progress}%` }} />
          </div>
        </div>
      </section>
    </div>
  );
}
