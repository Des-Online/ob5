"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { pestOptions } from "@/content/services";
import styles from "./wizard.module.css";

const urgencyOptions = ["Spoed - zo snel mogelijk", "Vandaag of morgen", "Deze week", "Inplannen wanneer het uitkomt"];

type WizardData = {
  postcode: string;
  pest: string;
  urgency: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  serviceSlug?: string;
  citySlug?: string;
  provinceSlug?: string;
};

const initialData: WizardData = { postcode: "", pest: "", urgency: "", name: "", phone: "", email: "", message: "" };

export function InspectionWizard() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState<WizardData>(initialData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const opener = useRef<HTMLElement | null>(null);
  const dialog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openWizard = (event: Event) => {
      opener.current = document.activeElement as HTMLElement;
      const detail = (event as CustomEvent<Partial<WizardData>>).detail || {};
      setData((current) => ({ ...current, ...detail }));
      setOpen(true);
      setStep(0);
      setStatus("idle");
      setError("");
      window.dispatchEvent(new CustomEvent("trackEvent", { detail: { event: "inspection_open", ...detail } }));
    };
    window.addEventListener("openInspectionWizard", openWizard);
    return () => window.removeEventListener("openInspectionWizard", openWizard);
  }, []);

  useEffect(() => {
    document.body.dataset.lockScroll = open ? "true" : "false";
    if (!open) return;
    const items = () => Array.from(dialog.current?.querySelectorAll<HTMLElement>("button,input,select,textarea,a") || []);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab") {
        const focusable = items();
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    setTimeout(() => items()[0]?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.dataset.lockScroll = "false";
    };
  }, [open]);

  function close() {
    setOpen(false);
    opener.current?.focus();
  }

  function canContinue() {
    if (step === 0) return data.postcode.trim().length >= 4;
    if (step === 1) return Boolean(data.pest);
    if (step === 2) return Boolean(data.urgency);
    return data.phone.trim().length >= 8;
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!canContinue()) {
      setError("Vul de verplichte velden in.");
      return;
    }
    setStatus("submitting");
    setError("");
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        formId: "inspection-wizard",
        source: "inspection-wizard",
        pageType: "wizard",
        pageUrl: window.location.href,
        timestamp: new Date().toISOString(),
        consentStatus: localStorage.getItem("ob-consent") || "unknown"
      })
    });
    const result = (await response.json().catch(() => ({}))) as { message?: string };
    if (response.ok) {
      setStatus("success");
      window.dispatchEvent(new CustomEvent("trackEvent", { detail: { event: "lead_form_success", formId: "inspection-wizard" } }));
      return;
    }
    setStatus("error");
    setError(result.message || "Verzenden lukte niet. Bel of app ons direct.");
  }

  if (!open) return null;

  return (
    <div className={styles.backdrop} onMouseDown={close}>
      <div ref={dialog} className={styles.sheet} role="dialog" aria-modal="true" aria-labelledby="wizard-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className={styles.close} type="button" onClick={close} aria-label="Inspectiewizard sluiten">×</button>
        {status === "success" ? (
          <div className={styles.success}>
            <h2 id="wizard-title">Bedankt.</h2>
            <p>We nemen zo snel mogelijk contact met je op.</p>
            <button type="button" onClick={close}>Sluiten</button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <p className={styles.progress}>Stap {step + 1} van 4</p>
            <h2 id="wizard-title">Gratis inspectie aanvragen</h2>
            {step === 0 && (
              <label>Postcode<input value={data.postcode} onChange={(event) => setData({ ...data, postcode: event.target.value })} placeholder="1234 AB" autoComplete="postal-code" /></label>
            )}
            {step === 1 && (
              <label>Type ongedierte<select value={data.pest} onChange={(event) => setData({ ...data, pest: event.target.value })}>
                <option value="">Kies een optie</option>
                {pestOptions.map((option) => <option key={option}>{option}</option>)}
              </select></label>
            )}
            {step === 2 && (
              <fieldset>
                <legend>Urgentie</legend>
                {urgencyOptions.map((option) => <label className={styles.radio} key={option}><input type="radio" name="urgency" checked={data.urgency === option} onChange={() => setData({ ...data, urgency: option })} /> {option}</label>)}
              </fieldset>
            )}
            {step === 3 && (
              <div className={styles.contactGrid}>
                <label>Naam<input value={data.name} onChange={(event) => setData({ ...data, name: event.target.value })} autoComplete="name" /></label>
                <label>Telefoon *<input required value={data.phone} onChange={(event) => setData({ ...data, phone: event.target.value })} autoComplete="tel" inputMode="tel" /></label>
                <label>E-mail<input value={data.email} onChange={(event) => setData({ ...data, email: event.target.value })} autoComplete="email" inputMode="email" /></label>
                <label>Toelichting<textarea value={data.message} onChange={(event) => setData({ ...data, message: event.target.value })} rows={3} /></label>
                <p>Door te verzenden ga je akkoord met verwerking van je gegevens voor deze aanvraag. Zie de privacyverklaring.</p>
              </div>
            )}
            <p className={styles.error} aria-live="polite">{error}</p>
            <div className={styles.actions}>
              <button type="button" onClick={() => setStep((value) => Math.max(0, value - 1))} disabled={step === 0}>Terug</button>
              {step < 3 ? (
                <button type="button" onClick={() => canContinue() ? (setStep((value) => value + 1), setError(""), window.dispatchEvent(new CustomEvent("trackEvent", { detail: { event: "lead_form_step", step: step + 2 } }))) : setError("Vul dit veld in.")}>Verder</button>
              ) : (
                <button type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Verzenden..." : "Aanvraag verzenden"}</button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
