export function GradientBackdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate overflow-hidden bg-neutral-25">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 inset-x-[max(0px,calc(50%-45rem))] -z-10">
        <div className="absolute top-[788px] -right-[419px] size-[1137px] bg-orb blur-[20px] [--glow:rgb(0_59_226/0.24)]" />
        <div className="absolute -top-[466px] -left-[152px] size-[1137px] bg-orb blur-[20px] [--glow:rgb(203_252_1/0.4)]" />
        <div className="absolute top-[183px] -left-[508px] size-[1137px] bg-orb blur-[20px] [--glow:rgb(0_59_226/0.16)]" />
        <div className="absolute -top-[458px] -right-[508px] size-[1137px] bg-orb blur-[20px] [--glow:rgb(0_59_226/0.08)]" />
        <div className="absolute top-[946px] -left-[287px] size-[672px] bg-orb blur-[20px] [--glow:rgb(203_252_1/0.6)]" />
      </div>
      {children}
    </div>
  );
}
