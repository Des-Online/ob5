import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo/metadata";
import { PageShell } from "@/components/sections/PageShell";
import { ServiceCarousel } from "@/components/sections/ServiceCarousel";
import { services } from "@/content/services";
import { Icon } from "@/components/ui/Icon";
import sections from "@/components/sections/sections.module.css";

export const metadata = pageMetadata({
  title: "Diensten voor ongediertebestrijding",
  description: "Bekijk alle diensten van Ongedierte Buddy: muizen, ratten, mieren, kakkerlakken, bedwantsen, vlooien, zilvervisjes, spinnen, motten en vliegen.",
  path: "/diensten"
});

export default function ServicesPage() {
  return (
    <PageShell eyebrow="Diensten" title="Bestrijding per soort." intro="Kies de situatie die het meest lijkt op jouw overlast. Je krijgt per dienst duidelijke signalen, aanpak en preventie zonder prijsbelofte.">
      <section className="section">
        <div className="container">
          <ServiceCarousel />
          <div className={sections.serviceOverviewGrid}>
            {services.map((service) => (
              <Link className={sections.serviceOverviewCard} href={`/diensten/${service.slug}`} key={service.id}>
                <div className={sections.serviceOverviewImage}>
                  <Image src={service.image} alt={`${service.name} bestrijden`} width={360} height={240} sizes="(max-width: 720px) 50vw, 240px" />
                </div>
                <div>
                  <h2>{service.name}</h2>
                  <p>{service.cardText}</p>
                </div>
                <span>Bekijk aanpak <Icon name="arrow" size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
