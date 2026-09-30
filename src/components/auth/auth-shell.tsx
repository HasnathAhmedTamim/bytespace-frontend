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
      <Container as="header" className="flex pt-6 md:pt-8.75">
        <Link
          href={routes.home}
          className="rounded-md outline-none focus-visible:ring-3 focus-visible:ring-secondary-400/60"
        >
          <Logo variant="mark" title="ByteSpace home" className="block h-8" />
        </Link>
      </Container>

      <Container
        as="main"
        className="grid flex-1 content-center gap-8 pt-8 pb-12 md:pt-10 md:pb-16 xl:grid-cols-[minmax(0,1fr)_32rem] xl:gap-10 xl:pt-13.25 xl:pb-30 3xl:grid-cols-[minmax(0,1fr)_36.1875rem]"
      >
        <div className="mx-auto w-full max-w-[36.1875rem] xl:mx-0 xl:max-w-none">
          <div className="xl:min-h-32">
            <p className="heading-xs text-white">{tagline}</p>
            <p className="mt-4 max-w-[29.6875rem] body-m text-white md:body-l">{description}</p>
          </div>
          <AuthShowcase className="mt-14 hidden xl:block" />
        </div>

        <div className="mx-auto w-full max-w-[36.1875rem] xl:max-w-none">{children}</div>
      </Container>
    </div>
  );
}
