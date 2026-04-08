export default function AGBPage() {
  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8">Allgemeine Geschäftsbedingungen</h1>
        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">§ 1 Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle
              Vertragsverhältnisse zwischen Call Lana und dem Kunden. Abweichende
              Bedingungen des Kunden werden nicht anerkannt, es sei denn, Call
              Lana stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">§ 2 Vertragsgegenstand</h2>
            <p>
              Call Lana bietet einen KI-gestützten Telefonassistenten-Service für
              Handwerksbetriebe an. Der genaue Leistungsumfang ergibt sich aus
              dem jeweilig gewählten Tarif.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">§ 3 Vertragslaufzeit und Kündigung</h2>
            <p>
              Alle Tarife sind monatlich kündbar. Die Kündigung kann jederzeit zum
              Ende des laufenden Abrechnungszeitraums erfolgen.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">§ 4 Preise und Zahlung</h2>
            <p>
              Alle genannten Preise verstehen sich als Nettopreise zuzüglich der
              gesetzlichen Umsatzsteuer. Die Abrechnung erfolgt monatlich im
              Voraus.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">§ 5 Haftung</h2>
            <p>
              Call Lana haftet nicht für Schäden, die durch fehlerhafte
              KI-Antworten entstehen. Der Service stellt eine Unterstützung dar
              und ersetzt keine fachliche Beratung.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
