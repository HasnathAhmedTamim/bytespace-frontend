"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { mainNav, routes } from "@/constants/navigation";
import { useScrolled } from "@/hooks/use-scrolled";
import { isActivePath } from "@/lib/navigation";
import { cn } from "@/lib/utils";

import { CartButton } from "./cart-button";
import { MobileNav } from "./mobile-nav";

const linkClass =
  "block rounded-sm text-neutral-50 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-primary-800 focus-visible:outline-none";

export function SiteHeader() {
  const pathname = usePathname();
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "bg-primary-800/95 shadow-[0_8px_24px_-12px_rgb(7_30_95/0.6)] backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="relative flex h-(--header-height) items-center justify-between md:items-start">
          <Link
            href={routes.home}
            aria-label="ByteSpace home"
            className="rounded-sm md:mt-8.75 md:ml-0.5 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-primary-800 focus-visible:outline-none"
          >
            <Logo className="h-7 text-white md:h-8.5" />
          </Link>

          <nav aria-label="Main" className="absolute top-12.25 left-[calc(50%-0.5px)] hidden -translate-x-1/2 md:block">
            <ul className="flex items-start gap-6">
              {mainNav.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(linkClass, active ? "label-m" : "body-m")}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-6 md:mt-10 md:flex">
            <Link href={routes.signIn} className={cn(linkClass, "body-m leading-6")}>
              Sign In
            </Link>
            <Link href={routes.signUp} className={cn(linkClass, "body-m leading-6")}>
              Join Us
            </Link>
            <CartButton className="-mx-2" />
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <CartButton />
            <MobileNav pathname={pathname} />
          </div>
        </div>
      </Container>
    </header>
  );
}
