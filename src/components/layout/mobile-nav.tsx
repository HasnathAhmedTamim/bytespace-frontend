"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, routes } from "@/constants/navigation";
import { isActivePath } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function MobileNav({ pathname }: { pathname: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
        >
          <Menu className="size-6" />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[85%] max-w-sm gap-0 border-l-0 bg-white">
        <SheetHeader className="border-b border-neutral-100 px-6 py-5">
          <SheetTitle asChild>
            <div>
              <Logo className="h-7 text-neutral-950" />
            </div>
          </SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile" className="px-4 py-6">
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "label-l flex h-12 items-center rounded-xl px-3 transition-colors",
                        active
                          ? "bg-primary-50 text-primary-800"
                          : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950"
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        </nav>

        <SheetFooter className="gap-3 border-t border-neutral-100 px-6 py-6">
          <SheetClose asChild>
            <Button asChild variant="outline" size="lg">
              <Link href={routes.signIn}>Sign In</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild size="lg">
              <Link href={routes.signUp}>Join Us</Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
