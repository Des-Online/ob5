import Link from "next/link";
import { CTAButtons } from "@/components/ui/CTAButtons";
import styles from "./page-shell.module.css";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  children: React.ReactNode;
  breadcrumbs?: Array<{ label: string; href: string }>;
};

export function PageShell({ eyebrow, title, intro, breadcrumbs = [], children }: PageShellProps) {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              {breadcrumbs.map((crumb) => <Link key={crumb.href} href={crumb.href}>{crumb.label}</Link>)}
            </nav>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h1 className="typePageTitle">{title}</h1>
            <p>{intro}</p>
            <CTAButtons location="subpage-hero" />
            <div className={styles.trustStrip} aria-label="Belangrijke voordelen">
              <span>Snel contact</span>
              <span>Landelijk beschikbaar</span>
              <span>Discreet contact</span>
            </div>
          </div>
        </div>
      </section>
      {children}
    </>
  );
}
