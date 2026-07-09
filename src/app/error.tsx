"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="section">
      <div className="container">
        <h1>Er ging iets mis</h1>
        <p>Probeer opnieuw of neem direct contact op.</p>
        <button type="button" onClick={reset}>Opnieuw proberen</button>
      </div>
    </section>
  );
}
