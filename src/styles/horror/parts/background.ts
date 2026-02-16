import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  lab_corridor: (c) => {
    const atmosphere = c.atmosphere ?? "#6A6A70";
    return `
    <!-- Dark lab corridor -->
    <linearGradient id="bg-lab" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0E0E14" />
      <stop offset="100%" stop-color="#1A1A20" />
    </linearGradient>
    <rect width="400" height="400" fill="url(#bg-lab)" />
    <!-- Floor tiles -->
    <g stroke="${atmosphere}" stroke-opacity="0.06" stroke-width="0.5">
      <line x1="0" y1="340" x2="400" y2="340" />
      <line x1="0" y1="360" x2="400" y2="360" />
      <line x1="0" y1="380" x2="400" y2="380" />
      <line x1="50" y1="340" x2="30" y2="400" />
      <line x1="150" y1="340" x2="140" y2="400" />
      <line x1="250" y1="340" x2="260" y2="400" />
      <line x1="350" y1="340" x2="370" y2="400" />
    </g>
    <!-- Wall panels -->
    <g stroke="${atmosphere}" stroke-opacity="0.04" stroke-width="0.5">
      <line x1="0" y1="80" x2="400" y2="80" />
      <line x1="0" y1="200" x2="400" y2="200" />
      <rect x="10" y="90" width="60" height="100" rx="2" fill="${atmosphere}" opacity="0.03" />
      <rect x="330" y="90" width="60" height="100" rx="2" fill="${atmosphere}" opacity="0.03" />
    </g>
    <!-- Flickering overhead light -->
    <ellipse cx="200" cy="30" rx="40" ry="8" fill="white" opacity="0.04" />
    <rect x="180" y="0" width="40" height="15" fill="${atmosphere}" opacity="0.08" />
    <!-- Light cone -->
    <path d="M170,30 L120,340 L280,340 L230,30Z" fill="white" opacity="0.015" />
    <!-- Vignette -->
    <rect width="400" height="400" fill="url(#horror-vignette)" />
    `;
  },

  hive: (c) => {
    const blood = c.blood ?? "#8B0000";
    return `
    <!-- Organic hive / nest background -->
    <rect width="400" height="400" fill="#08080C" />
    <!-- Organic wall texture — curved ridges -->
    <g stroke="#1A1A22" stroke-width="2" fill="none" opacity="0.4">
      <path d="M0,50 Q100,70 200,50 Q300,30 400,55" />
      <path d="M0,120 Q80,140 180,115 Q300,95 400,125" />
      <path d="M0,200 Q120,220 200,195 Q320,175 400,205" />
      <path d="M0,280 Q90,300 200,275 Q310,260 400,285" />
      <path d="M0,350 Q100,365 200,345 Q300,330 400,355" />
    </g>
    <!-- Slime/resin drips -->
    <g fill="${blood}" opacity="0.08">
      <path d="M60,0 Q62,40 58,80 Q56,100 60,120 L62,120 Q66,100 64,80 Q62,40 64,0Z" />
      <path d="M320,50 Q322,90 318,130 L320,130 Q324,90 322,50Z" />
      <path d="M180,20 Q182,50 178,90 Q176,110 180,130 L182,130 Q186,110 184,90 Q182,50 184,20Z" />
    </g>
    <!-- Bioluminescent spots -->
    <g fill="${blood}" opacity="0.06">
      <circle cx="40" cy="100" r="8" />
      <circle cx="360" cy="80" r="6" />
      <circle cx="80" cy="300" r="7" />
      <circle cx="330" cy="320" r="5" />
      <circle cx="200" cy="370" r="9" />
    </g>
    <!-- Vignette -->
    <rect width="400" height="400" fill="url(#horror-vignette)" />
    `;
  },

  dark_forest: () => `
    <!-- Dark forest / fog -->
    <linearGradient id="bg-forest" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#060810" />
      <stop offset="100%" stop-color="#0A0C12" />
    </linearGradient>
    <rect width="400" height="400" fill="url(#bg-forest)" />
    <!-- Tree trunks (silhouettes) -->
    <g fill="#0C0E14">
      <rect x="20" y="100" width="18" height="300" />
      <rect x="80" y="60" width="14" height="340" />
      <rect x="150" y="120" width="10" height="280" />
      <rect x="240" y="80" width="16" height="320" />
      <rect x="310" y="110" width="12" height="290" />
      <rect x="360" y="70" width="20" height="330" />
    </g>
    <!-- Bare branches -->
    <g stroke="#0E1018" stroke-width="2" fill="none">
      <path d="M29,120 L50,90 L70,80" />
      <path d="M87,80 L110,55 L130,50" />
      <path d="M29,180 L5,160" />
      <path d="M248,100 L270,70 L290,65" />
      <path d="M316,130 L340,105" />
      <path d="M370,90 L395,60" />
    </g>
    <!-- Ground fog -->
    <ellipse cx="100" cy="380" rx="120" ry="30" fill="#8A9098" opacity="0.04" />
    <ellipse cx="300" cy="375" rx="100" ry="25" fill="#8A9098" opacity="0.03" />
    <ellipse cx="200" cy="390" rx="180" ry="20" fill="#8A9098" opacity="0.03" />
    <!-- Vignette -->
    <rect width="400" height="400" fill="url(#horror-vignette)" />
  `,
};
