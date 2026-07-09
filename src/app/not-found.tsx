import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1>Pagina niet gevonden</h1>
        <p>Deze pagina bestaat niet of is niet gepubliceerd.</p>
        <Link href="/">Terug naar homepage</Link>
      </div>
    </section>
  );
}
