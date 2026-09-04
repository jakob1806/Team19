import { ReactNode } from "react";

export default function GlassCard({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border ${
        dark
          ? "border-white/10 bg-white/5 backdrop-blur-md"
          : "border-gray-200 bg-white/70 backdrop-blur-md"
      } shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
