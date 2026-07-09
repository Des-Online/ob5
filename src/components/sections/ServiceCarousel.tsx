"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { services } from "@/content/services";
import { Icon } from "@/components/ui/Icon";
import styles from "./sections.module.css";

export function ServiceCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  function scrollByPage(direction: -1 | 1) {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: node.clientWidth * 0.82 * direction, behavior: "smooth" });
  }

  function updateProgress() {
    const node = scroller.current;
    if (!node) return;
    const max = node.scrollWidth - node.clientWidth;
    setProgress(max > 0 ? node.scrollLeft / max : 0);
  }

  return (
    <div className={styles.carouselWrap}>
      <div className={styles.carouselControls} aria-hidden="false">
        <button type="button" aria-label="Vorige diensten" onClick={() => scrollByPage(-1)}><Icon name="chevronLeft" /></button>
        <button type="button" aria-label="Volgende diensten" onClick={() => scrollByPage(1)}><Icon name="chevronRight" /></button>
      </div>
      <div ref={scroller} className={styles.carousel} role="region" aria-label="Diensten" onScroll={updateProgress}>
        {services.map((service) => (
          <Link key={service.id} href={`/diensten/${service.slug}`} className={styles.serviceCard} data-track="service_card_click">
            <div className={styles.serviceImage}>
              <span>Aanpak</span>
              <Image src={service.image} alt={`${service.name} herkennen en bestrijden`} width={320} height={200} sizes="(max-width: 720px) 80vw, 224px" />
            </div>
            <div className={styles.serviceBody}>
              <h3>{service.name}</h3>
              <Icon name="arrow" size={17} />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.carouselProgress} aria-hidden="true">
        <span style={{ transform: `translateX(${progress * 84}px)` }} />
      </div>
    </div>
  );
}
