import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";
import { VALUES, HISTORY, TEAM_INTRO, MEMBERS, TESTIMONIALS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Die Menschen, Werte und die Geschichte hinter Team19 Media.",
};

export default function TeamPage() {
  return (
    <>
      <section className="border-b border-rule-soft">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 md:pt-28 md:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">Über uns</p>
          <WordReveal
            text="Menschen mit Haltung"
            className="mt-8 max-w-[14ch] text-[12vw] font-semibold leading-[0.94] tracking-[-0.035em] sm:text-[8vw] lg:text-[6.4vw]"
          />
          <p className="mt-10 max-w-[62ch] border-t border-rule-soft pt-8 text-lg leading-relaxed text-ink-muted">
            {TEAM_INTRO}
          </p>
        </div>
      </section>

      {/* Members. Portrait left, name and role right, on a hairline row. */}
      <Section>
        <Reveal>
          <h2 className="rise text-4xl font-semibold tracking-tight sm:text-5xl">
            Die Köpfe hinter Team19
          </h2>
          <ul className="mt-14 divide-y divide-rule-soft border-t border-rule-soft">
            {MEMBERS.map((m, i) => (
              <li
                key={m.name}
                className="rise flex flex-col gap-6 py-8 sm:flex-row sm:items-center"
                style={{ ["--i" as string]: i }}
              >
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-surface bg-paper-sunk">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium">{m.name}</h3>
                  <p className="mt-1 text-sm text-brand-red">{m.role}</p>
                  <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-ink-muted">
                    {m.bio}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Values as a hairline grid, no cards. */}
      <Section alt>
        <Reveal>
          <h2 className="rise text-4xl font-semibold tracking-tight sm:text-5xl">Wofür wir stehen</h2>
          <dl className="mt-14 grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="rise border-t border-rule pt-5"
                style={{ ["--i" as string]: i }}
              >
                <dt className="text-lg font-medium">{v.title}</dt>
                <dd className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
                  {v.text}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      {/* History as a single measured read. */}
      <Section>
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
            <h2 className="rise text-4xl font-semibold tracking-tight sm:text-5xl lg:sticky lg:top-28 lg:self-start">
              Wie alles begann
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
              {HISTORY.map((p, i) => (
                <p key={i} className="rise max-w-[68ch]" style={{ ["--i" as string]: i }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Testimonials as pull quotes on rules, not glass cards. */}
      <Section alt>
        <Reveal>
          <h2 className="rise text-4xl font-semibold tracking-tight sm:text-5xl">
            Was unsere Kunden sagen
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.name}
                className="rise border-t border-rule pt-6"
                style={{ ["--i" as string]: i }}
              >
                <blockquote className="space-y-3 text-[15px] leading-relaxed text-ink">
                  {t.paras.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block text-sm font-medium">{t.name}</span>
                  <span className="mt-0.5 block text-sm text-ink-faint">{t.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
