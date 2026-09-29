import Image from "next/image";
import { Star } from "lucide-react";

import { images } from "@/constants/images";
import { cn } from "@/lib/utils";

type HappyStudentsCardProps = {
  variant?: "default" | "compact";
  tone?: "white" | "lime";
  className?: string;
};

export function HappyStudentsCard({ variant = "default", tone = "white", className }: HappyStudentsCardProps) {
  const isCompact = variant === "compact";
  const isLime = tone === "lime";

  return (
    <div
      className={cn(
        "w-[16.125rem] rounded-xl px-4",
        isLime ? "bg-secondary-400 pt-5 pb-4" : "bg-white py-4 shadow-soft",
        className,
      )}
    >
      <p className={cn("label-m text-neutral-950", isLime && "leading-4", isCompact && "leading-6")}>Happy Students</p>
      <p
        className={cn(
          "flex items-center gap-1 body-xs text-neutral-950",
          isCompact && "text-[0.625rem]/4",
        )}
      >
        <span className={cn((isCompact || isLime) && "font-bold")}>4.5</span>
        <span className={isLime ? "text-neutral-600" : "text-neutral-400"}>(240)</span>
        <Star
          className={cn(
            isLime ? "size-3 fill-primary-800 text-primary-800" : "size-4 fill-secondary-400 text-secondary-400",
          )}
        />
      </p>
      <div className={cn("flex items-center -space-x-4", isLime ? "mt-2.25" : "mt-2")}>
        {images.avatars.slice(0, 7).map((src) => (
          <Image key={src} src={src} alt="" width={43} height={43} className="size-10.75 rounded-full object-cover" />
        ))}
        <span
          className={cn(
            "relative grid size-10.75 place-items-center rounded-full label-xs font-bold",
            isLime ? "bg-neutral-950 text-white" : "bg-secondary-400 text-neutral-950",
          )}
        >
          2K+
        </span>
      </div>
    </div>
  );
}
