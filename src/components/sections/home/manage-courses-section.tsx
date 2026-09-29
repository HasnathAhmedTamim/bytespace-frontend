import Image from "next/image";

import { Container } from "@/components/shared/container";
import { HappyStudentsCard } from "@/components/shared/happy-students-card";
import { images } from "@/constants/images";

const benefits = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

type StatCardProps = { title: string; period: string; amount: string; children: React.ReactNode };

function StatCard({ title, period, amount, children }: StatCardProps) {
  return (
    <div className="rounded-xl bg-primary-800 p-4 text-neutral-50">
      <p className="body-m leading-5">{title}</p>
      <p className="font-sans text-[0.625rem] leading-none">{period}</p>
      <p className="mt-2.5 font-sans text-2xl/[1.2] font-bold tracking-[-0.04em]">{amount}</p>
      <div className="mt-2.5 flex">{children}</div>
    </div>
  );
}

export function ManageCoursesSection() {
  return (
    <section
      aria-labelledby="manage-courses-heading"
      className="pt-8 pb-16 md:pt-10 md:pb-24 xl:pt-9 xl:pb-30"
    >
      <Container className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-10">
        <div className="lg:max-w-[36.1875rem] lg:flex-1">
          <h2 id="manage-courses-heading" className="heading-s text-balance text-neutral-950 md:heading-m">
            Create &amp; Manage Courses Easily.
          </h2>
          <p className="mt-6 body-m text-neutral-700 md:mt-10 md:body-l">
            <strong className="font-bold text-neutral-950">ByteSpace</strong> supports individuals or entities in the
            creation, publication, and administration of educational courses.
          </p>
          <ul className="mt-8 flex flex-col gap-[1.15rem] md:mt-11">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 label-l text-neutral-950">
                <Image src={images.icons.checkCircle} alt="" width={20} height={20} className="mx-0.5 size-5 shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto h-[calc(596px*var(--stage-scale))] w-[calc(542px*var(--stage-scale))] shrink-0 [--stage-scale:0.64] sm:[--stage-scale:0.9] lg:mx-0 lg:[--stage-scale:0.75] xl:[--stage-scale:1]">
          <div inert className="absolute top-0 left-0 h-[596px] w-[542px] origin-top-left scale-(--stage-scale)">
            <div className="absolute top-[44px] left-px w-58">
              <StatCard title="Total Revenue" period="July 1-28" amount="$120.29">
                <div className="h-2 w-full rounded-full bg-white">
                  <div className="h-full w-[56%] rounded-full bg-secondary-400" />
                </div>
              </StatCard>
            </div>
            <div className="absolute top-0 -left-23.5 h-[596px] w-[682px] overflow-hidden drop-shadow-[0_30px_35px_rgb(0_0_0/0.56)]">
              <Image
                src={images.people.studentTablet}
                alt=""
                width={682}
                height={682}
                sizes="682px"
                className="max-w-none"
              />
            </div>
            <Image
              src={images.shapes.springLime}
              alt=""
              width={217}
              height={216}
              className="absolute top-[115px] left-[305px] max-w-none"
            />
            <div className="absolute top-[194px] left-px w-33.5">
              <StatCard title="Year to Date" period="2023" amount="$1,200.38">
                <span className="grid h-6 place-items-center rounded-full bg-secondary-500 px-2 font-sans text-[0.625rem] font-medium text-neutral-950">
                  +12$
                </span>
              </StatCard>
            </div>
            <HappyStudentsCard variant="compact" className="absolute top-[413px] left-[284px]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
