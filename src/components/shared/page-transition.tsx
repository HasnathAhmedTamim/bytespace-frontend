import { ViewTransition, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Fades the outgoing page out and lifts the incoming one in on route changes.
 * Wrap it around a page's content (not a layout, which persists across navigations).
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <div className={cn("flex flex-1 flex-col", className)}>{children}</div>
    </ViewTransition>
  );
}

/** Morphs a course image between its card and the course details preview. */
export function CourseImageTransition({ slug, children }: { slug: string; children: ReactNode }) {
  return (
    <ViewTransition name={`course-image-${slug}`} share="course-morph" default="none">
      {children}
    </ViewTransition>
  );
}
