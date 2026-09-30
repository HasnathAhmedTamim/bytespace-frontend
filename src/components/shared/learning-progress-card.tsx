import { cn } from "@/lib/utils";

type LearningProgressCardProps = {
  size?: "sm" | "md";
  className?: string;
};

export function LearningProgressCard({ size = "md", className }: LearningProgressCardProps) {
  const isSmall = size === "sm";

  return (
    <div className={cn("w-58 rounded-xl bg-white px-4 pb-4 shadow-soft", isSmall ? "pt-4" : "pt-5", className)}>
      <p className="label-s text-neutral-950">Learning Progress</p>
      <p
        className={cn(
          "text-5xl text-neutral-950",
          isSmall
            ? "mt-2 font-heading leading-[1.2] font-semibold tracking-[-0.01em]"
            : "mt-3.75 font-sans leading-none font-bold"
        )}
      >
        55%
      </p>
      <div className={cn("h-2 rounded-full bg-neutral-50", isSmall ? "mt-2" : "mt-3.5")}>
        <div className="h-full w-[56%] rounded-full bg-secondary-400" />
      </div>
    </div>
  );
}
