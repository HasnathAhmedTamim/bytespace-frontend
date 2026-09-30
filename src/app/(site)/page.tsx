import { CategoriesSection } from "@/components/sections/home/categories-section";
import { CreatorCtaSection } from "@/components/sections/home/creator-cta-section";
import { DiscoverSection } from "@/components/sections/home/discover-section";
import { GradientBackdrop } from "@/components/sections/home/gradient-backdrop";
import { GrowthSection } from "@/components/sections/home/growth-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { ManageCoursesSection } from "@/components/sections/home/manage-courses-section";
import { PartnersSection } from "@/components/sections/home/partners-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { PageTransition } from "@/components/shared/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <PartnersSection />
      <DiscoverSection />
      <CategoriesSection />
      <GradientBackdrop>
        <GrowthSection />
        <ManageCoursesSection />
      </GradientBackdrop>
      <CreatorCtaSection />
      <TestimonialsSection />
    </PageTransition>
  );
}
