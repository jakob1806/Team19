import { ReactNode } from "react";

export function BentoGrid({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`grid grid-cols-1 gap-4 md:grid-cols-3 ${className}`}>{children}</div>;
}

/**
 * Flat surface: one hairline states the elevation, nothing else. No shadow
 * under the border, no lift on hover, so a grid of these reads as a table of
 * content rather than a stack of floating chrome.
 */
export function BentoCard({
  children,
  className = "",
  span,
}: {
  children: ReactNode;
  className?: string;
  span?: "1" | "2" | "3";
}) {
  const spanClass = span === "2" ? "md:col-span-2" : span === "3" ? "md:col-span-3" : "";
  return (
    <div
      className={`rounded-surface border border-rule-soft bg-paper p-7 transition-colors duration-300 ease-out hover:border-rule ${spanClass} ${className}`}
    >
      {children}
    </div>
  );
}
