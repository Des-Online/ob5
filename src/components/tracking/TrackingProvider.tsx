"use client";

import { useEffect } from "react";

export function TrackingProvider() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid", "fbclid"].forEach((key) => {
      const value = params.get(key);
      if (value) sessionStorage.setItem(`ob-${key}`, value);
    });
    const click = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-track]");
      if (target) track(target.dataset.track || "interaction", { href: target.getAttribute("href") });
      const wizard = (event.target as HTMLElement).closest<HTMLElement>("[data-open-wizard]");
      if (wizard) window.dispatchEvent(new CustomEvent("openInspectionWizard", { detail: { source: "inspection-strip" } }));
    };
    const custom = (event: Event) => {
      const detail = (event as CustomEvent<Record<string, unknown>>).detail || {};
      track(String(detail.event || "custom_event"), detail);
    };
    window.addEventListener("click", click);
    window.addEventListener("trackEvent", custom);
    return () => {
      window.removeEventListener("click", click);
      window.removeEventListener("trackEvent", custom);
    };
  }, []);
  return null;
}

function track(eventName: string, context: Record<string, unknown>) {
  const consent = localStorage.getItem("ob-consent");
  const allowed = consent?.includes("analytics") || consent?.includes("marketing");
  if (!allowed && !["phone_click", "whatsapp_click", "inspection_open"].includes(eventName)) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    page_path: window.location.pathname,
    device_category: window.matchMedia("(max-width: 719px)").matches ? "mobile" : "desktop",
    ...context
  });
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}
