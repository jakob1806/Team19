"use client";

import { useState, FormEvent } from "react";
import { COMPANY, CONSENT_TEXT, CHANNELS } from "@/lib/content";
import { ArrowRight } from "@phosphor-icons/react";

export default function ContactForm({
  formId,
  intro,
  goals,
  submitLabel = "Fragebogen abschicken und Termin buchen",
  websiteQuestion = false,
  goalLegend,
}: {
  formId: string;
  intro: string;
  goals: string[];
  submitLabel?: string;
  websiteQuestion?: boolean;
  goalLegend: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      id={formId}
      className="rounded-surface border border-rule bg-paper p-6 sm:p-8"
    >
      <p className="max-w-[62ch] text-[15px] leading-relaxed text-ink-muted">{intro}</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id={`${formId}-vorname`} label="Vorname" name="vorname" autoComplete="given-name" required />
        <Field id={`${formId}-nachname`} label="Nachname" name="nachname" autoComplete="family-name" required />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id={`${formId}-email`} label="E-Mail" name="email" type="email" autoComplete="email" required />
        <Field id={`${formId}-firma`} label="Firma" name="firma" autoComplete="organization" />
      </div>

      {websiteQuestion ? (
        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-ink">
            Besitzt Du bereits eine Webseite?
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Ja", "Nein"].map((v) => (
              <Choice key={v} type="radio" name="webseite" value={v} />
            ))}
          </div>
        </fieldset>
      ) : (
        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-ink">
            Existieren bereits Social Media Präsenzen von Deinem Unternehmen? Wenn ja, welche?
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {CHANNELS.map((c) => (
              <Choice key={c} type="checkbox" name="kanaele" value={c} />
            ))}
          </div>
        </fieldset>
      )}

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-ink">{goalLegend}</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {goals.map((g) => (
            <Choice key={g} type="radio" name="ziel" value={g} />
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <label htmlFor={`${formId}-nachricht`} className="text-sm font-medium text-ink">
          Schreibe uns eine kurze Nachricht über Dein Anliegen
        </label>
        <textarea
          id={`${formId}-nachricht`}
          name="nachricht"
          rows={5}
          className="mt-2 w-full rounded-control border border-rule bg-paper px-3.5 py-2.5 text-[15px] text-ink transition-colors duration-200 placeholder:text-ink-faint focus:border-ink focus:outline-none"
        />
      </div>

      <div className="mt-8 flex items-start gap-3 rounded-control border border-rule-soft bg-paper-sunk p-4">
        <input
          id={`${formId}-consent`}
          name="datenschutz"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[color:var(--brand-red)]"
        />
        <label htmlFor={`${formId}-consent`} className="text-sm leading-relaxed text-ink-muted">
          <strong className="font-medium text-ink">Einwilligungserklärung Datenschutz</strong>
          <br />
          {CONSENT_TEXT}
        </label>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-control bg-ink px-6 py-3 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-black active:translate-y-px"
        >
          {submitLabel}
          <ArrowRight weight="bold" className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </button>
      </div>

      {submitted && (
        <p role="status" className="mt-6 rounded-control border border-rule bg-paper-sunk p-4 text-sm leading-relaxed text-ink">
          Dieses Formular ist noch nicht mit einem Versand-Endpoint verbunden. Schreib uns in der
          Zwischenzeit direkt an{" "}
          <a href={`mailto:${COMPANY.email}`} className="font-medium text-brand-red underline">
            {COMPANY.email}
          </a>{" "}
          oder ruf an:{" "}
          <a href={`tel:${COMPANY.phoneHref}`} className="font-medium text-brand-red underline">
            {COMPANY.phone}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full rounded-control border border-rule bg-paper px-3.5 py-2.5 text-[15px] text-ink transition-colors duration-200 placeholder:text-ink-faint focus:border-ink focus:outline-none"
      />
    </div>
  );
}

function Choice({
  type,
  name,
  value,
}: {
  type: "radio" | "checkbox";
  name: string;
  value: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-full border border-rule px-3.5 py-1.5 text-sm text-ink-muted transition-colors duration-200 hover:border-ink has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-white">
      <input type={type} name={name} value={value} className="h-3.5 w-3.5 accent-brand-red" />
      {value}
    </label>
  );
}
