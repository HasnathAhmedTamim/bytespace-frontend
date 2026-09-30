"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

export function Toaster(props: ToasterProps) {
  return (
    <Sonner
      position="top-center"
      offset="6.75rem"
      mobileOffset={{ top: "5rem" }}
      toastOptions={{
        classNames: {
          toast:
            "!rounded-2xl !border-neutral-100 !bg-white !font-sans !text-neutral-950 !shadow-float",
          description: "!text-neutral-400",
          success: "[&_[data-icon]]:!text-primary-800",
        },
      }}
      {...props}
    />
  );
}
