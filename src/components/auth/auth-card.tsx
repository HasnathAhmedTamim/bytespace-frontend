import Link from "next/link";

import { cardVariants } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AuthCardProps = {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  footer: { prompt: string; linkLabel: string; href: string; className?: string };
};

export function AuthCard({ eyebrow, title, children, footer }: AuthCardProps) {
  return (
    <section
      aria-labelledby="auth-title"
      className={cn(
        cardVariants({ variant: "plain" }),
        "flex flex-col px-5 py-8 sm:px-10 sm:py-12 xl:min-h-[49rem] xl:px-12 xl:pt-15.25 xl:pb-10 3xl:px-15.75"
      )}
    >
      <p className="body-m text-primary-800 sm:body-l">{eyebrow}</p>
      <h1 id="auth-title" className="heading-s text-neutral-950 md:heading-m">
        {title}
      </h1>

      {children}

      <p className={cn("mt-auto pt-12 text-center body-m text-neutral-400", footer.className)}>
        {footer.prompt}{" "}
        <Link
          href={footer.href}
          className="rounded-sm text-primary-800 underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-primary-800/30"
        >
          {footer.linkLabel}
        </Link>
      </p>
    </section>
  );
}
