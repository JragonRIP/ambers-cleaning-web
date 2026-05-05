import { RevealOnScroll } from "./RevealOnScroll";

export function AboutSection() {
  return (
    <section className="scroll-mt-28 bg-[#fafafa] pb-20 pt-28 sm:pb-28 sm:pt-32" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <RevealOnScroll className="relative order-2 lg:order-1">
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-brand-charcoal shadow-xl ring-1 ring-black/5"
            role="img"
            aria-label="Placeholder for portrait or team photography"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/40 via-brand-charcoal/55 to-brand-charcoal" />
            <div className="texture-grain absolute inset-0 opacity-50" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <p className="font-serif text-2xl italic leading-snug">Placeholder for portrait or team photography</p>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-40 w-40 rounded-full border border-brand-gold/35 bg-brand-gold-soft lg:block" aria-hidden />
        </RevealOnScroll>

        <RevealOnScroll delayMs={90} className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal-dark">
            About us
          </p>
          <h2
            id="about-heading"
            className="mt-4 font-serif text-4xl font-semibold tracking-tight text-brand-charcoal sm:text-[2.65rem]"
          >
            More Than Clean. We&apos;re Dependable.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-[1.75] text-brand-charcoal/78">
            <p>
              Amber&apos;s Cleaning Service has been built on one simple belief: every space deserves to be treated like it matters.
            </p>
            <p>
              Since 2018 Amber and her team have served businesses across the area with the kind of attention to detail you only get from someone who genuinely cares. We show up when we say we will, we clean what we say we will, and we never cut corners.
            </p>
            <p className="font-medium text-brand-charcoal">
              Because your space reflects your business. And your business deserves better than average.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Reliable and On Time",
                body: "Schedules you can plan around.",
              },
              {
                title: "Locally Owned Since 2018",
                body: "Neighbors serving neighbors.",
              },
              {
                title: "Detail Obsessed Every Visit",
                body: "Corners included, always.",
              },
            ].map((item) => (
              <li key={item.title} className="rounded-2xl border border-brand-charcoal/10 bg-white p-5 shadow-sm transition duration-300 motion-safe:hover:border-brand-teal/25 motion-safe:hover:shadow-md motion-reduce:hover:border-brand-charcoal/10">
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal/12 text-brand-teal-dark ring-1 ring-brand-teal/15">
                  <span className="h-2 w-2 rounded-full bg-brand-gold" aria-hidden />
                </span>
                <p className="font-semibold text-brand-charcoal">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/68">{item.body}</p>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
