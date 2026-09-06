import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "light" | "outline-light";

/**
 * Flat controls: 8px radius, no shadow, no glow. Depth is stated once through
 * contrast, and the only feedback is a 1px press. Pills are reserved for small
 * chips, so the primary action is a rectangle like everything else.
 */
const VARIANTS: Record<Variant, string> = {
  solid: "bg-ink text-white hover:bg-black",
  outline: "border border-rule text-ink hover:border-ink",
  light: "bg-white text-ink hover:bg-white/90",
  "outline-light": "border border-white/30 text-white hover:border-white/70",
};

export default function Button({
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
  const padding = size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3 text-[15px]";
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const Comp = isExternal ? "a" : Link;

  return (
    <Comp
      href={href}
      className={`group inline-flex items-center gap-2 whitespace-nowrap rounded-control font-medium transition-colors duration-200 ease-out active:translate-y-px ${padding} ${VARIANTS[variant]} ${className}`}
    >
      {children}
      {arrow ? (
        <ArrowRight
          weight="bold"
          className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
        />
      ) : null}
    </Comp>
  );
}
