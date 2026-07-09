import { PageShell } from "@/components/sections/PageShell";
import { siteConfig } from "@/config/site";
import { legalPages } from "@/content/site-content";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";

export const metadata = pageMetadata({ title: legalPages.klachten.title, description: legalPages.klachten.description, path: "/klachten" });

export default function ComplaintsPage() {
  return (
    <PageShell eyebrow="Juridisch" title={legalPages.klachten.title} intro={legalPages.klachten.description}>
      <section className="section">
        <div className="container">
          <div className={sections.grid}>
            <article className={sections.panel}>
              <h2>Stap 1: meld je klacht</h2>
              <p>Stuur je klacht via de contactgegevens op de website. Vermeld je naam, contactgegevens, datum van contact of uitvoering, adres of plaats van de aanvraag en een duidelijke omschrijving van wat er volgens jou niet goed is gegaan.</p>
            </article>
            <article className={sections.panel}>
              <h2>Stap 2: voeg bewijs toe</h2>
              <p>Foto’s, video’s, berichten, facturen of afspraken helpen om de klacht sneller te beoordelen. Stuur geen gegevens mee die niet nodig zijn voor de klacht.</p>
            </article>
            <article className={sections.panel}>
              <h2>Stap 3: beoordeling</h2>
              <p>We beoordelen de klacht zo zorgvuldig mogelijk. Waar nodig vragen we aanvullende informatie of stemmen we af met de betrokken specialist of partij.</p>
            </article>
            <article className={sections.panel}>
              <h2>Stap 4: oplossing</h2>
              <p>Als de klacht terecht is, zoeken we naar een redelijke oplossing. Dat kan uitleg, herstel, nazorg, aanpassing van afspraken of een andere passende maatregel zijn.</p>
            </article>
            <article className={sections.panel}>
              <h2>Bedrijfsgegevens</h2>
              <p>{siteConfig.legalDescription} Klachten worden behandeld onder verantwoordelijkheid van {siteConfig.legalName}, {siteConfig.address}, {siteConfig.postalCode} {siteConfig.city}, KvK {siteConfig.chamberOfCommerce}.</p>
            </article>
            <article className={sections.panel}>
              <h2>Kom je er niet uit?</h2>
              <p>Wanneer je er samen met ons niet uitkomt, kun je juridisch advies inwinnen of gebruikmaken van de mogelijkheden die volgens de wet voor jouw situatie gelden.</p>
            </article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
