import Image from "next/image";

/**
 * One place where the real footage lands.
 *
 * Drop a file into /public/assets/video and pass its path as `src`: the slot
 * plays it muted, looped and inline, with `poster` covering the first frame so
 * nothing pops. Until a clip exists the slot renders the still on its own, so
 * the page is never waiting on an asset to look finished.
 */
export default function MediaSlot({
  src,
  poster,
  label,
  className = "",
  priority = false,
}: {
  src?: string;
  poster: string;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={poster}
          alt={label}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />
    </div>
  );
}
