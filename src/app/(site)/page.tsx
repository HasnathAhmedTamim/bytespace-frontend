import { CategoriesSection } from "@/components/sections/home/categories-section";
import { DiscoverSection } from "@/components/sections/home/discover-section";
import { GradientBackdrop } from "@/components/sections/home/gradient-backdrop";
import { GrowthSection } from "@/components/sections/home/growth-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { ManageCoursesSection } from "@/components/sections/home/manage-courses-section";
import { PartnersSection } from "@/components/sections/home/partners-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <DiscoverSection />
      <CategoriesSection />
      <GradientBackdrop>
        <GrowthSection />
        <ManageCoursesSection />
      </GradientBackdrop>
    </>
  );
}
