"use client";

import { useState } from "react";
import Link from "next/link";
import { cities } from "@/content/regions";
import { reviews } from "@/content/site-content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { EmergencyCTA } from "./EmergencyCTA";
import styles from "./sections.module.css";

export function CoverageReviewCluster() {
  const [index, setIndex] = useState(0);
  const review = reviews[((index % reviews.length) + reviews.length) % reviews.length];

  return (
    <Reveal as="section" className="sectionStandard" id="regio">
      <div className="container">
        <div className={styles.coverageCluster}>
          <div className={styles.coverageRow}>
            <article className={styles.coveragePanel}>
              <p className="eyebrow">Landelijke dekking</p>
              <h2 className="typeSectionTitleSmall">Actief in heel Nederland</h2>
              <p>Landelijke dekking met duidelijke planning, passende opvolging en preventieadvies per situatie.</p>
              <div className={styles.coverageStats}>
                <span><strong>NL</strong>Landelijke dekking</span>
                <span><strong>Snel</strong>Eerste contact</span>
                <span><strong>Helder</strong>Uitleg en nazorg</span>
              </div>
              <div className={styles.cityGrid}>
                {cities.slice(0, 10).map((city) => (
                  <Link key={city.id} href={`/ongediertebestrijding/${city.slug}`}><Icon name="check" size={14} />{city.name}</Link>
                ))}
              </div>
            </article>
            <article className={styles.reviewPanel} id="reviews">
              <div className={styles.reviewTop}>
                <h2>Ervaringen van klanten</h2>
                <span><Icon name="star" size={16} />Klantreviews</span>
              </div>
              <div className={styles.reviewInset}>
                <div className={styles.stars} aria-label="Klantreview">
                  {Array.from({ length: 5 }).map((_, star) => <Icon key={star} name="star" size={17} />)}
                </div>
                <p>&quot;{review.text}&quot;</p>
                <div className={styles.reviewPerson}>
                  <span>{review.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>
                  <div><strong>{review.name}</strong><small>{review.location}</small></div>
                </div>
              </div>
              <div className={styles.reviewNav}>
                <div>{(reviews.length <= 5 ? reviews : reviews.slice(0, 3)).map((item, dot) => <button key={item.id} type="button" aria-label={`Klantreview ${dot + 1}`} className={dot === index ? styles.activeDot : ""} onClick={() => setIndex(dot)} />)}</div>
                <div>
                  <button type="button" aria-label="Vorige klantreview" onClick={() => setIndex((value) => (value + reviews.length - 1) % reviews.length)}><Icon name="chevronLeft" /></button>
                  <button type="button" aria-label="Volgende klantreview" onClick={() => setIndex((value) => (value + 1) % reviews.length)}><Icon name="chevronRight" /></button>
                </div>
              </div>
            </article>
          </div>
          <EmergencyCTA />
        </div>
      </div>
    </Reveal>
  );
}
