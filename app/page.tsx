import Image from "next/image";
import { Users, Megaphone, UsersRound, Sparkles } from "lucide-react";
import Section from "@/components/Section";
import PillButton from "@/components/PillButton";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import CtaBand from "@/components/CtaBand";
import ClientMarquee from "@/components/ClientMarquee";
import { BENEFITS, SERVICES, PLATFORMS, PLATFORM_TEASER, COMPANY, HERO_PHOTOS } from "@/lib/content";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Megaphone,
  UsersRound,
  Sparkles,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-500 shadow-sm">
              {COMPANY.subline}
            </p>
            <h1 className="mt-6 text-balance text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              {COMPANY.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-600">{COMPANY.claim}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PillButton href="/kontakt">Beratungstermin anfordern</PillButton>
              <PillButton href="/referenzen" variant="outline">
                Referenzen ansehen
              </PillButton>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {HERO_PHOTOS.slice(0, 6).map((src, i) => (
              <div
                key={src}
                className={`relative aspect-[3/4] overflow-hidden rounded-3xl border border-gray-200 shadow-xl ${
                  i === 1 || i === 4 ? "translate-y-6" : ""
                }`}
              >
                <Image src={src} alt="" fill sizes="200px" className="object-cover" priority={i < 2} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Section alt>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
          Nutzenversprechen
        </p>
        <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Was wir für Dich erreichen
        </h2>
        <BentoGrid className="mt-12 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => {
            const Icon = ICONS[b.icon] ?? Sparkles;
            return (
              <BentoCard key={b.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{b.text}</p>
              </BentoCard>
            );
          })}
        </BentoGrid>
      </Section>

      {/* Services */}
      <Section>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
          Leistungen
        </p>
        <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Alles aus einer Hand
        </h2>
        <BentoGrid className="mt-12 md:grid-cols-2">
          {SERVICES.map((s) => (
            <BentoCard key={s.title}>
              <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray-600">
                {s.paras.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </Section>

      {/* Platform teaser bento */}
      <Section alt>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
          Social Media
        </p>
        <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Wir sprechen Deine Plattform
        </h2>
        <BentoGrid className="mt-12">
          {(Object.keys(PLATFORMS) as (keyof typeof PLATFORMS)[]).map((key) => {
            const p = PLATFORMS[key];
            return (
              <a
                key={key}
                href={`/${key}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-xl"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={p.heroImg}
                    alt={p.name}
                    fill
                    sizes="400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <p className="mt-2 text-sm text-white/80">{PLATFORM_TEASER[key]}</p>
                </div>
              </a>
            );
          })}
        </BentoGrid>
      </Section>

      <ClientMarquee />
      <CtaBand />
    </>
  );
}
