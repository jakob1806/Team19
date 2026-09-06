"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV, COMPANY } from "@/lib/content";
import PillButton from "./PillButton";
import { InstagramIcon, FacebookIcon, LinkedInIcon, TikTokIcon } from "./BrandIcons";

const PLATFORM_ICONS: Record<string, { Icon: React.ComponentType<{ className?: string }>; color: string }> = {
  instagram: { Icon: InstagramIcon, color: "text-brand-instagram" },
  facebook: { Icon: FacebookIcon, color: "text-brand-facebook" },
  linkedin: { Icon: LinkedInIcon, color: "text-brand-linkedin" },
  tiktok: { Icon: TikTokIcon, color: "text-[#0d0d0d]" },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          aria-label={`${COMPANY.name} — Startseite`}
          className="flex shrink-0 items-center gap-2.5"
        >
          <Image
            src="/assets/logo/team19-icon-mark.png"
            alt=""
            width={36}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <Image
            src="/assets/logo/team19-logo.webp"
            alt={COMPANY.name}
            width={160}
            height={55}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.key} className="relative">
                {item.sub ? (
                  <div
                    className="group"
                    onMouseEnter={() => setSubOpen(item.key)}
                    onMouseLeave={() => setSubOpen(null)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Link>
                    {subOpen === item.key && (
                      <ul className="absolute left-0 top-full w-64 rounded-3xl border border-gray-200 bg-white p-2 shadow-xl">
                        {item.sub.map((s) => {
                          const platform = PLATFORM_ICONS[s.key];
                          return (
                            <li key={s.key}>
                              <Link
                                href={s.href}
                                className="flex items-center gap-3 rounded-2xl px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
                              >
                                {platform && (
                                  <platform.Icon className={`h-4 w-4 shrink-0 ${platform.color}`} />
                                )}
                                {s.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <PillButton href="/kontakt" size="sm">
            Beratungstermin anfordern
          </PillButton>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Menü öffnen"
          className="rounded-full p-2 text-gray-900 lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-3 py-2.5 font-semibold text-gray-800"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.sub && (
                  <ul className="ml-4 flex flex-col gap-0.5 border-l border-gray-200 pl-3">
                    {item.sub.map((s) => (
                      <li key={s.key}>
                        <Link
                          href={s.href}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-600"
                          onClick={() => setOpen(false)}
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <PillButton href="/kontakt" size="sm" className="w-full justify-center">
              Beratungstermin anfordern
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
}
