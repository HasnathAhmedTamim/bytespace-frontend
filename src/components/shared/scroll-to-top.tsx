"use client";

import { useLayoutEffect } from "react";

/**
 * Opens the page at the top. Next.js scrolls to the nested page segment instead when it starts
 * below the fold, which on course details would land on the tab content rather than the hero.
 */
export function ScrollToTop() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return null;
}
