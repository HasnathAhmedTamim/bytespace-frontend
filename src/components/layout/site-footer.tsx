import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { footerNav, legalNav, routes } from "@/constants/navigation";

import { NewsletterForm } from "./newsletter-form";

const linkClass =
  "rounded-sm text-neutral-950 transition-colors hover:text-primary-800 focus-visible:ring-2 focus-visible:ring-primary-800/40 focus-visible:outline-none";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="flex flex-col gap-16 pt-14 pb-10 lg:gap-32.5 lg:pt-17.5 lg:pb-12">
          <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:gap-10 3xl:gap-23">
            <div className="flex flex-col gap-10 lg:gap-11.25 xl:w-120 xl:shrink-0 3xl:w-132">
              <div className="flex flex-col gap-4">
                <Link
                  href={routes.home}
                  aria-label="ByteSpace home"
                  className="w-fit rounded-sm focus-visible:ring-2 focus-visible:ring-primary-800/40 focus-visible:outline-none lg:h-9.25"
                >
                  <Logo className="text-neutral-950" />
                </Link>
                <p className="body-s text-neutral-950 lg:leading-5.5">
                  Stay Up to date with our latest features and releases by joining our newsletter.
                </p>
              </div>
              <div className="flex max-w-126 flex-col gap-6">
                <NewsletterForm />
                <p className="body-xs text-neutral-950 lg:leading-4.75">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>

            <nav
              aria-label="Footer"
              className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-[repeat(3,10.4375rem)] xl:mt-12 xl:flex-1 xl:grid-cols-3"
            >
              {footerNav.map((column, index) => (
                <ul key={index} className="body-s flex flex-col gap-4 lg:leading-5.5">
                  {column.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className={linkClass}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </nav>
          </div>

          <div className="flex flex-col-reverse gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:items-start sm:justify-between lg:pt-5.5">
            <p className="body-xs text-neutral-950 lg:leading-4.75">
              &copy; {new Date().getFullYear()} ByteSpace. All rights reserved.
            </p>
            <ul className="body-xs flex flex-wrap items-center gap-x-6 gap-y-2 lg:leading-4.75">
              {legalNav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
