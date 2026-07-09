import { PageShell } from "@/components/sections/PageShell";
import { legalPages } from "@/content/site-content";
import { pageMetadata } from "@/lib/seo/metadata";
import sections from "@/components/sections/sections.module.css";

export const metadata = pageMetadata({ title: legalPages.cookieverklaring.title, description: legalPages.cookieverklaring.description, path: "/cookieverklaring" });

export default function CookiePage() {
  return (
    <PageShell eyebrow="Juridisch" title={legalPages.cookieverklaring.title} intro={legalPages.cookieverklaring.description}>
      <section className="section">
        <div className="container">
          <div className={sections.grid}>
            <article className={sections.panel}>
              <h2>Wat zijn cookies?</h2>
              <p>Cookies zijn kleine bestanden of vergelijkbare technieken die informatie kunnen opslaan of uitlezen op je apparaat. Sommige cookies zijn nodig om de website goed te laten werken. Andere cookies zijn bedoeld voor statistieken, voorkeuren of marketing.</p>
            </article>
            <article className={sections.panel}>
              <h2>Noodzakelijke cookies</h2>
              <p>Noodzakelijke cookies zorgen dat basisfuncties van de website werken, zoals formulieren, beveiliging, sessies of cookievoorkeuren. Voor deze cookies is geen toestemming nodig, maar we leggen wel uit waarvoor ze worden gebruikt.</p>
            </article>
            <article className={sections.panel}>
              <h2>Analytische cookies</h2>
              <p>Analytische cookies helpen ons begrijpen welke pagina’s worden bezocht en waar verbeteringen nodig zijn. Wanneer analytische cookies privacyvriendelijk zijn ingesteld, kunnen ze beperkt worden gebruikt. Voor uitgebreidere tracking vragen wij toestemming.</p>
            </article>
            <article className={sections.panel}>
              <h2>Marketingcookies</h2>
              <p>Marketingcookies of trackingtechnieken worden alleen gebruikt wanneer je daar toestemming voor geeft. Deze cookies kunnen worden gebruikt om advertenties of campagnes te meten en relevanter te maken.</p>
            </article>
            <article className={sections.panel}>
              <h2>Voorkeuren wijzigen</h2>
              <p>Je kunt je cookievoorkeuren beheren via de cookiebanner of cookie-instellingen op de website. Je kunt cookies ook verwijderen via de instellingen van je browser. Houd er rekening mee dat sommige functies dan minder goed kunnen werken.</p>
            </article>
            <article className={sections.panel}>
              <h2>Wijzigingen</h2>
              <p>Deze cookieverklaring kan worden aangepast wanneer de website, gebruikte tools of wetgeving verandert. Controleer deze pagina daarom regelmatig.</p>
            </article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
