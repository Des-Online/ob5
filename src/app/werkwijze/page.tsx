import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageShell } from "@/components/sections/PageShell";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/structured-data/JsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";
import type { FAQItem } from "@/content/types";

const steps = [
  {
    title: "1. Contact en eerste inschatting",
    text: "Je belt, stuurt een WhatsApp of vult het formulier in. We vragen naar postcode, type pand, soort ongedierte, zichtbare signalen, urgentie en eventuele foto’s of video’s."
  },
  {
    title: "2. Beoordeling van urgentie",
    text: "Niet elke melding vraagt om dezelfde snelheid of aanpak. Ratten, kakkerlakken, bedwantsen, zakelijke overlast, voorraadschade of verspreiding naar meerdere ruimtes vragen vaak om snellere beoordeling."
  },
  {
    title: "3. Inspectie of gerichte vervolgstap",
    text: "Er wordt gekeken naar sporen, bron, toegangspunten, schuilplekken, vocht, voedsel en mogelijke verspreiding. Soms is eerst inspectie nodig; soms is direct duidelijk welke aanpak logisch is."
  },
  {
    title: "4. Aanpak en voorbereiding",
    text: "Vooraf wordt besproken wat er moet gebeuren en wat jij eventueel moet voorbereiden. Denk aan ruimtes bereikbaar maken, voedsel afsluiten, textiel niet verplaatsen of huisdieren tijdelijk apart houden."
  },
  {
    title: "5. Behandeling of preventieve maatregelen",
    text: "De gekozen aanpak hangt af van het soort ongedierte, de ernst van de overlast en de plek waar het probleem zit. Bestrijding en preventie worden zoveel mogelijk gecombineerd."
  },
  {
    title: "6. Nazorg en vervolgcontrole",
    text: "Na afloop krijg je uitleg over preventie, controlepunten en wat je kunt verwachten. Als vervolgcontrole of aanvullende maatregelen nodig zijn, wordt dat duidelijk besproken."
  }
];

const intakeQuestions = [
  "Waar zie, hoor of ruik je de signalen?",
  "Hoe lang speelt de overlast al?",
  "Gaat het om een woning, bedrijfspand, VvE of verhuurpand?",
  "Zijn meerdere ruimtes, buren, huurders of afdelingen betrokken?",
  "Zijn er foto’s, video’s, keutels, beten, schade of dode insecten zichtbaar?",
  "Zijn er kinderen, huisdieren, voorraad, voedselbereiding of kwetsbare bewoners aanwezig?"
];

const differentSituations = [
  {
    title: "Woning",
    text: "Bij woningen kijken we naar leefruimtes, keuken, badkamer, slaapkamers, kruipruimte, zolder, berging en plekken rond leidingen. De uitleg moet praktisch zijn voor bewoners."
  },
  {
    title: "Bedrijf",
    text: "Bij bedrijven tellen openingstijden, klanten, medewerkers, voorraad, hygiëne, opslag en discretie mee. De aanpak moet passen bij de bedrijfsvoering."
  },
  {
    title: "VvE of beheerder",
    text: "Bij gebouwen met meerdere gebruikers moet duidelijk worden of de overlast uit één ruimte komt of via algemene ruimtes, leidingen, bergingen, kelders of schachten loopt."
  }
];

const faq: FAQItem[] = [
  {
    id: "foto-sturen",
    question: "Moet ik foto’s sturen?",
    answer: "Dat is niet verplicht, maar wel handig. Foto’s of video’s van sporen, schade, insecten, keutels of beten helpen om de situatie sneller en beter in te schatten."
  },
  {
    id: "eerst-inspectie",
    question: "Is altijd eerst een inspectie nodig?",
    answer: "Niet altijd. Soms is op basis van de melding al duidelijk welke vervolgstap logisch is. Bij onduidelijke, terugkerende of zakelijke overlast is inspectie vaak verstandig om de bron en routes te bepalen."
  },
  {
    id: "voorbereiden",
    question: "Wat moet ik voorbereiden voor een afspraak?",
    answer: "Dat hangt af van het soort ongedierte. Maak foto’s, noteer waar je activiteit ziet en maak belangrijke plekken bereikbaar. Verplaats bij bedwantsen, vlooien of motten niet zomaar textiel zonder instructie."
  },
  {
    id: "resultaat",
    question: "Is het probleem na één behandeling opgelost?",
    answer: "Dat verschilt per situatie. Sommige problemen kunnen snel worden aangepakt, terwijl andere situaties vervolgcontrole, preventie of meerdere stappen vragen. Vooraf wordt uitgelegd wat je redelijkerwijs kunt verwachten."
  },
  {
    id: "nazorg",
    question: "Krijg ik advies om terugkeer te voorkomen?",
    answer: "Ja. Preventie is een belangrijk onderdeel van ongediertebestrijding. Je krijgt praktische tips over toegang, voedsel, vocht, afval, opslag, kieren en controlepunten."
  }
];

export const metadata = pageMetadata({
  title: "Werkwijze ongediertebestrijding",
  description: "Lees hoe Ongedierte Buddy contact, inspectie, urgentie, behandeling, preventie en nazorg aanpakt.",
  path: "/werkwijze"
});

export default function WorkPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Werkwijze", path: "/werkwijze" }]), faqSchema(faq)]} />
      <PageShell eyebrow="Werkwijze" title="Zo werkt Ongedierte Buddy." intro="Je krijgt snel contact, duidelijke vragen en een aanpak die per situatie wordt bepaald. Behandeling en doorlooptijd verschillen per pand en soort ongedierte.">
        <section className="section">
          <div className="container">
            <div className={sections.sectionHeader}>
              <h2 className="typeSectionTitleSmall">Van melding naar aanpak</h2>
              <p>De juiste werkwijze begint met begrijpen wat er speelt. Daarom stellen we eerst gerichte vragen voordat er een vervolgstap wordt gekozen.</p>
            </div>
            <div className={sections.steps}>
              {steps.map((step) => (
                <article className={sections.step} key={step.title}>
                  <p className="eyebrow">Werkwijze</p>
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
                <h2>Welke informatie helpt bij de intake?</h2>
                <p>Hoe beter de melding, hoe sneller duidelijk wordt wat de logische vervolgstap is. Je hoeft niet alles zeker te weten. Een korte omschrijving is vaak al genoeg om te beginnen.</p>
                <ul>
                  {intakeQuestions.map((question) => <li key={question}>{question}</li>)}
                </ul>
              </article>
              <article className={sections.panel}>
                <h2>Waarom niet elke aanpak hetzelfde is</h2>
                <p>Muizen in een keuken vragen om een andere aanpak dan bedwantsen in een slaapkamer, ratten rond een bedrijfspand of kakkerlakken in een horecaruimte. Ook pandtype, verspreiding, bereikbaarheid en veiligheid bepalen welke voorbereiding en nazorg nodig zijn.</p>
                <p>Daarom werken we niet met één standaardbelofte voor alle situaties. Je krijgt uitleg die past bij jouw melding.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.sectionHeader}>
              <h2 className="typeSectionTitleSmall">Verschil tussen woning, bedrijf en gebouwbeheer</h2>
              <p>De basis blijft hetzelfde: bron vinden, gericht aanpakken en terugkeer beperken. De uitvoering verschilt per situatie.</p>
            </div>
            <div className={sections.grid}>
              {differentSituations.map((situation) => (
                <article className={sections.panel} key={situation.title}>
                  <h2>{situation.title}</h2>
                  <p>{situation.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              <article className={sections.panel}>
                <h2>Nazorg volgens afspraak</h2>
                <p>Nazorg betekent dat duidelijk wordt uitgelegd wat je na inspectie of behandeling moet doen. Soms gaat het om schoonmaak, ventilatie, opslag, afval, kieren of vocht. In andere situaties zijn controlepunten of een vervolgafspraak verstandig.</p>
              </article>
              <article className={sections.panel}>
                <h2>Preventie is onderdeel van de oplossing</h2>
                <p>Ongedierte komt meestal niet zonder reden binnen. Toegang, voedsel, vocht en schuilplekken spelen vaak een rol. Daarom hoort preventie bij de aanpak, zeker bij terugkerende overlast of zakelijke locaties.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.faqIntro}>
              <h2 className="typeSectionTitleSmall">Veelgestelde vragen over onze werkwijze</h2>
              <p>Praktische uitleg over intake, inspectie, voorbereiding, behandeling en nazorg.</p>
            </div>
            <FAQAccordion items={faq} />
          </div>
        </section>
      </PageShell>
    </>
  );
}
