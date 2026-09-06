import { ReactNode } from "react";

export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      {intro ? <p className="mt-5 max-w-[62ch] text-base text-ink-muted">{intro}</p> : null}
      <div className="prose prose-neutral mt-12 max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-ink-muted prose-li:text-ink-muted prose-a:text-brand-red prose-a:no-underline hover:prose-a:underline">
        {children}
      </div>
    </section>
  );
}
