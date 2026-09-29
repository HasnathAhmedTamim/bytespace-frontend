import { DiscoverSection } from "@/components/sections/home/discover-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { PartnersSection } from "@/components/sections/home/partners-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <DiscoverSection />
    </>
  );
}
