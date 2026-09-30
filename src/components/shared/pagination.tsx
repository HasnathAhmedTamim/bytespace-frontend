import { ChevronLeft, ChevronRight } from "lucide-react";

import { PendingLink } from "@/components/shared/pending-navigation";
import { cn } from "@/lib/utils";

type PaginationProps = {
  page: number;
  pageCount: number;
  hrefForPage: (page: number) => string;
  className?: string;
};

type PageItem = number | "start-ellipsis" | "end-ellipsis";

export function pageItems(page: number, pageCount: number): PageItem[] {
  if (pageCount <= 7) return Array.from({ length: pageCount }, (_, index) => index + 1);

  const windowStart = Math.max(2, Math.min(page - 1, pageCount - 4));
  const windowEnd = Math.min(pageCount - 1, Math.max(page + 1, 5));
  const middle = Array.from({ length: windowEnd - windowStart + 1 }, (_, index) => windowStart + index);

  return [
    1,
    ...(windowStart > 2 ? ["start-ellipsis" as const] : []),
    ...middle,
    ...(windowEnd < pageCount - 1 ? ["end-ellipsis" as const] : []),
    pageCount,
  ];
}

const arrowClass =
  "grid h-12 w-14 shrink-0 place-items-center rounded-full border border-neutral-200 bg-white outline-none focus-visible:ring-3 focus-visible:ring-primary-800/30 [&_svg]:size-8.5";

export function Pagination({ page, pageCount, hrefForPage, className }: PaginationProps) {
  if (pageCount <= 1) return null;

  const hasPrevious = page > 1;
  const hasNext = page < pageCount;

  return (
    <nav aria-label="Pagination" className={cn("flex items-center justify-center gap-2 sm:gap-4", className)}>
      {hasPrevious ? (
        <PendingLink
          href={hrefForPage(page - 1)}
          aria-label="Previous page"
          className={cn(arrowClass, "text-neutral-950 transition-colors hover:border-neutral-400")}
        >
          <ChevronLeft aria-hidden="true" strokeWidth={2.25} />
        </PendingLink>
      ) : (
        <span aria-disabled="true" aria-label="Previous page" role="link" className={cn(arrowClass, "text-neutral-700")}>
          <ChevronLeft aria-hidden="true" strokeWidth={2.25} />
        </span>
      )}

      <ol className="flex items-center gap-0.5 sm:gap-2">
        {pageItems(page, pageCount).map((item) =>
          typeof item === "number" ? (
            <li key={item}>
              <PendingLink
                href={hrefForPage(item)}
                aria-label={`Page ${item}`}
                aria-current={item === page ? "page" : undefined}
                className={cn(
                  "grid h-12 place-items-center rounded-full px-2 font-sans text-xl leading-none font-bold transition-colors outline-none focus-visible:ring-3 focus-visible:ring-primary-800/30",
                  item === page ? "pointer-events-none text-neutral-200" : "text-neutral-950 hover:text-primary-800"
                )}
              >
                {item}
              </PendingLink>
            </li>
          ) : (
            <li key={item} aria-hidden="true" className="px-1 font-sans text-xl font-bold text-neutral-400">
              …
            </li>
          )
        )}
      </ol>

      {hasNext ? (
        <PendingLink
          href={hrefForPage(page + 1)}
          aria-label="Next page"
          className={cn(arrowClass, "text-neutral-950 transition-colors hover:border-neutral-400")}
        >
          <ChevronRight aria-hidden="true" strokeWidth={2.25} />
        </PendingLink>
      ) : (
        <span aria-disabled="true" aria-label="Next page" role="link" className={cn(arrowClass, "text-neutral-700")}>
          <ChevronRight aria-hidden="true" strokeWidth={2.25} />
        </span>
      )}
    </nav>
  );
}
