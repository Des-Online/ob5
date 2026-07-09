"use client";

import { FormEvent, useState } from "react";
import { pestOptions } from "@/content/services";
import styles from "./forms.module.css";

type LeadMiniFormProps = {
  formId: string;
  title: string;
  source: string;
  pageType?: string;
  serviceSlug?: string;
  citySlug?: string;
  provinceSlug?: string;
  variant?: "default" | "hero";
};

type Status = "idle" | "submitting" | "success" | "error";

export function LeadMiniForm(props: LeadMiniFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        formId: props.formId,
        source: props.source,
        pageType: props.pageType || "home",
        serviceSlug: props.serviceSlug,
        citySlug: props.citySlug,
        provinceSlug: props.provinceSlug,
        pageUrl: window.location.href,
        timestamp: new Date().toISOString(),
        consentStatus: localStorage.getItem("ob-consent") || "unknown"
      })
    });
    const data = (await response.json().catch(() => ({}))) as { message?: string };
    if (response.ok) {
      setStatus("success");
      setMessage("Bedankt. We nemen zo snel mogelijk contact met je op.");
      form.reset();
      window.dispatchEvent(new CustomEvent("trackEvent", { detail: { event: "lead_form_success", formId: props.formId } }));
      return;
    }
    setStatus("error");
    setMessage(data.message || "Verzenden lukte niet. Bel of app ons direct, dan helpen we je alsnog.");
    window.dispatchEvent(new CustomEvent("trackEvent", { detail: { event: "lead_form_error", formId: props.formId } }));
  }

  return (
    <div className={`${styles.card} ${props.variant === "hero" ? styles.heroCard : ""}`}>
      <h2>{props.title}</h2>
      <p>Laat je gegevens achter. We bellen je terug om de situatie kort door te nemen.</p>
      <form className={styles.form} onSubmit={onSubmit}>
        <input className={styles.honeypot} type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className={styles.gridTwo}>
          <div className={styles.field}>
            <label htmlFor={`${props.formId}-phone`}>Telefoonnummer *</label>
            <input id={`${props.formId}-phone`} name="phone" required autoComplete="tel" inputMode="tel" />
          </div>
          <div className={styles.field}>
            <label htmlFor={`${props.formId}-name`}>Naam</label>
            <input id={`${props.formId}-name`} name="name" autoComplete="name" />
          </div>
        </div>
        <div className={styles.gridTwo}>
          <div className={styles.field}>
            <label htmlFor={`${props.formId}-postcode`}>Postcode</label>
            <input id={`${props.formId}-postcode`} name="postcode" placeholder="1234 AB" autoComplete="postal-code" />
          </div>
          <div className={styles.field}>
            <label htmlFor={`${props.formId}-pest`}>Type ongedierte</label>
            <select id={`${props.formId}-pest`} name="pest" defaultValue="">
              <option value="" disabled>Kies een optie</option>
              {pestOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor={`${props.formId}-message`}>Toelichting</label>
          <textarea id={`${props.formId}-message`} name="message" rows={3} />
        </div>
        <button className={styles.submit} type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Verzenden..." : "Vraag gratis inspectie aan"}
        </button>
        <p className={`${styles.status} ${status === "success" ? styles.success : ""}`} aria-live="polite">{message}</p>
      </form>
    </div>
  );
}
