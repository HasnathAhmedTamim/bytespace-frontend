import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { CourseExplorer } from "@/components/sections/home/course-explorer";
import { courses } from "@/data/courses";

export function DiscoverSection() {
  return (
    <section aria-labelledby="discover-heading" className="pt-12 md:pt-17">
      <Container>
        <SectionHeading
          id="discover-heading"
          title={
            <>
              Discover Your Passion,
              <br />
              Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          descriptionClassName="max-w-[58rem]"
        />
        <CourseExplorer courses={courses} />
      </Container>
    </section>
  );
}
