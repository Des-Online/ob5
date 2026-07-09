"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mainNavigation, desktopNavigation } from "@/config/navigation";
import { siteConfig, telHref, whatsappHref } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import styles from "./layout.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const opener = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.dataset.lockScroll = menuOpen ? "true" : "false";
    if (!menuOpen) return;
    const focusable = () => Array.from(menu.current?.querySelectorAll<HTMLElement>("a,button") || []);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        opener.current?.focus();
      }
      if (event.key === "Tab") {
        const items = focusable();
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
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
    setTimeout(() => focusable()[0]?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.dataset.lockScroll = "false";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    opener.current?.focus();
  };

  return (
    <header className={`${styles.siteHeader} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.topBar}>
        <div className={styles.topInner}>
          <div className={styles.topTrust}>
            <span><Icon name="clock" size={15} />Snel contact</span>
            <span><Icon name="check" size={15} />Landelijke dekking</span>
            <span><Icon name="shield" size={15} />Nazorg volgens afspraak</span>
            <span><Icon name="star" size={15} />Klantreviews</span>
          </div>
          <div className={styles.topMobileLine}><Icon name="shield" size={17} /><span>Snel contact · Landelijke dekking</span></div>
          <div className={styles.topActions}>
            <Link href={telHref} data-track="phone_click"><Icon name="phone" size={14} />{siteConfig.phoneDisplay}</Link>
            <Link href={whatsappHref} data-track="whatsapp_click"><Icon name="message" size={14} />WhatsApp</Link>
          </div>
        </div>
      </div>
      <nav className={styles.nav} aria-label="Hoofdnavigatie">
        <div className={styles.navInner}>
          <Link className={styles.logoLink} href="/" aria-label={`${siteConfig.name} homepage`}>
            <Image src={siteConfig.assets.logoHeader} alt={siteConfig.name} width={188} height={54} priority />
          </Link>
          <div className={styles.desktopNav}>
            {desktopNavigation.map((item) => (
              <Link key={item.href} href={item.href} data-track="navigation_click">
                {item.label}
              </Link>
            ))}
          </div>
          <div className={styles.desktopActions}>
            <Link href={telHref} data-track="phone_click"><Icon name="phone" size={18} /> Bel direct</Link>
            <Link href={whatsappHref} data-track="whatsapp_click"><Icon name="message" size={18} /> WhatsApp</Link>
          </div>
          <button
            ref={opener}
            className={`${styles.menuButton} focusRing`}
            type="button"
            aria-label="Menu openen"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </nav>
      {menuOpen ? (
        <div className={styles.menuBackdrop} onMouseDown={closeMenu}>
          <div id="mobile-menu" ref={menu} className={styles.mobileMenu} onMouseDown={(event) => event.stopPropagation()}>
            {mainNavigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu} data-track="navigation_click">
                {item.label}
              </Link>
            ))}
            <div className={styles.menuActions}>
              <Link href={telHref} onClick={closeMenu} data-track="phone_click"><Icon name="phone" /> Bel direct</Link>
              <Link href={whatsappHref} onClick={closeMenu} data-track="whatsapp_click"><Icon name="message" /> WhatsApp</Link>
              <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("openInspectionWizard", { detail: { source: "mobile-menu" } }))}>
                Gratis inspectie aanvragen
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
