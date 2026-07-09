import { HomeHero } from "@/components/hero/HomeHero";
import { HomeSections } from "@/components/sections/HomeSections";
import { JsonLd, faqSchema } from "@/components/structured-data/JsonLd";
import { homepageFaq } from "@/content/site-content";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homepageFaq)} />
      <HomeHero />
      <HomeSections />
    </>
  );
}
