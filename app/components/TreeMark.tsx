type TreeMarkProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

/**
 * Circular tree motif inspired by the brand card. Replace with official logo asset when needed.
 */
export function TreeMark({ className = "", "aria-hidden": ariaHidden = true }: TreeMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={ariaHidden}
    >
      <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="2.25" />
      <path
        d="M60 96V72M60 72c-8-12-18-18-28-22 10 4 18 10 28 22Zm0 0c8-12 18-18 28-22-10 4-18 10-28 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 72V52M44 66c6-10 10-16 16-22m16 22c-6-10-10-16-16-22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M52 44c4-6 8-10 8-14m8 14c-4-6-8-10-8-14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
