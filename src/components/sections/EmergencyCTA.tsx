import Link from "next/link";
import { siteConfig, telHref, whatsappHref } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import styles from "./sections.module.css";

export function EmergencyCTA() {
  return (
    <aside className={styles.emergencyPanel}>
      <span><Icon name="alert" size={26} /></span>
      <div>
        <h2>Spoed of twijfel? Neem direct contact op.</h2>
        <p>Bij acute overlast bespreken we zo snel mogelijk welke vervolgstap past bij de situatie.</p>
      </div>
      <div className={styles.emergencyActions}>
        <Link href={telHref} data-track="phone_click"><Icon name="phone" />Bel {siteConfig.phoneDisplay}</Link>
        <Link href={whatsappHref} data-track="whatsapp_click"><Icon name="message" />WhatsApp ons</Link>
      </div>
    </aside>
  );
}
