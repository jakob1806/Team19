import Image from "next/image";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";
import { PLATFORMS, PlatformKey, FORM_INTRO_SOCIAL, GOALS } from "@/lib/content";

export default function PlatformPage({ platform }: { platform: PlatformKey }) {
  const p = PLATFORMS[platform];

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-16 md:pt-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
              Social Media Marketing
            </p>
            <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              {p.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-600">{p.lead}</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
            <Image src={p.heroImg} alt={p.name} fill sizes="500px" className="object-cover" priority />
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-gray-600">
          {p.paras.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Section>

      {p.extra && (
        <Section alt>
          <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-8 shadow-xl sm:p-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">{p.extra.title}</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-600">
              {p.extra.paras.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">Einblicke</p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Ausgewählte Arbeiten</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {p.shots.map((src) => (
            <div
              key={src}
              className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-gray-200 shadow-lg"
            >
              <Image src={src} alt="" fill sizes="300px" className="object-cover" />
            </div>
          ))}
        </div>
      </Section>

      <Section alt id="anfrage">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-gray-900">
            Jetzt Beratungstermin anfragen
          </h2>
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
