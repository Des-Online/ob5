import { homepageFaq, workSteps } from "@/content/site-content";
import { Icon } from "@/components/ui/Icon";
import { LeadMiniForm } from "@/components/forms/LeadMiniForm";
import { Reveal } from "@/components/motion/Reveal";
import { FAQAccordion } from "./FAQAccordion";
import { AudienceTabs } from "./AudienceTabs";
import { ServiceCarousel } from "./ServiceCarousel";
import { CoverageReviewCluster } from "./CoverageReviewCluster";
import styles from "./sections.module.css";

export function HomeSections() {
  return (
    <>
      <Reveal as="section" className="sectionServices" id="diensten">
        <div className="container">
          <div className={styles.splitIntro}>
            <div>
              <p className="eyebrow">Onze diensten</p>
              <h2 className="typeSectionTitle">Waar kunnen we je<br />mee helpen?</h2>
            </div>
            <p className="lead">Vaste werkwijze, inclusief inspectie en advies. Geen verrassingen achteraf.</p>
          </div>
          <ServiceCarousel />
        </div>
      </Reveal>
      <Reveal as="section" className="sectionSteps" id="werkwijze">
        <div className="container">
          <div className={styles.centerIntro}>
            <p className="eyebrow">Hoe werkt het?</p>
            <h2 className="typeSectionTitle">In 4 stappen ongediertevrij</h2>
          </div>
          <div className={styles.steps}>
            {workSteps.map(([title, text], index) => (
              <article className={styles.step} key={title}>
                <div>
                  <span className={styles.stepIcon}><Icon name={index === 0 ? "calendar" : index === 1 ? "headphones" : index === 2 ? "target" : "shield"} /></span>
                  <strong>0{index + 1}</strong>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal as="section" className="sectionFeature">
        <div className="container">
          <AudienceTabs />
        </div>
      </Reveal>
      <CoverageReviewCluster />
      <Reveal as="section" className="sectionBottomContact" id="inspectie">
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <div className={styles.faqIntro}>
                <p className="eyebrow">Veelgestelde vragen</p>
                <h2 className="typeSectionTitleSmall">Goed om te weten</h2>
              </div>
              <FAQAccordion items={homepageFaq} />
            </div>
            <LeadMiniForm formId="homepage-contact" title="Vraag een gratis inspectie aan" source="homepage-bottom" />
          </div>
        </div>
      </Reveal>
    </>
  );
}
