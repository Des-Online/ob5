import { PageShell } from "@/components/sections/PageShell";
import { siteConfig } from "@/config/site";
import { legalPages } from "@/content/site-content";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";

export const metadata = pageMetadata({ title: legalPages["algemene-voorwaarden"].title, description: legalPages["algemene-voorwaarden"].description, path: "/algemene-voorwaarden" });

export default function TermsPage() {
  return (
    <PageShell eyebrow="Juridisch" title={legalPages["algemene-voorwaarden"].title} intro={legalPages["algemene-voorwaarden"].description}>
      <section className="section">
        <div className="container">
          <div className={sections.grid}>
            <article className={sections.panel}>
              <h2>1. Bedrijfsgegevens</h2>
              <p>{siteConfig.legalDescription} De onderneming is {siteConfig.legalName}, gevestigd aan {siteConfig.address}, {siteConfig.postalCode} {siteConfig.city}, ingeschreven bij de Kamer van Koophandel onder nummer {siteConfig.chamberOfCommerce}.</p>
            </article>
            <article className={sections.panel}>
              <h2>2. Toepassing</h2>
              <p>Deze voorwaarden zijn van toepassing op aanvragen, afspraken, offertes, inspecties, behandelingen, preventieadvies en andere werkzaamheden die via Ongedierte Buddy worden aangevraagd of uitgevoerd, tenzij schriftelijk anders is afgesproken.</p>
            </article>
            <article className={sections.panel}>
              <h2>3. Aanvraag en informatie</h2>
              <p>De klant geeft zo volledig mogelijk door welk ongedierte wordt vermoed, waar signalen zichtbaar zijn, hoe urgent de situatie is en of er bijzonderheden zijn zoals huisdieren, kinderen, voedselopslag, bedrijfsactiviteiten of kwetsbare bewoners.</p>
            </article>
            <article className={sections.panel}>
              <h2>4. Offerte en prijs</h2>
              <p>Prijzen, voorrijkosten, inspectiekosten, behandelkosten en eventuele vervolgkosten worden vooraf zo duidelijk mogelijk gecommuniceerd. Een prijsindicatie is gebaseerd op de informatie die op dat moment bekend is. Wanneer de situatie afwijkt, kan een aangepaste aanpak of prijs nodig zijn.</p>
            </article>
            <article className={sections.panel}>
              <h2>5. Uitvoering</h2>
              <p>De uitvoering hangt af van soort ongedierte, pandtype, bereikbaarheid, ernst van de overlast en veiligheid. De klant zorgt dat afgesproken ruimtes bereikbaar zijn en volgt redelijke voorbereidings- en veiligheidsinstructies op.</p>
            </article>
            <article className={sections.panel}>
              <h2>6. Annulering en bereikbaarheid</h2>
              <p>Kan een afspraak niet doorgaan, meld dit dan zo snel mogelijk. Wanneer een locatie niet toegankelijk is, noodzakelijke voorbereiding ontbreekt of niemand aanwezig is op het afgesproken moment, kunnen kosten in rekening worden gebracht als dit vooraf is gecommuniceerd.</p>
            </article>
            <article className={sections.panel}>
              <h2>7. Betaling</h2>
              <p>Betaling vindt plaats volgens de afspraken die vooraf of op de offerte/factuur zijn vermeld. Bij te late betaling kunnen redelijke incasso- en administratiekosten worden berekend voor zover wettelijk toegestaan.</p>
            </article>
            <article className={sections.panel}>
              <h2>8. Nazorg en resultaat</h2>
              <p>Ongediertebestrijding is afhankelijk van gedrag van ongedierte, bouwkundige situatie, hygiëne, toegangspunten en opvolging van preventieadvies. Eventuele nazorg, controle of vervolgbehandeling wordt per situatie besproken. Er wordt geen onbeperkte of algemene resultaatsgarantie gegeven tenzij dit schriftelijk is afgesproken.</p>
            </article>
            <article className={sections.panel}>
              <h2>9. Aansprakelijkheid</h2>
              <p>Aansprakelijkheid is beperkt tot directe schade die het gevolg is van aantoonbare tekortkoming, voor zover wettelijk toegestaan. Ongedierte Buddy is niet aansprakelijk voor schade door onvolledige informatie, niet opgevolgde instructies, bestaande gebreken, verborgen bouwkundige problemen of terugkeer door nieuwe toegang of voedselbronnen.</p>
            </article>
            <article className={sections.panel}>
              <h2>10. Klachten</h2>
              <p>Klachten kunnen worden gemeld via de contactgegevens op de website. Vermeld naam, contactgegevens, datum, locatie, omschrijving en eventuele foto’s. We beoordelen de klacht en zoeken naar een redelijke oplossing.</p>
            </article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
