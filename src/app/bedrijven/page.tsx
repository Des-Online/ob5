import Image from "next/image";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageShell } from "@/components/sections/PageShell";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/structured-data/JsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";
import type { FAQItem } from "@/content/types";

const sectors = [
  {
    title: "Horeca en food",
    text: "In keukens, opslagruimtes, personeelsruimtes en afvalzones kunnen muizen, ratten, kakkerlakken, vliegen en mieren snel voor hygiënerisico’s zorgen. De aanpak richt zich op brononderzoek, wering, hygiëne, opslag en duidelijke afspraken over opvolging."
  },
  {
    title: "Winkels en retail",
    text: "Voor winkels is discretie belangrijk. Overlast kan ontstaan rond magazijnen, plafonds, verpakkingen, etenswaren, personeelsruimtes of achteringangen. We kijken naar signalen, toegangspunten en maatregelen die passen bij openingstijden."
  },
  {
    title: "Kantoren en bedrijfsverzamelgebouwen",
    text: "In kantoren komt ongedierte vaak voor bij pantry’s, technische ruimtes, systeemplafonds, afvalpunten en gedeelde ingangen. Een goede aanpak voorkomt dat losse meldingen terugkerende gebouwproblemen worden."
  },
  {
    title: "Magazijnen en opslag",
    text: "Bij opslaglocaties spelen goederenstromen, pallets, laad- en loszones, geveldoorvoeren en voorraadschade een grote rol. Inspectie en preventie zijn hier net zo belangrijk als bestrijding zelf."
  },
  {
    title: "VvE’s, beheerders en verhuurders",
    text: "Bij appartementencomplexen en verhuurpanden is het belangrijk om onderscheid te maken tussen één woning, algemene ruimtes en mogelijke verspreiding via leidingen, kelders, bergingen of schachten."
  },
  {
    title: "Zorg, onderwijs en publieke ruimtes",
    text: "Op locaties met veel bezoekers of kwetsbare gebruikers is rustige communicatie belangrijk. De aanpak moet rekening houden met veiligheid, planning, toegang en duidelijke instructies voor medewerkers."
  }
];

const businessProcess = [
  {
    title: "1. Intake en risico-inschatting",
    text: "We vragen naar type pand, locatie, openingstijden, zichtbare signalen, eerdere meldingen, betrokken ruimtes en urgentie. Foto’s of korte video’s helpen om de situatie sneller te beoordelen."
  },
  {
    title: "2. Inspectie van bron en routes",
    text: "Er wordt gekeken naar toegangspunten, afvalstromen, opslag, vocht, voedselbronnen, technische ruimtes, naden, kieren en plekken waar ongedierte zich kan verplaatsen of verschuilen."
  },
  {
    title: "3. Gerichte aanpak",
    text: "De behandeling wordt afgestemd op het soort ongedierte, de ernst van de overlast, de bedrijfsomgeving en de praktische beperkingen op locatie. Waar nodig worden voorbereiding en nazorg vooraf besproken."
  },
  {
    title: "4. Preventie en opvolging",
    text: "Na inspectie of behandeling krijg je concrete preventiepunten. Bij terugkerende risico’s kan periodieke controle of een vaste opvolgstructuur logischer zijn dan telkens losse meldingen oplossen."
  }
];

const focusPoints = [
  "Discreet contact en planning waar mogelijk buiten drukke momenten.",
  "Aandacht voor voedsel, afval, opslag, vocht en bouwkundige openingen.",
  "Duidelijke uitleg voor medewerkers, beheerder of verantwoordelijke op locatie.",
  "Praktisch preventieadvies om herhaling te beperken.",
  "Nazorg en vervolgcontrole wanneer de situatie daarom vraagt."
];

const faq: FAQItem[] = [
  {
    id: "bedrijf-open",
    question: "Kunnen jullie langskomen terwijl mijn bedrijf open is?",
    answer: "Dat hangt af van de situatie, het type ongedierte en de benodigde aanpak. Bij zakelijke locaties wordt altijd rekening gehouden met bezoekers, medewerkers, bereikbaarheid en hygiëne. Waar mogelijk wordt een rustig moment gekozen."
  },
  {
    id: "discreet",
    question: "Werken jullie discreet bij zakelijke meldingen?",
    answer: "Ja. Bij bedrijven, horeca, winkels en VvE’s wordt discreet contact en duidelijke planning belangrijk gevonden. De zichtbaarheid van uitvoering hangt af van de locatie en de aanpak die nodig is."
  },
  {
    id: "periodiek",
    question: "Is periodieke controle mogelijk?",
    answer: "Bij locaties met terugkerend risico kan periodieke controle verstandig zijn. Denk aan horeca, opslag, verhuurpanden, VvE’s en gebouwen met eerdere overlast. De frequentie hangt af van risico, historie en pandtype."
  },
  {
    id: "rapportage",
    question: "Krijg ik uitleg of documentatie na afloop?",
    answer: "Je krijgt uitleg over de bevindingen, aanpak en preventiepunten. Wanneer er voor een zakelijke locatie extra verslaglegging of afspraken nodig zijn, wordt dit vooraf besproken."
  },
  {
    id: "spoed-bedrijf",
    question: "Wanneer is zakelijke ongedierteoverlast urgent?",
    answer: "Bij ratten, kakkerlakken, voedselopslag, zichtbare overlast voor klanten, schade aan voorraad of meerdere meldingen in een gebouw is snelle beoordeling belangrijk. Wacht dan niet tot het probleem groter wordt."
  }
];

export const metadata = pageMetadata({
  title: "Ongediertebestrijding voor bedrijven",
  description: "Zakelijke ongediertehulp voor horeca, winkels, kantoren, magazijnen, VvE's, verhuurders en periodieke controle.",
  path: "/bedrijven"
});

export default function BusinessPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Bedrijven", path: "/bedrijven" }]), faqSchema(faq)]} />
      <PageShell eyebrow="Bedrijven" title="Ongediertehulp voor bedrijven." intro="Voor horeca, winkels, kantoren, magazijnen, VvE's en verhuurders. Met aandacht voor discrete uitvoering, preventie en zakelijke opvolging.">
        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              <div className={sections.panel}>
                <h2>Zakelijke ongediertebestrijding vraagt om meer dan een snelle behandeling</h2>
                <p>Ongedierte in een bedrijfspand raakt niet alleen de ruimte waar het wordt gezien. Het kan invloed hebben op hygiëne, voorraad, medewerkers, klanten, huurders en reputatie. Daarom begint een zakelijke aanpak met goed kijken: waar zit de bron, hoe kan het ongedierte binnenkomen en welke omstandigheden houden het probleem in stand?</p>
                <p>Ongedierte Buddy helpt bedrijven met duidelijke opvolging. We bespreken wat er speelt, welke ruimtes betrokken zijn, hoe dringend de situatie is en welke voorbereiding nodig kan zijn. Daarna wordt bepaald welke aanpak past bij jouw pand, branche en planning.</p>
              </div>
              <div className={`${sections.imagePanel} ${sections.businessImage}`}>
                <Image src="/images/audience/bedrijven.png" alt="Zakelijke ruimte voor ongediertepreventie" fill sizes="(max-width: 760px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.sectionHeader}>
              <h2>Voor welke zakelijke situaties?</h2>
              <p>De aanpak verschilt per branche. Een horecakeuken vraagt om andere voorbereiding dan een VvE, magazijn, kantoor of winkel.</p>
            </div>
            <div className={sections.grid}>
              {sectors.map((sector) => (
                <article className={sections.panel} key={sector.title}>
                  <h2>{sector.title}</h2>
                  <p>{sector.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              <article className={sections.panel}>
                <h2>IPM: oorzaak, risico en preventie meenemen</h2>
                <p>Bij zakelijke overlast is alleen bestrijden wat zichtbaar is vaak onvoldoende. Een goede aanpak kijkt ook naar toegang, voedsel, vocht, afval, schuilplekken, bouwkundige openingen en gedrag op locatie. Die manier van werken sluit aan bij de gedachte achter IPM: eerst inspecteren, dan gericht behandelen en vervolgens terugkeer beperken.</p>
                <p>Dat betekent niet dat iedere locatie een zwaar traject nodig heeft. Soms is een korte inspectie met een gerichte behandeling genoeg. Bij terugkerende signalen of risicovolle sectoren is structurele preventie vaak verstandiger.</p>
              </article>
              <article className={sections.panel}>
                <h2>Waar we zakelijk op letten</h2>
                <ul>
                  {focusPoints.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.sectionHeader}>
              <h2>Werkwijze voor bedrijven</h2>
              <p>Zakelijke aanvragen worden beoordeeld op urgentie, branche, locatie en praktische uitvoerbaarheid.</p>
            </div>
            <div className={sections.steps}>
              {businessProcess.map((step) => (
                <article className={sections.step} key={step.title}>
                  <p className="eyebrow">Zakelijk</p>
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              <article className={sections.panel}>
                <h2>Kosten en afspraken vooraf</h2>
                <p>De kosten voor zakelijke ongediertebestrijding hangen af van het soort ongedierte, het pandtype, de omvang van de overlast, bereikbaarheid van de bron, benodigde voorbereiding en eventuele vervolgcontrole. Een bedrijfspand met meerdere ruimtes vraagt om andere afspraken dan een kleine melding in één ruimte.</p>
                <p>Je krijgt vooraf uitleg over de logische vervolgstap. Zo blijft duidelijk wat er wordt beoordeeld, welke aanpak wordt voorgesteld en welke nazorg of preventie nodig kan zijn.</p>
              </article>
              <article className={sections.panel}>
                <h2>Voor beheerders, VvE’s en verhuurders</h2>
                <p>Bij gebouwen met meerdere gebruikers is heldere communicatie belangrijk. Er moet worden vastgesteld of het om één ruimte gaat, om algemene ruimtes of om een route door het gebouw. Denk aan bergingen, kruipruimtes, schachten, leidingen, containerruimtes en gedeelde entrees.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.faqIntro}>
              <h2>Veelgestelde vragen voor bedrijven</h2>
              <p>Antwoorden op veelvoorkomende zakelijke vragen over planning, discretie, preventie en opvolging.</p>
            </div>
            <FAQAccordion items={faq} />
          </div>
        </section>
      </PageShell>
    </>
  );
}
