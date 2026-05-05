function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" aria-hidden>
      <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M8 7V5m8 2V5M5 11h14M7 5h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" aria-hidden>
      <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M4 21V8l8-5 8 5v13M9 21v-6h6v6" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" aria-hidden>
      <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v6c0 5-3.4 9.5-8 10-4.6-.5-8-5-8-10V7l8-4z" />
      <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" aria-hidden>
      <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.4 6.9h7.1l-5.7 4.1 2.2 6.9L12 16.8 6 20.9l2.2-6.9L2.5 9.9h7.1L12 3z" />
    </svg>
  );
}

const items = [
  { icon: IconCalendar, title: "Serving Since 2018", body: "Built on consistency, year after year." },
  { icon: IconBuilding, title: "Commercial Specialists", body: "Spaces that work hard deserve spotless care." },
  { icon: IconShield, title: "Fully Insured", body: "Peace of mind for your team and property." },
  { icon: IconStar, title: "Satisfaction Guaranteed", body: "Standards you can see and trust." },
];

export function TrustBarSection() {
  return (
    <section
      className="texture-grain border-y border-black/10 bg-brand-charcoal py-14 text-white lg:py-16"
      aria-labelledby="trust-bar-heading"
    >
      <h2 id="trust-bar-heading" className="sr-only">
        Why teams trust Amber&apos;s Cleaning Service
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-6 lg:grid-cols-4 lg:gap-8 lg:px-8">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/8 text-brand-teal ring-1 ring-white/10">
              <Icon />
            </div>
            <h3 className="font-serif text-lg font-semibold tracking-tight sm:text-xl">{title}</h3>
            <p className="mt-2 max-w-[11rem] text-sm leading-relaxed text-white/68 sm:max-w-xs">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
