import { ReactNode } from "react";

export function BentoGrid({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`grid grid-cols-1 gap-6 md:grid-cols-3 ${className}`}>{children}</div>;
}

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
      className={`rounded-3xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${spanClass} ${className}`}
    >
      {children}
    </div>
  );
}
