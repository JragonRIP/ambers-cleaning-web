import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact#reach-out", label: "Book Now" },
  { href: "/contact#quote", label: "Contact" },
];

export function FooterSection() {
  return (
    <footer className="texture-grain bg-brand-charcoal text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <BrandLogo size={52} className="ring-2 ring-white/35 shadow-lg shadow-black/25" />
            <div>
              <p className="font-serif text-xl tracking-tight">Amber&apos;s Cleaning Service, LLC</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                Est. 2018 · Locally rooted
              </p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/65">
            Commercial cleaning for workplaces that expect spotless, dependable results.
          </p>
        </div>

        <nav aria-label="Footer quick links" className="sm:justify-self-center lg:justify-self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Explore</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm font-medium text-white/85">
            <li>
              <Link
                href="/"
                className="transition hover:text-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              >
                Home
              </Link>
            </li>
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition hover:text-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:justify-self-end">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Contact</p>
          <div className="mt-4 space-y-4 text-sm text-white/82">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Call or text</p>
              <a
                href="tel:+13128238708"
                className="mt-1 inline-block text-lg font-semibold tracking-tight text-white hover:text-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              >
                (312) 823-8708
              </a>
            </div>
            <div>
              <a
                href="mailto:amberfazer@gmail.com"
                className="hover:text-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              >
                amberfazer@gmail.com
              </a>
            </div>
            <p className="pt-2 text-white/55">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Service area
              </span>
              <span className="mt-1 block text-white/78">
                Menominee, Delta, and Dickinson counties, Michigan
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-center text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
          <p>© 2026 Amber&apos;s Cleaning Service, LLC. All rights reserved.</p>
          <div className="flex flex-col gap-1 sm:items-end sm:text-right">
            <p>
              Owner: <span className="text-white/72">Amber M. Fazer</span>
            </p>
            <p className="text-white/50">Website made by Aurum Web Design</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
