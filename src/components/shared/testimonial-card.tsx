import Image from "next/image";

import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
  nameClassName?: string;
};

export function TestimonialCard({ testimonial, className, nameClassName }: TestimonialCardProps) {
  return (
    <Card asChild variant="plain">
      <figure className={cn("flex flex-col gap-6 p-6", className)}>
        <Image
          src={testimonial.avatar}
          alt=""
          width={80}
          height={80}
          className="size-20 rounded-full object-cover"
        />
        <figcaption>
          <p className={cn("heading-xs leading-7 text-black", nameClassName)}>{testimonial.name}</p>
          <p className="body-l text-primary-800 lg:leading-7.25">{testimonial.role}</p>
        </figcaption>
        <blockquote className="body-m text-black-700 md:body-l lg:leading-7.25">
          <p>&quot;{testimonial.quote}&quot;</p>
        </blockquote>
      </figure>
    </Card>
  );
}
