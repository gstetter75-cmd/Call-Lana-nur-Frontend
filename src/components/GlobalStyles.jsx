export default function GlobalStyles() {
  return (
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
}
