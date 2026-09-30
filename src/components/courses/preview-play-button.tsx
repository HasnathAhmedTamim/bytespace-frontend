"use client";

import { toast } from "sonner";

import { cn } from "@/lib/utils";

export function PreviewPlayButton({ title, className }: { title: string; className?: string }) {
  return (
    <button
      type="button"
      aria-label={`Play preview: ${title}`}
      onClick={() => toast("Preview coming soon", { description: "Enroll to unlock every video lesson." })}
      className={cn(
        "grid size-20 place-items-center rounded-3xl border border-black-700 bg-[rgb(61_61_61/0.24)] backdrop-blur-[20px] transition-transform duration-200 outline-none hover:scale-105 focus-visible:ring-3 focus-visible:ring-secondary-400 md:size-26",
        className
      )}
    >
      <span className="grid size-12 place-items-center rounded-full bg-[#f5f2ff] md:size-15">
        <svg viewBox="0 0 18 25" aria-hidden="true" className="ml-1 h-5 w-3.5 fill-neutral-950/45 md:h-6.25 md:w-4.5">
          <path d="M0 1.6v21.8a1.2 1.2 0 0 0 1.9 1L17.4 13.5a1.2 1.2 0 0 0 0-2L1.9.6A1.2 1.2 0 0 0 0 1.6Z" />
        </svg>
      </span>
    </button>
  );
}
