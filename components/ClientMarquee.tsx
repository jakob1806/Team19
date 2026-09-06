import Image from "next/image";
import { CLIENTS } from "@/lib/content";

export default function ClientMarquee({
  heading = "Marken, die schon auf uns zählen",
}: {
  heading?: string;
}) {
  const doubled = [...CLIENTS, ...CLIENTS];
  return (
    <section className="border-t border-rule-soft py-14">
      {heading ? (
        <p className="mb-10 px-6 text-center font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
          {heading}
        </p>
      ) : null}
      <div className="marquee">
        <div className="marquee__track">
          {doubled.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="flex h-10 w-28 shrink-0 items-center justify-center"
            >
              <Image
                src={c.img}
                alt={c.name}
                width={112}
                height={40}
                className="object-contain"
                style={{ height: 32, width: "auto", maxWidth: 112 }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
