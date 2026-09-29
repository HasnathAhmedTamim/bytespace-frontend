import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { images } from "@/constants/images";
import { routes } from "@/constants/navigation";

export function NotFoundSection() {
  return (
    <section className="relative isolate flex-1 overflow-hidden bg-primary-800 bg-grid pt-(--header-height)">
      <Container className="flex flex-col items-center pt-16 pb-20 text-center md:pt-24 md:pb-24 lg:pt-31 lg:pb-31">
        <Image
          src={images.notFound.digits}
          alt="404"
          width={886}
          height={345}
          preload
          sizes="(min-width: 966px) 886px, calc(100vw - 80px)"
          className="w-full max-w-[55.375rem]"
        />
        <h1 className="relative mt-[calc(min(100%,55.375rem)*-0.0558)] max-w-[57.5rem] heading-s text-white sm:heading-m lg:heading-l">
          The page you are looking for doesn&rsquo;t exist
        </h1>
        <p className="mt-6 body-m text-white md:mt-8">
          Try to use a correct url or go back to homepage to start again
        </p>
        <Button asChild className="mt-8 px-8 md:mt-9">
          <Link href={routes.home}>Back to Home</Link>
        </Button>
      </Container>
    </section>
  );
}
