import Image from "next/image";

import { CreatorStats } from "@/components/creators/creator-stats";
import { Container } from "@/components/shared/container";
import type { Creator } from "@/types/course";

type CreatorHeroProps = {
  creator: Creator;
  products: number;
};

export function CreatorHero({ creator, products }: CreatorHeroProps) {
  return (
    <section
      aria-labelledby="creator-name"
      className="bg-primary-800 bg-grid bg-position-[calc(50%+60px)_-2px] pt-(--header-height) text-white"
    >
      <Container className="pt-8 pb-12 md:pt-12 md:pb-16 xl:pt-18 xl:pb-20.5">
        <div className="flex items-center gap-4 md:gap-6">
          <Image
            src={creator.portrait ?? creator.avatar}
            alt=""
            width={96}
            height={96}
            preload
            className="size-18 shrink-0 rounded-2xl object-cover md:size-24"
          />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h1 id="creator-name" className="heading-s max-md:text-[1.75rem]">
                {creator.displayName}
              </h1>
              <span className="inline-flex h-8.5 items-center rounded-full bg-secondary-400 px-6 label-m text-neutral-950 md:mb-2.5">
                Creator
              </span>
            </div>
            <p className="mt-2 body-l max-md:text-base">{creator.headline}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col body-l max-md:text-base md:mt-10">
          {creator.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <CreatorStats
          name={creator.displayName}
          products={products}
          followers={creator.followers}
          className="mt-8 md:mt-10.5"
        />
      </Container>
    </section>
  );
}
