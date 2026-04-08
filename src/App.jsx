import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import DemosPage from "./pages/DemosPage";
import PricingPage from "./pages/PricingPage";
import KontaktPage from "./pages/KontaktPage";
import ImpressumPage from "./pages/ImpressumPage";
import DatenschutzPage from "./pages/DatenschutzPage";
import AGBPage from "./pages/AGBPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function CallLanaApp() {
  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen bg-[#0B0F19] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <main className="min-h-[calc(100vh-300px)]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/funktionen" element={<FeaturesPage />} />
            <Route path="/demos" element={<DemosPage />} />
            <Route path="/preise" element={<PricingPage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
            <Route path="/agb" element={<AGBPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
