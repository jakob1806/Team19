"use client";

import { useState } from "react";
import Image from "next/image";
import { WORK } from "@/lib/content";

const FILTERS: { key: string; label: string }[] = [
  { key: "all", label: "Alle" },
  { key: "webdesign", label: "Webdesign" },
  { key: "social", label: "Social Media" },
  { key: "foto", label: "Fotografie" },
];

export default function WorkGrid() {
  const [active, setActive] = useState("all");
  const items = active === "all" ? WORK : WORK.filter((w) => w.cat === active);

  return (
    <div>
      {/* Filters are the one place pills are allowed: small controls, not surfaces. */}
      <div className="flex flex-wrap gap-2 border-b border-rule-soft pb-6">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setActive(f.key)}
            aria-pressed={active === f.key}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors duration-200 ${
              active === f.key
                ? "bg-ink text-white"
                : "border border-rule text-ink-muted hover:border-ink hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <figure key={item.title} className="mb-5 break-inside-avoid">
            <div className="relative aspect-[4/5] overflow-hidden rounded-surface bg-paper-sunk">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3">
              <h3 className="text-base font-medium">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {items.length === 0 ? (
        <p className="py-16 text-center text-ink-muted">
          In dieser Kategorie liegt noch nichts. Wähle eine andere aus.
        </p>
      ) : null}
    </div>
  );
}
