import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { IMPRESSUM } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Team19 Media UG (haftungsbeschränkt).",
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum" intro={IMPRESSUM.responsible}>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-6 not-prose sm:grid-cols-[160px_1fr]">
        {IMPRESSUM.rows.map((row) => (
          <div key={row.label} className="contents">
            <dt className="text-sm font-semibold text-gray-500">{row.label}</dt>
            <dd
              className="text-base text-gray-800 [&_a]:text-brand-red [&_a]:no-underline hover:[&_a]:underline"
              dangerouslySetInnerHTML={{ __html: row.value }}
            />
          </div>
        ))}
      </dl>
    </LegalPage>
  );
}
