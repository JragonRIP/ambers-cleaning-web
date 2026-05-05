import Link from "next/link";

export function ContactReachSection() {
  const tel = "+13128238708";
  const display = "(312) 823-8708";

  return (
    <section
      id="reach-out"
      className="scroll-mt-28 bg-brand-teal pb-20 pt-28 sm:pb-28 sm:pt-32"
      aria-labelledby="reach-heading"
    >
      <div className="texture-grain mx-auto max-w-4xl px-6 text-center text-white lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/85">Get started</p>
        <h2 id="reach-heading" className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-[2.75rem]">
          Ready for a Cleaner Space?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/93">
          Tell us what you need. We will listen and build a cleaning plan that fits your space.
        </p>

        <p className="mt-14 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.65rem]">
          Call or text
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href={`tel:${tel}`}
            className="inline-flex min-h-[58px] min-w-[min(100%,20rem)] items-center justify-center rounded-full bg-white px-10 text-lg font-bold tracking-tight text-brand-charcoal shadow-xl shadow-black/15 transition hover:bg-white/93 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold motion-safe:hover:scale-[1.02] motion-reduce:hover:scale-100 sm:text-xl"
          >
            {display}
          </a>
        </div>

        <p className="mt-12 text-base leading-relaxed text-white/88">
          Prefer email?{" "}
          <a
            className="font-semibold underline decoration-white/35 underline-offset-4 hover:decoration-white"
            href="mailto:amberfazer@gmail.com"
          >
            amberfazer@gmail.com
          </a>
        </p>

        <p className="mt-8 text-sm text-white/72">
          Ready for details first?{" "}
          <Link href="/contact#quote" className="font-semibold underline decoration-white/35 underline-offset-4 hover:decoration-white">
            Jump to the quote form
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
