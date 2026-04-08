import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy-loaded pages for code splitting
const HomePage = lazy(() => import("./pages/HomePage"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));
const DemosPage = lazy(() => import("./pages/DemosPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const KontaktPage = lazy(() => import("./pages/KontaktPage"));
const ImpressumPage = lazy(() => import("./pages/ImpressumPage"));
const DatenschutzPage = lazy(() => import("./pages/DatenschutzPage"));
const AGBPage = lazy(() => import("./pages/AGBPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function CallLanaApp() {
  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen bg-[#0B0F19] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Zum Inhalt springen
        </a>
        <ScrollToTop />
        <Navbar />
        <main id="main-content" className="min-h-[calc(100vh-300px)]">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/funktionen" element={<FeaturesPage />} />
              <Route path="/demos" element={<DemosPage />} />
              <Route path="/preise" element={<PricingPage />} />
              <Route path="/kontakt" element={<KontaktPage />} />
              <Route path="/impressum" element={<ImpressumPage />} />
              <Route path="/datenschutz" element={<DatenschutzPage />} />
              <Route path="/agb" element={<AGBPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}
