import * as React from "react"
import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

type SpinnerProps = React.ComponentProps<"svg"> & {
  /** Announced to screen readers; omit when nearby text already describes the loading state. */
  label?: string
}

function Spinner({ label, className, ...props }: SpinnerProps) {
  return (
    <Loader2Icon
      data-slot="spinner"
      role={label ? "status" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
