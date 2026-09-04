#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generator für die Team19-Media-Website.

    python3 build.py

Erzeugt statische HTML-Dateien im Projektverzeichnis. Inhalte pflegt man in
build/content.py, das Aussehen in css/style.css, das Verhalten in js/main.js.
Es gibt keine Abhängigkeiten außer Python 3.
"""

import os
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(ROOT, "build"))

import pages          # noqa: E402
import legal_data     # noqa: E402
from layout import page  # noqa: E402
from content import COMPANY, PLATFORMS  # noqa: E402

SUFFIX = " | Team19 Media"


def _pages():
    """(Dateiname, page-key, <title>, meta description, Body-HTML)"""
    out = [
        ("index.html", "home",
         "%s — %s" % (COMPANY["tagline"], COMPANY["name"]),
         "Team19 Media UG – Social Media Marketing Agentur aus Pullach bei München. "
         "Content Creation, Werbekampagnen, Content Management und Auswertungen für "
         "Instagram, Facebook, LinkedIn und TikTok.",
         pages.home()),
    ]

    for key in ("instagram", "facebook", "linkedin", "tiktok"):
        p = PLATFORMS[key]
        out.append((
            "%s.html" % key, key, p["title"] + SUFFIX,
            "%s %s" % (p["title"] + ":", p["lead"]),
            pages.platform(key),
        ))

    out += [
        ("webdesign.html", "webdesign", "Webdesign" + SUFFIX,
         "Die perfekte Webseite für einen gelungenen Auftritt im Internet – "
         "responsive, maßgeschneidert, mit SEO, SSL und Analytics inklusive.",
         pages.webdesign()),
        ("team.html", "team", "Unser Team" + SUFFIX,
         "Kundenorientiert, regional, flexibel und mit Kernkompetenz im Haus – "
         "das Team hinter Team19 Media und unsere Geschichte seit 2019.",
         pages.team()),
        ("referenzen.html", "referenzen", "Referenzen" + SUFFIX,
         "Unsere Referenzen auf einen Blick: Social Media, Webdesign und "
         "Fotografie für Kunden innerhalb und außerhalb Deutschlands.",
         pages.referenzen()),
        ("kontakt.html", "kontakt", "Kontakt" + SUFFIX,
         "So erreichst Du uns: %s, %s. Montag bis Freitag von 08:00 bis 18:00 Uhr."
         % (COMPANY["email"], COMPANY["phone"]),
         pages.kontakt()),
        ("impressum.html", "impressum", "Impressum" + SUFFIX,
         "Impressum und Anbieterkennzeichnung der Team19 Media UG "
         "(haftungsbeschränkt).",
         pages.impressum()),
        ("datenschutz.html", "datenschutz", "Datenschutz" + SUFFIX,
         "Datenschutzerklärung der Team19 Media UG (haftungsbeschränkt).",
         pages.legal("Datenschutz", "Datenschutz", legal_data.datenschutz_html())),
        ("cookie-richtlinie.html", "cookie", "Cookie-Richtlinie" + SUFFIX,
         "Cookie-Richtlinie der Team19 Media UG (haftungsbeschränkt).",
         pages.legal("Cookie-Richtlinie", "Cookie Richtlinie",
                     legal_data.cookie_html(), lead=legal_data.COOKIE_INTRO)),
    ]
    return out


def _sitemap(filenames):
    base = "https://team19.media/"
    urls = []
    for name in filenames:
        loc = base if name == "index.html" else base + name
        urls.append("  <url><loc>%s</loc></url>" % loc)
    return ('<?xml version="1.0" encoding="UTF-8"?>\n'
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
            + "\n".join(urls) + "\n</urlset>\n")


def main():
    built = []
    for filename, key, title, desc, body in _pages():
        html = page(key, title, desc, body)
        with open(os.path.join(ROOT, filename), "w", encoding="utf-8") as fh:
            fh.write(html)
        built.append(filename)
        print("  %-24s %6.1f KB" % (filename, len(html.encode("utf-8")) / 1024.0))

    with open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8") as fh:
        fh.write(_sitemap(built))

    with open(os.path.join(ROOT, "robots.txt"), "w", encoding="utf-8") as fh:
        fh.write("User-agent: *\nAllow: /\n\n"
                 "Sitemap: https://team19.media/sitemap.xml\n")

    print("\n%d Seiten erzeugt, dazu sitemap.xml und robots.txt." % len(built))


if __name__ == "__main__":
    main()
