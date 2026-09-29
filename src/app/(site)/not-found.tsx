import { NotFoundSection } from "@/components/sections/not-found/not-found-section";
import { notFoundMetadata } from "@/constants/metadata";

export const metadata = notFoundMetadata;

export default function SiteNotFound() {
  return <NotFoundSection />;
}
