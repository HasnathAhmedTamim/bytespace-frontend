import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  eyebrow?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "center",
  tone = "dark",
  as: Heading = "h2",
  id,
  className,
  descriptionClassName,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:gap-5",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className={cn("label-m", isLight ? "text-secondary-400" : "text-primary-800")}>
          {eyebrow}
        </span>
      )}
      <Heading id={id} className={cn("heading-s md:heading-m", isLight ? "text-white" : "text-ink")}>
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "body-m max-w-3xl text-pretty md:body-l",
            isLight ? "text-white/85" : "text-neutral-400",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
