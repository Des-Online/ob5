import { PageShell } from "@/components/sections/PageShell";
import { siteConfig } from "@/config/site";
import { legalPages } from "@/content/site-content";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";

export const metadata = pageMetadata({ title: legalPages.privacyverklaring.title, description: legalPages.privacyverklaring.description, path: "/privacyverklaring" });

export default function PrivacyPage() {
  return (
    <PageShell eyebrow="Juridisch" title={legalPages.privacyverklaring.title} intro={legalPages.privacyverklaring.description}>
      <section className="section">
        <div className="container">
          <div className={sections.grid}>
            <article className={sections.panel}>
              <h2>Wie is verantwoordelijk?</h2>
              <p>{siteConfig.legalDescription} De verwerkingsverantwoordelijke is {siteConfig.legalName}, gevestigd aan {siteConfig.address}, {siteConfig.postalCode} {siteConfig.city}. KvK: {siteConfig.chamberOfCommerce}.</p>
            </article>
            <article className={sections.panel}>
              <h2>Welke gegevens verwerken wij?</h2>
              <p>Wanneer je contact opneemt of een inspectie aanvraagt, kunnen wij gegevens verwerken zoals naam, telefoonnummer, e-mailadres, adres of postcode, berichtinhoud, foto’s of video’s van de situatie, gekozen dienst, pandtype en technische gegevens over het gebruik van de website.</p>
            </article>
            <article className={sections.panel}>
              <h2>Waarom verwerken wij gegevens?</h2>
              <p>Wij gebruiken gegevens om je aanvraag te behandelen, contact op te nemen, de situatie te beoordelen, een afspraak of vervolgstap te plannen, dienstverlening uit te voeren, administratie bij te houden, fraude of misbruik te voorkomen en te voldoen aan wettelijke verplichtingen.</p>
            </article>
            <article className={sections.panel}>
              <h2>Grondslagen</h2>
              <p>Afhankelijk van de situatie verwerken wij gegevens omdat dit nodig is voor de uitvoering van een overeenkomst of voorbereiding daarop, omdat wij een gerechtvaardigd belang hebben bij goede dienstverlening en beveiliging, omdat wij moeten voldoen aan wettelijke verplichtingen of omdat je toestemming hebt gegeven.</p>
            </article>
            <article className={sections.panel}>
              <h2>Delen met derden</h2>
              <p>Wij delen gegevens alleen wanneer dat nodig is voor de aanvraag, uitvoering, administratie, hosting, beveiliging of wettelijke verplichtingen. Denk aan een passende specialist, IT-leverancier, e-maildienst, boekhouding of bevoegde instantie. Derden krijgen niet meer gegevens dan nodig.</p>
            </article>
            <article className={sections.panel}>
              <h2>Bewaartermijnen</h2>
              <p>Wij bewaren gegevens niet langer dan nodig is voor het doel waarvoor ze zijn verzameld, tenzij een wettelijke bewaartermijn geldt. Aanvraag- en contactgegevens kunnen worden bewaard zolang dat nodig is voor opvolging, administratie, bewijs, klachtenafhandeling of wettelijke verplichtingen.</p>
            </article>
            <article className={sections.panel}>
              <h2>Jouw rechten</h2>
              <p>Je kunt vragen om inzage, correctie, verwijdering, beperking, overdraagbaarheid of bezwaar tegen verwerking. Wanneer verwerking op toestemming is gebaseerd, kun je die toestemming intrekken. Gebruik hiervoor de contactgegevens op de website.</p>
            </article>
            <article className={sections.panel}>
              <h2>Beveiliging</h2>
              <p>Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, misbruik en onbevoegde toegang. Alleen personen die gegevens nodig hebben voor hun taak krijgen toegang.</p>
            </article>
            <article className={sections.panel}>
              <h2>Klacht over privacy</h2>
              <p>Heb je een vraag of klacht over privacy, neem dan eerst contact met ons op. Je hebt daarnaast het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.</p>
            </article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
