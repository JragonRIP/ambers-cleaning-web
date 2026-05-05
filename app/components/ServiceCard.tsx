"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type ServiceItem = {
  title: string;
  description: string;
  icon: ReactNode;
  imageClass: string;
};

export function ServiceCard({ title, description, icon, imageClass }: ServiceItem) {
  const ref = useRef<HTMLElement>(null);
  const [mobileReveal, setMobileReveal] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(min-width: 768px)");

    const update = () => {
      if (mq.matches) {
        setMobileReveal(false);
        return;
      }
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const inBand =
        rect.top < vh * 0.88 && rect.bottom > vh * 0.12 && center > vh * 0.18 && center < vh * 0.82;
      setMobileReveal(inBand);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    mq.addEventListener("change", update);

    const io = new IntersectionObserver(
      () => {
        update();
      },
      { threshold: [0, 0.05, 0.15, 0.35, 0.55, 0.75, 1], rootMargin: "-12% 0px -12% 0px" },
    );
    io.observe(el);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      mq.removeEventListener("change", update);
      io.disconnect();
    };
  }, []);

  const mobileLayer = mobileReveal
    ? "max-md:opacity-100 max-md:scale-100"
    : "max-md:opacity-0 max-md:scale-[1.04]";

  return (
    <article
      ref={ref}
      className="group relative flex min-h-[300px] overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-white shadow-sm ring-1 ring-transparent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-brand-teal/28 hover:shadow-xl hover:shadow-brand-teal/[0.12] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div
        className={`pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-0 scale-[1.04] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:opacity-0 md:scale-[1.04] md:group-hover:opacity-100 md:group-hover:scale-100 ${mobileLayer} ${imageClass}`}
        aria-hidden
      />
      <div className="texture-grain pointer-events-none absolute inset-0 z-[1] opacity-[0.14] mix-blend-overlay" aria-hidden />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-1 rounded-b-full bg-brand-teal/90 opacity-90 transition duration-500 group-hover:bg-brand-teal motion-reduce:transition-none" />

      <div
        className={`relative z-[3] flex flex-1 flex-col justify-end p-8 transition-[background-color,backdrop-filter] duration-500 ease-out motion-reduce:transition-none ${
          mobileReveal ? "max-md:bg-white/82 max-md:backdrop-blur-sm" : "max-md:bg-white"
        } bg-white/98 md:bg-white/96 md:group-hover:bg-white/[0.82] md:group-hover:backdrop-blur-[6px]`}
      >
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/12 text-brand-teal-dark ring-1 ring-brand-teal/15 transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          {icon}
        </div>
        <h3 className="font-serif text-xl font-semibold text-brand-charcoal">{title}</h3>
        <p className="mt-3 text-base leading-relaxed text-brand-charcoal/75">{description}</p>
      </div>
    </article>
  );
}
