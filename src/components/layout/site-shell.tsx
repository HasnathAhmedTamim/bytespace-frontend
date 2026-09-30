import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="label-s sr-only z-[60] rounded-full bg-secondary-400 px-4 py-2 text-neutral-950 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="@container flex flex-1 flex-col">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
