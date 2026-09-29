import type { SVGProps } from "react";

export function LevelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="4" y="14" width="4" height="6" rx="0.5" />
      <rect x="10" y="9" width="4" height="11" rx="0.5" />
      <rect x="16" y="4" width="4" height="16" rx="0.5" />
    </svg>
  );
}

export function SortIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="3" y="6" width="18" height="2" />
      <rect x="3" y="11" width="12" height="2" />
      <rect x="3" y="16" width="6" height="2" />
    </svg>
  );
}
