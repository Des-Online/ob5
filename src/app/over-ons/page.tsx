import { PageShell } from "@/components/sections/PageShell";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";

export const metadata = pageMetadata({
  title: "Over Ongedierte Buddy",
  description: "Lees wie achter Ongedierte Buddy zit, hoe aanvragen worden beoordeeld en hoe wij omgaan met duidelijke communicatie, uitvoering en nazorg.",
  path: "/over-ons"
});

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Over ons"
      title="Duidelijke hulp bij ongedierte, zonder loze beloftes."
      intro="Ongedierte in huis of bedrijf voelt vaak urgent. Ongedierte Buddy helpt met snelle duidelijkheid, een passende vervolgstap en praktische uitleg over bestrijding en preventie."
    >
      <section className="section">
        <div className="container">
          <div className={sections.twoCol}>
            <article className={sections.panel}>
              <h2>Wie achter Ongedierte Buddy zit</h2>
              <p>{siteConfig.legalDescription} De bedrijfsgegevens zijn: {siteConfig.legalName}, {siteConfig.address}, {siteConfig.postalCode} {siteConfig.city}, KvK {siteConfig.chamberOfCommerce}.</p>
              <p>Ongedierte Buddy is opgezet om particuliere en zakelijke aanvragen voor ongediertehulp overzichtelijker, sneller en duidelijker te behandelen. De focus ligt op een goede intake, passende planning, zorgvuldige uitvoering en preventieadvies dat aansluit bij de situatie.</p>
            </article>
            <article className={sections.panel}>
              <h2>Wat wij belangrijk vinden</h2>
              <p>Wij willen geen website zijn met verzonnen vestigingen, niet-gecontroleerde reviewaantallen of absolute garanties die niet voor iedere situatie waargemaakt kunnen worden. Ongediertebestrijding verschilt per pand, soort ongedierte, ernst van de overlast en bereikbaarheid van de bron.</p>
              <p>Daarom leggen we liever helder uit wat er bekend is, wat nog beoordeeld moet worden en welke vervolgstap logisch is. Dat geeft klanten meer houvast dan algemene claims zonder context.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={sections.grid}>
            <article className={sections.panel}>
              <h2>Geen fictieve lokale kantoren</h2>
              <p>Op lokale pagina’s claimen we geen kantoor in een stad wanneer dat er niet is. We leggen wel uit in welke regio hulp kan worden ingepland en welke factoren invloed hebben op planning en aanpak.</p>
            </article>
            <article className={sections.panel}>
              <h2>Heldere intake</h2>
              <p>Bij een aanvraag vragen we naar het soort ongedierte, zichtbare signalen, locatie, urgentie, pandtype en eventuele foto’s of video’s. Daarmee kan de situatie beter worden ingeschat.</p>
            </article>
            <article className={sections.panel}>
              <h2>Passende aanpak</h2>
              <p>Niet ieder probleem vraagt om dezelfde behandeling. Soms is eerst brononderzoek nodig, soms vooral preventie en soms een directe behandeling met duidelijke voorbereiding.</p>
            </article>
            <article className={sections.panel}>
              <h2>Nazorg volgens afspraak</h2>
              <p>Bij ongedierte is nazorg afhankelijk van de situatie. Waar nodig worden controlepunten, preventiestappen of vervolgafspraken besproken. De afspraken worden vooraf zo duidelijk mogelijk gemaakt.</p>
            </article>
            <article className={sections.panel}>
              <h2>Voor woningen en bedrijven</h2>
              <p>We helpen bij aanvragen vanuit woningen, appartementen, huurwoningen, VvE’s, winkels, horeca, kantoren, magazijnen en andere bedrijfspanden. De aanpak wordt afgestemd op gebruik, risico en bereikbaarheid.</p>
            </article>
            <article className={sections.panel}>
              <h2>Vertrouwen opbouwen</h2>
              <p>Reviews, certificeringen en harde cijfers worden pas gebruikt wanneer ze aantoonbaar kloppen. Dat is belangrijk voor bezoekers, voor Google en voor de betrouwbaarheid van het merk.</p>
            </article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
