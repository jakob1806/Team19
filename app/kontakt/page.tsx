import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import GlassCard from "@/components/GlassCard";
import { COMPANY, HOURS, FORM_INTRO_SOCIAL, GOALS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktiere Team19 Media für Deinen Beratungstermin.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-16 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">Kontakt</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Lass uns sprechen
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Buche einen kostenlosen Beratungstermin – wir melden uns innerhalb eines Werktags.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                  <a href={`mailto:${COMPANY.email}`} className="font-medium text-gray-800 hover:text-brand-red">
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                  <a href={`tel:${COMPANY.phoneHref}`} className="font-medium text-gray-800 hover:text-brand-red">
                    {COMPANY.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                  <span className="font-medium text-gray-800">
                    {COMPANY.street}
                    <br />
                    {COMPANY.zip} {COMPANY.city}
                  </span>
                </li>
              </ul>
            </div>

            <GlassCard className="p-8">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                <Clock className="h-4 w-4" /> Wir haben offen
              </p>
              <dl className="mt-4 space-y-2">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-sm">
                    <dt className="text-gray-600">{h.day}</dt>
                    <dd className="font-semibold text-gray-900">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </GlassCard>
          </div>

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
