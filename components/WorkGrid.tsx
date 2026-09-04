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
      <div className="flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setActive(f.key)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              active === f.key
                ? "bg-brand-red text-white shadow-lg shadow-red-600/20"
                : "border border-gray-300 text-gray-700 hover:border-gray-900"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl"
          >
            <div className="relative aspect-[4/5]">
              <Image src={item.img} alt={item.title} fill sizes="400px" className="object-cover" />
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-red">
                {FILTERS.find((f) => f.key === item.cat)?.label}
              </span>
              <h3 className="mt-1 text-base font-bold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
