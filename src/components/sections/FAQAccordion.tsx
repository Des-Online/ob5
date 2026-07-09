"use client";

import { useState } from "react";
import type { FAQItem } from "@/content/types";
import styles from "./sections.module.css";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState(items[0]?.id || "");
  return (
    <div className={styles.faqList}>
      {items.map((item) => {
        const active = open === item.id;
        return (
          <div key={item.id} className={styles.faqItem}>
            <button type="button" aria-expanded={active} aria-controls={`${item.id}-panel`} onClick={() => setOpen(active ? "" : item.id)}>
              {item.question}<span aria-hidden="true">{active ? "−" : "+"}</span>
            </button>
            {active ? <p id={`${item.id}-panel`}>{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
