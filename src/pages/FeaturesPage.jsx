import { Link } from "react-router-dom";
import {
  PhoneCall, Calendar, Clock, MessageSquare, FileText, Mail,
  ShieldCheck, ArrowRight,
} from "lucide-react";

const EXTRAS = [
  { icon: <FileText className="w-6 h-6" />, title: "Anruf-Zusammenfassungen", desc: "Jeder Anruf wird strukturiert erfasst: Name, Anliegen, Dringlichkeit, Kontaktdaten.", color: "text-emerald-400" },
  { icon: <Mail className="w-6 h-6" />, title: "Automatische Benachrichtigung", desc: "Per WhatsApp, SMS oder E-Mail — du entscheidest, wie du informiert wirst.", color: "text-amber-400" },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "DSGVO-konform", desc: "Hosting in Deutschland. Keine Daten verlassen die EU. Auftragsverarbeitung inklusive.", color: "text-blue-400" },
];

export default function FeaturesPage() {
  return (
    <div className="pt-32 pb-24 relative">
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Alles, was eine Rezeptionistin kann.
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Call Lana übernimmt die Telefonzentrale deines Handwerksbetriebs mit
            der Professionalität einer echten Empfangskraft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone Call — large card */}
          <div className="md:col-span-2 bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all group overflow-hidden relative animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-500 group-hover:scale-110" />
            <PhoneCall className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold text-white mb-3">Nimmt jeden Anruf an</h2>
            <p className="text-slate-400 max-w-md">
              Keine Wartemusik, keine Mailbox. Jeder Anrufer bekommt sofort eine
              professionelle, freundliche Antwort durch fortschrittliche KI.
            </p>
            <div className="mt-8 bg-black/40 border border-white/5 rounded-2xl p-4 flex flex-col gap-3 relative z-10">
              <div className="flex gap-3 items-end">
                <div className="bg-white/10 rounded-2xl rounded-bl-none px-4 py-2 text-sm max-w-[80%] text-slate-300 border border-white/5">
                  Hallo, hier ist die Firma Weber. Was kann ich für Sie tun?
                </div>
              </div>
              <div className="flex gap-3 items-end justify-end">
                <div className="bg-blue-600 rounded-2xl rounded-br-none px-4 py-2 text-sm max-w-[80%] text-white shadow-lg shadow-blue-900/20">
                  Hallo, ich habe einen Rohrbruch, können Sie schnell kommen?
                </div>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all group animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Calendar className="w-10 h-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-bold text-white mb-3">Automatische Termine</h2>
            <p className="text-slate-400 text-sm">
              Verbindet sich mit deinem Kalender, um Termine zu buchen, zu
              verschieben und zu bestätigen — ganz ohne Hin und Her.
            </p>
          </div>

          {/* 24/7 */}
          <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all group animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Clock className="w-10 h-10 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-bold text-white mb-3">24/7 Erreichbar</h2>
            <p className="text-slate-400 text-sm">
              Tag und Nacht, am Wochenende — Call Lana ist immer im Dienst. Kein
              Lead geht verloren.
            </p>
          </div>

          {/* Notifications — large card */}
          <div className="md:col-span-2 bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all group flex flex-col md:flex-row items-center gap-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex-1">
              <MessageSquare className="w-10 h-10 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold text-white mb-3">Sofort-Benachrichtigungen</h2>
              <p className="text-slate-400">
                Nach jedem Anruf erhältst du eine Zusammenfassung per SMS,
                WhatsApp oder E-Mail. Dringende Fälle werden direkt
                durchgestellt.
              </p>
            </div>
            <div className="flex-1 w-full bg-[#111B21] rounded-2xl p-4 border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600" />
              <p className="text-xs text-slate-500 mb-2">WhatsApp Nachricht</p>
              <div className="bg-[#005C4B] text-white p-3 rounded-lg text-sm rounded-tr-none ml-4 shadow-sm border border-[#005C4B]/50">
                <strong>Neuer Anruf: Hr. Müller</strong>
                <br />
                Anliegen: Heizungswartung
                <br />
                Termin: Do 09:00 Uhr ✓
                <br />
                <em>"Rückruf nicht nötig"</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXTRAS */}
      <section className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Was Lana außerdem mitbringt
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Jeder Anruf wird dokumentiert, jede Nachricht zugestellt — zuverlässig und datenschutzkonform.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {EXTRAS.map((f, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all hover:-translate-y-1 duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className={`${f.color} mb-4`}>{f.icon}</div>
              <h3 className="text-white font-bold mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Link
            to="/demos"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-1"
          >
            Jetzt live testen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
