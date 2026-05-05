import type { ServiceItem } from "./ServiceCard";

export const serviceItems: ServiceItem[] = [
  {
    title: "Office and Workspace Cleaning",
    description:
      "Regular scheduled cleaning for offices, keeping your workspace professional and productive.",
    imageClass:
      "bg-[linear-gradient(145deg,rgba(91,173,160,0.55)_0%,rgba(44,44,44,0.88)_48%,rgba(30,42,48,0.95)_100%)]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" aria-hidden>
        <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M4 21V8l8-5 8 5v13M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Commercial Facility Cleaning",
    description:
      "Deep cleaning solutions for commercial spaces of all sizes, tailored to your schedule and needs.",
    imageClass:
      "bg-[linear-gradient(155deg,rgba(58,79,92,0.75)_0%,rgba(44,44,44,0.92)_45%,rgba(91,173,160,0.35)_100%)]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" aria-hidden>
        <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M6 19V9l6-4 6 4v10M10 19v-4h4v4" />
      </svg>
    ),
  },
  {
    title: "Move-In and Move-Out Cleaning",
    description:
      "Thorough top to bottom cleaning for properties transitioning between occupants.",
    imageClass:
      "bg-[linear-gradient(160deg,rgba(201,169,98,0.42)_0%,rgba(74,58,42,0.78)_42%,rgba(44,44,44,0.92)_100%)]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" aria-hidden>
        <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M4 11h16M6 11l2-7h8l2 7M9 21V11h6v10M8 21h8" />
      </svg>
    ),
  },
  {
    title: "Post-Construction Cleanup",
    description:
      "Detailed cleaning after renovation or construction, removing dust and debris and bringing your space to life.",
    imageClass:
      "bg-[linear-gradient(145deg,rgba(120,113,98,0.65)_0%,rgba(44,44,44,0.9)_50%,rgba(65,70,72,0.95)_100%)]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" aria-hidden>
        <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M14 4l6 6M5 21l6-6m0 0l4 4M11 15l-4-4m4 4l2-2m0 0l4 4M7 7l10 10" />
      </svg>
    ),
  },
  {
    title: "Custom Cleaning Plans",
    description:
      "Every space is different. We build a cleaning plan around your specific needs and schedule.",
    imageClass:
      "bg-[linear-gradient(135deg,rgba(91,173,160,0.5)_0%,rgba(44,44,44,0.78)_55%,rgba(201,169,98,0.28)_100%)]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" aria-hidden>
        <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h10M4 17h16" />
      </svg>
    ),
  },
];
