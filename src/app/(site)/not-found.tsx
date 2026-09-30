import { NotFoundSection } from "@/components/sections/not-found/not-found-section";
import { PageTransition } from "@/components/shared/page-transition";
import { notFoundMetadata } from "@/constants/metadata";

export const metadata = notFoundMetadata;

export default function SiteNotFound() {
  return (
    <PageTransition>
      <NotFoundSection />
    </PageTransition>
  );
}
