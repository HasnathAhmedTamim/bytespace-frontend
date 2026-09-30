import { CategoryCard } from "@/components/courses/category-card";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { featuredCategories } from "@/data/categories";

export function CategoriesSection() {
  return (
    <Section
      id="categories"
      aria-labelledby="categories-heading"
      className="scroll-mt-(--header-height)"
      containerClassName="@container"
    >
      <div className="pt-14 pb-16 md:pt-18 md:pb-24 xl:pb-30 3xl:frame-zoom">
        <SectionHeading
          id="categories-heading"
          size="s"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          className="md:gap-4"
          titleClassName="lg:leading-10.75"
          descriptionClassName="max-w-[57.3125rem] lg:leading-7.25"
        />

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:mt-17 xl:grid-cols-6 3xl:gap-10">
          {featuredCategories.map((category) => (
            <li key={category.slug}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
