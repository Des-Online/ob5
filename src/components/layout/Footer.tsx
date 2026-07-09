import Image from "next/image";
import Link from "next/link";
import { mainNavigation } from "@/config/navigation";
import { siteConfig, telHref, whatsappHref } from "@/config/site";
import { services } from "@/content/services";
import { provinces } from "@/content/regions";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <Image src={siteConfig.assets.logoHorizontalWhite} alt={siteConfig.name} width={260} height={74} />
            <p>{siteConfig.descriptor} {siteConfig.claims.availability}, {siteConfig.claims.response.toLowerCase()}.</p>
            <div className={styles.contactLinks}>
              <Link href={telHref}>{siteConfig.phoneDisplay}</Link>
              <Link href={whatsappHref}>WhatsApp direct</Link>
              <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>
            </div>
          </div>
          <div>
            <h2>Diensten</h2>
            {services.slice(0, 10).map((service) => <Link key={service.id} href={`/diensten/${service.slug}`}>{service.name}</Link>)}
          </div>
          <div>
            <h2>Regio's</h2>
            {provinces.slice(0, 8).map((province) => <Link key={province.id} href={`/regios/${province.slug}`}>{province.name}</Link>)}
          </div>
          <div>
            <h2>Bedrijf</h2>
            {mainNavigation.filter((item) => !["/diensten", "/regios"].includes(item.href)).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/privacyverklaring">Privacyverklaring</Link>
            <Link href="/cookieverklaring">Cookieverklaring</Link>
            <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/klachten">Klachten</Link>
          </div>
        </div>
        <div className={styles.bottom}>© {new Date().getFullYear()} {siteConfig.name}. {siteConfig.legalDescription} KvK {siteConfig.chamberOfCommerce}. {siteConfig.address}, {siteConfig.postalCode} {siteConfig.city}.</div>
      </div>
    </footer>
  );
}
