import { Section } from "@/components/shared/section";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <Section
      aria-labelledby="testimonials-heading"
      tone="subtle"
      className="relative isolate overflow-hidden"
      background={
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 inset-x-[max(0px,calc(50%-45rem))] -z-10">
          <div className="absolute -top-[241px] -right-[539px] size-[1137px] bg-orb blur-[20px] [--glow:rgb(203_252_1/0.4)]" />
          <div className="absolute -top-[138px] left-[calc(50%-325px)] size-[672px] bg-orb blur-[20px] [--glow:rgb(203_252_1/0.6)]" />
          <div className="absolute top-[149px] -left-[442px] size-[1137px] bg-orb blur-[20px] [--glow:rgb(0_59_226/0.24)]" />
        </div>
      }
    >
      <div className="pt-16 pb-14.25 md:pt-18.5">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:gap-10 3xl:-ml-0.5 3xl:gap-10.75">
          <h2
            id="testimonials-heading"
            className="heading-s text-black md:heading-m lg:leading-13.25 xl:w-120 xl:shrink-0 3xl:w-[36.0625rem]"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="body-m text-black-700 md:body-l lg:leading-7.25 xl:max-w-145 xl:min-w-0 xl:flex-1">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 md:mt-18 md:grid-cols-2 xl:grid-cols-3 xl:gap-[2.5625rem] 3xl:-mx-0.5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              nameClassName={index === 0 ? "lg:leading-6" : undefined}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
