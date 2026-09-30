import Image from "next/image";

import { CourseCard } from "@/components/courses/course-card";
import { Section } from "@/components/shared/section";
import { LearningProgressCard } from "@/components/shared/learning-progress-card";
import { images } from "@/constants/images";
import { courses } from "@/data/courses";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export function GrowthSection() {
  return (
    <Section
      aria-labelledby="growth-heading"
      className="pt-16 pb-8 md:pt-24 md:pb-10 xl:pt-30 xl:pb-9"
    >
      <div className="flex flex-col gap-12 xl:flex-row xl:items-center xl:gap-10 3xl:gap-15.75">
        <div className="xl:min-w-0 xl:flex-1 3xl:ml-px">
          <h2 id="growth-heading" className="max-w-143.5 heading-s text-balance text-neutral-950 md:heading-m lg:leading-13.25">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-6 max-w-[29.8125rem] body-m text-neutral-700 md:mt-10 md:body-l lg:leading-7.25">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
            journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
            career path entirely, we have the resources you need.
          </p>
          <dl className="mt-8 flex gap-10 md:mt-10 md:gap-14">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="body-m text-neutral-700 md:body-l lg:leading-7.25">{stat.label}</dt>
                <dd className="font-sans text-[1.75rem]/[1.3] font-medium tracking-[-0.01em] text-primary-800 md:text-[2.25rem]/[2.75rem]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto h-[calc(552px*var(--stage-scale))] w-[calc(578px*var(--stage-scale))] shrink-0 [--stage-scale:0.55] sm:[--stage-scale:0.9] xl:mx-0 xl:[--stage-scale:0.75] 3xl:-mr-4 3xl:[--stage-scale:1]">
          <div inert className="absolute top-0 left-0 h-[552px] w-[578px] origin-top-left scale-(--stage-scale)">
            <CourseCard
              course={courses[0]}
              tone="inverse"
              className="absolute top-0 left-0 w-[373px]"
              imageSizes="341px"
            />
            <Image
              src={images.people.studentLaptop}
              alt=""
              width={578}
              height={541}
              sizes="578px"
              className="absolute top-3 left-0 max-w-none drop-shadow-[0_30px_35px_rgb(0_0_0/0.56)]"
            />
            <LearningProgressCard className="absolute top-[213px] left-[345px]" />
            <Image
              src={images.shapes.springLimeUpright}
              alt=""
              width={216}
              height={216}
              className="absolute top-[67px] left-[406px] max-w-none"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
