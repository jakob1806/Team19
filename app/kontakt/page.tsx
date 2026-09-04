import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { FORM_INTRO_SOCIAL, GOALS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Beratungstermin anfordern",
  description: "Fordere Deinen kostenlosen Beratungstermin bei Team19 Media an.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-16 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
            Beratungstermin
          </p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Lass uns sprechen
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Buche einen kostenlosen Beratungstermin – wir melden uns innerhalb eines Werktags.
            Mail, Telefon, Adresse und Öffnungszeiten findest Du unten im Footer.
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
