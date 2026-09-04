import type { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";
import Section from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import GlassCard from "@/components/GlassCard";
import { VALUES, HISTORY, TEAM_INTRO, MEMBERS, TESTIMONIALS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Die Menschen, Werte und die Geschichte hinter Team19 Media.",
};

export default function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-16 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">Über uns</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Menschen mit Haltung
          </h1>
        </div>
      </section>

      {/* Team intro + members */}
      <Section alt>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">Das Team</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Die Köpfe hinter Team19
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">{TEAM_INTRO}</p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {MEMBERS.map((m) => (
            <div
              key={m.name}
              className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-xl"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gray-100">
                <Image src={m.photo} alt={m.name} width={96} height={96} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-base font-bold text-gray-900">{m.name}</h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{m.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">Werte</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Wofür wir stehen
        </h2>
        <BentoGrid className="mt-12 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <BentoCard key={v.title}>
              <h3 className="text-lg font-bold text-gray-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.text}</p>
            </BentoCard>
          ))}
        </BentoGrid>
      </Section>

      {/* History */}
      <Section alt>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">Geschichte</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Wie alles begann
        </h2>
        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-gray-600">
          {HISTORY.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">Stimmen</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Was unsere Kunden sagen
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <GlassCard key={t.name} className="p-8">
              <Quote className="h-6 w-6 text-brand-red/40" />
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
                {t.paras.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="mt-6 text-sm font-bold text-gray-900">{t.name}</p>
              <p className="text-xs text-gray-500">{t.meta}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
