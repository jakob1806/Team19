import Image from "next/image";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";
import { PLATFORMS, PlatformKey, FORM_INTRO_SOCIAL, GOALS } from "@/lib/content";

/**
 * Eine Seite pro Plattform, aber kein gemeinsames Schema: gerendert wird nur,
 * was die Plattform an Bloecken mitbringt. Instagram bekommt Formate und einen
 * Essay, Facebook Einsatzzwecke und eine Gegenrede, LinkedIn einen Vergleich,
 * TikTok Formate und eine Gegenrede. Dadurch unterscheiden sich die vier Seiten
 * im Aufbau und nicht nur im Text.
 */
export default function PlatformPage({ platform }: { platform: PlatformKey }) {
  const p = PLATFORMS[platform];

  return (
    <>
      <section className="border-b border-rule-soft">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 md:pt-28 md:pb-20">
          <WordReveal
            text={p.title}
            className="max-w-[14ch] text-[12vw] font-semibold leading-[0.94] tracking-[-0.035em] sm:text-[8vw] lg:text-[6.4vw]"
          />
          <p className="mt-10 max-w-[58ch] border-t border-rule-soft pt-8 text-lg leading-relaxed text-ink-muted">
            {p.lead}
          </p>
        </div>

        <Reveal className="mx-auto max-w-[1600px] px-6 pb-6">
          <div className="wipe relative aspect-[16/9] overflow-hidden rounded-surface bg-paper-sunk md:aspect-[21/9]">
            <Image src={p.heroImg} alt="" fill sizes="100vw" className="object-cover" priority />
          </div>
        </Reveal>
      </section>

      {/* Einstieg: zwei Absaetze neben einer stehenbleibenden Ueberschrift. */}
      <Section>
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)]">
            <h2 className="rise text-3xl font-semibold tracking-tight sm:text-4xl lg:sticky lg:top-28 lg:self-start">
              Wie wir auf {p.name} arbeiten
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
              {p.intro.map((para, i) => (
                <p key={i} className="rise max-w-[68ch]" style={{ ["--i" as string]: i }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Formate: nummerierter Index. */}
      {p.formats ? (
        <Section alt>
          <Reveal>
            <h2 className="rise max-w-[20ch] text-3xl font-semibold tracking-tight sm:text-4xl">
              {p.formats.title}
            </h2>
            {p.formats.lead ? (
              <p className="rise mt-4 max-w-[58ch] text-lg leading-relaxed text-ink-muted">
                {p.formats.lead}
              </p>
            ) : null}
            <ol className="mt-12 divide-y divide-rule-soft border-t border-rule-soft">
              {p.formats.items.map((item, i) => (
                <li
                  key={item.name}
                  className="rise grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 py-7 md:grid-cols-[auto_minmax(0,16rem)_1fr]"
                  style={{ ["--i" as string]: i }}
                >
                  <span className="nums font-mono text-xs text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="col-start-2 max-w-[60ch] text-[15px] leading-relaxed text-ink-muted md:col-start-3">
                    {item.note}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Section>
      ) : null}

      {/* Vergleich: zwei Spalten nebeneinander. */}
      {p.compare ? (
        <Section alt>
          <Reveal>
            <h2 className="rise max-w-[22ch] text-3xl font-semibold tracking-tight sm:text-4xl">
              {p.compare.title}
            </h2>
            {p.compare.lead ? (
              <p className="rise mt-4 max-w-[62ch] text-lg leading-relaxed text-ink-muted">
                {p.compare.lead}
              </p>
            ) : null}
            <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-2">
              {p.compare.columns.map((col, i) => (
                <div
                  key={col.name}
                  className="rise border-t border-ink pt-5"
                  style={{ ["--i" as string]: i }}
                >
                  <h3 className="text-xl font-medium">{col.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{col.note}</p>
                  <ul className="mt-6 space-y-3">
                    {col.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[15px] leading-relaxed text-ink"
                      >
                        <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-brand-red" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>
      ) : null}

      {/* Einsatzzwecke: Haarlinienraster. */}
      {p.useCases ? (
        <Section>
          <Reveal>
            <h2 className="rise max-w-[20ch] text-3xl font-semibold tracking-tight sm:text-4xl">
              {p.useCases.title}
            </h2>
            {p.useCases.lead ? (
              <p className="rise mt-4 max-w-[58ch] text-lg leading-relaxed text-ink-muted">
                {p.useCases.lead}
              </p>
            ) : null}
            <dl className="mt-12 grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-2">
              {p.useCases.items.map((item, i) => (
                <div
                  key={item.name}
                  className="rise border-t border-rule pt-5"
                  style={{ ["--i" as string]: i }}
                >
                  <dt className="text-lg font-medium">{item.name}</dt>
                  <dd className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
                    {item.note}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Section>
      ) : null}

      {/* Haltung: eine gemessene Spalte. */}
      {p.essay ? (
        <Section alt>
          <Reveal>
            <div className="max-w-[62ch]">
              <h2 className="rise text-3xl font-semibold tracking-tight sm:text-4xl">
                {p.essay.title}
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-muted">
                {p.essay.paras.map((para, i) => (
                  <p key={i} className="rise" style={{ ["--i" as string]: i + 1 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </Section>
      ) : null}

      {/* Gegenrede: dunkle Flaeche, damit die ehrliche Einschraenkung auffaellt
          statt im Fliesstext unterzugehen. */}
      {p.honest ? (
        <section className="relative z-10 bg-ink text-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="max-w-[58ch]">
              <h2 className="rise text-3xl font-semibold tracking-tight sm:text-4xl">
                {p.honest.title}
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/70">
                {p.honest.paras.map((para, i) => (
                  <p key={i} className="rise" style={{ ["--i" as string]: i + 1 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      ) : null}

      <Section>
        <Reveal>
          <h2 className="rise text-3xl font-semibold tracking-tight sm:text-4xl">
            Ausgewählte Arbeiten
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {p.shots.map((src, i) => (
              <div
                key={src}
                className="wipe relative aspect-[3/4] overflow-hidden rounded-surface bg-paper-sunk"
                style={{ ["--i" as string]: i }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section alt id="anfrage">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight">Beratungstermin anfordern</h2>
          <div className="mt-10">
            <ContactForm
              formId={`${platform}-form`}
              intro={FORM_INTRO_SOCIAL}
              goals={GOALS}
              goalLegend="Was möchtest Du durch Social Media erreichen"
            />
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
