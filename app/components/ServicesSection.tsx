import { RevealOnScroll } from "./RevealOnScroll";
import { ServiceCard } from "./ServiceCard";
import { serviceItems } from "./services-data";

export function ServicesSection() {
  return (
    <section className="scroll-mt-28 bg-white pb-20 pt-28 sm:pb-28 sm:pt-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal-dark">
              Services
            </p>
            <h2
              id="services-heading"
              className="mt-4 font-serif text-4xl font-semibold tracking-tight text-brand-charcoal sm:text-[2.75rem]"
            >
              What We Clean. How We Care.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-charcoal/72">
              Thoughtful programs for workplaces that value first impressions, and every detail after that.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((s, i) => (
            <RevealOnScroll key={s.title} delayMs={80 + i * 70}>
              <ServiceCard {...s} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
