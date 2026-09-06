# Projekt-Vorgaben für Claude Code (Team19)

## 1. Rolle & Ziel
Du arbeitest als Senior Frontend Developer an der Website von Team19 Media.
Die Seite folgt einem flachen, minimalistischen Weiß-Layout mit dem Logo-Rot als
einzigem Akzent. Sie soll erkennbar eigenständig sein und nicht wie eine
beliebige Marketing-Agentur wirken. Kein generischer "AI-Slop": keine
Standard-SaaS-Kartenraster, keine Glasflächen, keine Farbverlauf-Headlines.

Als Maßstab für Layout, Typografie und Motion dienen `jvm.com` und `sp.design`.

## 2. Tech-Stack & Frameworks
- **Framework:** Next.js (App Router) / React, Tailwind CSS
- **Deployment:** Vercel (Auto-Builds via GitHub Push)
- **Schrift:** Geist Sans + Geist Mono über das `geist`-Paket, selbst gehostet.
  Eine Schriftfamilie für die ganze Seite. Kein Inter, kein Plus Jakarta Sans,
  keine Serife als Display-Schrift.
- **Icons:** `@phosphor-icons/react`, ein Strichgewicht durchgehend
  (`weight="light"` für dekorative, `weight="bold"` für Pfeile).
  Kein Lucide, kein Emoji als Icon. Markenlogos liegen als Inline-SVG in
  `components/BrandIcons.tsx`.

## 3. Design System
Tokens stehen in `app/globals.css` (`:root`) und sind in `tailwind.config.ts`
als Tailwind-Farben gespiegelt. Neue Farben, Radien oder Kurven werden dort
ergänzt, nicht im Einzelfall hart geschrieben.

- **Farben:** `paper` / `paper-sunk` als Flächen, `ink` / `ink-muted` /
  `ink-faint` als Text, `rule` / `rule-soft` als Linien.
  `brand-red` ist der **einzige** Akzent und bleibt knapp: Lesepunkt, Icons,
  Hover, Textmarkierung. Primäre Buttons sind schwarz (`bg-ink`), nicht rot.
  Kein zweiter Akzent, kein Emerald, kein Purple.
- **Shape Lock:** Flächen `rounded-surface` (12px), Bedienelemente
  `rounded-control` (8px). `rounded-full` nur für kleine Chips und Filter,
  nie für Karten oder primäre Buttons.
- **Tiefe:** Haarlinien statt Schatten. Elevation wird **einmal** angegeben,
  entweder Border oder Schatten, nie beides. Kein `shadow-xl`, kein farbiger
  Glow, kein Glassmorphism.
- **Typografie:** Headlines `font-semibold tracking-[-0.035em]`, Tracking nie
  enger als -0.04em. Fließtext `max-w-[65ch]` bis `[68ch]`, `text-ink-muted`.
  Zahlen, die zählen oder Zeiten angeben, bekommen die Klasse `nums`.
- **Layout:** Kartenraster sind nicht die Seitenstruktur. Gruppiert wird über
  `border-t`, `divide-y` und Weißraum. Auf einer Seite kommt jede
  Layout-Familie höchstens einmal vor.

## 4. Text- und Motion-Regeln
Diese Punkte sind aus den Anti-Slop-Skills übernommen und gelten verbindlich.

- **Keine Gedankenstriche** (`—`, `–`) in sichtbaren Texten. Stattdessen Punkt,
  Komma, Doppelpunkt oder normaler Bindestrich. Ausnahme: die Rechtstexte in
  `lib/content.ts` (`DATENSCHUTZ_HTML`, `COOKIE_HTML`) bleiben wörtlich.
- **Eyebrows** (kleine Versallabels über Überschriften): höchstens einer pro
  drei Abschnitte. Im Zweifel weglassen, die Überschrift trägt sich selbst.
- **Keine Floskeln:** kein "Elevate", "Seamless", "Next-Gen", "Revolutionize".
  Konkrete Aussagen mit Bezug zum Betrieb.
- **Ein Label pro Absicht:** die primäre Aktion heißt überall
  "Beratungstermin anfordern".
- **Motion braucht eine Aufgabe.** Die Seite hat genau drei gestaltete Momente,
  alles andere ist ein kurzer Einstieg (`.rise`, `.wipe`):
  1. `WordReveal` für die Headline einer Seite (Wortmaske, gestaffelt)
  2. `ReadingStatement` für das eine Statement der Startseite
  3. `StickyReel` für die Arbeiten (`position: sticky`, kein Scroll-Hijack)
- Animiert werden nur `transform` und `opacity`, plus `clip-path` beim Wipe.
  Keine Animationsbibliothek, kein GSAP, kein Motion.
- **Kein `window.addEventListener("scroll")` mit React-State.** Scrollarbeit
  läuft über `IntersectionObserver` (`components/Reveal.tsx`) oder schreibt
  rAF-gedrosselt in eine CSS-Variable.
- Jede Bewegung braucht ihren Fallback unter `prefers-reduced-motion: reduce`,
  und versteckte Anfangszustände lösen sich unter `@media (scripting: none)`.

## 5. Bild- und Videomaterial
`components/MediaSlot.tsx` ist die Stelle, an der Footage landet: Datei nach
`/public/assets/video`, Pfad als `src` setzen. Ohne Clip trägt das `poster`-Bild
den Platz allein. Vollbild-Panels brauchen Querformat, keine Hochkant-Screenshots.
Keine Stock-Bilder, kein aus `<div>` nachgebautes Fake-UI.

## 6. Git & Kollaboration
- **Arbeite immer im aktuellen Feature-Branch**, nie direkt auf `main`.
- **Commits:** `feat: [Beschreibung]` oder `fix: [Beschreibung]`.
- **Dateistruktur:** Komponenten modular in `/components`, sämtliche Texte,
  Kontaktdaten und Listen ausschließlich in `lib/content.ts`.
- Vor dem Abschluss `npm run build` laufen lassen und die Änderung im Browser
  prüfen, Desktop und Mobil.
