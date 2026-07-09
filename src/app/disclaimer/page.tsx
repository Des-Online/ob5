import { PageShell } from "@/components/sections/PageShell";
import { legalPages } from "@/content/site-content";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";

export const metadata = pageMetadata({ title: legalPages.disclaimer.title, description: legalPages.disclaimer.description, path: "/disclaimer" });

export default function DisclaimerPage() {
  return (
    <PageShell eyebrow="Juridisch" title={legalPages.disclaimer.title} intro={legalPages.disclaimer.description}>
      <section className="section">
        <div className="container">
          <div className={sections.grid}>
            <article className={sections.panel}>
              <h2>Algemene informatie</h2>
              <p>De informatie op deze website is bedoeld om bezoekers te helpen ongedierte beter te herkennen en de mogelijke aanpak te begrijpen. De informatie vervangt geen inspectie of beoordeling van jouw specifieke situatie.</p>
            </article>
            <article className={sections.panel}>
              <h2>Geen vaste uitkomst</h2>
              <p>Ongediertebestrijding hangt af van soort ongedierte, omvang, gedrag, bouwkundige situatie, toegangspunten, hygiëne, voorbereiding en preventie. Daarom kan geen algemene uitkomst of standaardresultaat voor iedere situatie worden gegarandeerd.</p>
            </article>
            <article className={sections.panel}>
              <h2>Prijzen en beschikbaarheid</h2>
              <p>Eventuele prijsindicaties, planning of beschikbaarheid zijn afhankelijk van de informatie die bekend is op het moment van contact. Aan algemene website-informatie kunnen geen rechten worden ontleend wanneer de werkelijke situatie afwijkt.</p>
            </article>
            <article className={sections.panel}>
              <h2>Externe links</h2>
              <p>De website kan verwijzen naar externe websites. Ongedierte Buddy is niet verantwoordelijk voor de inhoud, werking of privacypraktijken van externe websites.</p>
            </article>
            <article className={sections.panel}>
              <h2>Fouten melden</h2>
              <p>Zie je onjuiste of verouderde informatie op de website? Neem dan contact op via de contactgegevens op de website, zodat dit kan worden gecontroleerd en aangepast.</p>
            </article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
