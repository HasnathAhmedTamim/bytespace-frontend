import Image from "next/image";

import { Section } from "@/components/shared/section";
import { images } from "@/constants/images";

export function PartnersSection() {
  return (
    <Section aria-label="Our partners" tone="muted" containerClassName="@container">
      <ul className="flex flex-wrap items-end justify-center gap-x-5 gap-y-6 py-10 sm:gap-x-6 md:py-14 xl:gap-x-10 xl:py-20 3xl:gap-x-18 3xl:frame-zoom">
        {images.partners.map(({ src, width, height }) => (
          <li key={src}>
            <Image
              src={src}
              alt="Logoipsum"
              width={width}
              height={height}
              style={{ "--logo-h": `${height}px` } as React.CSSProperties}
              className="h-6 w-auto sm:h-7 lg:h-9 xl:h-10.25 3xl:h-(--logo-h)"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
