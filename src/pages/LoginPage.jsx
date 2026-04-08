import { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, Eye, EyeOff } from "lucide-react";
import LanaFace from "../components/LanaFace";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Placeholder — backend integration later
    setTimeout(() => {
      setIsLoading(false);
      setError("Login ist aktuell nur für Beta-Kunden verfügbar. Kontaktiere uns für einen Zugang.");
    }, 1500);
  };

  return (
    <div className="pt-24 pb-24 relative min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-md mx-auto px-6 relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8 animate-fade-in-up">
          <LanaFace size="small" className="shadow-none mb-4 scale-150" />
          <h1 className="text-2xl font-bold text-white">Willkommen zurück</h1>
          <p className="text-slate-400 text-sm mt-1">
            Melde dich in deinem Call Lana Dashboard an
          </p>
        </div>

        {/* Login Card */}
        <div
          className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="login-email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                E-Mail
              </label>
              <input
                id="login-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="dein@betrieb.de"
                autoComplete="email"
                className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium text-slate-300"
                >
                  Passwort
                </label>
                <button
                  type="button"
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Passwort vergessen?
                </button>
              </div>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 pr-12 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                  aria-label={showPassword ? "Passwort verbergen" : "Passwort anzeigen"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-3 text-amber-300 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !email || !password}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-500 text-white px-6 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:shadow-none"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <LogIn className="w-5 h-5" />
              )}
              {isLoading ? "Anmelden..." : "Anmelden"}
            </button>
          </form>
        </div>

        {/* Footer links */}
        <div
          className="text-center mt-6 space-y-3 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-slate-500 text-sm">
            Noch kein Konto?{" "}
            <Link
              to="/kontakt"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Demo buchen
            </Link>
          </p>
          <p className="text-slate-600 text-xs">
            Durch die Anmeldung stimmst du unseren{" "}
            <Link to="/agb" className="underline hover:text-slate-400 transition-colors">
              AGB
            </Link>{" "}
            und der{" "}
            <Link to="/datenschutz" className="underline hover:text-slate-400 transition-colors">
              Datenschutzerklärung
            </Link>{" "}
            zu.
          </p>
        </div>
      </div>
    </div>
  );
}
