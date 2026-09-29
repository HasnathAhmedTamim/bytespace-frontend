import Image from "next/image";

import { Container } from "@/components/shared/container";
import { testimonials, type Testimonial } from "@/data/testimonials";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="rounded-3xl bg-white p-6">
      <Image
        src={testimonial.avatar}
        alt=""
        width={80}
        height={80}
        className="size-20 rounded-full object-cover"
      />
      <figcaption className="mt-7">
        <p className="font-heading text-[1.1875rem]/[1.2] font-semibold text-black">{testimonial.name}</p>
        <p className="mt-px body-l text-primary-800">{testimonial.role}</p>
      </figcaption>
      <blockquote className="mt-6.25 body-m text-[#4f4f4f] md:body-l">
        <p>&quot;{testimonial.quote}&quot;</p>
      </blockquote>
    </figure>
  );
}

export function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-[#fafafa] pt-16 pb-14.5 md:pt-18.75"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[202px] left-1/2 h-[640px] w-[680px] -translate-1/2 bg-glow [--glow:rgb(212_251_32/0.57)]" />
        <div className="absolute top-[332px] -right-10 h-[1000px] w-[1300px] translate-x-1/2 -translate-y-1/2 bg-glow [--glow:rgb(212_251_32/0.46)]" />
        <div className="absolute bottom-13 left-30 h-[960px] w-[1040px] -translate-x-1/2 translate-y-1/2 bg-glow [--glow:rgb(0_59_226/0.23)]" />
      </div>

      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <h2 id="testimonials-heading" className="heading-s text-black md:heading-m lg:w-120 lg:shrink-0">
            Discover What Our Community Is Saying
          </h2>
          <p className="body-m text-[#4f4f4f] md:body-l lg:max-w-[36.375rem]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 md:mt-18 md:grid-cols-2 lg:-mx-0.5 lg:grid-cols-3 lg:gap-[2.5625rem]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
