import Link from "next/link";
import Image from "next/image";
import { COMPANY, SOCIAL, PLATFORM_NAV, HOURS, GOOGLE_MAPS_URL } from "@/lib/content";
import { InstagramIcon, FacebookIcon, LinkedInIcon, TikTokIcon } from "./BrandIcons";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  tiktok: TikTokIcon,
};

const PLATFORM_COLORS: Record<string, string> = {
  instagram: "text-brand-instagram",
  facebook: "text-brand-facebook",
  linkedin: "text-brand-linkedin",
  tiktok: "text-ink",
};

function copyrightLine() {
  const year = new Date().getFullYear();
  const founded = COMPANY.founded;
  const span = year <= founded ? String(founded) : `${founded}-${year}`;
  return `Copyright © ${span} ${COMPANY.legal}`;
}

const COL_HEAD = "font-mono text-xs uppercase tracking-[0.14em] text-ink-faint";
const COL_LINK = "text-ink-muted transition-colors duration-200 hover:text-ink";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-rule bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="md:col-span-2 lg:col-span-1">
            <Image
              src="/assets/logo/team19-logo.webp"
              alt={COMPANY.name}
              width={140}
              height={48}
              className="w-auto"
              style={{ height: 32, width: "auto" }}
            />
            <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-ink-muted">
              {COMPANY.claim}
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIAL.map((s) => {
                const Icon = ICONS[s.key];
                return (
                  <a
                    key={s.key}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-control border border-rule text-ink-muted transition-colors duration-200 hover:border-ink hover:text-ink"
                  >
                    {Icon ? <Icon className="h-4 w-4" /> : null}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className={COL_HEAD}>Social Media</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <Link href="/social-media" className={COL_LINK}>
                  Alle Kanäle
                </Link>
              </li>
              {PLATFORM_NAV.map((p) => {
                const Icon = ICONS[p.key];
                return (
                  <li key={p.key}>
                    <Link href={p.href} className={`flex items-center gap-2 ${COL_LINK}`}>
                      {Icon ? (
                        <Icon className={`h-3.5 w-3.5 shrink-0 ${PLATFORM_COLORS[p.key]}`} />
                      ) : null}
                      {p.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className={COL_HEAD}>Agentur</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <Link href="/webdesign" className={COL_LINK}>
                  Webdesign
                </Link>
              </li>
              <li>
                <Link href="/team" className={COL_LINK}>
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/referenzen" className={COL_LINK}>
                  Referenzen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={COL_HEAD}>Kontakt</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${COMPANY.email}`} className={COL_LINK}>
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phoneHref}`} className={`nums ${COL_LINK}`}>
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={COL_LINK}
                >
                  {COMPANY.street}
                  <br />
                  {COMPANY.zip} {COMPANY.city}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={COL_HEAD}>Öffnungszeiten</h4>
            <dl className="mt-5 space-y-2.5 text-sm">
              {HOURS.map((h) => (
                <div key={h.day} className="flex items-baseline justify-between gap-4">
                  <dt className="text-ink-muted">{h.day}</dt>
                  <dd className="nums text-ink">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-rule-soft pt-7 text-sm text-ink-faint sm:flex-row sm:items-center">
          <span>{copyrightLine()}</span>
          <nav aria-label="Rechtliches" className="flex gap-6">
            <Link href="/impressum" className={COL_LINK}>
              Impressum
            </Link>
            <Link href="/datenschutz" className={COL_LINK}>
              Datenschutz
            </Link>
            <Link href="/cookie-richtlinie" className={COL_LINK}>
              Cookie Richtlinie
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
