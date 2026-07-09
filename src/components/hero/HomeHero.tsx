import Image from "next/image";
import { siteConfig } from "@/config/site";
import { CTAButtons } from "@/components/ui/CTAButtons";
import { Icon } from "@/components/ui/Icon";
import { LeadMiniForm } from "@/components/forms/LeadMiniForm";
import styles from "./hero.module.css";

export function HomeHero() {
  return (
    <section className={styles.viewport} aria-label="Direct hulp bij ongedierte">
      <div className={styles.mobileHero}>
        <Image
          src="/images/hero-mobile-polished.png"
          alt="Specialist van Ongedierte Buddy in een Nederlandse woning"
          fill
          sizes="100vw"
          priority
          className={styles.mobileImage}
        />
        <div className={styles.scrim} />
        <div className={styles.bottomFade} />
        <div className={styles.mobileContent}>
          <div>
            <h1 className={styles.mobileTitle}>Direct hulp<br />bij ongedierte.</h1>
            <p className={styles.mobileText}>Snel duidelijkheid en direct contact met een passende specialist.</p>
            <CTAButtons location="mobile-hero" stacked secondaryAction="inspection" className={styles.mobileCtas} />
          </div>
          <div className={styles.trustGrid} aria-label="Vertrouwen">
            <span><Icon name="clock" /> Snel contact</span>
            <span><Icon name="shield" /> Nazorg volgens afspraak</span>
          </div>
        </div>
      </div>
      <div className={styles.desktopHero}>
        <Image
          src="/images/hero-desktop-polished.png"
          alt="Specialist van Ongedierte Buddy in een lichte woning"
          fill
          sizes="100vw"
          priority
          className={styles.desktopImage}
        />
        <div className={styles.desktopOverlay} />
        <div className={`container ${styles.desktopInner}`}>
          <div className={styles.desktopCopy}>
            <p className={styles.availabilityPill}><span />Nu beschikbaar in heel Nederland</p>
            <div className={styles.desktopTitle} role="presentation" aria-hidden="true">Ongedierte? Direct opgelost.</div>
            <p>Snel duidelijkheid, direct contact met een specialist en een aanpak die past bij je woning of bedrijf.</p>
            <CTAButtons location="desktop-hero" />
            <div className={styles.desktopTrust}>
              <span>{siteConfig.claims.response}</span>
              <span>{siteConfig.claims.guarantee}</span>
              <span>Klantreviews</span>
            </div>
          </div>
          <LeadMiniForm formId="hero-inspection" title="Vraag een gratis inspectie aan" source="desktop-hero" variant="hero" />
        </div>
      </div>
    </section>
  );
}
