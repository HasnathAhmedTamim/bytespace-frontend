import Image from "next/image";
import { Star } from "lucide-react";

import { LearningProgressCard } from "@/components/shared/learning-progress-card";
import { images } from "@/constants/images";
import { cn } from "@/lib/utils";

function FloatingCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("absolute rounded-xl bg-white px-4 shadow-soft", className)}>{children}</div>;
}

export function HeroCards() {
  return (
    <div aria-hidden="true" className="hidden md:block">
      <FloatingCard className="top-[125px] left-[404px] w-52 pt-3.5 pb-4">
        <p className="label-m text-neutral-950">UI/UX Design</p>
        <p className="mt-0.5 flex items-center gap-2 body-xs text-neutral-400">
          200 Courses
          <span className="size-1 rounded-full bg-neutral-400" />
          1000+ Students
        </p>
      </FloatingCard>

      <LearningProgressCard size="sm" className="absolute top-[137px] left-[842px]" />

      <FloatingCard className="top-[323px] left-[328px] w-[16.125rem] pt-3.5 pb-4">
        <p className="label-m text-neutral-950">Happy Students</p>
        <p className="flex items-center gap-1 body-xs text-neutral-950">
          4.5 <span className="text-neutral-400">(240)</span>
          <Star className="size-3 fill-secondary-400 text-secondary-400" />
        </p>
        <div className="mt-2.5 flex items-center -space-x-3.75">
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
      </FloatingCard>
    </div>
  );
}
