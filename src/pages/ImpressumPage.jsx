export default function ImpressumPage() {
  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8">Impressum</h1>
        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Call Lana<br />
              [Firmenname eintragen]<br />
              [Straße und Hausnummer]<br />
              [PLZ Ort]
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Kontakt</h2>
            <p>
              Telefon: +49 30 123 456 789<br />
              E-Mail: info@call-lana.de
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a
              Umsatzsteuergesetz:<br />
              [USt-IdNr. eintragen]
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              [Name]<br />
              [Adresse]
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder
              verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
