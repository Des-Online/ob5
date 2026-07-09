"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { telHref, whatsappHref } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import styles from "./sticky.module.css";

export function MobileStickyActions() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const locked = document.body.dataset.lockScroll === "true" || document.body.dataset.cookieOpen === "true";
      setVisible(window.scrollY > window.innerHeight * 0.6 && !locked);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`${styles.bar} ${visible ? styles.visible : ""}`} aria-hidden={!visible}>
      <Link href={telHref} data-track="phone_click"><Icon name="phone" /> Bel direct</Link>
      <Link href={whatsappHref} data-track="whatsapp_click"><Icon name="message" /> WhatsApp</Link>
    </div>
  );
}
