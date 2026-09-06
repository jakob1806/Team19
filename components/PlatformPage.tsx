import Image from "next/image";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";
import { PLATFORMS, PlatformKey, FORM_INTRO_SOCIAL, GOALS } from "@/lib/content";

export default function PlatformPage({ platform }: { platform: PlatformKey }) {
  const p = PLATFORMS[platform];

  return (
    <>
      <section className="border-b border-rule-soft">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 md:pt-28 md:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
            Social Media Marketing
          </p>
          <WordReveal
            text={p.title}
            className="mt-8 max-w-[14ch] text-[12vw] font-semibold leading-[0.94] tracking-[-0.035em] sm:text-[8vw] lg:text-[6.4vw]"
          />
          <p className="mt-10 max-w-[58ch] border-t border-rule-soft pt-8 text-lg leading-relaxed text-ink-muted">
            {p.lead}
          </p>
        </div>

        <Reveal className="mx-auto max-w-[1600px] px-6 pb-6">
          <div className="wipe relative aspect-[16/9] overflow-hidden rounded-surface bg-paper-sunk md:aspect-[21/9]">
            <Image
              src={p.heroImg}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </section>

      {/* The long read, in one measured column beside a sticky label. */}
      <Section>
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)]">
            <h2 className="rise text-3xl font-semibold tracking-tight sm:text-4xl lg:sticky lg:top-28 lg:self-start">
              Wie wir auf {p.name} arbeiten
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
              {p.paras.map((para, i) => (
                <p key={i} className="rise max-w-[68ch]" style={{ ["--i" as string]: i }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {p.extra ? (
        <Section alt>
          <Reveal>
            <div className="max-w-[62ch]">
              <h2 className="rise text-3xl font-semibold tracking-tight sm:text-4xl">
                {p.extra.title}
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-muted">
                {p.extra.paras.map((para, i) => (
                  <p key={i} className="rise" style={{ ["--i" as string]: i + 1 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </Section>
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
