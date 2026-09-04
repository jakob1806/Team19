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
    <section id={id} className={`relative py-20 md:py-28 ${alt ? "bg-gray-50" : ""} ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
