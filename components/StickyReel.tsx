import Image from "next/image";
import MediaSlot from "./MediaSlot";

export type ReelPanel = {
  title: string;
  note: string;
  img: string;
  /** Fill in once the shoot lands. A video wins over the still. */
  video?: string;
};

/**
 * Full-bleed panels that pin at the top of the viewport and stack over one
 * another as you scroll, so each piece of work covers the previous one instead
 * of scrolling past it.
 *
 * Technique read off jvm.com, which layers its teaser blocks with
 * `position: sticky; top: 0` rather than a scroll-hijack. No JS runs while
 * scrolling: the browser does the pinning.
 */
export default function StickyReel({ panels }: { panels: ReelPanel[] }) {
  return (
    <div className="relative">
      {panels.map((panel, i) => (
        <section key={panel.title} className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0">
            {panel.video ? (
              <MediaSlot
                src={panel.video}
                poster={panel.img}
                label={panel.title}
                className="h-full w-full"
              />
            ) : (
              <Image
                src={panel.img}
                alt={panel.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
          </div>

          <div className="relative flex h-full items-end">
            <div className="mx-auto w-full max-w-7xl px-6 pb-16 md:pb-24">
              <p className="nums text-xs font-medium text-white/60">
                {String(i + 1).padStart(2, "0")} / {String(panels.length).padStart(2, "0")}
              </p>
              <h3 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                {panel.title}
              </h3>
              <p className="mt-4 max-w-xl text-base text-white/75">{panel.note}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
