import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadMiniForm } from "@/components/forms/LeadMiniForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageShell } from "@/components/sections/PageShell";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/structured-data/JsonLd";
import { getCity, getServiceCityPage, serviceCityPages } from "@/content/regions";
import { getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";

type Props = { params: Promise<{ citySlug: string; serviceSlug: string }> };

export function generateStaticParams() {
  return serviceCityPages.map((page) => ({ citySlug: page.citySlug, serviceSlug: page.serviceSlug }));
}

export async function generateMetadata({ params }: Props) {
  const { citySlug, serviceSlug } = await params;
  const page = getServiceCityPage(citySlug, serviceSlug);
  if (!page) return {};
  return pageMetadata({ ...page.seo, path: `/ongediertebestrijding/${citySlug}/${serviceSlug}` });
}

export default async function ServiceCityPage({ params }: Props) {
  const { citySlug, serviceSlug } = await params;
  const page = getServiceCityPage(citySlug, serviceSlug);
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!page || !city || !service) notFound();

  const combinedFaq = [
    ...page.faq,
    ...service.faq.slice(0, 4).map((item) => ({
      ...item,
      id: `${city.slug}-${item.id}`,
      question: item.question.includes(city.name) ? item.question : `${item.question} in ${city.name}`
    }))
  ];

  const servicePath = `/diensten/${service.slug}`;
  const cityPath = `/ongediertebestrijding/${city.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: city.name, path: cityPath },
            { name: service.name, path: `/ongediertebestrijding/${city.slug}/${service.slug}` }
          ]),
          faqSchema(combinedFaq)
        ]}
      />
      <PageShell
        eyebrow="Dienst in regio"
        title={`${service.name} bestrijden in ${city.name}`}
        intro={page.intro}
        breadcrumbs={[{ label: city.name, href: cityPath }]}
      >
        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              <article className={sections.panel}>
                <h2>Situatie in {city.name}</h2>
                <p>{page.situation}</p>
                <p>
                  Bij {service.pest.toLowerCase()} is het belangrijk om niet alleen te kijken naar wat zichtbaar is,
                  maar ook naar routes, schuilplekken en omstandigheden waardoor de overlast kan terugkomen.
                  Daarom combineren we intake, inspectie, gerichte aanpak en preventieadvies.
                </p>
              </article>
              <article className={sections.panel}>
                <h2>Gebouwen waar we vaak naar kijken</h2>
                <ul>
                  {page.buildingTypes.map((type) => <li key={type}>{type}</li>)}
                  <li>VvE-complexen, verhuurpanden en gedeelde ruimtes</li>
                  <li>Horeca, winkels, kantoren en opslagruimtes</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.sectionHeader}>
              <div>
                <p className="eyebrow">Herkennen</p>
                <h2>Signalen van {service.pest.toLowerCase()} in {city.name}</h2>
              </div>
              <p>Hoe eerder de signalen duidelijk zijn, hoe beter de bron en juiste aanpak kunnen worden bepaald.</p>
            </div>
            <div className={sections.grid}>
              {service.signs.slice(0, 6).map((sign) => (
                <article className={sections.panel} key={sign}>
                  <h3>{sign}</h3>
                  <p>Dit signaal kan wijzen op activiteit van {service.pest.toLowerCase()}. Noteer waar en wanneer je dit ziet.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              <article className={sections.panel}>
                <h2>Waarom {service.pest.toLowerCase()} juist hier kan ontstaan</h2>
                <p>
                  In {city.name} speelt het type pand vaak mee. Denk aan {city.buildingContext}.
                  Daardoor kunnen toegangspunten, vocht, afval, opslag, doorvoeren of gedeelde ruimten per situatie verschillen.
                </p>
                <ul>
                  {service.causes.slice(0, 5).map((cause) => <li key={cause}>{cause}</li>)}
                </ul>
              </article>
              <article className={sections.panel}>
                <h2>Wanneer contact opnemen?</h2>
                <ul>
                  {service.whenToCall.slice(0, 5).map((reason) => <li key={reason}>{reason}</li>)}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.sectionHeader}>
              <div>
                <p className="eyebrow">Aanpak</p>
                <h2>Zo pakken we {service.pest.toLowerCase()} in {city.name} aan</h2>
              </div>
              <p>{page.approach}</p>
            </div>
            <div className={sections.grid}>
              {service.method.slice(0, 5).map((step, index) => (
                <article className={sections.panel} key={step}>
                  <h3>{index + 1}. {step}</h3>
                  <p>De exacte uitvoering hangt af van het pand, de ernst van de overlast en wat tijdens intake of inspectie wordt vastgesteld.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              {service.audienceBlocks.map((block) => (
                <article className={sections.panel} key={block.title}>
                  <h2>{block.title} in {city.name}</h2>
                  <p>{block.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              <article className={sections.panel}>
                <h2>Voorbereiding</h2>
                <p>{page.preparation}</p>
                <ul>
                  {service.preparation.slice(0, 5).map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className={sections.panel}>
                <h2>Veiligheid en nazorg</h2>
                <p>
                  We stemmen de aanpak af op de situatie. Bij kinderen, huisdieren, voedselruimtes of zakelijke omgevingen
                  krijg je duidelijke instructies over wat wel en niet verstandig is.
                </p>
                <ul>
                  {service.safety.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              <article className={sections.panel}>
                <h2>Kosten van {service.pest.toLowerCase()} bestrijden in {city.name}</h2>
                <p>
                  De prijs hangt af van de situatie. We noemen liever geen standaardbedrag dat achteraf niet past,
                  maar beoordelen eerst waar de overlast zit, hoe groot het risico is en of vervolgcontrole of preventie nodig is.
                </p>
                <ul>
                  {service.costFactors.map((factor) => <li key={factor}>{factor}</li>)}
                </ul>
              </article>
              <div className={sections.formFirst}>
                <LeadMiniForm
                  formId={`combo-${city.slug}-${service.slug}`}
                  title="Gratis inspectie aanvragen"
                  source="service-city-page"
                  pageType="service-city"
                  serviceSlug={service.slug}
                  citySlug={city.slug}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              <article className={sections.panel}>
                <h2>Preventie in {city.name}</h2>
                <p>{page.prevention}</p>
                <ul>
                  {service.prevention.slice(0, 5).map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className={sections.panel}>
                <h2>Verder lezen</h2>
                <p>
                  Wil je breder kijken dan alleen deze combinatie? Bekijk dan de algemene dienstpagina of de stadspagina voor alle vormen van ongediertebestrijding in {city.name}.
                </p>
                <ul>
                  <li><Link href={servicePath}>{service.name} bestrijden</Link></li>
                  <li><Link href={cityPath}>Ongediertebestrijding in {city.name}</Link></li>
                  {city.nearby.slice(0, 3).map((nearby) => <li key={nearby}>Ook actief in de omgeving van {nearby}</li>)}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <FAQAccordion items={combinedFaq} />
          </div>
        </section>
      </PageShell>
    </>
  );
}
