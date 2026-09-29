import Form from "next/form";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Container } from "@/components/shared/container";
import { SearchScopeSelect } from "@/components/courses/search-scope-select";
import { routes } from "@/constants/navigation";
import type { SearchScope } from "@/constants/search";

type CoursesSearchBannerProps = {
  query?: string;
  scope?: SearchScope;
};

export function CoursesSearchBanner({ query, scope }: CoursesSearchBannerProps) {
  return (
    <section className="bg-primary-800 bg-grid bg-position-[calc(50%+60px)_-2px] pt-(--header-height)">
      <Container className="flex flex-col items-center pt-10 pb-12 text-center md:pt-16 md:pb-17.25">
        <h1 className="heading-s text-balance text-white">Find Your Next Course</h1>

        <Form
          action={routes.courses}
          role="search"
          className="mt-6 flex w-full max-w-[39rem] items-start gap-2.5 md:mt-8 md:gap-4"
        >
          <label htmlFor="courses-search" className="sr-only">
            Search courses
          </label>
          <div className="relative flex-1">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-neutral-400 md:left-6 md:size-6"
            />
            <Input
              key={query}
              id="courses-search"
              name="q"
              type="search"
              variant="pill"
              defaultValue={query}
              placeholder="Search"
              autoComplete="off"
              className="border-transparent pl-11 text-[1.0625rem] focus-visible:border-secondary-400 focus-visible:ring-secondary-400/40 md:pl-14"
            />
          </div>
          <SearchScopeSelect
            key={scope}
            name="scope"
            defaultValue={scope}
            className="h-13 px-4 text-base md:h-12 md:w-36.75 md:px-6 md:text-lg"
          />
        </Form>
      </Container>
    </section>
  );
}
