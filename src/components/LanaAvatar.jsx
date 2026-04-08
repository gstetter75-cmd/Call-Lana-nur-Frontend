export default function LanaAvatar({ size = "large", className = "" }) {
  const isLarge = size === "large";
  const containerSize = isLarge ? "w-56 h-56" : "w-10 h-10";

  return (
    <div className={`relative ${containerSize} ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        role="img"
        aria-label="Lana KI-Assistentin"
      >
        <defs>
          <radialGradient id="orb-bg" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0B0F19" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orb-core" cx="50%" cy="45%" r="35%">
            <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#818cf8" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#4f46e5" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3730a3" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="200" y2="200">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id="wave-grad" x1="30" y1="100" x2="170" y2="100">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="20%" stopColor="#60a5fa" stopOpacity="1" />
            <stop offset="80%" stopColor="#a78bfa" stopOpacity="1" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient glow */}
        <circle cx="100" cy="95" r="90" fill="url(#orb-bg)" />

        {/* Outer ring */}
        <circle
          cx="100" cy="100" r="80"
          stroke="url(#ring-grad)" strokeWidth="1" fill="none" opacity="0.3"
        />

        {/* Inner orb glow */}
        <circle cx="100" cy="95" r="55" fill="url(#orb-core)" filter="url(#soft-glow)" />

        {/* Bright core */}
        <circle cx="100" cy="92" r="20" fill="white" opacity="0.08" />

        {/* Voice waveform bars */}
        <g filter="url(#glow)" opacity="0.9">
          <rect x="58" y="88" width="3" rx="1.5" fill="url(#wave-grad)" height="24">
            <animate attributeName="height" values="14;24;14" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="y" values="93;88;93" dur="1.2s" repeatCount="indefinite" />
          </rect>
          <rect x="66" y="84" width="3" rx="1.5" fill="url(#wave-grad)" height="32">
            <animate attributeName="height" values="20;32;20" dur="0.9s" repeatCount="indefinite" />
            <animate attributeName="y" values="90;84;90" dur="0.9s" repeatCount="indefinite" />
          </rect>
          <rect x="74" y="78" width="3" rx="1.5" fill="url(#wave-grad)" height="44">
            <animate attributeName="height" values="28;44;28" dur="1.1s" repeatCount="indefinite" />
            <animate attributeName="y" values="86;78;86" dur="1.1s" repeatCount="indefinite" />
          </rect>
          <rect x="82" y="74" width="3" rx="1.5" fill="url(#wave-grad)" height="52">
            <animate attributeName="height" values="36;52;36" dur="0.8s" repeatCount="indefinite" />
            <animate attributeName="y" values="82;74;82" dur="0.8s" repeatCount="indefinite" />
          </rect>
          <rect x="90" y="70" width="3" rx="1.5" fill="url(#wave-grad)" height="60">
            <animate attributeName="height" values="40;60;40" dur="1.0s" repeatCount="indefinite" />
            <animate attributeName="y" values="80;70;80" dur="1.0s" repeatCount="indefinite" />
          </rect>
          <rect x="98" y="72" width="3" rx="1.5" fill="url(#wave-grad)" height="56">
            <animate attributeName="height" values="38;56;38" dur="0.85s" repeatCount="indefinite" />
            <animate attributeName="y" values="81;72;81" dur="0.85s" repeatCount="indefinite" />
          </rect>
          <rect x="106" y="76" width="3" rx="1.5" fill="url(#wave-grad)" height="48">
            <animate attributeName="height" values="32;48;32" dur="1.15s" repeatCount="indefinite" />
            <animate attributeName="y" values="84;76;84" dur="1.15s" repeatCount="indefinite" />
          </rect>
          <rect x="114" y="80" width="3" rx="1.5" fill="url(#wave-grad)" height="40">
            <animate attributeName="height" values="24;40;24" dur="0.95s" repeatCount="indefinite" />
            <animate attributeName="y" values="88;80;88" dur="0.95s" repeatCount="indefinite" />
          </rect>
          <rect x="122" y="84" width="3" rx="1.5" fill="url(#wave-grad)" height="32">
            <animate attributeName="height" values="18;32;18" dur="1.1s" repeatCount="indefinite" />
            <animate attributeName="y" values="91;84;91" dur="1.1s" repeatCount="indefinite" />
          </rect>
          <rect x="130" y="86" width="3" rx="1.5" fill="url(#wave-grad)" height="28">
            <animate attributeName="height" values="16;28;16" dur="0.9s" repeatCount="indefinite" />
            <animate attributeName="y" values="92;86;92" dur="0.9s" repeatCount="indefinite" />
          </rect>
          <rect x="138" y="90" width="3" rx="1.5" fill="url(#wave-grad)" height="20">
            <animate attributeName="height" values="12;20;12" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="y" values="94;90;94" dur="1.2s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Orbiting particles */}
        <circle r="2.5" fill="#60a5fa" opacity="0.8">
          <animateMotion dur="8s" repeatCount="indefinite" path="M100,20 A80,80 0 1,1 99.9,20" />
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle r="2" fill="#a78bfa" opacity="0.6">
          <animateMotion dur="6s" repeatCount="indefinite" path="M100,30 A70,70 0 1,0 99.9,30" />
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle r="1.5" fill="#c7d2fe" opacity="0.5">
          <animateMotion dur="10s" repeatCount="indefinite" path="M100,25 A75,75 0 1,1 99.9,25" />
        </circle>

        {/* "L" letter */}
        <text
          x="100" y="108"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontWeight="700"
          fontSize="28"
          fill="white"
          opacity="0.15"
        >
          L
        </text>
      </svg>

      {/* Online indicator */}
      <div
        className={`absolute ${
          isLarge
            ? "bottom-4 right-4 w-5 h-5 border-4"
            : "bottom-0 right-0 w-3 h-3 border-2"
        } rounded-full bg-emerald-500 border-[#0B0F19]`}
      />
    </div>
  );
}
