"use client";

import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { DropdownMenu } from "radix-ui";

import type { FilterKey, FilterOption } from "@/lib/course-filters";
import { cn } from "@/lib/utils";

const ALL = "all";

export type FilterMenuGroup = {
  key: FilterKey;
  label?: string;
  options: readonly FilterOption[];
  value?: string;
  allLabel?: string;
};

type FilterMenuProps = {
  label: string;
  icon: ReactNode;
  groups: FilterMenuGroup[];
  active?: boolean;
  badge?: number;
  align?: "start" | "end";
  contentClassName?: string;
  onSelect: (key: FilterKey, value: string | undefined) => void;
};

const itemClass =
  "flex cursor-pointer items-center justify-between gap-4 rounded-xl px-3 py-2.5 body-s text-neutral-700 outline-none select-none data-highlighted:bg-neutral-50 data-highlighted:text-neutral-950 data-[state=checked]:font-medium data-[state=checked]:text-neutral-950";

export function FilterMenu({
  label,
  icon,
  groups,
  active = false,
  badge,
  align = "start",
  contentClassName,
  onSelect,
}: FilterMenuProps) {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger
        aria-label={badge ? `${label}, ${badge} active` : undefined}
        className={cn(
          "inline-flex h-12 shrink-0 items-center gap-1 rounded-full border bg-white px-3.75 label-m whitespace-nowrap text-neutral-950 transition-colors outline-none hover:border-neutral-400 focus-visible:ring-3 focus-visible:ring-primary-800/30 data-[state=open]:border-neutral-400 [&>svg]:size-6 [&>svg]:shrink-0",
          active ? "border-primary-800 bg-primary-800/5" : "border-neutral-200"
        )}
      >
        {icon}
        {label}
        {badge ? (
          <span aria-hidden="true" className="ml-1 grid size-5 place-items-center rounded-full bg-primary-800 text-xs text-white">
            {badge}
          </span>
        ) : null}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align}
          sideOffset={8}
          collisionPadding={16}
          className={cn(
            "z-50 min-w-52 overflow-y-auto rounded-2xl border border-neutral-100 bg-white p-1.5 shadow-float data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
            contentClassName
          )}
        >
          {groups.map((group, index) => (
            <DropdownMenu.Group key={group.key}>
              {index > 0 && <DropdownMenu.Separator className="mx-3 my-1.5 h-px bg-neutral-100" />}
              {group.label && (
                <DropdownMenu.Label className="px-3 pt-2 pb-1 label-xs tracking-wide text-neutral-400 uppercase">
                  {group.label}
                </DropdownMenu.Label>
              )}
              <DropdownMenu.RadioGroup
                value={group.value ?? ALL}
                onValueChange={(value) => onSelect(group.key, value === ALL ? undefined : value)}
              >
                {group.allLabel && (
                  <DropdownMenu.RadioItem value={ALL} className={itemClass}>
                    {group.allLabel}
                    <DropdownMenu.ItemIndicator>
                      <Check aria-hidden="true" className="size-4 text-primary-800" />
                    </DropdownMenu.ItemIndicator>
                  </DropdownMenu.RadioItem>
                )}
                {group.options.map((option) => (
                  <DropdownMenu.RadioItem key={option.value} value={option.value} className={itemClass}>
                    {option.label}
                    <DropdownMenu.ItemIndicator>
                      <Check aria-hidden="true" className="size-4 text-primary-800" />
                    </DropdownMenu.ItemIndicator>
                  </DropdownMenu.RadioItem>
                ))}
              </DropdownMenu.RadioGroup>
            </DropdownMenu.Group>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
