import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  sunset: (c) => {
    const retro = c.retro ?? "#FF6B35";
    return `
    <!-- 80s sunset sky -->
    <rect width="400" height="400" fill="url(#gradient-sunset)" />
    <!-- Sun -->
    <circle cx="200" cy="220" r="60" fill="#FFD700" opacity="0.3" />
    <circle cx="200" cy="220" r="45" fill="#FF6B35" opacity="0.25" />
    <!-- Horizontal stripe lines through sun -->
    <g stroke="#2A1A3E" stroke-width="3" opacity="0.2">
      <line x1="140" y1="210" x2="260" y2="210" />
      <line x1="145" y1="220" x2="255" y2="220" />
      <line x1="150" y1="230" x2="250" y2="230" />
      <line x1="155" y1="240" x2="245" y2="240" />
      <line x1="165" y1="250" x2="235" y2="250" />
    </g>
    <!-- Palm tree silhouettes -->
    <g fill="#1A0A1E" opacity="0.5">
      <rect x="60" y="260" width="6" height="140" />
      <path d="M63,260 Q40,240 20,250 Q45,245 63,230 Q55,220 30,225 Q55,215 63,200
        Q70,215 95,225 Q70,220 63,230 Q80,245 105,250 Q80,240 63,260Z" />
      <rect x="340" y="280" width="5" height="120" />
      <path d="M342,280 Q325,265 310,272 Q328,268 342,255 Q335,248 318,252
        Q335,243 342,230 Q350,243 367,252 Q350,248 342,255 Q356,268 374,272 Q360,265 342,280Z" />
    </g>
    <!-- Ground line -->
    <rect x="0" y="350" width="400" height="50" fill="#1A0A1E" opacity="0.4" />
    <!-- Warm vignette -->
    <rect width="400" height="400" fill="url(#retro-vignette)" />
    `;
  },

  arcade: (c) => {
    const retro = c.retro ?? "#FF6B35";
    return `
    <!-- Dark arcade interior -->
    <rect width="400" height="400" fill="#0C0818" />
    <!-- Neon grid floor -->
    <g stroke="${retro}" stroke-opacity="0.08" stroke-width="0.5">
      <line x1="0" y1="320" x2="400" y2="320" />
      <line x1="0" y1="340" x2="400" y2="340" />
      <line x1="0" y1="360" x2="400" y2="360" />
      <line x1="0" y1="380" x2="400" y2="380" />
      <line x1="100" y1="320" x2="80" y2="400" />
      <line x1="200" y1="320" x2="200" y2="400" />
      <line x1="300" y1="320" x2="320" y2="400" />
    </g>
    <!-- Arcade cabinet silhouettes -->
    <g fill="#14102A">
      <rect x="15" y="220" width="50" height="130" rx="3" />
      <rect x="80" y="240" width="45" height="110" rx="3" />
      <rect x="280" y="230" width="48" height="120" rx="3" />
      <rect x="345" y="215" width="45" height="135" rx="3" />
    </g>
    <!-- Screen glows on cabinets -->
    <g opacity="0.12">
      <rect x="22" y="230" width="36" height="28" rx="2" fill="#00CED1" />
      <rect x="87" y="250" width="31" height="24" rx="2" fill="${retro}" />
      <rect x="287" y="240" width="34" height="26" rx="2" fill="#9B59B6" />
      <rect x="352" y="225" width="31" height="28" rx="2" fill="#FFD700" />
    </g>
    <!-- Ceiling neon strip -->
    <line x1="0" y1="40" x2="400" y2="40" stroke="${retro}" stroke-width="2" opacity="0.08" />
    <line x1="0" y1="42" x2="400" y2="42" stroke="${retro}" stroke-width="6" opacity="0.02" />
    <!-- Vignette -->
    <rect width="400" height="400" fill="url(#retro-vignette)" />
    `;
  },

  suburban: () => `
    <!-- Suburban evening sky -->
    <linearGradient id="bg-suburb" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2A1A3E" />
      <stop offset="40%" stop-color="#4A2A5E" />
      <stop offset="70%" stop-color="#FF8855" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#1A1018" />
    </linearGradient>
    <rect width="400" height="400" fill="url(#bg-suburb)" />
    <!-- Stars -->
    <g fill="white" opacity="0.15">
      <circle cx="50" cy="30" r="1" />
      <circle cx="120" cy="55" r="0.8" />
      <circle cx="200" cy="20" r="1.2" />
      <circle cx="280" cy="45" r="0.8" />
      <circle cx="350" cy="25" r="1" />
      <circle cx="90" cy="70" r="0.6" />
      <circle cx="310" cy="65" r="0.7" />
    </g>
    <!-- House silhouettes -->
    <g fill="#12081A">
      <path d="M0,340 L0,290 L40,260 L80,290 L80,340Z" />
      <path d="M90,340 L90,280 L120,260 L140,260 L170,280 L170,340Z" />
      <rect x="100" y="300" width="15" height="20" fill="#FFD70015" />
      <path d="M250,340 L250,275 L290,250 L330,275 L330,340Z" />
      <rect x="270" y="295" width="18" height="22" fill="#FFD70010" />
      <path d="M340,340 L340,285 L370,265 L400,285 L400,340Z" />
    </g>
    <!-- Street -->
    <rect x="0" y="340" width="400" height="60" fill="#0C0810" />
    <!-- Streetlight -->
    <rect x="195" y="260" width="4" height="80" fill="#1A1018" />
    <circle cx="197" cy="258" r="8" fill="#FFD700" opacity="0.06" />
    <circle cx="197" cy="258" r="3" fill="#FFD700" opacity="0.15" />
    <!-- Vignette -->
    <rect width="400" height="400" fill="url(#retro-vignette)" />
  `,
};
