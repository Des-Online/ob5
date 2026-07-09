import Link from "next/link";
import { CTAButtons } from "@/components/ui/CTAButtons";
import type { City, Province } from "@/content/types";
import { RegionMapVisual } from "./RegionMapVisual";
import styles from "./region-hero.module.css";

type RegionHeroProps =
  | { kind: "city"; city: City; routes?: string[] }
  | { kind: "province"; province: Province; routes?: string[] };

export function RegionHero(props: RegionHeroProps) {
  const isCity = props.kind === "city";
  const title = isCity ? `Ongediertebestrijding in ${props.city.name}` : `Ongediertebestrijding in ${props.province.name}`;
  const intro = isCity ? props.city.intro : props.province.intro;
  const name = isCity ? props.city.name : props.province.name;

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            {!isCity ? <Link href="/regios">Regio&apos;s</Link> : null}
            <span>{name}</span>
          </div>
          <p className="eyebrow">{isCity ? "Stad" : "Provincie"}</p>
          <h1 className="typePageTitle">{title}</h1>
          <p>{intro}</p>
          <CTAButtons location={`${isCity ? "city" : "province"}-hero-${isCity ? props.city.slug : props.province.slug}`} />
          <div className={styles.trust}>
            <span>Snel contact</span>
            <span>Landelijk beschikbaar</span>
            <span>Discreet contact</span>
          </div>
        </div>
        <div className={styles.mapWrap}>
          {isCity
            ? <RegionMapVisual kind="city" city={props.city} routes={props.routes} />
            : <RegionMapVisual kind="province" province={props.province} routes={props.routes} />}
        </div>
      </div>
    </section>
  );
}

