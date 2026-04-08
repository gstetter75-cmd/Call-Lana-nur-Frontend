export default function DatenschutzPage() {
  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8">Datenschutzerklärung</h1>
        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was
              mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
              besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Verantwortliche Stelle</h2>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:<br /><br />
              Call Lana<br />
              [Firmenname eintragen]<br />
              [Adresse eintragen]<br /><br />
              E-Mail: info@call-lana.de
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-lg font-medium text-white mb-2">Hosting</h3>
            <p className="mb-4">
              Diese Website wird bei GitHub Pages gehostet. Der Hoster erhebt in
              sog. Logfiles Informationen, die Ihr Browser automatisch
              übermittelt (IP-Adresse, Zeitpunkt des Zugriffs, etc.).
            </p>
            <h3 className="text-lg font-medium text-white mb-2">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns
              gespeichert. Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b
              DSGVO.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. KI-Demo-Funktionen</h2>
            <p>
              Die interaktiven KI-Demos auf dieser Website nutzen die Google
              Gemini API. Bei Nutzung der Demos werden Ihre Eingaben an Google
              übermittelt. Die Nutzung erfolgt freiwillig. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit und
              Widerspruch. Bitte wenden Sie sich dazu an info@call-lana.de.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
