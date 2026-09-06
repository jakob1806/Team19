import type { Metadata } from "next";
import {
  MagnifyingGlass,
  DeviceMobile,
  ChartBar,
  Lock,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";
import { WEBDESIGN_STEPS, WEBDESIGN_FEATURES, FORM_INTRO_WEB, GOALS_WEB } from "@/lib/content";

export const metadata: Metadata = {
  title: "Webdesign",
  description: "Individuelles Webdesign: Brief, Layout und Konzept, Entwicklung.",
};

const ICONS: Record<string, React.ComponentType<{ className?: string; weight?: "light" }>> = {
  Search: MagnifyingGlass,
  Smartphone: DeviceMobile,
  BarChart3: ChartBar,
  Lock,
  Mail: EnvelopeSimple,
};

export default function WebdesignPage() {
  return (
    <>
      <section className="border-b border-rule-soft">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 md:pt-28 md:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">Webdesign</p>
          <WordReveal
            text="Deine Webseite, gebaut zum Wachsen"
            className="mt-8 max-w-[16ch] text-[11vw] font-semibold leading-[0.94] tracking-[-0.035em] sm:text-[7.5vw] lg:text-[6vw]"
          />
          <p className="mt-10 max-w-[58ch] border-t border-rule-soft pt-8 text-lg leading-relaxed text-ink-muted">
            Vom ersten Fragebogen bis zur fertigen Seite, inklusive SEO, Responsive Design und SSL.
          </p>
        </div>
      </section>

      {/* Process as a numbered index. The numbers carry real sequence. */}
      <Section>
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
            <h2 className="rise text-4xl font-semibold tracking-tight sm:text-5xl lg:sticky lg:top-28 lg:self-start">
              Unser Prozess
            </h2>
            <ol className="divide-y divide-rule-soft border-t border-rule-soft">
              {WEBDESIGN_STEPS.map((s, i) => (
                <li key={s.k} className="rise py-8" style={{ ["--i" as string]: i }}>
                  <div className="flex items-baseline gap-5">
                    <span className="nums font-mono text-xs text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-medium">{s.title}</h3>
                  </div>
                  <p className="mt-3 max-w-[64ch] pl-10 text-[15px] leading-relaxed text-ink-muted">
                    {s.text}
                  </p>
                  {s.list.length > 0 ? (
                    <ul className="mt-4 space-y-2 pl-10">
                      {s.list.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-muted"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-px w-4 shrink-0 bg-brand-red"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Section>

      {/* Included, on a hairline grid rather than as cards. */}
      <Section alt>
        <Reveal>
          <h2 className="rise text-4xl font-semibold tracking-tight sm:text-5xl">Immer mit dabei</h2>
          <div className="mt-14 grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {WEBDESIGN_FEATURES.map((f, i) => {
              const Icon = ICONS[f.icon] ?? MagnifyingGlass;
              return (
                <div
                  key={f.title}
                  className="rise border-t border-rule pt-5"
                  style={{ ["--i" as string]: i }}
                >
                  <Icon className="h-5 w-5 text-brand-red" weight="light" />
                  <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
                  <p className="mt-2 max-w-[46ch] text-[15px] leading-relaxed text-ink-muted">
                    {f.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Section>

      <Section id="anfrage">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight">Kostenloses Erstgespräch buchen</h2>
          <div className="mt-10">
            <ContactForm
              formId="webdesign-form"
              intro={FORM_INTRO_WEB}
              goals={GOALS_WEB}
              websiteQuestion
              goalLegend="Was möchtest Du mit Deiner neuen Webseite erreichen?"
              submitLabel="Fragebogen abschicken und Termin buchen"
            />
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
