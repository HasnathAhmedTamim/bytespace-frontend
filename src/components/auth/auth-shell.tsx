import Link from "next/link";

import { AuthShowcase } from "@/components/auth/auth-showcase";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { routes } from "@/constants/navigation";

type AuthShellProps = {
  tagline: string;
  description: string;
  children: React.ReactNode;
};

export function AuthShell({ tagline, description, children }: AuthShellProps) {
  return (
    <div className="flex min-h-dvh flex-col bg-primary-800 bg-grid">
      <Container as="header" className="flex pt-6 md:pt-9">
        <Link
          href={routes.home}
          className="rounded-md outline-none focus-visible:ring-3 focus-visible:ring-secondary-400/60"
        >
          <Logo variant="mark" title="ByteSpace home" className="block h-7.5" />
        </Link>
      </Container>

      <Container
        as="main"
        className="grid flex-1 content-center gap-8 pt-8 pb-12 md:pt-10 md:pb-16 lg:grid-cols-[minmax(0,1fr)_32rem] lg:gap-10 lg:pt-13.75 lg:pb-30 xl:grid-cols-[minmax(0,1fr)_36.125rem]"
      >
        <div className="mx-auto w-full max-w-[36.125rem] lg:mx-0 lg:max-w-none">
          <div className="lg:min-h-32">
            <p className="heading-xs text-white">{tagline}</p>
            <p className="mt-4.5 max-w-[29.5rem] body-m text-white md:body-l">{description}</p>
          </div>
          <AuthShowcase className="mt-14 hidden lg:block" />
        </div>

        <div className="mx-auto w-full max-w-[36.125rem] lg:max-w-none">{children}</div>
      </Container>
    </div>
  );
}
