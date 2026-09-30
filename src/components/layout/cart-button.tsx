"use client";

import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

export function CartButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      aria-label="Open cart"
      onClick={() => toast("Your cart is empty", { description: "Browse courses to get started." })}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none",
        className
      )}
    >
      <ShoppingBag className="size-5" />
    </button>
  );
}
