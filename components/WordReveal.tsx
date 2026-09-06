"use client";

import type { ElementType } from "react";
import { useReveal } from "./Reveal";

/**
 * Headline reveal: every word sits in its own overflow-hidden window and rides
 * up into it, staggered by word index. Technique read off sp.design, whose
 * headline uses a 0.03s stagger on a 0.25s cubic-bezier(0.2, 0.8, 0.2, 1) rise.
 * Used once per page, on the headline that owns the viewport.
 */
export default function WordReveal({
  text,
  as: Tag = "h1",
  className = "",
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLHeadingElement>();
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={`${shown ? "is-revealed" : ""} ${className}`}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="wordmask" style={{ ["--i" as string]: i }}>
            <span>{word}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
