import Link from "next/link";
import { telHref, whatsappHref } from "@/config/site";
import { Icon } from "./Icon";
import styles from "./ui.module.css";

type CTAProps = {
  location: string;
  stacked?: boolean;
  className?: string;
  secondaryAction?: "whatsapp" | "inspection";
};

export function CTAButtons({ location, stacked = false, className = "", secondaryAction = "whatsapp" }: CTAProps) {
  return (
    <div className={`${styles.ctaGroup} ${stacked ? styles.stacked : ""} ${className}`} data-cta-location={location}>
      <Link className={`${styles.primaryCta} focusRing`} href={telHref} data-track="phone_click">
        <Icon name="phone" /> Bel direct
      </Link>
      {secondaryAction === "inspection" ? (
        <Link className={`${styles.secondaryCta} focusRing`} href="#inspectie" data-track="inspection_open">
          <Icon name="calendar" /> Gratis inspectie aanvragen
        </Link>
      ) : (
        <Link className={`${styles.secondaryCta} focusRing`} href={whatsappHref} data-track="whatsapp_click">
          <Icon name="message" /> WhatsApp direct
        </Link>
      )}
    </div>
  );
}
