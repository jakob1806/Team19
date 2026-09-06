import { COMPANY } from "@/lib/content";
import Button from "./Button";

/**
 * Closing action. Flat ink panel rather than a red field: the accent stays
 * scarce and is spent on the primary action, not on a whole section.
 */
export default function CtaBand({
  heading,
  text,
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="relative z-10 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <h2 className="max-w-[18ch] text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          {heading ?? "Reden wir über Deinen Auftritt."}
        </h2>
        <div className="mt-10 flex flex-col gap-8 border-t border-white/15 pt-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[46ch] text-lg leading-relaxed text-white/70">
            {text ??
              "Kostenloses Erstgespräch, unverbindlich. Wir melden uns innerhalb eines Werktags bei Dir."}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/kontakt" variant="light">
              Beratungstermin anfordern
            </Button>
            <Button href={`mailto:${COMPANY.email}`} variant="outline-light" arrow={false}>
              {COMPANY.email}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
