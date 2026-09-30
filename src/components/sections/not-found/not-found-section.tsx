import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { routes } from "@/constants/navigation";

export function NotFoundSection() {
  return (
    <Section
      tone="brand"
      clearHeader
      className="@container relative isolate flex-1 overflow-hidden bg-position-[0_calc(-2px*var(--grid-zoom,1))] 3xl:pt-0 3xl:grid-zoom-full"
      containerClassName="flex flex-col items-center pt-8 pb-20 text-center [--digits:min(30rem,44vw)] md:pt-10 md:pb-24 lg:pb-31.25 3xl:pt-40 3xl:frame-zoom-full"
    >
      <p className="bg-[linear-gradient(180deg,var(--color-secondary-400)_0%,color-mix(in_srgb,var(--color-secondary-400)_96%,transparent)_25%,color-mix(in_srgb,var(--color-secondary-400)_81%,transparent)_50.5%,color-mix(in_srgb,var(--color-secondary-400)_61%,transparent)_68%,transparent_100%)] bg-clip-text font-heading text-(length:--digits) leading-none font-semibold tracking-[-0.01em] text-transparent select-none">
        404
      </p>
      <h1 className="relative mt-[calc(var(--digits)*-119/480)] max-w-233.75 heading-s text-white sm:heading-m lg:heading-l lg:leading-21.5">
        The page you are looking for doesn&rsquo;t exist
      </h1>
      <p className="mt-8 body-m text-neutral-100 md:body-l md:leading-7.25">
        Try to use a correct url or go back to homepage to start again
      </p>
      <Button asChild className="mt-8 px-6 md:h-11.5 md:text-lg md:leading-5.5">
        <Link href={routes.home}>Back to Home</Link>
      </Button>
    </Section>
  );
}
