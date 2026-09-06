"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CaretDown, List, X } from "@phosphor-icons/react";
import { NAV, COMPANY } from "@/lib/content";
import Button from "./Button";
import { InstagramIcon, FacebookIcon, LinkedInIcon, TikTokIcon } from "./BrandIcons";

const PLATFORM_ICONS: Record<
  string,
  { Icon: React.ComponentType<{ className?: string }>; color: string }
> = {
  instagram: { Icon: InstagramIcon, color: "text-brand-instagram" },
  facebook: { Icon: FacebookIcon, color: "text-brand-facebook" },
  linkedin: { Icon: LinkedInIcon, color: "text-brand-linkedin" },
  tiktok: { Icon: TikTokIcon, color: "text-brand-tiktok" },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // The bar keeps a hairline only once the page has left the top, so the hero
  // opens without a line across it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/85 backdrop-blur-md transition-colors duration-300 ease-out ${
        scrolled ? "border-b border-rule-soft" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          aria-label={`${COMPANY.name}, Startseite`}
          className="flex shrink-0 items-center gap-2.5"
        >
          <Image
            src="/assets/logo/team19-icon-mark.png"
            alt=""
            width={36}
            height={32}
            className="w-auto"
            style={{ height: 28, width: "auto" }}
            priority
          />
          <Image
            src="/assets/logo/team19-logo.webp"
            alt={COMPANY.name}
            width={160}
            height={55}
            className="w-auto"
            style={{ height: 32, width: "auto" }}
            priority
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.key} className="relative">
                {item.sub ? (
                  <div
                    onMouseEnter={() => setSubOpen(item.key)}
                    onMouseLeave={() => setSubOpen(null)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1.5 rounded-control px-3 py-2 text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ink"
                    >
                      {item.label}
                      <CaretDown weight="bold" className="h-3 w-3" />
                    </Link>
                    {subOpen === item.key ? (
                      <ul className="absolute left-0 top-full w-60 overflow-hidden rounded-surface border border-rule bg-paper p-1.5">
                        {item.sub.map((s) => {
                          const platform = PLATFORM_ICONS[s.key];
                          return (
                            <li key={s.key}>
                              <Link
                                href={s.href}
                                className="flex items-center gap-3 rounded-control px-3 py-2.5 text-sm text-ink-muted transition-colors duration-150 hover:bg-paper-sunk hover:text-ink"
                              >
                                {platform ? (
                                  <platform.Icon
                                    className={`h-4 w-4 shrink-0 ${platform.color}`}
                                  />
                                ) : null}
                                {s.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="rounded-control px-3 py-2 text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href="/kontakt" size="sm">
            Beratungstermin anfordern
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="-mr-2 rounded-control p-2 text-ink lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-rule-soft bg-paper px-6 py-4 lg:hidden">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.key} className="border-b border-rule-soft last:border-b-0">
                <Link
                  href={item.href}
                  className="block py-3 text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.sub ? (
                  <ul className="mb-3 flex flex-col gap-0.5 pl-1">
                    {item.sub.map((s) => {
                      const platform = PLATFORM_ICONS[s.key];
                      return (
                        <li key={s.key}>
                          <Link
                            href={s.href}
                            className="flex items-center gap-2.5 py-2 text-sm text-ink-muted"
                            onClick={() => setOpen(false)}
                          >
                            {platform ? (
                              <platform.Icon
                                className={`h-3.5 w-3.5 shrink-0 ${platform.color}`}
                              />
                            ) : null}
                            {s.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Button href="/kontakt" size="sm" className="w-full justify-center">
              Beratungstermin anfordern
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
