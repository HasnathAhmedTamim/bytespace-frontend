"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { routes } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export function CourseTabs({ slug, className }: { slug: string; className?: string }) {
  const pathname = usePathname();
  const tabs = [
    { label: "About", href: routes.course(slug) },
    { label: "Lessons", href: routes.courseLessons(slug) },
    { label: "Reviews", href: routes.courseReviews(slug) },
  ];

  return (
    <nav aria-label="Course sections" className={className}>
      <ul className="flex flex-wrap gap-4">
        {tabs.map((tab) => {
          const active = pathname === tab.href;
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                scroll={false}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex h-10.75 items-center rounded-full px-4 label-m transition-colors outline-none focus-visible:ring-3 focus-visible:ring-primary-800/40",
                  active
                    ? "bg-secondary-400 text-neutral-950"
                    : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                )}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
