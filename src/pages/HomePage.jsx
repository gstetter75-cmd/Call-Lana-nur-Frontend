import { Link } from "react-router-dom";
import {
  Calendar,
  MessageSquare,
  Play,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Zap,
  Home as HomeIcon,
  Activity,
} from "lucide-react";
import LanaFace from "../components/LanaFace";

const INDUSTRIES = [
  { name: "Sanitär & Heizung", icon: <Wrench className="w-5 h-5" /> },
  { name: "Elektriker", icon: <Zap className="w-5 h-5" /> },
  { name: "Dachdecker", icon: <HomeIcon className="w-5 h-5" /> },
  { name: "Bauunternehmen", icon: <ShieldCheck className="w-5 h-5" /> },
];

const USE_CASES = [
  {
    role: "Elektrikerbetrieb",
    scenario:
      "Auf der Baustelle klingelt ständig das Telefon. Lana nimmt jeden Anruf an, notiert das Anliegen und bucht bei Bedarf direkt einen Termin — damit dein Team ungestört arbeiten kann.",
    metric: "Kein Anruf geht verloren",
  },
  {
    role: "Sanitär-Notdienst",
    scenario:
      "Nachts, am Wochenende, im Urlaub: Lana erkennt echte Notfälle sofort und leitet sie per WhatsApp weiter. Alles andere wird als Ticket erfasst.",
    metric: "24/7 erreichbar",
  },
  {
    role: "Dachdeckerbetrieb",
    scenario:
      "Nach einem Sturm stehen die Leitungen nicht still. Lana priorisiert automatisch nach Dringlichkeit und erstellt eine sortierte Aufgabenliste für dein Büro.",
    metric: "Automatisch priorisiert",
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 pointer-events-none" />

      {/* HERO */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                KI-Telefonassistentin für das Handwerk
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Dein Telefon klingelt. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 animate-shimmer">
                  Lana nimmt ab.
                </span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                Die KI, die Anrufe annimmt, Termine bucht und Kunden
                qualifiziert. Damit du dich zu 100% auf dein Handwerk
                konzentrieren kannst.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/preise"
                  className="relative group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-1"
                >
                  <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
                  Jetzt starten{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demos"
                  className="px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 border border-white/10 hover:bg-white/10 transition-all text-white hover:border-white/20"
                >
                  <Play className="w-4 h-4" /> Demos ansehen
                </Link>
              </div>
            </div>

            <div
              className="relative h-[500px] hidden lg:flex items-center justify-end animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative">
                <LanaFace />
                <div className="absolute top-10 -left-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl animate-[bounce_4s_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-sm">
                      <p className="text-white font-medium">Termin gebucht</p>
                      <p className="text-slate-400 text-xs">Müller, Heizung</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-20 -right-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl animate-[bounce_5s_infinite_1s]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-sm">
                      <p className="text-white font-medium">Zusammenfassung</p>
                      <p className="text-slate-400 text-xs">Per WhatsApp gesendet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 border-y border-white/5 bg-white/[0.02] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perfekt für jedes Gewerk
              </h2>
              <p className="text-slate-400 mb-8">
                Egal ob auf dem Dach, im Keller oder auf der Großbaustelle —
                Lana versteht dein Handwerk und hält dir den Rücken frei.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {INDUSTRIES.map((b, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-4 text-slate-300 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  >
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {b.icon}
                    </div>
                    <span className="font-medium text-sm group-hover:text-white transition-colors">
                      {b.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative w-full animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[100px] rounded-full" />
              <div className="relative bg-gradient-to-b from-[#111B21] to-[#0B0F19] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-2xl pointer-events-none" />
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <div className="text-white font-semibold flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400" /> Live Dashboard
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 flex items-center justify-center text-blue-400 text-xs font-bold border border-blue-500/20">
                          {item === 1 ? "KW" : item === 2 ? "JM" : "AS"}
                        </div>
                        <div>
                          <div className="text-sm text-white">Anruf beendet</div>
                          <div className="text-xs text-slate-500">
                            Dauer: 02:4{item} Min
                          </div>
                        </div>
                      </div>
                      <div className="text-emerald-400 text-xs flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3" /> Gelöst
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white mb-4">
              So hilft Lana in deinem Gewerk
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Typische Szenarien aus dem Handwerker-Alltag — und wie Lana sie löst.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {USE_CASES.map((t, i) => (
              <div
                key={i}
                className="group bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 rounded-2xl p-6 relative animate-fade-in-up"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
                  {t.role}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{t.scenario}</p>
                <div className="flex justify-end">
                  <div className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-md border border-blue-500/20">
                    {t.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-900/40" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-blue-500/40 rounded-full animate-ping" />
            <ShieldCheck className="w-10 h-10 text-blue-400 relative z-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bereit, jeden Anruf anzunehmen?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Ein verpasster Anruf kann im Handwerk hunderte Euro kosten. Sichere
            dir jetzt deinen KI-Assistenten.
          </p>
          <Link
            to="/preise"
            className="inline-block bg-white text-slate-900 hover:bg-slate-200 px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Kostenlos testen
          </Link>
          <p className="mt-6 text-sm text-slate-400">
            Einrichtung in 15 Min. • Monatlich kündbar • DSGVO-konform
          </p>
        </div>
      </section>
    </div>
  );
}
