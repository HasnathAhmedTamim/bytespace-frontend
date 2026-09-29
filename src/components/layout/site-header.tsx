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
  "text-base leading-tight rounded-sm text-white/85 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-primary-800 focus-visible:outline-none";

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
      <Container className="relative flex h-(--header-height) items-center justify-between">
        <Link
          href={routes.home}
          aria-label="ByteSpace home"
          className="rounded-sm focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-primary-800 focus-visible:outline-none"
        >
          <Logo className="h-7 text-white md:h-8.5" />
        </Link>

        <nav aria-label="Main" className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <ul className="flex items-center gap-6">
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(linkClass, active ? "font-medium text-white" : "font-normal")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link href={routes.signIn} className={cn(linkClass, "font-normal")}>
            Sign In
          </Link>
          <Link href={routes.signUp} className={cn(linkClass, "font-normal")}>
            Join Us
          </Link>
          <CartButton className="-mr-1.5 -ml-2" />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <CartButton />
          <MobileNav pathname={pathname} />
        </div>
      </Container>
    </header>
  );
}
