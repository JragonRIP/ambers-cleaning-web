import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col bg-white lg:flex-row"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[45] h-[min(28vh,11rem)] bg-gradient-to-b from-white via-white/88 to-transparent animate-hero-shimmer"
        aria-hidden
      />

      <div className="relative order-1 min-h-[42svh] w-full self-stretch lg:order-2 lg:min-h-[min(100svh,100%)] lg:flex-1">
        <div
          className="absolute inset-0 bg-brand-charcoal"
          role="img"
          aria-label="Placeholder for professional cleaning photography"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/35 via-brand-charcoal/45 to-brand-charcoal" />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-[44] h-[min(40vh,12rem)] bg-gradient-to-b from-white via-white/55 to-transparent lg:h-44"
            aria-hidden
          />
          <div className="texture-grain absolute inset-0 opacity-60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center text-white/88">
            <p className="max-w-sm font-serif text-xl italic leading-snug text-white/95 sm:text-2xl">
              Placeholder for professional cleaning photography
            </p>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-teal/55 to-transparent lg:hidden" />
        </div>
      </div>

      <div className="relative order-2 flex flex-1 flex-col justify-center px-6 pb-16 pt-10 sm:px-10 sm:pt-14 lg:order-1 lg:py-24 lg:pl-12 lg:pr-10 xl:pl-16">
        <div className="relative z-[46] mx-auto w-full max-w-xl lg:mx-0">
          <p className="hero-animate mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal-dark">
            <span className="h-px w-8 bg-brand-gold/90 animate-line-grow" aria-hidden />
            Commercial cleaning
          </p>

          <h1
            id="hero-heading"
            className="hero-animate hero-animate-delay-1 font-serif text-[2.35rem] font-semibold leading-[1.12] tracking-tight text-brand-charcoal sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]"
          >
            A Cleaner Space.
            <span className="block text-brand-teal-dark">A Clearer Mind.</span>
          </h1>

          <p className="hero-animate hero-animate-delay-2 mt-5 font-serif text-lg italic leading-snug text-brand-charcoal/72 sm:text-xl">
            Established 2018. Still raising the standard.
          </p>

          <p className="hero-animate hero-animate-delay-3 mt-5 text-lg leading-relaxed text-brand-charcoal/78 sm:text-xl">
            Amber&apos;s Cleaning Service brings reliable, detail obsessed commercial cleaning to businesses that refuse to settle for average.
          </p>

          <div className="hero-animate hero-animate-delay-4 mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact#reach-out"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-brand-teal px-8 text-base font-semibold text-white shadow-md shadow-brand-teal/25 transition hover:bg-brand-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold motion-safe:hover:scale-[1.02] motion-reduce:hover:scale-100"
            >
              Call or Text Amber
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-brand-charcoal/18 bg-white px-8 text-base font-semibold text-brand-charcoal transition hover:border-brand-teal hover:text-brand-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold motion-safe:hover:scale-[1.02] motion-reduce:hover:scale-100"
            >
              View Our Services
            </Link>
          </div>

          <ul className="hero-animate hero-animate-delay-5 mt-12 flex flex-wrap gap-3">
            {["Est. 2018", "Fully Insured", "Local and Trusted"].map((label) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-brand-charcoal/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/72 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse-soft" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
