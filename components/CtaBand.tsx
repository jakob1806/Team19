import { COMPANY } from "@/lib/content";
import PillButton from "./PillButton";

export default function CtaBand({
  heading,
  text,
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-red py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 80% 20%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Bereit?</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          {heading ?? COMPANY.claim}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
          {text ??
            "Jetzt einen kostenlosen Beratungstermin vereinbaren – wir melden uns innerhalb eines Werktags bei Dir."}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <PillButton href="/kontakt" variant="light">
            Beratungstermin anfordern
          </PillButton>
          <PillButton href={`mailto:${COMPANY.email}`} variant="outline-light" arrow={false}>
            {COMPANY.email}
          </PillButton>
        </div>
      </div>
    </section>
  );
}
