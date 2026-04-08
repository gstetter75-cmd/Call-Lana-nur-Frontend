export default function LanaAvatar({ size = "large", className = "" }) {
  const isLarge = size === "large";
  const px = isLarge ? 224 : 40;
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
        {/* Background circle */}
        <circle cx="100" cy="100" r="100" fill="url(#bg-gradient)" />

        {/* Inner glow */}
        <circle cx="100" cy="100" r="85" fill="url(#inner-gradient)" opacity="0.6" />

        {/* Face outline — stylized */}
        <ellipse cx="100" cy="95" rx="50" ry="55" fill="url(#face-gradient)" />

        {/* Hair */}
        <path
          d="M50 80 C50 45, 75 25, 100 25 C125 25, 150 45, 150 80 C150 70, 145 55, 130 48 C120 44, 110 42, 100 42 C90 42, 80 44, 70 48 C55 55, 50 70, 50 80Z"
          fill="url(#hair-gradient)"
        />
        <path
          d="M48 82 C46 65, 55 40, 100 22 C145 40, 154 65, 152 82 C152 75, 148 55, 132 45 C118 38, 100 36, 100 36 C100 36, 82 38, 68 45 C52 55, 48 75, 48 82Z"
          fill="url(#hair-gradient)"
          opacity="0.7"
        />

        {/* Eyes */}
        <ellipse cx="80" cy="90" rx="8" ry="9" fill="white" />
        <ellipse cx="120" cy="90" rx="8" ry="9" fill="white" />
        <circle cx="81" cy="89" r="5" fill="#1e293b" />
        <circle cx="121" cy="89" r="5" fill="#1e293b" />
        <circle cx="83" cy="87" r="2" fill="white" opacity="0.8" />
        <circle cx="123" cy="87" r="2" fill="white" opacity="0.8" />

        {/* Eyebrows */}
        <path d="M70 78 Q80 73, 90 76" stroke="#64748b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M110 76 Q120 73, 130 78" stroke="#64748b" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Nose */}
        <path d="M98 98 Q100 104, 102 98" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Smile */}
        <path d="M85 110 Q100 122, 115 110" stroke="#94a3b8" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Headset */}
        <path
          d="M52 88 Q50 60, 100 50 Q150 60, 148 88"
          stroke="url(#headset-gradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <rect x="42" y="82" width="14" height="20" rx="7" fill="url(#headset-gradient)" />
        <rect x="144" y="82" width="14" height="20" rx="7" fill="url(#headset-gradient)" />

        {/* Mic boom */}
        <path d="M42 96 Q30 100, 28 115 Q27 122, 34 125" stroke="url(#headset-gradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="35" cy="127" r="6" fill="url(#headset-gradient)" />

        {/* AI sparkle indicators */}
        <circle cx="160" cy="45" r="3" fill="#60a5fa" opacity="0.8">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="170" cy="60" r="2" fill="#818cf8" opacity="0.6">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="35" cy="50" r="2.5" fill="#60a5fa" opacity="0.7">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
        </circle>

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="bg-gradient" x1="0" y1="0" x2="200" y2="200">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <radialGradient id="inner-gradient" cx="100" cy="100" r="85">
            <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
          </radialGradient>
          <linearGradient id="face-gradient" x1="50" y1="40" x2="150" y2="150">
            <stop offset="0%" stopColor="#fde68a" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#f5deb3" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#d4a574" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="hair-gradient" x1="50" y1="20" x2="150" y2="80">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          <linearGradient id="headset-gradient" x1="40" y1="50" x2="160" y2="130">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>
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
