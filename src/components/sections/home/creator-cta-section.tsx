import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { images } from "@/constants/images";
import { routes } from "@/constants/navigation";

type Shape = {
  src: string;
  width: number;
  height: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

const shapes: Shape[] = [
  { src: images.shapes.springLime, width: 389, height: 387, left: -122, top: -162 },
  { src: images.shapes.springWhite, width: 177, height: 176, left: 178, top: 5 },
  { src: images.shapes.coneWhite, width: 140, height: 189, left: 0, bottom: 74 },
  { src: images.shapes.torusLime, width: 346, height: 190, left: 16, bottom: -1 },
  { src: images.shapes.pyramidLime, width: 190, height: 189, left: 1078, top: 0 },
  { src: images.shapes.cylinderWhite, width: 218, height: 372, right: -1, top: 5 },
  { src: images.shapes.springLimeFlat, width: 334, height: 199, left: 1107, bottom: 0 },
];

export function CreatorCtaSection() {
  return (
    <Section
      aria-labelledby="creator-cta-heading"
      tone="brand"
      className="@container relative isolate overflow-hidden bg-position-[calc(50%+60px*var(--grid-zoom,1))_calc(-2px*var(--grid-zoom,1))] 3xl:grid-zoom-full"
      containerClassName="flex flex-col items-center py-16 text-center md:pt-21.25 md:pb-21 3xl:frame-zoom-full"
      background={
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 hidden w-360 -translate-x-1/2 scale-90 lg:block xl:scale-100 3xl:frame-zoom-full"
        >
          {shapes.map((shape) => (
            <Image
              key={shape.src}
              src={shape.src}
              alt=""
              width={shape.width}
              height={shape.height}
              className="absolute max-w-none"
              style={{ left: shape.left, right: shape.right, top: shape.top, bottom: shape.bottom }}
            />
          ))}
        </div>
      }
    >
      <h2
        id="creator-cta-heading"
        className="max-w-150 heading-s text-balance text-neutral-50 md:heading-m md:text-wrap lg:leading-13.25"
      >
        Unlock Your Potential as a Creator with ByteSpace
      </h2>
      <p className="mt-6 max-w-[60.25rem] body-m text-neutral-50 md:mt-10 md:body-l lg:leading-7.25">
        Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
        become a part of a community comprising over 10,000 local and international creators. Utilize our Course
        Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
      </p>
      <Button asChild className="mt-8 h-11.5 md:mt-10 md:text-lg">
        <Link href={routes.signUp}>Join as Creator</Link>
      </Button>
    </Section>
  );
}
