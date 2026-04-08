import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Calculator } from "lucide-react";

const HOURLY_COST = 18; // EUR/h realistic office worker cost
const MINUTES_PER_CALL = 4; // average call duration in minutes

export default function PricingPage() {
  const [callsPerDay, setCallsPerDay] = useState(15);

  const monthlyStaffCost = Math.round(
    (callsPerDay * MINUTES_PER_CALL * HOURLY_COST * 22) / 60
  );
  const monthlySaving = monthlyStaffCost - 299;

  return (
    <div className="pt-32 pb-24 relative">
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* ROI CALCULATOR */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10 animate-fade-in-up">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" /> Kostenrechner
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              So viel sparst du jeden Monat.
            </h1>
            <p className="text-slate-400 mb-8 max-w-lg">
              Rechne selbst nach. Basierend auf durchschnittlich {MINUTES_PER_CALL} Min. pro
              Anruf und {HOURLY_COST} €/h Personalkosten.
            </p>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-colors">
              <label className="flex justify-between text-sm font-medium text-slate-300 mb-4">
                <span>Anrufe pro Tag</span>
                <span className="text-blue-400 font-bold text-lg">
                  {callsPerDay} Anrufe
                </span>
              </label>
              <input
                type="range"
                min="5"
                max="50"
                value={callsPerDay}
                onChange={(e) => setCallsPerDay(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 mb-8"
                aria-label="Anrufe pro Tag"
              />
              <div className="flex justify-between items-end border-t border-white/10 pt-6">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Personalkosten</p>
                  <p className="text-2xl text-slate-300 line-through decoration-red-500/50">
                    {monthlyStaffCost.toLocaleString("de-DE")} €
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-emerald-500 font-medium mb-1">
                    Deine Ersparnis
                  </p>
                  <p className="text-4xl font-bold text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                    {monthlySaving > 0
                      ? `${monthlySaving.toLocaleString("de-DE")} €`
                      : "—"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full space-y-4">
            <div className="bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 rounded-2xl p-6 flex items-center justify-between hover:bg-red-500/10 transition-colors">
              <div>
                <h3 className="text-white font-medium mb-1">
                  Klassische Bürokraft
                </h3>
                <p className="text-sm text-slate-400">
                  Krankheit, Urlaub, Feierabend
                </p>
              </div>
              <div className="text-xl font-bold text-slate-300">
                ~ {monthlyStaffCost.toLocaleString("de-DE")} €
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/10 border border-blue-500/30 rounded-2xl p-6 flex items-center justify-between transform scale-105 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <div>
                <h3 className="text-white font-medium mb-1">
                  Call Lana Professional
                </h3>
                <p className="text-sm text-blue-200/70">
                  24/7, 365 Tage, Nie krank
                </p>
              </div>
              <div className="text-2xl font-bold text-white">299 €</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section
        className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Einfache Preise. Keine Überraschungen.
          </h2>
          <p className="text-slate-400">Jederzeit monatlich kündbar.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col hover:border-white/30 transition-all hover:-translate-y-1 duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
            <p className="text-sm text-slate-400 mb-6">
              Für kleine Betriebe zum Einstieg.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">149 €</span>
              <span className="text-slate-500"> / Monat</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {["340 Inklusivminuten", "Terminbuchung", "E-Mail Zusammenfassung"].map(
                (f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0" /> {f}
                  </li>
                )
              )}
            </ul>
            <Link
              to="/kontakt"
              className="w-full py-3 rounded-xl font-semibold border border-white/10 text-white hover:bg-white/10 transition-colors text-center block"
            >
              Wählen
            </Link>
          </div>

          {/* Professional */}
          <div className="bg-gradient-to-b from-blue-900/40 to-[#0B0F19] border border-blue-500/50 rounded-3xl p-8 flex flex-col transform md:-translate-y-4 relative shadow-[0_0_50px_rgba(59,130,246,0.15)] hover:shadow-[0_0_60px_rgba(59,130,246,0.25)] transition-all duration-300 group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full group-hover:scale-110 transition-transform">
              Beliebteste Wahl
            </div>
            <div className="absolute inset-0 rounded-3xl border border-blue-400/0 group-hover:border-blue-400/50 transition-colors duration-500 pointer-events-none" />
            <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
            <p className="text-sm text-slate-400 mb-6">
              Für wachsende Handwerksbetriebe.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">299 €</span>
              <span className="text-slate-500"> / Monat</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "560 Inklusivminuten",
                "Terminbuchung + Sync",
                "Echtzeit-Weiterleitung",
                "SMS Updates",
              ].map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-slate-200"
                >
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/kontakt"
              className="w-full py-3 rounded-xl font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all active:scale-95 text-center block"
            >
              Kostenlos testen
            </Link>
          </div>

          {/* Enterprise */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col hover:border-white/30 transition-all hover:-translate-y-1 duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-sm text-slate-400 mb-6">Für hohes Volumen.</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">Auf Anfrage</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {["Individuelles Volumen", "Mehrere Standorte", "API + White Label"].map(
                (f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0" /> {f}
                  </li>
                )
              )}
            </ul>
            <Link
              to="/kontakt"
              className="w-full py-3 rounded-xl font-semibold border border-white/10 text-white hover:bg-white/10 transition-colors text-center block"
            >
              Kontaktieren
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
