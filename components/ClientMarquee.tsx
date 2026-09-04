import Image from "next/image";
import { CLIENTS } from "@/lib/content";

export default function ClientMarquee({ heading }: { heading?: string }) {
  const doubled = [...CLIENTS, ...CLIENTS];
  return (
    <section className="py-16 md:py-20">
      {heading && (
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
          {heading}
        </p>
      )}
      <div className="marquee">
        <div className="marquee__track">
          {doubled.map((c, i) => (
            <div key={`${c.name}-${i}`} className="flex h-12 w-32 shrink-0 items-center justify-center opacity-90 transition hover:opacity-100">
              <Image
                src={c.img}
                alt={c.name}
                width={128}
                height={48}
                className="max-h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
