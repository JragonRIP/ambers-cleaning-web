"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function RevealOnScroll({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
      className={`motion-safe:transition-all motion-safe:duration-[1050ms] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        visible ? "motion-safe:translate-y-0 motion-safe:opacity-100" : "motion-safe:translate-y-9 motion-safe:opacity-0"
      } motion-reduce:translate-y-0 motion-reduce:opacity-100 ${className}`}
    >
      {children}
    </div>
  );
}
