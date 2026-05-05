export function NoContractBanner() {
  return (
    <section
      className="relative overflow-hidden border-y border-brand-teal/25 bg-gradient-to-b from-[#f7faf9] via-white to-[#f4f8f7]"
      aria-labelledby="no-contract-heading"
    >
      <div className="texture-grain pointer-events-none absolute inset-0 opacity-[0.45]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <div className="flex shrink-0 justify-center lg:justify-start">
            <div className="relative">
              <div
                className="flex h-[11.25rem] w-[11.25rem] flex-col items-center justify-center rounded-full border-[5px] border-brand-gold/50 bg-white px-6 pb-3 pt-6 text-center shadow-[0_12px_40px_-12px_rgba(91,173,160,0.35)] ring-[6px] ring-brand-teal/12 sm:h-[12.5rem] sm:w-[12.5rem] sm:pb-4 sm:pt-7"
                aria-hidden
              >
                <span className="font-serif text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-brand-teal-dark">
                  Our pledge
                </span>
                <span className="mt-3 font-serif text-2xl font-bold leading-none tracking-tight text-brand-charcoal sm:text-[1.75rem]">
                  No contract
                </span>
                <span className="mt-2 font-serif text-lg font-semibold text-brand-teal-dark">required</span>
                <span className="mx-auto mt-4 max-w-[9rem] border-t border-brand-charcoal/10 pt-3 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-brand-charcoal/55">
                  Work that earns every visit
                </span>
              </div>
              <div className="pointer-events-none absolute -right-1 -top-1 h-16 w-16 rounded-full bg-brand-gold/15 blur-2xl" aria-hidden />
              <div className="pointer-events-none absolute -bottom-2 -left-2 h-20 w-20 rounded-full bg-brand-teal/15 blur-3xl" aria-hidden />
            </div>
          </div>

          <div className="max-w-xl text-center lg:max-w-2xl lg:flex-1 lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal-dark">How we do business</p>
            <h2
              id="no-contract-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-brand-charcoal sm:text-[2.35rem]"
            >
              The work earns your trust, not a signature.
            </h2>

            <figure className="mt-6">
              <blockquote className="relative rounded-r-2xl border-l-[3px] border-brand-teal/45 bg-white/70 py-6 pl-6 pr-5 shadow-sm ring-1 ring-brand-charcoal/[0.05] sm:py-7 sm:pl-10 sm:pr-8">
                <span
                  className="pointer-events-none absolute left-3 top-4 font-serif text-[3.75rem] leading-none text-brand-teal/20 sm:left-5 sm:top-5 sm:text-[4.5rem]"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="relative z-[1] pt-1 font-serif text-xl italic leading-[1.65] text-brand-charcoal sm:text-2xl">
                  I don&apos;t lock clients into long term contracts. I believe quality work should speak for itself.
                  When you are happy with our cleaning, you will keep choosing Amber&apos;s Cleaning Service. If
                  something ever falls short, you are never stuck in paperwork you did not want.
                </p>
              </blockquote>
              <figcaption className="mt-5 text-center font-sans text-sm font-semibold tracking-wide text-brand-charcoal/75 lg:text-left">
                <span className="text-brand-charcoal">Amber M. Fazer</span>
                <span className="mx-2 font-normal text-brand-charcoal/45">·</span>
                <span className="font-normal text-brand-charcoal/60">Owner</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
