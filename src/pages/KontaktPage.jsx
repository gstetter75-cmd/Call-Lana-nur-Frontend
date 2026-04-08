import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 relative">
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Demo buchen & Kontakt
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Lass uns sprechen. Wir zeigen dir in 15 Minuten, wie Lana deinen
            Betrieb entlastet.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Mail className="w-6 h-6 text-blue-400 mb-3" />
              <h3 className="text-white font-semibold mb-1">E-Mail</h3>
              <a href="mailto:info@call-lana.de" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                info@call-lana.de
              </a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Phone className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="text-white font-semibold mb-1">Telefon</h3>
              <a href="tel:+4930123456789" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                +49 30 123 456 789
              </a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <MapPin className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="text-white font-semibold mb-1">Standort</h3>
              <p className="text-slate-400 text-sm">Deutschland</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Nachricht gesendet!
                </h3>
                <p className="text-slate-400">
                  Wir melden uns innerhalb von 24 Stunden bei dir.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                      Betrieb / Gewerk
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Erzähl uns kurz von deinem Betrieb..."
                    className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Send className="w-5 h-5" /> Nachricht senden
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
