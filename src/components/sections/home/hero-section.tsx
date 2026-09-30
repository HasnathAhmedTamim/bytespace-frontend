import Form from "next/form";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "@/components/shared/icons";
import { SearchSubmitButton } from "@/components/shared/search-status";
import { Section } from "@/components/shared/section";
import { HeroCards } from "@/components/sections/home/hero-cards";
import { HeroShapes } from "@/components/sections/home/hero-shapes";
import { images } from "@/constants/images";
import { routes } from "@/constants/navigation";

export function HeroSection() {
  return (
    <Section
      tone="brand"
      clearHeader
      className="relative isolate overflow-hidden"
      background={<HeroShapes />}
      containerClassName="relative flex flex-col items-center pt-10 text-center md:pt-9 lg:pt-12.25"
      bleed={
        <div className="relative h-[calc(510px*var(--stage-scale))] [--stage-scale:0.5] sm:[--stage-scale:0.6] md:[--stage-scale:0.75] lg:[--stage-scale:0.9] xl:[--stage-scale:1]">
          <div className="absolute top-0 left-1/2 h-[510px] w-360 -translate-x-1/2 origin-top scale-(--stage-scale)">
            <div
              aria-hidden="true"
              className="absolute top-[68px] left-[145px] size-[1149px] rounded-full border-[320px] border-secondary-500"
            />
            <Image
              src={images.hero.student}
              alt="Smiling student wearing headphones and holding a laptop"
              width={722}
              height={515}
              preload
              sizes="(min-width: 1280px) 722px, (min-width: 1024px) 650px, (min-width: 768px) 542px, 434px"
              className="absolute bottom-0 left-[410px] h-[515px] w-[722px] max-w-none"
            />
            <HeroCards />
          </div>
        </div>
      }
    >
        <h1 className="max-w-[58.4375rem] heading-s text-white sm:heading-m lg:heading-l lg:leading-21.5">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-4 max-w-[52rem] body-m text-neutral-100 md:mt-8 md:body-l lg:leading-7.25">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <Form
          action={routes.courses}
          role="search"
          className="mt-8 flex w-full max-w-[36.3125rem] items-start gap-2.5 md:mt-12 md:gap-4 lg:mt-15"
        >
          <label htmlFor="hero-search" className="sr-only">
            Search courses
          </label>
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-6 size-5 -translate-y-1/2 text-neutral-400 md:size-6" />
            <Input
              id="hero-search"
              name="q"
              type="search"
              variant="pill"
              placeholder="Course, topic, creator"
              autoComplete="off"
              className="rounded-3xl border-transparent pl-13 focus-visible:border-secondary-400 focus-visible:ring-secondary-400/40 md:pl-14 md:text-lg"
            />
          </div>
          <SearchSubmitButton className="h-11.5 w-22 shrink-0 md:w-26 md:text-lg" />
        </Form>
    </Section>
  );
}
