import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import WordReveal from "@/components/WordReveal";
import { FORM_INTRO_SOCIAL, GOALS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Beratungstermin anfordern",
  description: "Fordere Deinen kostenlosen Beratungstermin bei Team19 Media an.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="border-b border-rule-soft">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 md:pt-28 md:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
            Beratungstermin
          </p>
          <WordReveal
            text="Lass uns sprechen"
            className="mt-8 max-w-[12ch] text-[12vw] font-semibold leading-[0.94] tracking-[-0.035em] sm:text-[8vw] lg:text-[6.4vw]"
          />
          <p className="mt-10 max-w-[58ch] border-t border-rule-soft pt-8 text-lg leading-relaxed text-ink-muted">
            Kostenlos und unverbindlich. Wir melden uns innerhalb eines Werktags. Mail, Telefon,
            Adresse und Öffnungszeiten stehen unten im Footer.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <ContactForm
            formId="kontakt-form"
            intro={FORM_INTRO_SOCIAL}
            goals={GOALS}
            goalLegend="Was möchtest Du durch Social Media erreichen"
          />
        </div>
      </Section>
    </>
  );
}
