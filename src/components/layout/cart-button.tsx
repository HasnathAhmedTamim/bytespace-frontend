"use client";

import { toast } from "sonner";

import { cn } from "@/lib/utils";

function ShoppingBagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" />
    </svg>
  );
}

export function CartButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      aria-label="Open cart"
      onClick={() => toast("Your cart is empty", { description: "Browse courses to get started." })}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full text-neutral-50 transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none",
        className
      )}
    >
      <ShoppingBagIcon className="size-6" />
    </button>
  );
}
