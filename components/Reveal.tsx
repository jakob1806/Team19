"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Adds `is-revealed` to its wrapper the first time it enters the viewport.
 * IntersectionObserver only, no scroll listener and no per-frame React state,
 * so the entrance costs nothing after it has played once.
 */
export function useReveal<T extends HTMLElement>(amount = 0) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    // Threshold stays at 0 and the trigger line is set with rootMargin instead.
    // A ratio-based threshold can never be met by a section taller than a few
    // viewports, which would leave that section hidden for good.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: amount, rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount, shown]);

  return { ref, shown };
}

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  amount,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  amount?: number;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(amount);
  return (
    <Tag ref={ref} className={`${shown ? "is-revealed" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
