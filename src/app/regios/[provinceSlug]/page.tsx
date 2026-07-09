import Link from "next/link";
import { notFound } from "next/navigation";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { LeadMiniForm } from "@/components/forms/LeadMiniForm";
import { Reveal } from "@/components/motion/Reveal";
import { RegionHero } from "@/components/regions/RegionHero";
import local from "@/components/regions/local-page.module.css";
import { ServiceCarousel } from "@/components/sections/ServiceCarousel";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/structured-data/JsonLd";
import { cities, getProvince, provinces } from "@/content/regions";
import type { FAQItem, Province } from "@/content/types";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";

type Props = { params: Promise<{ provinceSlug: string }> };

const provinceSteps = [
  ["Aanvraag", "Vertel kort wat je ziet, waar de overlast zit en of het om een woning, bedrijf, verhuurwoning of VvE gaat."],
  ["Regio-inschatting", "We beoordelen urgentie, locatie, pandtype en bereikbaarheid binnen de provincie."],
  ["Planning", "De afspraak wordt afgestemd op de situatie, beschikbaarheid en eventuele bedrijfs- of bewonersplanning."],
  ["Opvolging", "Na inspectie of behandeling krijg je uitleg over preventie, controlepunten en eventuele vervolgstappen."]
] as const;

function provinceFaq(province: Province): FAQItem[] {
  return [
    ...province.faq,
    {
      id: `${province.slug}-plaatsen`,
      question: `In welke plaatsen in ${province.name} helpen jullie?`,
      answer: `We helpen in de hele provincie, waaronder ${province.cities.join(", ")}. Ook omliggende plaatsen kunnen worden meegenomen op basis van beschikbaarheid en urgentie.`
    },
    {
      id: `${province.slug}-kosten`,
      question: `Zijn de kosten in ${province.name} vooraf duidelijk?`,
      answer: "De kosten hangen af van het soort ongedierte, de ernst van de overlast, het pandtype, bereikbaarheid en eventuele vervolgcontrole. Je krijgt vooraf uitleg over de logische vervolgstap."
    },
    {
      id: `${province.slug}-bedrijven`,
      question: "Helpen jullie ook bedrijven en VvE's?",
      answer: "Ja. We helpen onder meer horeca, winkels, kantoren, magazijnen, verhuurders, beheerders en VvE's. Bij zakelijke situaties houden we rekening met openingstijden, veiligheid en discretie."
    },
    {
      id: `${province.slug}-kantoor`,
      question: `Heeft Ongedierte Buddy een lokaal kantoor in ${province.name}?`,
      answer: "We werken landelijk en claimen geen lokaal kantoor wanneer dat er niet is. Je krijgt wel snel contact, duidelijke planning en een passende aanpak voor jouw situatie."
    }
  ];
}

export function generateStaticParams() {
  return provinces.map((province) => ({ provinceSlug: province.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { provinceSlug } = await params;
  const province = getProvince(provinceSlug);
  if (!province) return {};
  return pageMetadata({ ...province.seo, path: `/regios/${province.slug}` });
}

export default async function ProvincePage({ params }: Props) {
  const { provinceSlug } = await params;
  const province = getProvince(provinceSlug);
  if (!province) notFound();

  const provinceCities = cities.filter((city) => city.provinceSlug === province.slug);
  const routes = Array.from(new Set([...provinceCities.map((city) => city.slug), "amsterdam", "utrecht", "zwolle", "rotterdam", "groningen"])).slice(0, 7);
  const faqItems = provinceFaq(province);
  const cityNames = provinceCities.length ? provinceCities.map((city) => city.name).join(", ") : province.cities.join(", ");

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Regio's", path: "/regios" }, { name: province.name, path: `/regios/${province.slug}` }]), faqSchema(faqItems)]} />
      <RegionHero kind="province" province={province} routes={routes} />

      <Reveal as="section" className="sectionServices" delay={40}>
        <div className="container">
          <div className={sections.splitIntro}>
            <div>
              <p className="eyebrow">Diensten in {province.name}</p>
              <h2 className="typeSectionTitleSmall">Waarmee we je kunnen helpen</h2>
            </div>
            <p className="lead">Alle belangrijke diensten blijven direct bereikbaar, met duidelijke vervolgstappen voor woningen, bedrijven en beheerders.</p>
          </div>
          <ServiceCarousel />
        </div>
      </Reveal>

      <Reveal as="section" className={local.localSection}>
        <div className="container">
          <div className={local.localIntroGrid}>
            <article className={local.copyPanel}>
              <p className="eyebrow">Provinciecontext</p>
              <h2>Ongediertebestrijding in {province.name}</h2>
              <p>{province.intro}</p>
              <p>In {province.name} kan ongedierte voorkomen in woningen, appartementen, horeca, winkels, bedrijfspanden, magazijnen, scholen, zorglocaties en VvE-complexen. De juiste aanpak hangt af van het soort ongedierte, het gebouw en de ernst van de signalen.</p>
              <p>Bij terugkerende overlast kijken we naar bron, routes, schuilplekken, voedsel, vocht en bouwkundige toegangspunten. Zo voorkom je dat er alleen symptoombestrijding plaatsvindt.</p>
              <div className={local.noteBox}><strong>Landelijke dekking, duidelijke communicatie.</strong> Ongedierte Buddy claimt geen lokaal kantoor per plaats wanneer dat er niet is. We stemmen per aanvraag af welke planning en aanpak past bij jouw situatie.</div>
            </article>
            <LeadMiniForm formId={`province-${province.slug}`} title={`Inspectie in ${province.name} aanvragen`} source="province-page" pageType="province" provinceSlug={province.slug} />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className={local.localSectionMuted}>
        <div className="container">
          <div className={sections.centerIntro}>
            <p className="eyebrow">Woningen en bedrijven</p>
            <h2 className="typeSectionTitleSmall">Hulp in {province.name} voor particuliere en zakelijke situaties</h2>
          </div>
          <div className={local.audienceGrid}>
            <article className={local.audienceCard}>
              <span className={local.cardKicker}>Voor particulieren</span>
              <h2>Hulp bij overlast in huis</h2>
              <p>Bij ongedierte in huis wil je snel duidelijkheid. We vragen naar signalen, ruimtes, huisdieren, kinderen en mogelijke verspreiding, zodat de vervolgstap past bij jouw woning.</p>
              <ul className={local.featureList}>
                <li>Voor woningen, appartementen, bergingen, zolders en kruipruimtes</li>
                <li>Uitleg over voorbereiding en wat je beter nog niet opruimt</li>
                <li>Preventieadvies om terugkeer te beperken</li>
              </ul>
            </article>
            <article className={local.audienceCard}>
              <span className={local.cardKicker}>Voor bedrijven</span>
              <h2>Discreet voor bedrijfspanden en VvE's</h2>
              <p>Bij bedrijven telt snelheid, hygiëne en discretie. We houden rekening met openingstijden, medewerkers, klanten, voorraad, huurders en gedeelde ruimtes.</p>
              <ul className={local.featureList}>
                <li>Voor horeca, retail, kantoren, magazijnen, verhuurders en beheerders</li>
                <li>Inspectie van afvalstromen, opslag, technische ruimtes en entrees</li>
                <li>Mogelijkheid tot structureel preventie- en controleadvies</li>
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
              <h2 className="typeSectionTitleSmall">Zo verloopt hulp in {province.name}</h2>
            </div>
            <p className="lead">De werkwijze is helder: eerst de situatie goed begrijpen, daarna gericht plannen en pas dan behandelen of adviseren.</p>
          </div>
          <div className={local.stepGrid}>
            {provinceSteps.map(([title, text], index) => (
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
              <h2>Oorzaak vinden en terugkeer beperken</h2>
              <p>Een goede aanpak kijkt verder dan zichtbaar ongedierte. We letten op toegangspunten, voedselbronnen, vocht, schuilplekken, afvalstromen en bouwkundige risico's. Daardoor wordt de kans op terugkeer kleiner.</p>
            </article>
            <article className={local.detailCard}>
              <p className="eyebrow">Kosten</p>
              <h2>Geen standaardprijs zonder situatie</h2>
              <p>Een kleine mierenoverlast vraagt om iets anders dan rattenactiviteit rond een bedrijfspand of bedwantsen in slaapkamers. Daarom wordt eerst gekeken naar soort, omvang, pandtype en vervolgcontrole.</p>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className={local.localSectionCompact}>
        <div className="container">
          <div className={local.detailGrid}>
            <article className={local.infoPanel}>
              <h2>Preventie in {province.name}</h2>
              <p>Terugkerende overlast heeft vaak te maken met toegang, schuilplek, voedsel of vocht. Preventie begint met controleerbare plekken en duidelijke afspraken.</p>
              <ul className={local.infoList}>
                <li>Sluit voedsel, afval en voorraad goed af.</li>
                <li>Controleer naden, kieren, roosters, gevels en leidingdoorvoeren.</li>
                <li>Verminder vocht en houd opslagplekken overzichtelijk.</li>
                <li>Leg bij bedrijven vaste controlepunten en meldroutes vast.</li>
              </ul>
            </article>
            <article className={local.cityLinksCard}>
              <h2>Belangrijke plaatsen in {province.name}</h2>
              <p>We helpen in {cityNames} en omliggende plaatsen binnen de provincie.</p>
              <div className={local.cityLinkGrid}>
                {provinceCities.length
                  ? provinceCities.map((city) => <Link key={city.id} href={`/ongediertebestrijding/${city.slug}`}>{city.name}</Link>)
                  : province.cities.map((city) => <span key={city}>{city}</span>)}
              </div>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="sectionBottomContact">
        <div className="container">
          <div className={local.faqGrid}>
            <FAQAccordion items={faqItems} />
            <LeadMiniForm formId={`province-bottom-${province.slug}`} title={`Inspectie in ${province.name} aanvragen`} source="province-page-bottom" pageType="province" provinceSlug={province.slug} />
          </div>
        </div>
      </Reveal>
    </>
  );
}
