import * as React from "react";

import { cn } from "@/lib/utils";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, "as">;

export function Container<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: ContainerProps<T>) {
  const Comp = as ?? "div";
  return <Comp className={cn("container-page", className)} {...props} />;
}
