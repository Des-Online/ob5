import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadMiniForm } from "@/components/forms/LeadMiniForm";
import { CTAButtons } from "@/components/ui/CTAButtons";
import { Icon } from "@/components/ui/Icon";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/structured-data/JsonLd";
import { cities } from "@/content/regions";
import { getService, services } from "@/content/services";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";
import shell from "@/components/sections/page-shell.module.css";

type Props = { params: Promise<{ serviceSlug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ serviceSlug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { serviceSlug } = await params;
  const service = getService(serviceSlug);
  if (!service) return {};
  return pageMetadata({ ...service.seo, path: `/diensten/${service.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const { serviceSlug } = await params;
  const service = getService(serviceSlug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Diensten", path: "/diensten" }, { name: service.name, path: `/diensten/${service.slug}` }]), faqSchema(service.faq)]} />
      <section className={shell.serviceHero}>
        <div className={`container ${shell.serviceHeroGrid}`}>
          <div className={shell.serviceHeroCopy}>
            <div className={shell.breadcrumbs}>
              <Link href="/">Home</Link>
              <Link href="/diensten">Diensten</Link>
            </div>
            <p className="eyebrow">Dienst</p>
            <h1 className="typePageTitle">{service.name} bestrijden</h1>
            <p>{service.intro}</p>
            <CTAButtons location={`service-hero-${service.slug}`} />
            <div className={shell.trustStrip}>
              <span>Snel contact</span>
              <span>Landelijke dekking</span>
              <span>Nazorg volgens afspraak</span>
            </div>
          </div>
          <div className={shell.serviceHeroMedia}>
            <span>{service.name}</span>
            <Image src={service.image} alt={`${service.name} herkennen en professioneel bestrijden`} width={620} height={460} priority sizes="(max-width: 760px) 92vw, 44vw" />
          </div>
        </div>
      </section>

      <main>
        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              <article className={sections.panel}>
                <h2>{service.name} herkennen en goed aanpakken</h2>
                {service.detailIntro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </article>
              <div className={sections.stickyAside}>
                <div className={sections.stickyAsideInner}>
                  <LeadMiniForm formId={`service-${service.slug}`} title="Gratis inspectie aanvragen" source="service-page" pageType="service" serviceSlug={service.slug} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.sectionHeader}>
              <div>
                <p className="eyebrow">Herkennen</p>
                <h2 className="typeSectionTitleSmall">Zo herken je {service.name.toLowerCase()}-overlast</h2>
              </div>
            </div>
            <div className={sections.grid}>
              <Info title="Herkenningssignalen" items={service.signs} />
              <Info title="Mogelijke oorzaken" items={service.causes} />
              <Info title="Wanneer hulp inschakelen?" items={service.whenToCall} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.sectionHeader}>
              <div>
                <p className="eyebrow">De aanpak</p>
                <h2 className="typeSectionTitleSmall">Van inspectie tot preventie</h2>
              </div>
            </div>
            <div className={sections.grid}>
              <Info title="Aanpak specialist" items={service.method} />
              <Info title="Voorbereiding" items={service.preparation} />
              <Info title="Terugkeer voorkomen" items={service.prevention} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              {service.audienceBlocks.map((block) => (
                <article className={sections.panel} key={block.title}>
                  <h2>{block.title}</h2>
                  <p>{block.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.sectionHeader}>
              <div>
                <p className="eyebrow">Kosten &amp; zekerheid</p>
                <h2 className="typeSectionTitleSmall">Duidelijkheid vooraf</h2>
              </div>
            </div>
            <div className={sections.gridFour}>
              <Info title="Kostenfactoren" items={service.costFactors} />
              <article className={sections.panel}>
                <h2>Kosten en duidelijkheid vooraf</h2>
                <p>De kosten verschillen per situatie. Een lichte overlast in één ruimte vraagt om een andere aanpak dan verspreiding door meerdere kamers, een bedrijfspand of een situatie waarbij vervolgcontrole nodig is. Daarom wordt eerst gekeken naar soort ongedierte, ernst, bereikbaarheid en benodigde voorbereiding.</p>
                <p>Je krijgt vooraf uitleg over de logische vervolgstap. Zo voorkom je standaardprijzen die achteraf niet passen bij de situatie.</p>
              </article>
              <Info title="Veiligheid en zorgvuldigheid" items={service.safety} />
              <article className={sections.panel}>
                <h2>Nazorg volgens afspraak</h2>
                <p>Bij ongediertebestrijding is nazorg afhankelijk van soort, pand en gekozen aanpak. Waar nodig worden preventiestappen, controlepunten of vervolgafspraken besproken. We maken geen algemene belofte die voor iedere situatie hetzelfde is, maar leggen vooraf uit wat je redelijkerwijs kunt verwachten.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="sectionCompact">
          <div className="container">
            <div className={sections.coveragePanel}>
              <p className="eyebrow">Werkgebied</p>
              <h2 className="typeSectionTitleSmall">{service.name} bestrijden in jouw regio</h2>
              <p>Ongedierte Buddy helpt landelijk. Op de stadspagina’s lees je meer over ongediertebestrijding in jouw omgeving.</p>
              <div className={sections.cityGrid}>
                {cities.slice(0, 10).map((city) => <a key={city.id} href={`/ongediertebestrijding/${city.slug}`}>{service.name} in {city.name}</a>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={sections.twoCol}>
              <div>
                <div className={sections.faqIntro}>
                  <p className="eyebrow">Veelgestelde vragen</p>
                  <h2 className="typeSectionTitleSmall">Goed om te weten over {service.name.toLowerCase()}</h2>
                </div>
                <FAQAccordion items={service.faq} />
              </div>
              <article className={sections.panel}>
                <h2>Andere diensten</h2>
                <div className={sections.linkList}>
                  {services.filter((item) => item.id !== service.id).slice(0, 6).map((item) => (
                    <Link key={item.id} href={`/diensten/${item.slug}`}>{item.name} bestrijden <Icon name="arrow" size={16} /></Link>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Info({ title, items }: { title: string; items: string[] }) {
  return <article className={sections.panel}><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>;
}
