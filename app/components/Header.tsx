"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";

type NavItem = {
  href: string;
  label: string;
  cta?: boolean;
};

const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact#reach-out", label: "Book Now", cta: true },
  { href: "/contact#quote", label: "Contact" },
];

function pathOnly(href: string) {
  const i = href.indexOf("#");
  return i === -1 ? href : href.slice(0, i);
}

function isActivePath(href: string, pathname: string) {
  const p = pathOnly(href);
  if (p === "/") return pathname === "/";
  return pathname === p;
}

const ctaClasses =
  "ml-2 rounded-full bg-brand-teal px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-brand-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold motion-safe:hover:scale-[1.02] motion-reduce:hover:scale-100";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const shell = scrolled
    ? "bg-brand-charcoal/97 shadow-lg shadow-black/15 backdrop-blur-md"
    : "bg-transparent";

  const linkBase = (active: boolean) =>
    active
      ? scrolled
        ? "bg-white/12 text-white ring-2 ring-brand-teal/55 shadow-[inset_0_0_0_1px_rgba(91,173,160,0.35)]"
        : "bg-brand-teal/12 text-brand-teal-dark ring-2 ring-brand-teal/40 shadow-[inset_0_0_0_1px_rgba(91,173,160,0.25)]"
      : scrolled
        ? "text-white/90 hover:bg-white/10 hover:text-brand-teal"
        : "text-brand-charcoal hover:text-brand-teal-dark";

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-out ${shell}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            onClick={() => setOpen(false)}
          >
            <span className="animate-logo-soft shrink-0 rounded-full ring-2 ring-black/[0.04]">
              <BrandLogo size={46} priority className="shadow-md" />
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span
                className={`font-serif text-lg tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-white" : "text-brand-charcoal"
                }`}
              >
                Amber&apos;s Cleaning
              </span>
              <span
                className={`text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
                  scrolled ? "text-white/65" : "text-brand-charcoal/55"
                }`}
              >
                Est. 2018
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              if (item.cta) {
                return (
                  <Link key={item.href} href={item.href} className={ctaClasses}>
                    {item.label}
                  </Link>
                );
              }
              const active = isActivePath(item.href, pathname);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${linkBase(active)}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${
              scrolled
                ? "border-white/25 bg-white/10 text-white"
                : "border-brand-charcoal/15 bg-white/80 text-brand-charcoal"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-full rounded-full bg-current transition ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 block h-0.5 w-full rounded-full bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-0.5 w-full rounded-full bg-current transition ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-brand-charcoal/55 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          tabIndex={open ? 0 : -1}
          aria-label="Close menu backdrop"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-brand-charcoal pt-[5.25rem] shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-1 flex-col gap-1 px-6 py-6" aria-label="Mobile primary">
            {nav.map((item) => {
              if (item.cta) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl bg-brand-teal px-4 py-3 text-center text-base font-semibold text-white hover:bg-brand-teal-dark"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }
              const active = isActivePath(item.href, pathname);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                    active
                      ? "bg-white/14 text-brand-teal ring-1 ring-brand-teal/40"
                      : "text-white/95 hover:bg-white/10 hover:text-brand-teal"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <p className="border-t border-white/10 px-6 py-5 text-sm text-white/55">
            Amber&apos;s Cleaning Service, LLC
          </p>
        </div>
      </div>
    </>
  );
}
