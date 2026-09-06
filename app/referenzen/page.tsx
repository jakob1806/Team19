import type { Metadata } from "next";
import Section from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import WorkGrid from "@/components/WorkGrid";
import WordReveal from "@/components/WordReveal";

export const metadata: Metadata = {
  title: "Referenzen",
  description: "Webdesign, Social Media und Fotografie: ausgewählte Arbeiten von Team19 Media.",
};

export default function ReferenzenPage() {
  return (
    <>
      <section className="border-b border-rule-soft">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 md:pt-28 md:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">Referenzen</p>
          <WordReveal
            text="Ausgewählte Arbeiten"
            className="mt-8 max-w-[14ch] text-[12vw] font-semibold leading-[0.94] tracking-[-0.035em] sm:text-[8vw] lg:text-[6.4vw]"
          />
          <p className="mt-10 max-w-[58ch] border-t border-rule-soft pt-8 text-lg leading-relaxed text-ink-muted">
            Webdesign, Social-Media-Content und Fotografie für Kunden aus verschiedenen Branchen.
          </p>
        </div>
      </section>

      <Section>
        <WorkGrid />
      </Section>

      <CtaBand />
    </>
  );
}
