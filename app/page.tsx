import Image from "next/image";
import {
  UserPlus,
  Megaphone,
  UsersThree,
  Sparkle,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";
import ReadingStatement from "@/components/ReadingStatement";
import StickyReel from "@/components/StickyReel";
import MediaSlot from "@/components/MediaSlot";
import CtaBand from "@/components/CtaBand";
import ClientMarquee from "@/components/ClientMarquee";
import {
  BENEFITS,
  SERVICES,
  USPS,
  REEL,
  STATEMENT,
  PLATFORMS,
  PLATFORM_TEASER,
  COMPANY,
} from "@/lib/content";

const ICONS: Record<string, React.ComponentType<{ className?: string; weight?: "light" }>> = {
  UserPlus,
  Megaphone,
  UsersThree,
  Sparkle,
};

export default function HomePage() {
  return (
    <>
      {/* Hero. Four elements, nothing more: label, headline, one line, actions.
          The headline is the page's authored moment and reveals word by word. */}
      <section className="border-b border-rule-soft">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 md:pt-28 md:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
            Social Media und Webdesign aus München
          </p>
          <WordReveal
            text={COMPANY.tagline}
            className="mt-8 max-w-[16ch] text-[13vw] font-semibold leading-[0.92] tracking-[-0.035em] sm:text-[9vw] lg:text-[7.2vw]"
          />
          <div className="mt-10 flex flex-col gap-8 border-t border-rule-soft pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[42ch] text-lg leading-relaxed text-ink-muted">
              Wir drehen bei Dir vor Ort, bespielen Deine Kanäle und schalten die Anzeigen dazu.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/kontakt">Beratungstermin anfordern</Button>
              <Button href="/referenzen" variant="outline">
                Arbeiten ansehen
              </Button>
            </div>
          </div>
        </div>

        {/* Full-bleed opening frame. Swaps to the showreel the moment a file
            lands in /public/assets/video. */}
        <Reveal className="mx-auto max-w-[1600px] px-6 pb-6">
          <div className="wipe relative aspect-[16/9] overflow-hidden rounded-surface bg-paper-sunk md:aspect-[21/9]">
            <MediaSlot
              poster="/assets/photo/DSC09289Art.jpg"
              label="Team19 Media bei der Arbeit"
              className="h-full w-full"
              priority
            />
          </div>
        </Reveal>
      </section>

      <ClientMarquee />

      {/* What we do for you. A four-up list on a hairline grid, not four cards. */}
      <section className="border-t border-rule-soft">
        <Reveal className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <h2 className="rise max-w-[20ch] text-4xl font-semibold tracking-tight sm:text-5xl">
            Was wir für Dich erreichen
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-px bg-rule-soft sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => {
              const Icon = ICONS[b.icon] ?? Sparkle;
              return (
                <div
                  key={b.title}
                  className="rise bg-paper p-7 lg:p-8"
                  style={{ ["--i" as string]: i }}
                >
                  <Icon className="h-6 w-6 text-brand-red" weight="light" />
                  <h3 className="mt-7 text-lg font-medium">{b.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{b.text}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* The one scroll-authored moment on the page. */}
      <ReadingStatement text={STATEMENT} />

      {/* Work as stacked full-bleed panels. */}
      <StickyReel panels={REEL} />

      {/* Services as a numbered index. Different layout family from every other
          section, and the numbers carry the actual project order. */}
      <section className="relative z-10 border-t border-rule-soft bg-paper">
        <Reveal className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
            <h2 className="rise text-4xl font-semibold tracking-tight sm:text-5xl lg:sticky lg:top-28 lg:self-start">
              Alles aus einer Hand
            </h2>
            <ol className="divide-y divide-rule-soft border-t border-rule-soft">
              {SERVICES.map((s, i) => (
                <li
                  key={s.title}
                  className="rise grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 py-7 md:grid-cols-[auto_minmax(0,14rem)_1fr]"
                  style={{ ["--i" as string]: i }}
                >
                  <span className="nums font-mono text-xs text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <p className="col-start-2 max-w-[60ch] text-[15px] leading-relaxed text-ink-muted md:col-start-3">
                    {s.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      {/* Why us. Editorial two-column read, no icons, no cards. */}
      <section className="border-t border-rule-soft bg-paper-sunk">
        <Reveal className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <h2 className="rise max-w-[24ch] text-4xl font-semibold tracking-tight sm:text-5xl">
            Warum Kunden bei uns bleiben
          </h2>
          <dl className="mt-14 grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-2">
            {USPS.map((u, i) => (
              <div
                key={u.label}
                className="rise border-t border-rule pt-5"
                style={{ ["--i" as string]: i }}
              >
                <dt className="text-lg font-medium">{u.label}</dt>
                <dd className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
                  {u.text}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* Platforms. Asymmetric: the first tile owns two columns. */}
      <section className="border-t border-rule-soft">
        <Reveal className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <h2 className="rise max-w-[20ch] text-4xl font-semibold tracking-tight sm:text-5xl">
            Wir sprechen Deine Plattform
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {(Object.keys(PLATFORMS) as (keyof typeof PLATFORMS)[]).map((key, i) => {
              const p = PLATFORMS[key];
              return (
                <a
                  key={key}
                  href={`/${key}`}
                  className={`rise group relative overflow-hidden rounded-surface ${
                    i === 0 ? "md:col-span-2" : ""
                  }`}
                  style={{ ["--i" as string]: i }}
                >
                  <div className={`relative ${i === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
                    <Image
                      src={p.heroImg}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <div>
                      <h3 className="text-xl font-medium text-white">{p.name}</h3>
                      <p className="mt-1.5 max-w-[34ch] text-sm leading-relaxed text-white/75">
                        {PLATFORM_TEASER[key]}
                      </p>
                    </div>
                    <ArrowUpRight
                      weight="bold"
                      className="h-5 w-5 shrink-0 text-white transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
