import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import LanaFace from "./LanaFace";

const NAV_LINKS = [
  { to: "/", label: "Startseite" },
  { to: "/funktionen", label: "Funktionen" },
  { to: "/demos", label: "KI-Demos" },
  { to: "/preise", label: "Preise" },
];

const LEGAL_LINKS = [
  { to: "/datenschutz", label: "Datenschutz" },
  { to: "/impressum", label: "Impressum" },
  { to: "/agb", label: "AGB" },
];

export default function Footer() {
  return (
    <footer role="contentinfo" aria-label="Footer" className="border-t border-white/10 bg-[#06090F] pt-16 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <LanaFace size="small" className="shadow-none" />
              <span className="text-lg font-bold text-white tracking-tight ml-2">
                Call Lana
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm mb-6">
              Der smarte KI-Telefonassistent, entwickelt für das deutsche
              Handwerk. DSGVO-konform, skalierbar und sofort einsatzbereit.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400 bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Hosting in
              Deutschland
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              {LEGAL_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} Call Lana. Alle Rechte vorbehalten.
          </p>
          <p>Made with ❤️ in Germany</p>
        </div>
      </div>
    </footer>
  );
}
