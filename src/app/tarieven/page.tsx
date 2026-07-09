import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageShell } from "@/components/sections/PageShell";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { LeadMiniForm } from "@/components/forms/LeadMiniForm";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/structured-data/JsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";
import type { FAQItem } from "@/content/types";

const costFactors = [
  {
    title: "Type ongedierte",
    text: "Muizen, ratten, mieren, bedwantsen, kakkerlakken, vlooien, motten, zilvervisjes en vliegen vragen niet dezelfde aanpak. Sommige soorten vereisen meer voorbereiding, vervolgcontrole of brononderzoek."
  },
  {
    title: "Omvang van de overlast",
    text: "Een melding in één ruimte is iets anders dan activiteit op meerdere verdiepingen, in meerdere woningen of in een bedrijfspand met voorraad, personeel en bezoekers."
  },
  {
    title: "Bereikbaarheid van de bron",
    text: "Wanneer de bron achter plinten, in kieren, kruipruimtes, plafonds, leidingdoorvoeren, bergingen of technische ruimtes zit, kan inspectie of voorbereiding meer tijd vragen."
  },
  {
    title: "Woning of bedrijf",
    text: "Zakelijke locaties vragen vaak andere afspraken over planning, discretie, hygiëne, openingstijden, voorraad, medewerkers en eventuele terugkerende controle."
  },
  {
    title: "Voorbereiding en nazorg",
    text: "Sommige situaties vragen alleen praktische preventietips, andere situaties vragen voorbereiding door de klant, vervolgcontrole of extra maatregelen om terugkeer te beperken."
  },
  {
    title: "Urgentie en planning",
    text: "De planning hangt af van locatie, beschikbaarheid, urgentie en het type melding. Spoedachtige situaties moeten eerst inhoudelijk worden beoordeeld."
  }
];

const examples = [
  {
    title: "Lichte overlast in één ruimte",
    text: "Bij beperkte signalen kan een korte beoordeling voldoende zijn om de juiste vervolgstap te bepalen. Denk aan enkele mieren, vliegen of beginnende zilvervisjesoverlast."
  },
  {
    title: "Terugkerende overlast",
    text: "Wanneer signalen terugkomen, moet de oorzaak worden onderzocht. Dan spelen toegang, vocht, voedsel, bouwkundige openingen of verspreiding vanuit andere ruimtes mogelijk mee."
  },
  {
    title: "Risicovolle soorten",
    text: "Bij ratten, kakkerlakken en bedwantsen is snelle duidelijkheid belangrijk. De aanpak kan meer voorbereiding, controle en zorgvuldige instructies vragen."
  },
  {
    title: "Zakelijke locatie",
    text: "Bij bedrijven kunnen hygiëne, klanten, personeel, voorraad, openingstijden en preventieafspraken meespelen. Dat maakt de kosteninschatting afhankelijk van meer factoren dan alleen de bestrijding zelf."
  }
];

const faq: FAQItem[] = [
  {
    id: "geen-bedragen",
    question: "Waarom staan er geen vaste prijzen op de site?",
    answer: "De kosten hangen af van soort ongedierte, omvang, bereikbaarheid, aantal bezoeken, woning of bedrijf en preventieve maatregelen. Een standaardbedrag kan daardoor misleidend zijn als de situatie nog niet duidelijk is."
  },
  {
    id: "duidelijkheid",
    question: "Hoe krijg ik vooraf duidelijkheid over kosten?",
    answer: "Neem contact op met een korte omschrijving, postcode en eventueel foto’s. Daarna kan worden besproken welke vervolgstap logisch is en welke factoren invloed hebben op de prijs."
  },
  {
    id: "inspectie",
    question: "Is een inspectie altijd gratis?",
    answer: "De website gebruikt de term gratis inspectie voor de aanvraag en eerste beoordeling. Voor een fysieke afspraak, behandeling of uitgebreid onderzoek worden afspraken vooraf duidelijk besproken."
  },
  {
    id: "vervolgbezoek",
    question: "Wanneer is een vervolgbezoek nodig?",
    answer: "Dat hangt af van het soort ongedierte, de ernst van de overlast en de gekozen aanpak. Bij sommige situaties is controle of herhaling verstandig om te beoordelen of de bron goed is aangepakt."
  },
  {
    id: "bedrijf-prijs",
    question: "Zijn zakelijke kosten anders dan particuliere kosten?",
    answer: "Dat kan. Bedrijfspanden, horeca, magazijnen, VvE’s en verhuurders hebben vaak andere eisen rond planning, hygiëne, omvang, bereikbaarheid en preventie. Daarom wordt zakelijk altijd per situatie gekeken."
  }
];

export const metadata = pageMetadata({
  title: "Kosten ongediertebestrijding",
  description: "Lees welke factoren invloed hebben op de kosten van ongediertebestrijding voor woningen, bedrijven en terugkerende overlast.",
  path: "/tarieven"
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Tarieven", path: "/tarieven" }]), faqSchema(faq)]} />
      <PageShell eyebrow="Tarieven" title="Wat kost ongediertebestrijding?" intro="De kosten hangen af van het soort ongedierte, de ernst van de overlast, het pandtype en de benodigde aanpak. Daarom geven we liever eerst duidelijke uitleg dan een standaardbedrag dat niet past bij jouw situatie.">
        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              <article className={sections.panel}>
                <h2>Waarom een vaste prijs vooraf niet altijd eerlijk is</h2>
                <p>Ongediertebestrijding is geen standaardproduct. Een kleine mierenoverlast in één ruimte vraagt om een andere aanpak dan muizen in meerdere appartementen, bedwantsen in slaapkamers of ratten rond een bedrijfspand. Ook bereikbaarheid, voorbereiding en nazorg kunnen verschil maken.</p>
                <p>Daarom tonen we geen verzonnen vanafprijzen. Eerst moet duidelijk zijn wat er speelt. Daarna kan worden besproken welke aanpak logisch is en welke kostenfactoren van toepassing zijn.</p>
              </article>
              <article className={sections.panel}>
                <h2>Wat helpt voor een snelle inschatting?</h2>
                <ul>
                  <li>Je postcode en type pand.</li>
                  <li>Het soort ongedierte of zichtbare signalen.</li>
                  <li>Waar je activiteit ziet, hoort of ruikt.</li>
                  <li>Hoe lang de overlast al speelt.</li>
                  <li>Of het om één ruimte, meerdere ruimtes of een bedrijf gaat.</li>
                  <li>Foto’s of video’s van sporen, schade of insecten.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.sectionHeader}>
              <h2 className="typeSectionTitleSmall">Factoren die invloed hebben op de kosten</h2>
              <p>Deze punten bepalen samen hoeveel werk, voorbereiding en opvolging nodig is.</p>
            </div>
            <div className={sections.grid}>
              {costFactors.map((factor) => (
                <article className={`${sections.panel} ${sections.panelCompact}`} key={factor.title}>
                  <h2>{factor.title}</h2>
                  <p>{factor.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionCompact">
          <div className="container">
            <EmergencyCTA />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.sectionHeader}>
              <h2 className="typeSectionTitleSmall">Voorbeelden van situaties</h2>
              <p>Deze voorbeelden laten zien waarom eerst een goede beoordeling nodig is.</p>
            </div>
            <div className={sections.gridFour}>
              {examples.map((example) => (
                <article className={`${sections.panel} ${sections.panelCompact}`} key={example.title}>
                  <h2>{example.title}</h2>
                  <p>{example.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionCompact">
          <div className="container">
            <div className={sections.twoCol}>
              <article className={sections.panel}>
                <h2>Eenmalige behandeling of structurele preventie</h2>
                <p>Niet elke melding vraagt om een structurele aanpak. Bij sommige situaties is één gerichte behandeling voldoende. Bij terugkerende overlast, zakelijke locaties of gebouwproblemen kan preventie en controle belangrijker zijn dan alleen de directe bestrijding.</p>
              </article>
              <article className={sections.panel}>
                <h2>Duidelijkheid vóór er iets wordt ingepland</h2>
                <p>Voordat er een vervolgstap wordt gezet, wordt besproken wat de situatie is, welke aanpak logisch lijkt en wat je vooraf moet weten. Zo voorkom je verrassingen en weet je waarom een bepaalde aanpak wordt geadviseerd.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="sectionBottomContact">
          <div className="container">
            <div className={sections.twoCol}>
              <div>
                <div className={sections.faqIntro}>
                  <p className="eyebrow">Veelgestelde vragen</p>
                  <h2 className="typeSectionTitleSmall">Veelgestelde vragen over tarieven</h2>
                </div>
                <FAQAccordion items={faq} />
              </div>
              <LeadMiniForm formId="tarieven-inschatting" title="Vraag een vrijblijvende inschatting aan" source="pricing-page" pageType="pricing" />
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
