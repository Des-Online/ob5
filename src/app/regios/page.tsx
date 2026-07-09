import Link from "next/link";
import { PageShell } from "@/components/sections/PageShell";
import { provinces } from "@/content/regions";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";

export const metadata = pageMetadata({
  title: "Regio's voor ongediertebestrijding",
  description: "Ongedierte Buddy werkt in heel Nederland. Bekijk provincie- en stadspagina's zonder fictieve lokale kantoren.",
  path: "/regios"
});

export default function RegionsPage() {
  return (
    <PageShell eyebrow="Regio's" title="Landelijke hulp, duidelijke regiopagina's." intro="We werken door heel Nederland en beschrijven per regio eerlijk waar we mee kunnen helpen.">
      <section className="section">
        <div className="container">
          <div className={sections.grid}>{provinces.map((province) => <article className={sections.panel} key={province.id}><h2><Link href={`/regios/${province.slug}`}>{province.name}</Link></h2><p>{province.intro}</p></article>)}</div>
        </div>
      </section>
    </PageShell>
  );
}
