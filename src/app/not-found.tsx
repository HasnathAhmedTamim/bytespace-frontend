import { SiteShell } from "@/components/layout/site-shell";
import { NotFoundSection } from "@/components/sections/not-found/not-found-section";
import { notFoundMetadata } from "@/constants/metadata";

export const metadata = notFoundMetadata;

export default function NotFound() {
  return (
    <SiteShell>
      <NotFoundSection />
    </SiteShell>
  );
}
