# Team19

Website von team19.media — Next.js (App Router) + TypeScript + Tailwind CSS, deployed auf Vercel.

## Stack

- **Framework:** Next.js 16 (App Router), React 19
- **Styling:** Tailwind CSS 4
- **Icons:** lucide-react (Marken-Icons als Inline-SVG in `components/BrandIcons.tsx`)
- **Deployment:** Vercel, Auto-Build bei Push

## Struktur

- `app/` — Seiten (App Router), je Route ein Ordner mit `page.tsx`
- `components/` — wiederverwendbare UI-Bausteine (Navbar, Footer, BentoGrid, GlassCard, PillButton, ContactForm, …)
- `lib/content.ts` — sämtliche Texte, Kundendaten und Rechtstexte (Single Source of Truth)
- `public/assets/` — Bilder und Logos

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
