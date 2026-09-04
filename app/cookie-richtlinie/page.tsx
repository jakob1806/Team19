import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { COOKIE_HTML, COOKIE_INTRO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cookie Richtlinie",
  description: "Cookie-Richtlinie von Team19 Media.",
};

export default function CookieRichtliniePage() {
  return (
    <LegalPage title="Cookie Richtlinie" intro={COOKIE_INTRO}>
      <div dangerouslySetInnerHTML={{ __html: COOKIE_HTML }} />
    </LegalPage>
  );
}
