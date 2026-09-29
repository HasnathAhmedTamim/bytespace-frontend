import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { routes } from "@/constants/navigation";
import { featuredCategories } from "@/data/categories";

export function CategoriesSection() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="scroll-mt-(--header-height) pt-14 pb-16 md:pt-16.5 md:pb-24 xl:pb-30"
    >
      <Container>
        <SectionHeading
          id="categories-heading"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          className="md:gap-3"
          descriptionClassName="max-w-[58rem]"
        />

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:mt-17.5 lg:grid-cols-6 xl:gap-10">
          {featuredCategories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`${routes.courses}?category=${category.slug}`}
                className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-neutral-200 bg-white p-3 text-center transition-[border-color,box-shadow,translate] duration-300 outline-none hover:-translate-y-1 hover:border-primary-800/30 hover:shadow-float focus-visible:ring-3 focus-visible:ring-primary-800/30"
              >
                <Image
                  src={category.icon}
                  alt=""
                  width={60}
                  height={60}
                  className="size-15 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="font-sans text-xl/[1.2] font-medium text-neutral-950">{category.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
