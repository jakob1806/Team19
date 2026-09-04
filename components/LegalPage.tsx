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
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">{title}</h1>
      {intro && <p className="mt-4 text-base text-gray-600">{intro}</p>}
      <div
        className="prose prose-gray mt-10 max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-brand-red prose-a:no-underline hover:prose-a:underline"
      >
        {children}
      </div>
    </section>
  );
}
