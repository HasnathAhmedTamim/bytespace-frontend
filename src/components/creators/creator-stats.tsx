"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CreatorStatsProps = {
  name: string;
  products: number;
  followers: number;
  className?: string;
};

export function CreatorStats({ name, products, followers, className }: CreatorStatsProps) {
  const [following, setFollowing] = useState(false);
  const stats = [
    { value: products, label: products === 1 ? "Product" : "Products" },
    { value: followers + (following ? 1 : 0), label: "Followers" },
  ];

  return (
    <div className={cn("flex flex-wrap items-center justify-between gap-4", className)}>
      <ul aria-label={`${name} stats`} className="flex flex-wrap gap-2 md:gap-4">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="flex h-11 items-center gap-2 rounded-full bg-white px-5 label-l text-neutral-950 md:h-11.5 md:px-6"
          >
            <span className="text-primary-800">{stat.value}</span> {stat.label}
          </li>
        ))}
      </ul>
      <Button
        type="button"
        aria-pressed={following}
        onClick={() => setFollowing((value) => !value)}
        className={cn("px-6 text-ink md:h-11.5 md:text-lg md:leading-5.5", following && "bg-white hover:bg-neutral-50 hover:shadow-none")}
      >
        {following && <Check aria-hidden="true" className="size-5" />}
        {following ? "Following" : "Follow"}
      </Button>
    </div>
  );
}
