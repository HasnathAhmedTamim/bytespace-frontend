import * as React from "react";

import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";

const tones = {
  none: "",
  brand: "bg-primary-800 bg-grid",
  muted: "bg-neutral-50",
  subtle: "bg-neutral-25",
} as const;

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  tone?: keyof typeof tones;
  /** Pads the top by the header height for bands that sit under the transparent site header. */
  clearHeader?: boolean;
  /** Decorative layer rendered before the container; position it against the section. */
  background?: React.ReactNode;
  /** Full-bleed content rendered after the container, such as an illustration stage. */
  bleed?: React.ReactNode;
  containerClassName?: string;
};

export function Section({
  tone = "none",
  clearHeader = false,
  background,
  bleed,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("w-full", tones[tone], clearHeader && "pt-(--header-height)", className)} {...props}>
      {background}
      <Container className={containerClassName}>{children}</Container>
      {bleed}
    </section>
  );
}
