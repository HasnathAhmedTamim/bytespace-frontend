import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { CourseExplorer } from "@/components/sections/home/course-explorer";
import { courses } from "@/data/courses";

export function DiscoverSection() {
  return (
    <Section aria-labelledby="discover-heading" containerClassName="@container">
      <div className="pt-12 md:pt-18 3xl:frame-zoom">
        <SectionHeading
          id="discover-heading"
          className="md:gap-4"
          titleClassName="lg:leading-13.25"
          title={
            <>
              Discover Your Passion,
              <br />
              Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          descriptionClassName="max-w-[57.3125rem] lg:leading-7.25"
        />
        <CourseExplorer courses={courses} />
      </div>
    </Section>
  );
}
