import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";
import { PLATFORMS, PLATFORM_TEASER, SOCIAL_OVERVIEW } from "@/lib/content";

export const metadata: Metadata = {
  title: "Social Media Marketing",
  description: SOCIAL_OVERVIEW.lead,
};

export default function SocialMediaOverviewPage() {
  return (
    <>
      <section className="border-b border-rule-soft">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 md:pt-28 md:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
            {SOCIAL_OVERVIEW.eyebrow}
          </p>
          <WordReveal
            text={SOCIAL_OVERVIEW.title}
            className="mt-8 max-w-[13ch] text-[12vw] font-semibold leading-[0.94] tracking-[-0.035em] sm:text-[8vw] lg:text-[6.4vw]"
          />
          <p className="mt-10 max-w-[62ch] border-t border-rule-soft pt-8 text-lg leading-relaxed text-ink-muted">
            {SOCIAL_OVERVIEW.lead}
          </p>
        </div>
      </section>

      {/* Each channel gets a full row: image on one side, the case for the
          platform on the other, alternating. Two rows max per direction. */}
      <section>
        <Reveal className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="divide-y divide-rule-soft border-t border-rule-soft">
            {(Object.keys(PLATFORMS) as (keyof typeof PLATFORMS)[]).map((key, i) => {
              const p = PLATFORMS[key];
              return (
                <a
                  key={key}
                  href={`/${key}`}
                  className="rise group grid grid-cols-1 items-center gap-8 py-10 md:grid-cols-2 md:gap-14"
                  style={{ ["--i" as string]: i }}
                >
                  <div
                    className={`relative aspect-[16/10] overflow-hidden rounded-surface bg-paper-sunk ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={p.heroImg}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{p.name}</h2>
                      <ArrowUpRight
                        weight="bold"
                        className="h-5 w-5 text-ink-faint transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-red"
                      />
                    </div>
                    <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-ink-muted">
                      {PLATFORM_TEASER[key]}
                    </p>
                    <span className="link-draw mt-6 inline-block text-sm font-medium">
                      {p.navLabel} ansehen
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
