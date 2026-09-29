import type { Metadata } from "next";

import { CoursesSearchBanner } from "@/components/sections/courses/courses-search-banner";
import { isSearchScope } from "@/constants/search";

export const metadata: Metadata = {
  title: "Courses",
  description: "Browse and search ByteSpace courses by topic, category, level or creator.",
};

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function CoursesPage({ searchParams }: PageProps<"/courses">) {
  const params = await searchParams;
  const query = firstParam(params.q)?.trim() || undefined;
  const scope = firstParam(params.scope);

  return <CoursesSearchBanner query={query} scope={isSearchScope(scope) ? scope : undefined} />;
}
