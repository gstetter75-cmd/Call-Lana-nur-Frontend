import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LanaFace from "./LanaFace";

const NAV_LINKS = [
  { to: "/", label: "Startseite" },
  { to: "/funktionen", label: "Funktionen" },
  { to: "/demos", label: "KI-Demos" },
  { to: "/preise", label: "Preise" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Hauptnavigation"
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#0B0F19]/80 backdrop-blur-md border-white/10 py-3 shadow-lg"
          : "bg-[#0B0F19] lg:bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
        >
          <LanaFace
            size="small"
            className="shadow-none group-hover:scale-110 transition-transform"
          />
          <span className="text-xl font-bold text-white tracking-tight ml-2">
            Call Lana
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.02)]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors relative ${
                location.pathname === link.to
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
              {location.pathname === link.to && (
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/kontakt"
            className="hidden sm:block bg-white text-slate-900 hover:bg-slate-200 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Demo buchen
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl animate-fade-in-up">
          <div className="flex flex-col px-6 py-6 gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-blue-500/10 text-white border border-blue-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl text-base font-semibold text-center"
            >
              Demo buchen
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
