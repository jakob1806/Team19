import type { Metadata } from "next";
import { Search, Smartphone, BarChart3, Lock, Mail, Check } from "lucide-react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import { WEBDESIGN_STEPS, WEBDESIGN_FEATURES, FORM_INTRO_WEB, GOALS_WEB } from "@/lib/content";

export const metadata: Metadata = {
  title: "Webdesign",
  description: "Individuelles Webdesign: Brief, Layout & Konzept, Entwicklung.",
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Smartphone,
  BarChart3,
  Lock,
  Mail,
};

export default function WebdesignPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-16 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">Webdesign</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Deine Webseite, gebaut zum Wachsen
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Vom ersten Fragebogen bis zur fertigen Seite mit SEO, Responsive Design und SSL – alles aus
            einer Hand.
          </p>
        </div>
      </section>

      <Section alt>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">Ablauf</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Unser Prozess
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {WEBDESIGN_STEPS.map((s) => (
            <div
              key={s.k}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">{s.k}</span>
              <h3 className="mt-3 text-xl font-bold text-gray-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.text}</p>
              {s.list.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {s.list.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">Inklusive</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Immer mit dabei
        </h2>
        <BentoGrid className="mt-12 md:grid-cols-2 lg:grid-cols-3">
          {WEBDESIGN_FEATURES.map((f) => {
            const Icon = ICONS[f.icon] ?? Search;
            return (
              <BentoCard key={f.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.text}</p>
              </BentoCard>
            );
          })}
        </BentoGrid>
      </Section>

      <Section alt id="anfrage">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-gray-900">
            Kostenloses Erstgespräch buchen
          </h2>
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
