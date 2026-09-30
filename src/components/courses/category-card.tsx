import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { routes } from "@/constants/navigation";
import type { featuredCategories } from "@/data/categories";
import { cn } from "@/lib/utils";

type CategoryCardProps = {
  category: (typeof featuredCategories)[number];
  className?: string;
};

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Card asChild>
      <Link
        href={`${routes.courses}?category=${category.slug}`}
        className={cn(
          "group flex h-41.75 flex-col items-center justify-center gap-3 p-3 text-center transition-[border-color,box-shadow,translate] duration-300 outline-none hover:-translate-y-1 hover:border-primary-800/30 hover:shadow-float focus-visible:ring-3 focus-visible:ring-primary-800/30",
          className,
        )}
      >
        <Image
          src={category.icon}
          alt=""
          width={60}
          height={60}
          className="size-15 transition-transform duration-300 group-hover:scale-110"
        />
        <span className="label-xl text-neutral-950">{category.label}</span>
      </Link>
    </Card>
  );
}
