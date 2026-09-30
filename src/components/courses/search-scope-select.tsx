"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { DropdownMenu } from "radix-ui";

import { ChevronDownIcon } from "@/components/shared/icons";
import { buttonVariants } from "@/components/ui/button";
import { defaultSearchScope, isSearchScope, searchScopes, type SearchScope } from "@/constants/search";
import { cn } from "@/lib/utils";

type SearchScopeSelectProps = {
  name: string;
  defaultValue?: SearchScope;
  className?: string;
};

export function SearchScopeSelect({ name, defaultValue = defaultSearchScope, className }: SearchScopeSelectProps) {
  const [value, setValue] = React.useState<SearchScope>(defaultValue);
  const label = searchScopes.find((scope) => scope.value === value)?.label;

  return (
    <>
      {value !== defaultSearchScope && <input type="hidden" name={name} value={value} />}
      <DropdownMenu.Root modal={false}>
        <DropdownMenu.Trigger
          aria-label={`Search in: ${label}`}
          className={cn(buttonVariants(), "group gap-2 data-[state=open]:bg-secondary-300", className)}
        >
          {label}
          <ChevronDownIcon className="size-6 transition-transform group-data-[state=open]:rotate-180" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="end"
            sideOffset={8}
            className="z-50 min-w-40 rounded-2xl bg-white p-1.5 shadow-float data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
          >
            <DropdownMenu.RadioGroup value={value} onValueChange={(next) => isSearchScope(next) && setValue(next)}>
              {searchScopes.map((scope) => (
                <DropdownMenu.RadioItem
                  key={scope.value}
                  value={scope.value}
                  className="flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2.5 label-m font-normal text-neutral-950 outline-none select-none data-highlighted:bg-neutral-50"
                >
                  {scope.label}
                  <DropdownMenu.ItemIndicator>
                    <Check aria-hidden="true" className="size-4 text-primary-800" />
                  </DropdownMenu.ItemIndicator>
                </DropdownMenu.RadioItem>
              ))}
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
}
