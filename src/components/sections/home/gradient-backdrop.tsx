export function GradientBackdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate overflow-hidden bg-[#fafafa]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-22.5 left-[29%] h-[1080px] w-[1040px] -translate-1/2 bg-glow [--glow:rgb(212_251_32/0.42)]" />
        <div className="absolute top-22.5 right-10 h-[1150px] w-[1100px] translate-x-1/2 -translate-y-1/2 bg-glow [--glow:rgb(0_59_226/0.07)]" />
        <div className="absolute top-[750px] left-10 h-[1000px] w-[1250px] -translate-1/2 bg-glow [--glow:rgb(0_59_226/0.13)]" />
        <div className="absolute bottom-45 left-0 h-[550px] w-[1150px] -translate-x-1/2 translate-y-1/2 bg-glow [--glow:rgb(212_251_32/0.55)]" />
        <div className="absolute right-32.5 bottom-20 h-[1100px] w-[1000px] translate-1/2 bg-glow [--glow:rgb(0_59_226/0.21)]" />
      </div>
      {children}
    </div>
  );
}
