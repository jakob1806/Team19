import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { DATENSCHUTZ_HTML } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Team19 Media.",
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutz">
      <div dangerouslySetInnerHTML={{ __html: DATENSCHUTZ_HTML }} />
    </LegalPage>
  );
}
