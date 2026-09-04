import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type Variant = "solid" | "light" | "outline" | "outline-light";

const VARIANTS: Record<Variant, string> = {
  solid: "bg-brand-red text-white hover:bg-red-700 shadow-lg shadow-red-600/20",
  light: "bg-white text-brand-red hover:bg-gray-100 shadow-lg",
  outline: "border border-gray-300 text-gray-900 hover:border-gray-900",
  "outline-light": "border border-white/40 text-white hover:bg-white/10",
};

export default function PillButton({
  href,
  children,
  variant = "solid",
  arrow = true,
  className = "",
  size = "md",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  size?: "sm" | "md";
}) {
  const padding = size === "sm" ? "px-5 py-2.5 text-sm" : "px-6 py-3 text-base";
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const Comp = isExternal ? "a" : Link;
  return (
    <Comp
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-200 ${padding} ${VARIANTS[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </Comp>
  );
}
