import React, { useState, useEffect } from 'react';
import {
  PhoneCall,
  Calendar,
  Clock,
  MessageSquare,
  Play,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Zap,
  Home as HomeIcon,
  Check,
  Star,
  Calculator,
  Sparkles,
  Loader2,
  Bot,
  Wand2,
  Volume2,
  FileText,
  Activity,
  AlertCircle,
  Brain,
  Lightbulb,
  Mail,
  Send,
  Smartphone,
  FileSignature,
  ReceiptEuro,
  ClipboardList,
  MessageCircle,
  User,
  Hammer,
  Truck,
  Clock as ClockIcon,
  AlertTriangle,
  CheckSquare,
  Target,
  TrendingUp,
  Banknote,
  ArrowUpRight,
  Share2,
  Camera,
  ThumbsUp,
  Briefcase,
  HeartHandshake
} from 'lucide-react';

const GlobalStyles = () => (
  <style>{`
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob { animation: blob 15s infinite alternate ease-in-out; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-4000 { animation-delay: 4s; }
    @keyframes shimmer {
      0% { background-position: 200% center; }
      100% { background-position: -200% center; }
    }
    .animate-shimmer { background-size: 200% auto; animation: shimmer 4s linear infinite; }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
    .bg-grid-pattern {
      background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
      mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
    }
  `}</style>
);

function LanaFace({ className = "", size = "large" }) {
  const isLarge = size === "large";
  const containerSize = isLarge ? "w-80 h-80" : "w-10 h-10";
  const coreSize = isLarge ? "w-56 h-56" : "w-10 h-10";
  return (
    <div className={`relative flex items-center justify-center ${containerSize} ${className}`}>
      {isLarge && (
        <>
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 border-t-blue-500/40 animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute inset-6 rounded-full border border-indigo-500/30 border-b-indigo-500/50 animate-[spin_7s_linear_infinite_reverse] opacity-70"></div>
          <div className="absolute inset-10 rounded-full border-2 border-blue-400/10 animate-pulse"></div>
        </>
      )}
      <div className={`relative ${coreSize} rounded-full p-[2px] bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-[0_0_40px_rgba(59,130,246,0.3)] z-10 transition-transform duration-500 ${isLarge ? 'hover:scale-105' : ''}`}>
        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400" alt="Lana KI Assistentin" className="w-full h-full object-cover rounded-full border-2 border-[#0B0F19]" />
        <div className={`absolute ${isLarge ? 'bottom-4 right-4 w-5 h-5 border-4' : 'bottom-0 right-0 w-3 h-3 border-2'} rounded-full bg-emerald-500 border-[#0B0F19]`}></div>
      </div>
      {isLarge && (
        <>
          <div className="absolute top-1/4 left-[10%] w-2 h-2 bg-blue-400 rounded-full animate-[ping_3s_infinite]"></div>
          <div className="absolute bottom-1/4 right-[10%] w-2 h-2 bg-indigo-400 rounded-full animate-[ping_2s_infinite_1s]"></div>
        </>
      )}
    </div>
  );
}

// Helper for Gemini API calls
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const GEMINI_URL = (model = "gemini-2.5-flash-preview-09-2025") =>
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;

async function callGemini(payload, model) {
  const url = GEMINI_URL(model);
  const delays = [1000, 2000, 4000];
  for (let i = 0; i < 3; i++) {
    try {
      const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error('API Error');
      return await response.json();
    } catch (err) {
      if (i === 2) return null;
      await new Promise(r => setTimeout(r, delays[i]));
    }
  }
  return null;
}

function getTextFromResponse(data) {
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
}

// ==========================================
// HOME PAGE
// ==========================================
function HomePage({ setCurrentPage }) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-blob pointer-events-none"></div>
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 pointer-events-none"></div>

      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                KI-Telefonassistentin für das Handwerk
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Dein Telefon klingelt. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 animate-shimmer">Lana nimmt ab.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">Die KI, die Anrufe annimmt, Termine bucht und Kunden qualifiziert. Damit du dich zu 100% auf dein Handwerk konzentrieren kannst.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setCurrentPage('pricing')} className="relative group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-1">
                  <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></span>
                  Jetzt starten <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => setCurrentPage('demos')} className="px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 border border-white/10 hover:bg-white/10 transition-all text-white hover:border-white/20">
                  <Play className="w-4 h-4" /> Demos ansehen
                </button>
              </div>
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (<div key={i} className="w-8 h-8 rounded-full border-2 border-[#0B0F19] bg-slate-800 flex items-center justify-center text-xs">{String.fromCharCode(64 + i)}</div>))}
                </div>
                <p>Vertraut von über <strong className="text-white">500+</strong> Betrieben</p>
              </div>
            </div>
            <div className="relative h-[500px] flex items-center justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <LanaFace />
                <div className="absolute top-10 -left-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl animate-[bounce_4s_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center"><Calendar className="w-4 h-4 text-emerald-400" /></div>
                    <div className="text-sm"><p className="text-white font-medium">Termin gebucht</p><p className="text-slate-400 text-xs">Müller, Heizung</p></div>
                  </div>
                </div>
                <div className="absolute bottom-20 -right-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl animate-[bounce_5s_infinite_1s]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center"><MessageSquare className="w-4 h-4 text-blue-400" /></div>
                    <div className="text-sm"><p className="text-white font-medium">Zusammenfassung</p><p className="text-slate-400 text-xs">Per WhatsApp gesendet</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-white/5 bg-white/[0.02] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Perfekt für jedes Gewerk</h2>
              <p className="text-slate-400 mb-8">Egal ob auf dem Dach, im Keller oder auf der Großbaustelle — Lana versteht dein Handwerk und hält dir den Rücken frei.</p>
              <div className="grid grid-cols-2 gap-4">
                {[{ name: "Sanitär & Heizung", icon: <Wrench className="w-5 h-5" /> }, { name: "Elektriker", icon: <Zap className="w-5 h-5" /> }, { name: "Dachdecker", icon: <HomeIcon className="w-5 h-5" /> }, { name: "Bauunternehmen", icon: <ShieldCheck className="w-5 h-5" /> }].map((b, idx) => (
                  <div key={idx} className="group flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-4 text-slate-300 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer hover:-translate-y-1">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">{b.icon}</div>
                    <span className="font-medium text-sm group-hover:text-white transition-colors">{b.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative w-full animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[100px] rounded-full"></div>
              <div className="relative bg-gradient-to-b from-[#111B21] to-[#0B0F19] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-2xl pointer-events-none"></div>
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <div className="text-white font-semibold flex items-center gap-2"><Activity className="w-4 h-4 text-emerald-400" /> Live Dashboard</div>
                  <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-slate-700"></div><div className="w-3 h-3 rounded-full bg-slate-700"></div><div className="w-3 h-3 rounded-full bg-slate-700"></div></div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 flex items-center justify-center text-blue-400 text-xs font-bold border border-blue-500/20">{item === 1 ? 'KW' : item === 2 ? 'JM' : 'AS'}</div>
                        <div><div className="text-sm text-white">Anruf beendet</div><div className="text-xs text-slate-500">Dauer: 02:4{item} Min</div></div>
                      </div>
                      <div className="text-emerald-400 text-xs flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20"><CheckCircle2 className="w-3 h-3" /> Gelöst</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-white text-center mb-16 animate-fade-in-up">Von Handwerkern empfohlen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Thomas Weber", role: "Elektrikermeister", quote: "Wir haben früher oft Anrufe auf der Baustelle verpasst. Lana fängt jetzt alles ab und meine Jungs können ungestört arbeiten. Spart mir locker 3 Stunden am Tag.", metric: "Spart 3 Stunden pro Tag" },
              { name: "Marcus Torres", role: "Klempnermeister", quote: "Ich war sehr skeptisch gegenüber KI am Telefon. Aber die Kunden merken den Unterschied kaum und buchen fleißig Termine. Hat sich in Woche 1 rentiert.", metric: "40% mehr Aufträge" },
              { name: "Klaus Schuster", role: "Dachdeckermeister", quote: "Gerade bei Stürmen steht das Telefon nicht still. Lana sortiert die Notfälle aus und schickt mir direkt eine WhatsApp. Eine unglaubliche Erleichterung.", metric: "0 verpasste Kunden" }
            ].map((t, i) => (
              <div key={i} className="group bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 rounded-2xl p-6 relative animate-fade-in-up" style={{ animationDelay: `${0.2 + (i * 0.1)}s` }}>
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform" style={{ transitionDelay: `${j * 50}ms` }} />)}</div>
                <p className="text-slate-300 mb-6 italic">"{t.quote}"</p>
                <div className="flex justify-between items-end mt-auto">
                  <div><p className="font-bold text-white">{t.name}</p><p className="text-sm text-slate-500">{t.role}</p></div>
                  <div className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md border border-blue-500/20">{t.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-900/40"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-blue-500/40 rounded-full animate-ping"></div>
            <ShieldCheck className="w-10 h-10 text-blue-400 relative z-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Bereit, jeden Anruf anzunehmen?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Ein verpasster Anruf kann im Handwerk hunderte Euro kosten. Sichere dir jetzt deinen KI-Assistenten.</p>
          <button onClick={() => setCurrentPage('pricing')} className="bg-white text-slate-900 hover:bg-slate-200 px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)]">Kostenlos testen</button>
          <p className="mt-6 text-sm text-slate-400">Einrichtung in 15 Min. • Monatlich kündbar • DSGVO-konform</p>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// FEATURES PAGE (simplified - key sections)
// ==========================================
function FeaturesPage() {
  return (
    <div className="pt-32 pb-24 relative">
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Alles, was eine Rezeptionistin kann.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Call Lana übernimmt die Telefonzentrale deines Handwerksbetriebs mit der Professionalität einer echten Empfangskraft.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all group overflow-hidden relative animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-500 group-hover:scale-110"></div>
            <PhoneCall className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-3">Nimmt jeden Anruf an</h3>
            <p className="text-slate-400 max-w-md">Keine Wartemusik, keine Mailbox. Jeder Anrufer bekommt sofort eine professionelle, freundliche Antwort durch fortschrittliche KI.</p>
            <div className="mt-8 bg-black/40 border border-white/5 rounded-2xl p-4 flex flex-col gap-3 relative z-10">
              <div className="flex gap-3 items-end"><div className="bg-white/10 rounded-2xl rounded-bl-none px-4 py-2 text-sm max-w-[80%] text-slate-300 border border-white/5">Hallo, hier ist die Firma Weber. Was kann ich für Sie tun?</div></div>
              <div className="flex gap-3 items-end justify-end"><div className="bg-blue-600 rounded-2xl rounded-br-none px-4 py-2 text-sm max-w-[80%] text-white shadow-lg shadow-blue-900/20">Hallo, ich habe einen Rohrbruch, können Sie schnell kommen?</div></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Calendar className="w-10 h-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-3">Automatische Termine</h3>
            <p className="text-slate-400 text-sm">Verbindet sich mit deinem Kalender, um Termine zu buchen, zu verschieben und zu bestätigen — ganz ohne Hin und Her.</p>
          </div>
          <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Clock className="w-10 h-10 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-3">24/7 Erreichbar</h3>
            <p className="text-slate-400 text-sm">Tag und Nacht, am Wochenende — Call Lana ist immer im Dienst. Kein Lead geht verloren.</p>
          </div>
          <div className="md:col-span-2 bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all group flex flex-col md:flex-row items-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex-1">
              <MessageSquare className="w-10 h-10 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-3">Sofort-Benachrichtigungen</h3>
              <p className="text-slate-400">Nach jedem Anruf erhältst du eine Zusammenfassung per SMS, WhatsApp oder E-Mail. Dringende Fälle werden direkt durchgestellt.</p>
            </div>
            <div className="flex-1 w-full bg-[#111B21] rounded-2xl p-4 border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <p className="text-xs text-slate-500 mb-2">WhatsApp Nachricht</p>
              <div className="bg-[#005C4B] text-white p-3 rounded-lg text-sm rounded-tr-none ml-4 shadow-sm border border-[#005C4B]/50">
                <strong>Neuer Anruf: Hr. Müller</strong><br/>Anliegen: Heizungswartung<br/>Termin: Do 09:00 Uhr ✓<br/><em>"Rückruf nicht nötig"</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Und noch viel mehr...</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Intelligente Datenextraktion, Onboarding-Generator, Follow-Up Automatisierung, Einsatzplaner, Lead-Scoring, Social Media Manager und Bewertungs-Manager — alles KI-gestützt.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: <FileText className="w-6 h-6" />, title: "Datenextraktion", desc: "Strukturierte Tickets aus Anrufen", color: "emerald" },
            { icon: <Brain className="w-6 h-6" />, title: "KI-Onboarding", desc: "Wissensbasis in Sekunden", color: "purple" },
            { icon: <Mail className="w-6 h-6" />, title: "Follow-Ups", desc: "WhatsApp & E-Mail automatisch", color: "amber" },
            { icon: <Truck className="w-6 h-6" />, title: "Einsatzplaner", desc: "Packlisten für Monteure", color: "teal" },
            { icon: <Target className="w-6 h-6" />, title: "Lead-Scoring", desc: "Aufträge priorisieren", color: "rose" },
            { icon: <Share2 className="w-6 h-6" />, title: "Social Media", desc: "Posts automatisch erstellen", color: "orange" },
          ].map((f, i) => (
            <div key={i} className={`bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-${f.color}-500/30 transition-all hover:-translate-y-1 duration-300 animate-fade-in-up`} style={{ animationDelay: `${0.1 * i}s` }}>
              <div className={`text-${f.color}-400 mb-4`}>{f.icon}</div>
              <h3 className="text-white font-bold mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ==========================================
// DEMOS PAGE
// ==========================================
function DemosPage() {
  const [chatMessages, setChatMessages] = useState([{ role: 'model', text: 'Hallo, hier ist die Firma Weber Sanitär. Mein Name ist Lana, die digitale Assistentin. Wie kann ich Ihnen helfen?' }]);
  const [chatInput, setChatInput] = useState('');
  const [isChatTyping, setIsChatTyping] = useState(false);
  const chatEndRef = React.useRef(null);
  const [demoTrade, setDemoTrade] = useState('');
  const [demoContext, setDemoContext] = useState('');
  const [generatedScript, setGeneratedScript] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSendChatMessage = async () => {
    if (!chatInput.trim()) return;
    const newMessages = [...chatMessages, { role: 'user', text: chatInput }];
    setChatMessages(newMessages); setChatInput(''); setIsChatTyping(true);
    const formattedHistory = newMessages.map(msg => ({ role: msg.role === 'model' ? 'model' : 'user', parts: [{ text: msg.text }] }));
    const data = await callGemini({
      contents: formattedHistory,
      systemInstruction: { parts: [{ text: "Du bist Lana, die KI-Telefonassistentin. Antworte extrem natürlich, in kurzen Sätzen. Frage bei Terminwünschen nach dem Problem, Name und Telefonnummer." }] }
    });
    const text = getTextFromResponse(data);
    setChatMessages(prev => [...prev, { role: 'model', text: text || "Entschuldigung, die Verbindung ist schlecht." }]);
    setIsChatTyping(false);
  };

  const generateScript = async () => {
    if (!demoTrade) return;
    setIsGenerating(true); setGeneratedScript('');
    const data = await callGemini({
      contents: [{ parts: [{ text: `Schreibe ein kurzes Telefonskript (ca. 4 Wechsel) zwischen einem Kunden und 'Lana'. Gewerk: ${demoTrade}. Kontext: ${demoContext || 'Terminvereinbarung'}. Format zwingend: **Kunde:** [Text] **Lana:** [Text]` }] }],
      systemInstruction: { parts: [{ text: "Antworte auf Deutsch. Professionell." }] }
    });
    setGeneratedScript(getTextFromResponse(data) || "Fehler bei Generierung.");
    setIsGenerating(false);
  };

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [chatMessages, isChatTyping]);

  return (
    <div className="pt-32 pb-24 relative">
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

      <section className="max-w-4xl mx-auto px-6 relative mb-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] animate-blob pointer-events-none"></div>
        <div className="text-center mb-16 relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6"><MessageCircle className="w-4 h-4" /> Multi-Turn Conversation</div>
          <h2 className="text-4xl font-bold text-white mb-4">Chatte live mit Lana</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Probier es aus! Stell dir vor, du rufst bei "Weber Sanitär" an.</p>
        </div>
        <div className="bg-[#111B21] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col h-[600px] max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white/5 border-b border-white/5 px-6 py-4 flex items-center gap-4">
            <LanaFace size="small" className="shadow-none" />
            <div><h3 className="text-white font-bold">Weber Sanitär Hotline</h3><p className="text-xs text-emerald-400 flex items-center gap-1.5 mt-0.5"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> KI ist online</p></div>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-700">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 animate-fade-in-up ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0">
                  {msg.role === 'model' ? <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 shadow-inner"><Bot className="w-5 h-5 text-indigo-400" /></div> : <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30"><User className="w-5 h-5 text-emerald-400" /></div>}
                </div>
                <div className={`max-w-[75%] rounded-2xl p-4 shadow-sm text-[15px] leading-relaxed ${msg.role === 'user' ? 'bg-emerald-600 border border-emerald-500 text-white rounded-tr-none' : 'bg-white/10 border border-white/10 text-slate-200 rounded-tl-none'}`}>{msg.text}</div>
              </div>
            ))}
            {isChatTyping && (
              <div className="flex gap-4 animate-fade-in-up">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30"><Bot className="w-5 h-5 text-indigo-400" /></div>
                <div className="bg-white/10 border border-white/10 text-slate-200 rounded-2xl rounded-tl-none p-4 flex items-center gap-2 h-[56px]">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 bg-white/5 border-t border-white/5 backdrop-blur-md">
            <form onSubmit={(e) => { e.preventDefault(); handleSendChatMessage(); }} className="flex gap-3 relative">
              <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Antworte Lana..." className="flex-1 bg-[#0B0F19] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors shadow-inner" />
              <button type="submit" disabled={!chatInput.trim() || isChatTyping} className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center transition-all shadow-lg disabled:shadow-none active:scale-95"><Send className="w-5 h-5" /></button>
            </form>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 relative mb-32 animate-fade-in-up">
        <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
          <div className="flex-1 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Teste Lanas Verhandlungsgeschick</h2>
            <p className="text-slate-400 mb-8">Gib dein Gewerk ein und ein schwieriges Szenario. Unsere Gemini-KI generiert live einen Dialog.</p>
            <div className="space-y-4">
              <div><label className="block text-sm font-medium text-slate-300 mb-2">Dein Gewerk</label><input type="text" value={demoTrade} onChange={(e) => setDemoTrade(e.target.value)} placeholder="z.B. Sanitär-Notdienst" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500" /></div>
              <div><label className="block text-sm font-medium text-slate-300 mb-2">Besondere Anweisung</label><textarea value={demoContext} onChange={(e) => setDemoContext(e.target.value)} placeholder="z.B. Kunde ist in Panik..." rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 resize-none" /></div>
              <button onClick={generateScript} disabled={!demoTrade || isGenerating} className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform">
                {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                {isGenerating ? 'Schreibe Skript...' : 'Skript generieren'}
              </button>
            </div>
          </div>
          <div className="flex-1 w-full min-h-[400px]">
            <div className="h-full bg-[#111B21] border border-white/5 hover:border-indigo-500/30 transition-colors rounded-3xl p-6 relative flex flex-col shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5"><LanaFace size="small" className="shadow-none" /><div><h3 className="text-white font-medium">Lana Live-Transkript</h3><p className="text-xs text-slate-500">Generiert von Gemini</p></div></div>
              <div className="flex-1 overflow-y-auto space-y-4 text-sm max-h-[400px] pr-2 scrollbar-thin">
                {!generatedScript && !isGenerating && <div className="h-full flex flex-col items-center justify-center text-slate-500 py-10"><Wand2 className="w-12 h-12 mb-4 opacity-20" /><p>Warte auf Eingabe...</p></div>}
                {isGenerating && <div className="h-full flex flex-col items-center justify-center text-indigo-400 py-10"><Loader2 className="w-10 h-10 animate-spin mb-4" /><p className="animate-pulse">Analysiere Szenario...</p></div>}
                {generatedScript && !isGenerating && (
                  <div className="whitespace-pre-wrap text-slate-300 pb-4 animate-fade-in-up">
                    {generatedScript.split('\n').map((line, idx) => {
                      if (line.trim() === '') return <div key={idx} className="h-2"></div>;
                      const isKunde = line.includes('**Kunde:**') || line.startsWith('Kunde:');
                      const isLana = line.includes('**Lana:**') || line.startsWith('Lana:');
                      if (isKunde) return <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none p-3 mb-3 text-slate-300 max-w-[85%]"><span className="font-bold text-slate-400 text-xs block mb-1">KUNDE</span>{line.replace(/\*\*Kunde:\*\*/g, '').replace(/Kunde:/g, '').trim()}</div>;
                      if (isLana) return <div key={idx} className="bg-indigo-600/20 border border-indigo-500/20 rounded-2xl rounded-tr-none p-3 mb-3 text-indigo-100 max-w-[85%] ml-auto"><span className="font-bold text-indigo-300 text-xs block mb-1">LANA</span>{line.replace(/\*\*Lana:\*\*/g, '').replace(/Lana:/g, '').trim()}</div>;
                      return <span key={idx} className="text-xs text-slate-500 italic block text-center my-2">{line}</span>;
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// PRICING PAGE
// ==========================================
function PricingPage() {
  const [callsPerDay, setCallsPerDay] = useState(15);
  return (
    <div className="pt-32 pb-24 relative">
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10 animate-fade-in-up">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"><Calculator className="w-4 h-4" /> Kostenrechner</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">So viel sparst du jeden Monat.</h2>
            <p className="text-slate-400 mb-8 max-w-lg">Rechne selbst nach. Eine traditionelle Bürokraft kostet Geld, Zeit und Nerven. Call Lana ist immer da und kostet nur einen Bruchteil.</p>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-colors">
              <label className="flex justify-between text-sm font-medium text-slate-300 mb-4"><span>Anrufe pro Tag</span><span className="text-blue-400 font-bold text-lg">{callsPerDay} Anrufe</span></label>
              <input type="range" min="5" max="50" value={callsPerDay} onChange={(e) => setCallsPerDay(parseInt(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 mb-8" />
              <div className="flex justify-between items-end border-t border-white/10 pt-6">
                <div><p className="text-sm text-slate-500 mb-1">Mitarbeiterkosten</p><p className="text-2xl text-slate-300 line-through decoration-red-500/50">{(callsPerDay * 20 * 5.5).toLocaleString('de-DE')} €</p></div>
                <div className="text-right"><p className="text-sm text-emerald-500 font-medium mb-1">Deine Ersparnis</p><p className="text-4xl font-bold text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">{((callsPerDay * 20 * 5.5) - 299).toLocaleString('de-DE')} €</p></div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full space-y-4">
            <div className="bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 rounded-2xl p-6 flex items-center justify-between hover:bg-red-500/10 transition-colors"><div><h4 className="text-white font-medium mb-1">Klassische Bürokraft</h4><p className="text-sm text-slate-400">Krankheit, Urlaub, Feierabend</p></div><div className="text-xl font-bold text-slate-300">~ {(callsPerDay * 20 * 5.5).toLocaleString('de-DE')} €</div></div>
            <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/10 border border-blue-500/30 rounded-2xl p-6 flex items-center justify-between transform scale-105 shadow-[0_0_30px_rgba(59,130,246,0.2)]"><div><h4 className="text-white font-medium mb-1">Call Lana Professional</h4><p className="text-sm text-blue-200/70">24/7, 365 Tage, Nie krank</p></div><div className="text-2xl font-bold text-white">299 €</div></div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="text-center mb-16"><h2 className="text-4xl font-bold text-white mb-4">Einfache Preise. Keine Überraschungen.</h2><p className="text-slate-400">Jederzeit monatlich kündbar.</p></div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col hover:border-white/30 transition-all hover:-translate-y-1 duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Starter</h3><p className="text-sm text-slate-400 mb-6">Für kleine Betriebe zum Einstieg.</p>
            <div className="mb-6"><span className="text-4xl font-bold text-white">149 €</span><span className="text-slate-500"> / Monat</span></div>
            <ul className="space-y-4 mb-8 flex-1">{['340 Inklusivminuten', 'Terminbuchung', 'E-Mail Zusammenfassung'].map((f, i) => <li key={i} className="flex items-center gap-3 text-sm text-slate-300"><Check className="w-5 h-5 text-blue-500" /> {f}</li>)}</ul>
            <button className="w-full py-3 rounded-xl font-semibold border border-white/10 text-white hover:bg-white/10 transition-colors">Wählen</button>
          </div>
          <div className="bg-gradient-to-b from-blue-900/40 to-[#0B0F19] border border-blue-500/50 rounded-3xl p-8 flex flex-col transform md:-translate-y-4 relative shadow-[0_0_50px_rgba(59,130,246,0.15)] hover:shadow-[0_0_60px_rgba(59,130,246,0.25)] transition-all duration-300 group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full group-hover:scale-110 transition-transform">Beliebteste Wahl</div>
            <div className="absolute inset-0 rounded-3xl border border-blue-400/0 group-hover:border-blue-400/50 transition-colors duration-500 pointer-events-none"></div>
            <h3 className="text-xl font-bold text-white mb-2">Professional</h3><p className="text-sm text-slate-400 mb-6">Für wachsende Handwerksbetriebe.</p>
            <div className="mb-6"><span className="text-4xl font-bold text-white">299 €</span><span className="text-slate-500"> / Monat</span></div>
            <ul className="space-y-4 mb-8 flex-1">{['560 Inklusivminuten', 'Terminbuchung + Sync', 'Echtzeit-Weiterleitung', 'SMS Updates'].map((f, i) => <li key={i} className="flex items-center gap-3 text-sm text-slate-200"><Check className="w-5 h-5 text-blue-400" /> {f}</li>)}</ul>
            <button className="w-full py-3 rounded-xl font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all active:scale-95">Kostenlos testen</button>
          </div>
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col hover:border-white/30 transition-all hover:-translate-y-1 duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3><p className="text-sm text-slate-400 mb-6">Für hohes Volumen.</p>
            <div className="mb-6"><span className="text-3xl font-bold text-white">Auf Anfrage</span></div>
            <ul className="space-y-4 mb-8 flex-1">{['Individuelles Volumen', 'Mehrere Standorte', 'API + White Label'].map((f, i) => <li key={i} className="flex items-center gap-3 text-sm text-slate-300"><Check className="w-5 h-5 text-blue-500" /> {f}</li>)}</ul>
            <button className="w-full py-3 rounded-xl font-semibold border border-white/10 text-white hover:bg-white/10 transition-colors">Kontaktieren</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// MAIN APP
// ==========================================
export default function CallLanaApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => { const h = () => setIsScrolled(window.scrollY > 20); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h); }, []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [currentPage]);
  const navLinks = [{ id: 'home', label: 'Startseite' }, { id: 'features', label: 'Funktionen' }, { id: 'demos', label: 'KI-Demos' }, { id: 'pricing', label: 'Preise' }];

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen bg-[#0B0F19] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-[#0B0F19]/80 backdrop-blur-md border-white/10 py-3 shadow-lg' : 'bg-[#0B0F19] lg:bg-transparent border-transparent py-5'}`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity group">
              <LanaFace size="small" className="shadow-none group-hover:scale-110 transition-transform" />
              <span className="text-xl font-bold text-white tracking-tight ml-2">Call Lana</span>
            </button>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.02)]">
              {navLinks.map(link => (
                <button key={link.id} onClick={() => setCurrentPage(link.id)} className={`transition-colors relative ${currentPage === link.id ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                  {link.label}
                  {currentPage === link.id && <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full animate-pulse"></span>}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-white text-slate-900 hover:bg-slate-200 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">Demo buchen</button>
            </div>
          </div>
        </nav>
        <main className="min-h-[calc(100vh-300px)]">
          {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
          {currentPage === 'features' && <FeaturesPage />}
          {currentPage === 'demos' && <DemosPage />}
          {currentPage === 'pricing' && <PricingPage />}
        </main>
        <footer className="border-t border-white/10 bg-[#06090F] pt-16 pb-8 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-2">
                <div className="flex items-center gap-2 mb-4"><LanaFace size="small" className="shadow-none" /><span className="text-lg font-bold text-white tracking-tight ml-2">Call Lana</span></div>
                <p className="text-slate-500 text-sm max-w-sm mb-6">Der smarte KI-Telefonassistent, entwickelt für das deutsche Handwerk. DSGVO-konform, skalierbar und sofort einsatzbereit.</p>
                <div className="flex items-center gap-2 text-sm text-slate-400 bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/10"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Hosting in Deutschland</div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2 text-sm text-slate-500">{navLinks.map(link => (<li key={link.id}><button onClick={() => setCurrentPage(link.id)} className="hover:text-blue-400 transition-colors">{link.label}</button></li>))}</ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Datenschutz</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Impressum</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">AGB</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/5 pt-8 flex justify-between items-center text-xs text-slate-600">
              <p>© {new Date().getFullYear()} Call Lana. Alle Rechte vorbehalten.</p>
              <p>Made with ❤️ in Germany</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
