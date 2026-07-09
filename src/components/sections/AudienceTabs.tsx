"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./sections.module.css";

const audience = {
  particulieren: {
    label: "Voor particulieren",
    title: "Voor particulieren",
    body: "Hulp bij ongedierte in en om je woning, met duidelijke uitleg over voorbereiding, uitvoering en nazorg.",
    points: ["Snelle hulp bij overlast thuis", "Instructies voor gezin en huisdieren", "Duidelijke uitleg zonder loze claims"],
    cta: "Particulier aanvragen",
    image: "/images/audience/particulieren.png",
    alt: "Tevreden gezin thuis in de woonkamer"
  },
  bedrijven: {
    label: "Voor bedrijven",
    title: "Voor bedrijven",
    body: "Bescherm je bedrijf, voorraad en reputatie met duidelijke intake, passende opvolging en preventieadvies.",
    points: ["Aanpak afgestemd op je pand", "Preventie en controleadvies", "Discrete, professionele werkwijze"],
    cta: "Zakelijk aanvragen",
    image: "/images/audience/bedrijven.png",
    alt: "Specialist controleert een zakelijke ruimte"
  }
} as const;

export function AudienceTabs() {
  const [tab, setTab] = useState<keyof typeof audience>("particulieren");
  const active = audience[tab];
  return (
    <div className={styles.audienceShell}>
      <div className={styles.tabList} role="tablist" aria-label="Voor wie">
        {(Object.keys(audience) as Array<keyof typeof audience>).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            className={tab === key ? styles.activeTab : ""}
            onClick={() => setTab(key)}
          >
            {audience[key].label}
          </button>
        ))}
      </div>
      <div key={tab} className={styles.audiencePanel}>
        <div className={styles.audienceCopy}>
          <h2>{active.title}</h2>
          <p>{active.body}</p>
          <div className={styles.pointList}>
            {active.points.map((point) => (
              <span key={point}><Icon name="check" size={15} />{point}</span>
            ))}
          </div>
          <button className={styles.greenButton} type="button" data-open-wizard="true">{active.cta}<Icon name="arrow" /></button>
        </div>
        <div className={styles.audienceImage} data-audience={tab}>
          <Image src={active.image} alt={active.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
        </div>
      </div>
    </div>
  );
}
