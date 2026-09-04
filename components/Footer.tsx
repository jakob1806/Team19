import Link from "next/link";
import Image from "next/image";
import { COMPANY, SOCIAL, PLATFORM_NAV } from "@/lib/content";
import { InstagramIcon, FacebookIcon, LinkedInIcon, TikTokIcon } from "./BrandIcons";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  tiktok: TikTokIcon,
};

function copyrightLine() {
  const year = new Date().getFullYear();
  const founded = COMPANY.founded;
  const span = year <= founded ? String(founded) : `${founded}–${year}`;
  return `Copyright © ${span} ${COMPANY.name} UG`;
}

export default function Footer() {
  return (
    <footer className="bg-brand-ink bg-[#0b0c10] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/assets/logo/team19-logo.webp"
              alt={COMPANY.name}
              width={140}
              height={48}
              className="brightness-0 invert"
            />
            <p className="mt-4 text-sm text-white/60">
              {COMPANY.tagline}. {COMPANY.claim}
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIAL.map((s) => {
                const Icon = ICONS[s.key];
                return (
                  <a
                    key={s.key}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/10"
                  >
                    {Icon ? <Icon className="h-4 w-4" /> : <TikTokIcon className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Social Media
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {PLATFORM_NAV.map((p) => (
                <li key={p.key}>
                  <Link href={p.href} className="hover:text-white">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Agentur
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <Link href="/webdesign" className="hover:text-white">
                  Webdesign
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white">
                  Unser Team
                </Link>
              </li>
              <li>
                <Link href="/referenzen" className="hover:text-white">
                  Referenzen
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Kontakt
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phoneHref}`} className="hover:text-white">
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                {COMPANY.street}
                <br />
                {COMPANY.zip} {COMPANY.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <span>{copyrightLine()}</span>
          <nav aria-label="Rechtliches" className="flex gap-6">
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
            <Link href="/cookie-richtlinie" className="hover:text-white">
              Cookie Richtlinie
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
