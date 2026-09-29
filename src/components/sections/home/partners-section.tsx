import Image from "next/image";

import { Container } from "@/components/shared/container";
import { images } from "@/constants/images";

export function PartnersSection() {
  return (
    <section aria-label="Our partners" className="bg-neutral-50 py-10 md:py-14 xl:pt-20.25 xl:pb-20">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-6 sm:gap-x-6 lg:gap-x-10 xl:gap-x-18">
          {images.partners.map((src) => (
            <li key={src}>
              <Image
                src={src}
                alt="Logoipsum"
                width={169}
                height={41}
                className="h-6 w-auto sm:h-7 lg:h-9 xl:h-10.25"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
