import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  eyebrow?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "center",
  tone = "dark",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className={cn("label-m", isLight ? "text-secondary-400" : "text-primary-800")}>
          {eyebrow}
        </span>
      )}
      <Heading
        className={cn(
          "heading-s text-balance md:heading-m",
          isLight ? "text-white" : "text-neutral-950"
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "body-m max-w-3xl text-pretty",
            isLight ? "text-white/85" : "text-neutral-400"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
