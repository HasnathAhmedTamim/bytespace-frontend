"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { SearchIcon } from "@/components/shared/icons";
import { cn } from "@/lib/utils";

/** Submit button for a search `Form` that swaps its label for a spinner while the results load. */
export function SearchSubmitButton({ className }: { className?: string }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-busy={pending} className={cn("relative", className)}>
      <span className={cn(pending && "invisible")}>Search</span>
      {pending && (
        <span className="absolute inset-0 grid place-items-center">
          <Spinner className="size-5 md:size-6" />
          <span className="sr-only">Searching</span>
        </span>
      )}
    </Button>
  );
}

/** Search field icon that turns into a spinner while its `Form` navigates to the results. */
export function SearchFieldIcon({ className }: { className?: string }) {
  const { pending } = useFormStatus();

  return pending ? (
    <Spinner label="Searching" className={cn(className, "text-primary-800")} />
  ) : (
    <SearchIcon className={className} />
  );
}
