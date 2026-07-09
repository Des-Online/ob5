"use client";

import { useEffect, useState } from "react";
import styles from "./consent.module.css";

type Choice = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const defaultPrefs: Choice = { necessary: true, analytics: false, marketing: false };

function parseStoredConsent(value: string | null): Choice | null {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value) as Partial<Choice>;
    return {
      necessary: true,
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true
    };
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [prefs, setPrefs] = useState<Choice>(defaultPrefs);
  const [hasChoice, setHasChoice] = useState(false);

  useEffect(() => {
    const stored = parseStoredConsent(localStorage.getItem("ob-consent"));
    if (stored) {
      setPrefs(stored);
      setHasChoice(true);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!hasChoice && window.scrollY > window.innerHeight * 1.35) setVisible(true);
    };
    const open = () => setVisible(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("openCookiePreferences", open);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("openCookiePreferences", open);
    };
  }, [hasChoice]);

  useEffect(() => {
    document.body.dataset.cookieOpen = visible ? "true" : "false";
  }, [visible]);

  function save(next: Choice) {
    localStorage.setItem("ob-consent", JSON.stringify(next));
    setPrefs(next);
    setHasChoice(true);
    setVisible(false);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "consent_update", consent: next });
  }

  if (!visible) return null;
  return (
    <div className={styles.banner} role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <div>
        <h2 id="cookie-title">Cookievoorkeuren</h2>
        <p>Noodzakelijke cookies houden de site werkend. Analytics en marketing gebruiken we pas na toestemming.</p>
        <label><input type="checkbox" checked readOnly /> Noodzakelijk</label>
        <label><input type="checkbox" checked={prefs.analytics} onChange={(event) => setPrefs({ ...prefs, analytics: event.target.checked })} /> Analytics</label>
        <label><input type="checkbox" checked={prefs.marketing} onChange={(event) => setPrefs({ ...prefs, marketing: event.target.checked })} /> Marketing</label>
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={() => save({ necessary: true, analytics: true, marketing: true })}>Alles accepteren</button>
        <button type="button" onClick={() => save(prefs)}>Voorkeuren opslaan</button>
        <button type="button" onClick={() => save({ necessary: true, analytics: false, marketing: false })}>Alleen noodzakelijk</button>
      </div>
    </div>
  );
}
