import { LeadMiniForm } from "@/components/forms/LeadMiniForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageShell } from "@/components/sections/PageShell";
import { Icon } from "@/components/ui/Icon";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/structured-data/JsonLd";
import { siteConfig, telHref, whatsappHref } from "@/config/site";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";
import type { FAQItem } from "@/content/types";

const contactOptions = [
  {
    title: "Bel bij urgente overlast",
    text: "Bel wanneer je ratten, kakkerlakken, bedwantsen, schade, beten, zakelijke overlast of snelle verspreiding ziet. Telefonisch kan de situatie directer worden besproken."
  },
  {
    title: "WhatsApp met foto’s of video’s",
    text: "WhatsApp is handig wanneer je foto’s van sporen, keutels, insecten, schade of beten wilt meesturen. Dat helpt om sneller een eerste indruk te krijgen."
  },
  {
    title: "Formulier voor terugbelverzoek",
    text: "Gebruik het formulier wanneer je rustig wilt worden teruggebeld. Vermeld je postcode, type ongedierte, plek van de overlast en hoe lang het al speelt."
  }
];

const whatToShare = [
  "Postcode en plaatsnaam.",
  "Type pand: woning, appartement, bedrijf, VvE of verhuurpand.",
  "Welke signalen je ziet, hoort of ruikt.",
  "In welke ruimtes de overlast zit.",
  "Hoe lang de situatie al speelt.",
  "Of er foto’s, video’s, schade, keutels, beten of insecten zichtbaar zijn.",
  "Of er kinderen, huisdieren, voedselopslag of kwetsbare bewoners aanwezig zijn."
];

const faq: FAQItem[] = [
  {
    id: "beste-manier",
    question: "Wat is de beste manier om contact op te nemen?",
    answer: "Bij urgente situaties is bellen het meest direct. Wil je foto’s of video’s meesturen, gebruik dan WhatsApp. Voor een terugbelverzoek kun je het formulier invullen."
  },
  {
    id: "foto-video",
    question: "Kan ik foto’s of video’s meesturen?",
    answer: "Ja. Foto’s of video’s van sporen, insecten, keutels, schade of beten kunnen helpen om de situatie sneller te beoordelen. Gebruik hiervoor WhatsApp of beschrijf de situatie in het formulier."
  },
  {
    id: "reactie",
    question: "Hoe snel krijg ik reactie?",
    answer: "Ongedierte Buddy streeft naar snel contact. De daadwerkelijke planning hangt af van locatie, urgentie, beschikbaarheid en het soort ongedierte."
  },
  {
    id: "zakelijk-contact",
    question: "Kan ik ook zakelijk contact opnemen?",
    answer: "Ja. Vermeld dan het type bedrijf, locatie, betrokken ruimtes, openingstijden en of er klanten, voorraad of medewerkers direct hinder ervaren."
  },
  {
    id: "gegevens",
    question: "Met welk bedrijf heb ik contact?",
    answer: "Ongedierte Buddy is een handelsnaam van Klussenbedrijf van Oostveen. De bedrijfsgegevens staan op deze contactpagina en in de footer van de website."
  }
];

export const metadata = pageMetadata({
  title: "Contact",
  description: "Neem contact op met Ongedierte Buddy. Bel, WhatsApp of vraag een inspectie aan voor ongedierte in woning of bedrijf.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]), faqSchema(faq)]} />
      <PageShell eyebrow="Contact" title="Direct contact met Ongedierte Buddy." intro="Bel, app of laat je gegevens achter. Geef kort door wat je ziet, waar de overlast zit en hoe dringend de situatie is.">
        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              <article className={sections.panel}>
                <h2>Direct contact</h2>
                <div className={sections.contactRows}>
                  <a className={`${sections.contactRow} ${sections.contactRowPrimary}`} href={telHref} data-track="phone_click">
                    <Icon name="phone" /> {siteConfig.phoneDisplay}
                  </a>
                  <a className={sections.contactRow} href={whatsappHref} data-track="whatsapp_click">
                    <Icon name="message" /> WhatsApp — stuur foto’s of video’s mee
                  </a>
                  <a className={sections.contactRow} href={`mailto:${siteConfig.email}`}>
                    <Icon name="arrow" /> {siteConfig.email}
                  </a>
                </div>
                <p>{siteConfig.openingHours}</p>
                <div className={sections.metaBlock}>
                  <p>{siteConfig.legalDescription}</p>
                  <p>{siteConfig.legalName}<br />{siteConfig.address}<br />{siteConfig.postalCode} {siteConfig.city}<br />{siteConfig.country}</p>
                  <p>KvK: {siteConfig.chamberOfCommerce}</p>
                </div>
              </article>
              <LeadMiniForm formId="contact-page" title="Contactaanvraag" source="contact-page" pageType="contact" />
            </div>
          </div>
        </section>

        <section className="sectionCompact">
          <div className="container">
            <div className={sections.sectionHeader}>
              <h2 className="typeSectionTitleSmall">Kies de contactvorm die past bij je situatie</h2>
              <p>Hoe meer informatie je deelt, hoe beter de situatie kan worden ingeschat.</p>
            </div>
            <div className={sections.grid}>
              {contactOptions.map((option) => (
                <article className={`${sections.panel} ${sections.panelCompact}`} key={option.title}>
                  <h2>{option.title}</h2>
                  <p>{option.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionCompact">
          <div className="container">
            <div className={sections.twoCol}>
              <article className={sections.panel}>
                <h2>Wat kun je het beste doorgeven?</h2>
                <ul>
                  {whatToShare.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className={sections.panel}>
                <h2>Wanneer contact opnemen?</h2>
                <p>Neem contact op zodra je terugkerende signalen ziet, het ongedierte zich verspreidt, er schade ontstaat of je niet zeker weet wat je ziet. Bij ratten, kakkerlakken, bedwantsen, zakelijke overlast of meerdere meldingen in een gebouw is snelle beoordeling belangrijk.</p>
                <p>Ook bij twijfel kun je de situatie kort omschrijven. Dan wordt bekeken welke vervolgstap logisch is.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="sectionCompact">
          <div className="container">
            <div className={sections.grid}>
              <article className={sections.panel}>
                <h2>Voor woningen</h2>
                <p>Beschrijf in welke ruimtes je signalen ziet en of er kinderen, huisdieren of kwetsbare bewoners aanwezig zijn. Ruim sporen bij twijfel niet volledig weg voordat je foto’s hebt gemaakt.</p>
              </article>
              <article className={sections.panel}>
                <h2>Voor bedrijven</h2>
                <p>Vermeld het type bedrijf, openingstijden, betrokken ruimtes, eventuele voorraad of voedselbereiding en of de overlast zichtbaar is voor klanten of medewerkers.</p>
              </article>
              <article className={sections.panel}>
                <h2>Voor VvE’s en verhuurders</h2>
                <p>Geef aan of het om één woning, meerdere meldingen of algemene ruimtes gaat. Denk aan bergingen, schachten, kelders, containerruimtes en leidingroutes.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.faqIntro}>
              <h2 className="typeSectionTitleSmall">Veelgestelde vragen over contact</h2>
              <p>Praktische antwoorden over bellen, WhatsApp, terugbellen en bedrijfsgegevens.</p>
            </div>
            <FAQAccordion items={faq} />
          </div>
        </section>
      </PageShell>
    </>
  );
}
