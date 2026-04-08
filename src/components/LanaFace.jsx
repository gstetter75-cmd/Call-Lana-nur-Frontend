import LanaAvatar from "./LanaAvatar";

export default function LanaFace({ className = "", size = "large" }) {
  const isLarge = size === "large";
  const containerSize = isLarge ? "w-80 h-80" : "w-10 h-10";

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
        className={`relative z-10 transition-transform duration-500 ${isLarge ? "hover:scale-105" : ""}`}
      >
        <LanaAvatar size={size} />
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
