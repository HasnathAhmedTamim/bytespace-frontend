import Link from "next/link";

type AuthCardProps = {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  footer: { prompt: string; linkLabel: string; href: string };
};

export function AuthCard({ eyebrow, title, children, footer }: AuthCardProps) {
  return (
    <section
      aria-labelledby="auth-title"
      className="flex flex-col rounded-3xl bg-white px-5 py-8 sm:px-10 sm:py-12 lg:min-h-[48.9375rem] lg:px-12 lg:pt-15 lg:pb-10 xl:px-15.5"
    >
      <p className="body-m text-primary-800 sm:body-l">{eyebrow}</p>
      <h1 id="auth-title" className="heading-s text-neutral-950 md:heading-m">
        {title}
      </h1>

      {children}

      <p className="mt-auto pt-12 text-center body-m text-neutral-600 sm:body-l lg:pt-18">
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
