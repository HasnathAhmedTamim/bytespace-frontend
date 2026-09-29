import Form from "next/form";
import Image from "next/image";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/shared/container";
import { HeroCards } from "@/components/sections/home/hero-cards";
import { HeroShapes } from "@/components/sections/home/hero-shapes";
import { images } from "@/constants/images";
import { routes } from "@/constants/navigation";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-800 bg-grid pt-(--header-height)">
      <HeroShapes />

      <Container className="relative flex flex-col items-center pt-10 text-center md:pt-14 lg:pt-17">
        <h1 className="max-w-4xl heading-s text-white sm:heading-m lg:heading-l">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-4 max-w-[52rem] body-m text-white md:mt-8 md:body-l">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <Form
          action={routes.courses}
          role="search"
          className="mt-8 flex w-full max-w-[36.1875rem] items-start gap-2.5 md:mt-12 md:gap-4 lg:mt-15"
        >
          <label htmlFor="hero-search" className="sr-only">
            Search courses
          </label>
          <div className="relative flex-1">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-6 size-5 -translate-y-1/2 text-neutral-400"
            />
            <Input
              id="hero-search"
              name="q"
              type="search"
              variant="pill"
              placeholder="Course, topic, creator"
              autoComplete="off"
              className="rounded-3xl border-transparent pl-13 focus-visible:border-secondary-400 focus-visible:ring-secondary-400/40"
            />
          </div>
          <Button type="submit" className="h-11.5 w-22 shrink-0 md:w-25.5">
            Search
          </Button>
        </Form>
      </Container>

      <div className="relative h-[calc(510px*var(--stage-scale))] [--stage-scale:0.5] sm:[--stage-scale:0.6] md:[--stage-scale:0.75] lg:[--stage-scale:0.9] xl:[--stage-scale:1]">
        <div className="absolute top-0 left-1/2 h-[510px] w-360 -translate-x-1/2 origin-top scale-(--stage-scale)">
          <div
            aria-hidden="true"
            className="absolute top-[71px] left-[145px] size-[1150px] rounded-full border-[318px] border-secondary-500"
          />
          <Image
            src={images.hero.student}
            alt="Smiling student wearing headphones and holding a laptop"
            width={722}
            height={515}
            preload
            sizes="(min-width: 1280px) 722px, (min-width: 1024px) 650px, (min-width: 768px) 542px, 434px"
            className="absolute bottom-0 left-[410px] max-w-none"
          />
          <HeroCards />
        </div>
      </div>
    </section>
  );
}
