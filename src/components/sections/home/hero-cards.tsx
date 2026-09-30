import { HappyStudentsCard } from "@/components/shared/happy-students-card";
import { LearningProgressCard } from "@/components/shared/learning-progress-card";

export function HeroCards() {
  return (
    <div aria-hidden="true" className="hidden md:block">
      <div className="absolute top-[125px] left-[404px] w-52 rounded-xl bg-white p-4 shadow-soft">
        <p className="label-m text-neutral-950">UI/UX Design</p>
        <p className="flex items-center gap-2 body-xs text-neutral-400">
          200 Courses
          <span className="size-1 rounded-full bg-neutral-400" />
          1000+ Students
        </p>
      </div>

      <LearningProgressCard size="sm" className="absolute top-[137px] left-[842px]" />

      <HappyStudentsCard className="absolute top-[323px] left-[328px]" />
    </div>
  );
}
