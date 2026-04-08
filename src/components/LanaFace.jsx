export default function LanaFace({ className = "", size = "large" }) {
  const isLarge = size === "large";
  const containerSize = isLarge ? "w-80 h-80" : "w-10 h-10";
  const coreSize = isLarge ? "w-56 h-56" : "w-10 h-10";

  return (
    <div className={`relative flex items-center justify-center ${containerSize} ${className}`}>
      {isLarge && (
        <>
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 border-t-blue-500/40 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-6 rounded-full border border-indigo-500/30 border-b-indigo-500/50 animate-[spin_7s_linear_infinite_reverse] opacity-70" />
          <div className="absolute inset-10 rounded-full border-2 border-blue-400/10 animate-pulse" />
        </>
      )}
      <div
        className={`relative ${coreSize} rounded-full p-[2px] bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-[0_0_40px_rgba(59,130,246,0.3)] z-10 transition-transform duration-500 ${isLarge ? "hover:scale-105" : ""}`}
      >
        <img
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
          alt="Lana KI Assistentin"
          className="w-full h-full object-cover rounded-full border-2 border-[#0B0F19]"
          loading="lazy"
        />
        <div
          className={`absolute ${isLarge ? "bottom-4 right-4 w-5 h-5 border-4" : "bottom-0 right-0 w-3 h-3 border-2"} rounded-full bg-emerald-500 border-[#0B0F19]`}
        />
      </div>
      {isLarge && (
        <>
          <div className="absolute top-1/4 left-[10%] w-2 h-2 bg-blue-400 rounded-full animate-[ping_3s_infinite]" />
          <div className="absolute bottom-1/4 right-[10%] w-2 h-2 bg-indigo-400 rounded-full animate-[ping_2s_infinite_1s]" />
        </>
      )}
    </div>
  );
}
