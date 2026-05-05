import { BrandLogo } from "./BrandLogo";

export function SectionTreeDivider({ flip }: { flip?: boolean }) {
  return (
    <div
      className={`pointer-events-none flex justify-center py-10 sm:py-14 ${flip ? "rotate-180" : ""}`}
      aria-hidden
    >
      <div className="flex max-w-[min(100%,52rem)] items-center gap-6 px-6 opacity-[0.55]">
        <span className="h-px flex-1 origin-right scale-x-100 bg-gradient-to-r from-transparent via-brand-teal/45 to-brand-teal/45 animate-divider-grow" />
        <span
          className={`shrink-0 rounded-full ring-2 ring-brand-teal/20 animate-float-soft ${flip ? "rotate-180" : ""}`}
        >
          <BrandLogo size={52} />
        </span>
        <span className="h-px flex-1 origin-left scale-x-100 bg-gradient-to-l from-transparent via-brand-teal/45 to-brand-teal/45 animate-divider-grow" />
      </div>
    </div>
  );
}
