import type { Metadata } from "next";
import Section from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Referenzen",
  description: "Webdesign, Social Media und Fotografie – ausgewählte Arbeiten von Team19 Media.",
};

export default function ReferenzenPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-16 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">Referenzen</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Ausgewählte Arbeiten
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Webdesign, Social Media Content und Fotografie für Kunden aus verschiedenen Branchen.
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
