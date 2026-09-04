"use client";

import { useState, FormEvent } from "react";
import { COMPANY, CONSENT_TEXT, CHANNELS } from "@/lib/content";
import { ArrowRight } from "lucide-react";

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
      className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8"
    >
      <p className="text-base text-gray-600">{intro}</p>

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
          <legend className="text-sm font-semibold text-gray-800">
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
          <legend className="text-sm font-semibold text-gray-800">
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
        <legend className="text-sm font-semibold text-gray-800">{goalLegend}</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {goals.map((g) => (
            <Choice key={g} type="radio" name="ziel" value={g} />
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <label htmlFor={`${formId}-nachricht`} className="text-sm font-semibold text-gray-800">
          Schreibe uns eine kurze Nachricht über Dein Anliegen
        </label>
        <textarea
          id={`${formId}-nachricht`}
          name="nachricht"
          rows={5}
          className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
        />
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-2xl bg-gray-50 p-4">
        <input
          id={`${formId}-consent`}
          name="datenschutz"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-brand-red focus:ring-brand-red"
        />
        <label htmlFor={`${formId}-consent`} className="text-sm text-gray-600">
          <strong className="text-gray-800">Einwilligungserklärung Datenschutz</strong>
          <br />
          {CONSENT_TEXT}
        </label>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-base font-semibold text-white shadow-lg shadow-red-600/20 transition-colors hover:bg-red-700"
        >
          {submitLabel}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>

      {submitted && (
        <p role="status" className="mt-6 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-800">
          Dieses Formular ist noch nicht mit einem Versand-Endpoint verbunden. Schreib uns in der
          Zwischenzeit direkt an{" "}
          <a href={`mailto:${COMPANY.email}`} className="font-semibold underline">
            {COMPANY.email}
          </a>{" "}
          oder ruf an:{" "}
          <a href={`tel:${COMPANY.phoneHref}`} className="font-semibold underline">
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
      <label htmlFor={id} className="text-sm font-semibold text-gray-800">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
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
    <label className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 has-[:checked]:border-brand-red has-[:checked]:bg-brand-red/5 has-[:checked]:text-brand-red">
      <input type={type} name={name} value={value} className="h-3.5 w-3.5 accent-brand-red" />
      {value}
    </label>
  );
}
