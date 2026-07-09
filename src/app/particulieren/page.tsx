import Image from "next/image";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageShell } from "@/components/sections/PageShell";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/structured-data/JsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";
import type { FAQItem } from "@/content/types";

const homeSituations = [
  {
    title: "Woningen en appartementen",
    text: "In woningen en appartementen komen muizen, mieren, zilvervisjes, vlooien, motten, bedwantsen en vliegen vaak voor in keukens, badkamers, slaapkamers, bergingen, zolders en kruipruimtes. De aanpak begint met vaststellen waar de signalen vandaan komen."
  },
  {
    title: "Huurwoningen en studentenwoningen",
    text: "Bij huurwoningen kan de vraag spelen wie verantwoordelijk is voor bestrijding of preventie. Ongedierte Buddy kan helpen om de situatie duidelijk te omschrijven, zodat bewoners, verhuurder of beheerder weten wat er speelt."
  },
  {
    title: "Gezinnen met kinderen of huisdieren",
    text: "Bij kinderen, huisdieren of kwetsbare bewoners is goede uitleg belangrijk. Welke voorbereiding nodig is en welke ruimtes tijdelijk vermeden moeten worden, hangt af van het type ongedierte en de gekozen behandeling."
  },
  {
    title: "Terugkerende overlast",
    text: "Wanneer ongedierte steeds terugkomt, is alleen een losse bestrijding vaak niet genoeg. Dan moet worden gekeken naar toegang, vocht, voedsel, schuilplekken, buren, bergingen of bouwkundige openingen."
  },
  {
    title: "Spooronderzoek in huis",
    text: "Keutels, geur, geluiden, beten, vraatsporen, larven, eitjes of dode insecten kunnen helpen om het probleem te herkennen. Maak bij twijfel foto’s voordat je alles schoonmaakt of verplaatst."
  },
  {
    title: "Discreet contact",
    text: "Ongedierte in huis is vervelend genoeg. Daarom houden we de communicatie rustig en praktisch. Er wordt uitgelegd wat er aan de hand kan zijn, wat je zelf kunt doen en wanneer specialistische hulp verstandig is."
  }
];

const preparation = [
  "Maak foto’s of video’s van signalen zoals keutels, schade, insecten, larven of beten.",
  "Noteer waar en wanneer je activiteit ziet of hoort.",
  "Sluit voedsel af en voorkom dat afval open blijft staan.",
  "Verplaats bij bedwantsen, vlooien of motten niet zomaar textiel zonder instructie.",
  "Maak belangrijke plekken bereikbaar, maar ruim sporen niet volledig weg voordat de situatie is beoordeeld."
];

const faq: FAQItem[] = [
  {
    id: "zelf-doen",
    question: "Kan ik ongedierte eerst zelf bestrijden?",
    answer: "Bij lichte overlast kun je soms zelf maatregelen nemen, zoals voedsel afsluiten, kieren controleren, vocht beperken en goed schoonmaken. Schakel hulp in wanneer de overlast terugkomt, zich verspreidt of wanneer je niet zeker weet om welk ongedierte het gaat."
  },
  {
    id: "kinderen-huisdieren",
    question: "Wordt er rekening gehouden met kinderen en huisdieren?",
    answer: "Ja. De benodigde instructies hangen af van het soort ongedierte en de gekozen aanpak. Je krijgt vooraf uitleg over voorbereiding, toegang tot ruimtes en aandachtspunten na inspectie of behandeling."
  },
  {
    id: "niet-zeker",
    question: "Ik weet niet welk ongedierte ik heb. Wat nu?",
    answer: "Omschrijf wat je ziet, hoort of ruikt en stuur waar mogelijk foto’s of video’s mee. Sporen zoals keutels, vraat, beten, larven of beschadigd textiel kunnen helpen om de situatie beter in te schatten."
  },
  {
    id: "direct-bellen",
    question: "Wanneer moet ik direct contact opnemen?",
    answer: "Neem snel contact op bij ratten, kakkerlakken, bedwantsen, terugkerende keutels, beten, schade aan kabels of wanneer de overlast zich verspreidt naar meerdere ruimtes."
  },
  {
    id: "huurwoning",
    question: "Ik woon in een huurwoning. Kan ik ook contact opnemen?",
    answer: "Ja. Je kunt de situatie laten beoordelen. Afhankelijk van de oorzaak kan het verstandig zijn om ook de verhuurder of beheerder te informeren, zeker bij gebouwgebonden problemen of terugkerende overlast."
  }
];

export const metadata = pageMetadata({
  title: "Ongediertebestrijding voor particulieren",
  description: "Hulp bij ongedierte in woningen, appartementen en huurwoningen. Discreet, duidelijk en met voorbereiding per situatie.",
  path: "/particulieren"
});

export default function ConsumersPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Particulieren", path: "/particulieren" }]), faqSchema(faq)]} />
      <PageShell eyebrow="Particulieren" title="Ongediertehulp voor thuis." intro="Voor woningen, appartementen, huurwoningen en gezinnen. We leggen rustig uit wat je zelf kunt voorbereiden en wanneer specialistische hulp nodig is.">
        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              <div className={sections.panel}>
                <h2>Ongedierte in huis vraagt om duidelijke uitleg</h2>
                <p>Ongedierte in je woning geeft vaak onrust. Je wilt weten wat het is, waar het vandaan komt, of het zich kan verspreiden en wat je wel of niet zelf moet doen. Vooral bij muizen, ratten, kakkerlakken, bedwantsen, vlooien en terugkerende insecten is snel duidelijkheid krijgen belangrijk.</p>
                <p>Ongedierte Buddy helpt particuliere klanten met een praktische beoordeling van de situatie. We kijken naar de signalen, het type woning, de betrokken ruimtes en de mogelijke oorzaak. Daarna wordt uitgelegd welke vervolgstap logisch is.</p>
              </div>
              <div className={`${sections.imagePanel} ${sections.consumerImage}`}>
                <Image src="/images/audience/particulieren.png" alt="Woning voor particuliere ongediertehulp" fill sizes="(max-width: 760px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.sectionHeader}>
              <h2>Voor welke thuissituaties?</h2>
              <p>Elke woning is anders. Daarom wordt gekeken naar het soort overlast, het pandtype en de plek waar signalen zichtbaar zijn.</p>
            </div>
            <div className={sections.grid}>
              {homeSituations.map((situation) => (
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
                <h2>Wat je alvast kunt voorbereiden</h2>
                <ul>
                  {preparation.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className={sections.panel}>
                <h2>Wanneer professionele hulp verstandig is</h2>
                <p>Schakel hulp in wanneer je steeds opnieuw signalen ziet, meerdere ruimtes betrokken zijn, er sprake is van beten, voorraadschade, kabelschade of wanneer je ongedierte ziet dat zich snel kan verspreiden. Bij bedwantsen, kakkerlakken en ratten is afwachten meestal geen goede keuze.</p>
                <p>Ook bij twijfel is contact verstandig. Een korte omschrijving of foto kan vaak al helpen om te bepalen of inspectie nodig is.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.grid}>
              <article className={sections.panel}>
                <h2>Kinderen, huisdieren en kwetsbare bewoners</h2>
                <p>De juiste voorbereiding verschilt per behandeling. Daarom worden instructies niet algemeen beloofd, maar afgestemd op de situatie. Je krijgt uitleg over ruimtes, schoonmaak, ventilatie, textiel, voedsel, huisdieren en aandachtspunten na afloop.</p>
              </article>
              <article className={sections.panel}>
                <h2>Eenmalige overlast of terugkerend probleem?</h2>
                <p>Een losse mier of vlieg is iets anders dan terugkerende activiteit, keutels, larven, beten of schade. Bij terugkerende overlast moet de oorzaak worden gevonden. Denk aan kieren, vocht, openingen, afval, voorraad, schuilplekken of verspreiding vanuit naastgelegen ruimtes.</p>
              </article>
              <article className={sections.panel}>
                <h2>Nazorg en preventie</h2>
                <p>Na inspectie of behandeling krijg je praktische preventietips. Soms gaat het om voedsel afsluiten, openingen controleren of vocht verminderen. In andere situaties zijn vervolgcontrole of extra maatregelen nodig om terugkeer te beperken.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.faqIntro}>
              <h2>Veelgestelde vragen van particuliere klanten</h2>
              <p>Antwoorden op vragen over zelf bestrijden, voorbereiding, kinderen, huisdieren en huurwoningen.</p>
            </div>
            <FAQAccordion items={faq} />
          </div>
        </section>
      </PageShell>
    </>
  );
}
