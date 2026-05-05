"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  business: string;
};

function Stars() {
  return (
    <div className="flex gap-1 text-brand-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M12 3l2.6 6.4h6.9l-5.6 4 2.1 6.6L12 16.8 6 20l2.1-6.6L2.5 9.4h6.9L12 3z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-lg shadow-black/25">
      <span
        className="pointer-events-none absolute -right-2 -top-4 font-serif text-8xl leading-none text-brand-teal/25"
        aria-hidden
      >
        “
      </span>
      <Stars />
      <blockquote className="relative mt-6 text-lg leading-relaxed text-white/92">
        <p>{t.quote}</p>
      </blockquote>
      <figcaption className="relative mt-8 border-t border-white/10 pt-6">
        <p className="font-semibold text-white">{t.name}</p>
        <p className="mt-1 text-sm text-white/62">{t.business}</p>
      </figcaption>
    </article>
  );
}

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const updateActive = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.offsetWidth;
    if (w <= 0) return;
    const idx = Math.round(el.scrollLeft / w);
    setActive(Math.min(Math.max(0, idx), items.length - 1));
  }, [items.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateActive();
    el.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      el.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive]);

  const scrollTo = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.offsetWidth, behavior: "smooth" });
  };

  return (
    <>
      <div className="relative lg:hidden">
        <p id="testimonials-carousel-hint" className="sr-only">
          Swipe sideways to read each testimonial.
        </p>
        <div
          ref={scrollerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          aria-describedby="testimonials-carousel-hint"
          className="-mx-6 flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((t, idx) => (
            <div
              key={idx}
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} of ${items.length}`}
              className="w-full min-w-full shrink-0 snap-center snap-always px-6"
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 pt-2" role="tablist" aria-label="Choose testimonial">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === active}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === active ? "w-8 bg-brand-teal" : "w-2 bg-white/35 hover:bg-white/55"
              }`}
              onClick={() => scrollTo(idx)}
            />
          ))}
        </div>
      </div>

      <ul className="hidden gap-8 lg:grid lg:grid-cols-3">
        {items.map((t, idx) => (
          <li
            key={idx}
            className="transition duration-500 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:border-brand-teal/25 motion-safe:hover:shadow-brand-teal/10 motion-reduce:hover:translate-y-0"
          >
            <TestimonialCard t={t} />
          </li>
        ))}
      </ul>
    </>
  );
}
