import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadMiniForm } from "@/components/forms/LeadMiniForm";
import { Reveal } from "@/components/motion/Reveal";
import { RegionHero } from "@/components/regions/RegionHero";
import local from "@/components/regions/local-page.module.css";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ServiceCarousel } from "@/components/sections/ServiceCarousel";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/structured-data/JsonLd";
import { cities, getCity } from "@/content/regions";
import type { City, FAQItem } from "@/content/types";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";

type Props = { params: Promise<{ citySlug: string }> };

const stepItems = [
  ["Aanvraag", "Geef je postcode, het soort overlast en de belangrijkste signalen door. Foto's of video's helpen bij een snellere eerste inschatting."],
  ["Beoordeling", "We kijken naar urgentie, pandtype, bereikbaarheid en mogelijke verspreiding naar buren, algemene ruimtes of bedrijfsdelen."],
  ["Aanpak", "De specialist onderzoekt bron, routes en risicoplekken. Daarna volgt een behandeling die past bij het soort ongedierte en de situatie."],
  ["Preventie", "Na afloop krijg je praktische adviezen over wering, hygiëne, opslag, ventilatie en controlepunten om terugkeer te beperken."]
] as const;

function localFaq(city: City): FAQItem[] {
  return [
    ...city.faq,
    {
      id: `${city.slug}-herkennen`,
      question: `Moet ik eerst weten welk ongedierte het is in ${city.name}?`,
      answer: "Nee. Je kunt foto's, video's of een omschrijving sturen. Denk aan keutels, geluiden, beten, schade, geur, looproutes of plekken waar je activiteit ziet."
    },
    {
      id: `${city.slug}-kosten`,
      question: `Wat kost ongediertebestrijding in ${city.name}?`,
      answer: "De kosten hangen af van het soort ongedierte, de ernst van de overlast, het pandtype, het aantal ruimtes en eventuele vervolgcontrole. Je krijgt vooraf uitleg voordat er iets wordt ingepland."
    },
    {
      id: `${city.slug}-voorbereiden`,
      question: "Kan ik zelf iets voorbereiden?",
      answer: "Maak foto's, noteer waar je activiteit ziet en sluit voedsel af. Ruim niet alles direct weg: sporen kunnen helpen om de bron te vinden. Bij bedwantsen of vlooien is het verstandig eerst instructies te vragen."
    },
    {
      id: `${city.slug}-preventie`,
      question: "Helpen jullie ook met preventie?",
      answer: "Ja. Na inspectie of behandeling krijg je praktische adviezen om terugkeer te beperken. Bij bedrijven en VvE's kan ook worden meegedacht over structurele controle en preventieve maatregelen."
    }
  ];
}

function nearbyCityLinks(city: City) {
  const directNearby = city.nearby
    .map((nearby) => cities.find((item) => item.name === nearby))
    .filter((item): item is City => Boolean(item));
  return Array.from(new Map([...directNearby, ...cities.filter((item) => item.provinceSlug === city.provinceSlug)].map((item) => [item.slug, item])).values())
    .filter((item) => item.slug !== city.slug)
    .slice(0, 8);
}

export function generateStaticParams() {
  return cities.map((city) => ({ citySlug: city.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};
  return pageMetadata({ ...city.seo, path: `/ongediertebestrijding/${city.slug}` });
}

export default async function CityPage({ params }: Props) {
  const { citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const nearbyLinks = nearbyCityLinks(city);
  const routes = Array.from(new Set([...nearbyLinks.map((nearby) => nearby.slug), "amsterdam", "utrecht", "zwolle", "rotterdam", "groningen"])).filter((slug) => slug !== city.slug).slice(0, 7);
  const faqItems = localFaq(city);
  const nearbyNames = nearbyLinks.slice(0, 5).map((nearby) => nearby.name).join(", ");

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: city.name, path: `/ongediertebestrijding/${city.slug}` }]), faqSchema(faqItems)]} />
      <RegionHero kind="city" city={city} routes={routes} />

      <Reveal as="section" className="sectionServices" delay={40}>
        <div className="container">
          <div className={sections.splitIntro}>
            <div>
              <p className="eyebrow">Waarmee we je kunnen helpen</p>
              <h2 className="typeSectionTitleSmall">Diensten in {city.name}</h2>
            </div>
            <p className="lead">Van knaagdieren tot insecten: kies de juiste aanpak en vraag direct een inspectie aan voor jouw woning, bedrijf of VvE.</p>
          </div>
          <ServiceCarousel />
        </div>
      </Reveal>

      <Reveal as="section" className={local.localSection}>
        <div className="container">
          <div className={local.localIntroGrid}>
            <article className={local.copyPanel}>
              <p className="eyebrow">Lokale situatie</p>
              <h2>Ongedierte in {city.name}: waar moet je op letten?</h2>
              <p>{city.intro}</p>
              <p>Overlast ontstaat vaak door een combinatie van toegang, schuilplek, voedsel en vocht. In {city.name} kijken we daarom niet alleen naar wat zichtbaar is, maar ook naar routes via leidingen, gevels, kruipruimtes, bergingen, afvalplekken en gedeelde ruimtes.</p>
              <p>Muizen en ratten vragen meestal om brononderzoek en wering. Bij insecten zoals mieren, zilvervisjes, vlooien, motten of kakkerlakken is het belangrijk om schuilplekken, vocht, textiel, voedselbronnen en mogelijke verspreiding zorgvuldig te beoordelen.</p>
              <div className={local.noteBox}><strong>Geen fictief lokaal kantoor.</strong> Ongedierte Buddy werkt landelijk en claimt geen plaatselijk kantoor wanneer dat er niet is. Je krijgt wel snel contact, duidelijke planning en een passende aanpak voor jouw situatie.</div>
            </article>
            <LeadMiniForm formId={`city-${city.slug}`} title={`Gratis inspectie in ${city.name} aanvragen`} source="city-page" pageType="city" citySlug={city.slug} />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className={local.localSectionMuted}>
        <div className="container">
          <div className={sections.centerIntro}>
            <p className="eyebrow">Particulier en zakelijk</p>
            <h2 className="typeSectionTitleSmall">Voor woningen, bedrijven en beheerders in {city.name}</h2>
          </div>
          <div className={local.audienceGrid}>
            <article className={local.audienceCard}>
              <span className={local.cardKicker}>Voor particulieren</span>
              <h2>Rustig en duidelijk bij overlast in huis</h2>
              <p>Ongedierte in huis voelt onrustig. Zeker bij kinderen, huisdieren of kwetsbare bewoners wil je snel weten wat er aan de hand is en welke stappen verstandig zijn.</p>
              <ul className={local.featureList}>
                <li>Hulp bij woningen, appartementen, bergingen, zolders en kruipruimtes</li>
                <li>Duidelijke voorbereiding zonder onnodig opruimen van sporen</li>
                <li>Praktische preventie om terugkeer te beperken</li>
              </ul>
            </article>
            <article className={local.audienceCard}>
              <span className={local.cardKicker}>Voor bedrijven</span>
              <h2>Discreet handelen in bedrijfsruimtes</h2>
              <p>Bij horeca, winkels, kantoren, magazijnen, verhuurders en VvE's kan ongedierte gevolgen hebben voor hygiëne, voorraad, personeel, klanten en reputatie.</p>
              <ul className={local.featureList}>
                <li>Aandacht voor openingstijden, veiligheid en bereikbaarheid</li>
                <li>Inspectie van afvalstromen, opslag, technische ruimtes en entrees</li>
                <li>Advies voor structurele controle bij terugkerende overlast</li>
              </ul>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className={local.localSection}>
        <div className="container">
          <div className={sections.splitIntro}>
            <div>
              <p className="eyebrow">Werkwijze</p>
              <h2 className="typeSectionTitleSmall">Van melding naar preventie</h2>
            </div>
            <p className="lead">De aanpak verschilt per pand en per soort ongedierte. Daarom starten we met signalen, bron en risico's voordat er behandeld wordt.</p>
          </div>
          <div className={local.stepGrid}>
            {stepItems.map(([title, text], index) => (
              <article className={local.stepCard} key={title}>
                <div className={local.stepTop}><span>{index + 1}</span><span>0{index + 1}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className={local.detailGrid}>
            <article className={local.detailCard}>
              <p className="eyebrow">IPM</p>
              <h2>Niet alleen bestrijden, ook de oorzaak aanpakken</h2>
              <p>Bij terugkerende overlast kijken we naar toegang, schuilplekken, voedsel, vocht en verspreiding. Die werkwijze sluit aan op de IPM-gedachte: eerst inspecteren, dan gericht behandelen en daarna preventieve maatregelen nemen.</p>
            </article>
            <article className={local.detailCard}>
              <p className="eyebrow">Kosten</p>
              <h2>Wat bepaalt de prijs in {city.name}?</h2>
              <p>De kosten hangen af van het soort ongedierte, het aantal ruimtes, de bereikbaarheid van plekken, de ernst van de overlast en eventuele vervolgcontrole. Daarom geven we liever eerst een situatiegerichte inschatting.</p>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className={local.localSectionCompact}>
        <div className="container">
          <div className={local.detailGrid}>
            <article className={local.infoPanel}>
              <h2>Preventie in {city.name}</h2>
              <p>Veel problemen ontstaan door toegang, schuilplek, voedsel en vocht. Met kleine maatregelen verklein je de kans op terugkeer.</p>
              <ul className={local.infoList}>
                <li>Sluit voedsel en afval goed af.</li>
                <li>Controleer naden, kieren, roosters en leidingdoorvoeren.</li>
                <li>Voorkom vochtproblemen en ventileer kwetsbare ruimtes.</li>
                <li>Houd opslagplekken, bergingen en technische ruimtes controleerbaar.</li>
              </ul>
            </article>
            <article className={local.cityLinksCard}>
              <h2>{city.name} en omgeving</h2>
              <p>We helpen in {city.name}{nearbyNames ? ` en omliggende plaatsen zoals ${nearbyNames}` : " en de omliggende regio"}.</p>
              <div className={local.cityLinkGrid}>
                {nearbyLinks.map((nearby) => <Link key={nearby.id} href={`/ongediertebestrijding/${nearby.slug}`}>{nearby.name}</Link>)}
              </div>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="sectionBottomContact">
        <div className="container">
          <div className={local.faqGrid}>
            <FAQAccordion items={faqItems} />
            <LeadMiniForm formId={`city-bottom-${city.slug}`} title={`Inspectie in ${city.name} aanvragen`} source="city-page-bottom" pageType="city" citySlug={city.slug} />
          </div>
        </div>
      </Reveal>
    </>
  );
}
