import { ReactNode } from "react";

export default function Section({
  children,
  className = "",
  alt = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative z-10 border-t border-rule-soft py-20 md:py-28 ${
        alt ? "bg-paper-sunk" : "bg-paper"
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
