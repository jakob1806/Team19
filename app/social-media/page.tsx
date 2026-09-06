import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import { BentoGrid } from "@/components/BentoGrid";
import { PLATFORMS, PLATFORM_TEASER, SOCIAL_OVERVIEW } from "@/lib/content";

export const metadata: Metadata = {
  title: "Social Media Marketing",
  description: SOCIAL_OVERVIEW.lead,
};

export default function SocialMediaOverviewPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-16 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
            {SOCIAL_OVERVIEW.eyebrow}
          </p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            {SOCIAL_OVERVIEW.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">{SOCIAL_OVERVIEW.lead}</p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <BentoGrid className="md:grid-cols-2">
            {(Object.keys(PLATFORMS) as (keyof typeof PLATFORMS)[]).map((key) => {
              const p = PLATFORMS[key];
              return (
                <a
                  key={key}
                  href={`/${key}`}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-xl"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={p.heroImg}
                      alt={p.name}
                      fill
                      sizes="600px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h2 className="text-2xl font-bold text-white">{p.name}</h2>
                    <p className="mt-2 max-w-sm text-sm text-white/80">{PLATFORM_TEASER[key]}</p>
                  </div>
                </a>
              );
            })}
          </BentoGrid>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
