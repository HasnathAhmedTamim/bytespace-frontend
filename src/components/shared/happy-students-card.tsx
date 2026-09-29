import Image from "next/image";
import { Star } from "lucide-react";

import { images } from "@/constants/images";
import { cn } from "@/lib/utils";

type HappyStudentsCardProps = { variant?: "default" | "compact"; className?: string };

export function HappyStudentsCard({ variant = "default", className }: HappyStudentsCardProps) {
  const isCompact = variant === "compact";

  return (
    <div
      className={cn(
        "w-[16.125rem] rounded-xl bg-white px-4 shadow-soft",
        isCompact ? "pt-5 pb-4.25" : "pt-4.5 pb-4",
        className,
      )}
    >
      <p className="label-m leading-4 text-neutral-950">Happy Students</p>
      <p
        className={cn(
          "flex items-center gap-1 body-xs text-neutral-950",
          isCompact ? "mt-1 text-[0.625rem]/4" : "mt-px",
        )}
      >
        <span className={cn(isCompact && "font-bold")}>4.5</span>
        <span className="text-neutral-400">(240)</span>
        <Star className={cn("fill-secondary-400 text-secondary-400", isCompact ? "size-2.5" : "size-3")} />
      </p>
      <div className="mt-2 flex items-center -space-x-3.75">
        {images.avatars.slice(0, 7).map((src) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={42}
            height={42}
            className="size-10.5 rounded-full border-3 border-white object-cover"
          />
        ))}
        <span className="relative grid size-10.5 place-items-center rounded-full bg-secondary-400 label-xs font-bold text-neutral-950">
          2K+
        </span>
      </div>
    </div>
  );
}
