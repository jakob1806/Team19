"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The page's one scroll-authored moment: a statement that starts grey and
 * resolves to ink as it scrolls through the viewport, with the brand red
 * marking the reading edge.
 *
 * Technique read off sp.design, which paints its statement with
 * `background-clip: text` and moves a gradient band (read / reading / unread)
 * as the sticky container scrolls. We drive the same band with a single CSS
 * custom property so nothing but a variable changes per frame.
 */
export default function ReadingStatement({ text, cite }: { text: string; cite?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [reduced, setReduced] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const track = trackRef.current;
    const node = textRef.current;
    if (!track || !node) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = track.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      if (travel <= 0) {
        node.style.setProperty("--read", "100");
        return;
      }
      const progress = Math.min(Math.max(-rect.top / travel, 0), 1);
      // Finish reading a little before the section releases, so the last word
      // is fully ink while the panel is still pinned.
      node.style.setProperty("--read", String(Math.min(progress * 118, 100).toFixed(2)));
    };

    // rAF-throttled scroll handling, and it writes a CSS variable rather than
    // React state, so no re-render happens while scrolling.
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  return (
    <section ref={trackRef} className="relative h-[220vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto w-full max-w-5xl px-6">
          <p
            ref={textRef}
            className={`text-3xl font-medium leading-[1.25] tracking-tight text-pretty sm:text-4xl md:text-5xl ${
              reduced ? "" : "readband"
            }`}
            style={{ ["--read" as string]: 0 }}
          >
            {words.map((word, i) => (
              <span key={`${word}-${i}`} style={{ ["--t" as string]: (i / words.length) * 100 }}>
                {word}
                {i < words.length - 1 ? " " : null}
              </span>
            ))}
          </p>
          {cite ? (
            <p className="mt-10 text-sm text-[var(--ink-faint)]">{cite}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
