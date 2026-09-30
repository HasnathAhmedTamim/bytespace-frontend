"use client";

import { createContext, use, useTransition, type ComponentProps, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

type NavigateOptions = { scroll?: boolean };

type PendingNavigation = {
  isPending: boolean;
  navigate: (href: string, options?: NavigateOptions) => void;
};

const PendingNavigationContext = createContext<PendingNavigation | null>(null);

/** Shares one navigation transition, so filters, links and the results they update agree on "loading". */
export function PendingNavigationProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navigate = (href: string, { scroll = true }: NavigateOptions = {}) => {
    startTransition(() => router.push(href, { scroll }));
  };

  return <PendingNavigationContext value={{ isPending, navigate }}>{children}</PendingNavigationContext>;
}

export function usePendingNavigation() {
  const navigation = use(PendingNavigationContext);
  if (!navigation) throw new Error("usePendingNavigation must be used inside PendingNavigationProvider");
  return navigation;
}

/** A `Link` whose client-side navigation runs through the nearest `PendingNavigationProvider`. */
export function PendingLink({ href, scroll, ...props }: ComponentProps<typeof Link> & { href: string }) {
  const navigation = use(PendingNavigationContext);

  return (
    <Link
      href={href}
      scroll={scroll}
      onNavigate={
        navigation
          ? (event) => {
              event.preventDefault();
              navigation.navigate(href, { scroll: scroll ?? true });
            }
          : undefined
      }
      {...props}
    />
  );
}

type PendingRegionProps = {
  label: string;
  className?: string;
  children: ReactNode;
};

/** Dims its content and shows a spinner while a navigation from the provider is in flight. */
export function PendingRegion({ label, className, children }: PendingRegionProps) {
  const isPending = use(PendingNavigationContext)?.isPending ?? false;

  return (
    <div aria-busy={isPending || undefined} className={cn("relative", className)}>
      <div className={cn("transition-opacity duration-300", isPending && "pointer-events-none opacity-40")}>
        {children}
      </div>
      {isPending && (
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="sticky top-[calc(var(--header-height)+1.5rem)] mt-6 grid size-14 place-items-center rounded-full bg-white shadow-float animate-in fade-in-0 fill-mode-both delay-150 duration-300 md:mt-10">
            <Spinner label={label} className="size-7 text-primary-800" />
          </div>
        </div>
      )}
    </div>
  );
}
