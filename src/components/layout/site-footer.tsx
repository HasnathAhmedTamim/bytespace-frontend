import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { footerNav, legalNav, routes } from "@/constants/navigation";

import { NewsletterForm } from "./newsletter-form";

const linkClass =
  "rounded-sm text-neutral-700 transition-colors hover:text-primary-800 focus-visible:ring-2 focus-visible:ring-primary-800/40 focus-visible:outline-none";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 pt-16 pb-14 lg:grid-cols-12 lg:gap-10 lg:pt-[4.375rem] lg:pb-32">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <Link
              href={routes.home}
              aria-label="ByteSpace home"
              className="w-fit rounded-sm focus-visible:ring-2 focus-visible:ring-primary-800/40 focus-visible:outline-none"
            >
              <Logo className="text-neutral-950" />
            </Link>
            <p className="body-s text-neutral-950">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="mt-3">
              <NewsletterForm />
            </div>
            <p className="body-xs max-w-[29rem] text-neutral-700">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            {footerNav.map((column, index) => (
              <ul key={index} className="flex flex-col gap-4">
                {column.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className={`body-s ${linkClass}`}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="flex flex-col-reverse gap-4 border-t border-neutral-200 py-6 sm:flex-row sm:items-center sm:justify-between lg:pt-7 lg:pb-11">
          <p className="body-xs text-neutral-700">
            &copy; {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={`body-xs ${linkClass}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
