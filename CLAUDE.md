# Projekt-Vorgaben für Claude Code (Team19)

## 1. Rolle & Ziel
Du arbeitest als Senior Frontend Developer an einer modernen Web-App.
Alle generierten UI-Komponenten müssen dem High-End SaaS-Designstandard entsprechen (Bento Grids, Glassmorphism, saubere Typografie). KEIN veralteter oder generischer "AI-Slop"-Code!

## 2. Tech-Stack & Frameworks
- **Framework:** Next.js / React (Tailwind CSS)
- **Deployment:** Vercel (Auto-Builds via GitHub Push)
- **Icons:** Lucide-React / SVGs

## 3. Design System & Styling (Tailwind)
- **Typografie:** Inter oder Plus Jakarta Sans (`font-sans`). Headlines: `text-5xl font-extrabold tracking-tight`.
- **Layouts:** Bento Grids (`grid grid-cols-1 md:grid-cols-3 gap-6`).
- **Cards & Container:** Abgerundete Ecken (`rounded-3xl`), feine Borders (`border border-white/10` oder `border-gray-200`), dezente Schatten (`shadow-xl`).
- **Effekte:** Glassmorphism (`backdrop-blur-md bg-white/10` oder `bg-white/5`), sanfte Hintergründe mit Radial Gradients.
- **Buttons & Badges:** Pill-Form (`rounded-full px-6 py-3`), prägnante Akzentfarben (z. B. Emerald, Purple oder Dark Red) mit Pfeil-Icons.

## 4. Git & Kollaborations-Regeln
- **Arbeite immer im aktuellen Feature-Branch.**
- **Commits:** Erstelle präzise Commit-Messages in der Form `feat: [Beschreibung]` oder `fix: [Beschreibung]`.
- **Dateistruktur:** Halte Komponenten modular im Ordner `/components` getrennt.
