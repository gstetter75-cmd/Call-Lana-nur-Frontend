import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <div className="text-8xl font-bold text-white/10 mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-slate-400 mb-8">
          Die Seite, die du suchst, existiert nicht oder wurde verschoben.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1"
        >
          <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
