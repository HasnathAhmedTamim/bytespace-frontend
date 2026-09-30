import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "w-full min-w-0 border bg-white font-sans text-base text-neutral-950 transition-[border-color,box-shadow] outline-none placeholder:text-neutral-400 focus-visible:border-primary-800 focus-visible:ring-3 focus-visible:ring-primary-800/15 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:opacity-60 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/15",
  {
    variants: {
      variant: {
        default: "h-13 rounded-lg border-neutral-100 px-4",
        pill: "h-13 rounded-full border-neutral-200 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Input({
  className,
  type,
  variant,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Input, inputVariants }
