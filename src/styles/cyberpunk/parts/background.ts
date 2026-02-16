import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  circuit_grid: (c) => {
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- Dark base -->
    <rect width="400" height="400" fill="#0A0A14" />
    <!-- Circuit grid lines -->
    <g stroke="${neon}" stroke-opacity="0.08" stroke-width="0.5">
      <line x1="0" y1="50" x2="400" y2="50" />
      <line x1="0" y1="100" x2="400" y2="100" />
      <line x1="0" y1="150" x2="400" y2="150" />
      <line x1="0" y1="200" x2="400" y2="200" />
      <line x1="0" y1="250" x2="400" y2="250" />
      <line x1="0" y1="300" x2="400" y2="300" />
      <line x1="0" y1="350" x2="400" y2="350" />
      <line x1="50" y1="0" x2="50" y2="400" />
      <line x1="100" y1="0" x2="100" y2="400" />
      <line x1="150" y1="0" x2="150" y2="400" />
      <line x1="200" y1="0" x2="200" y2="400" />
      <line x1="250" y1="0" x2="250" y2="400" />
      <line x1="300" y1="0" x2="300" y2="400" />
      <line x1="350" y1="0" x2="350" y2="400" />
    </g>
    <!-- Circuit trace accents -->
    <g stroke="${neon}" stroke-opacity="0.15" stroke-width="1" fill="none">
      <path d="M50,400 L50,320 L100,320 L100,280 L150,280" />
      <path d="M350,400 L350,340 L300,340 L300,300 L280,300" />
      <path d="M0,200 L30,200 L30,150 L80,150" />
      <path d="M400,250 L370,250 L370,180 L330,180" />
    </g>
    <!-- Circuit node dots -->
    <g fill="${neon}" fill-opacity="0.2">
      <circle cx="50" cy="320" r="3" />
      <circle cx="100" cy="280" r="3" />
      <circle cx="150" cy="280" r="2" />
      <circle cx="350" cy="340" r="3" />
      <circle cx="300" cy="300" r="3" />
      <circle cx="30" cy="150" r="2" />
      <circle cx="370" cy="180" r="2" />
    </g>
    <!-- Subtle radial vignette -->
    <radialGradient id="bg-vignette" cx="0.5" cy="0.45" r="0.7">
      <stop offset="0%" stop-color="#0A0A14" stop-opacity="0" />
      <stop offset="100%" stop-color="#000005" stop-opacity="0.7" />
    </radialGradient>
    <rect width="400" height="400" fill="url(#bg-vignette)" />
    `;
  },

  rain_city: (c) => {
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- Dark sky gradient -->
    <linearGradient id="bg-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#05050F" />
      <stop offset="60%" stop-color="#0A0A1A" />
      <stop offset="100%" stop-color="#0F0A1E" />
    </linearGradient>
    <rect width="400" height="400" fill="url(#bg-sky)" />
    <!-- Distant cityscape silhouette -->
    <g fill="#12121E">
      <rect x="10" y="280" width="30" height="120" />
      <rect x="45" y="260" width="22" height="140" />
      <rect x="72" y="300" width="18" height="100" />
      <rect x="95" y="270" width="35" height="130" />
      <rect x="135" y="290" width="20" height="110" />
      <rect x="240" y="275" width="28" height="125" />
      <rect x="275" y="255" width="20" height="145" />
      <rect x="300" y="285" width="35" height="115" />
      <rect x="340" y="265" width="25" height="135" />
      <rect x="370" y="295" width="30" height="105" />
    </g>
    <!-- Building window lights -->
    <g fill="${neon}" fill-opacity="0.15">
      <rect x="18" y="290" width="4" height="3" />
      <rect x="26" y="300" width="4" height="3" />
      <rect x="18" y="310" width="4" height="3" />
      <rect x="100" y="280" width="5" height="3" />
      <rect x="110" y="290" width="5" height="3" />
      <rect x="100" y="300" width="5" height="3" />
      <rect x="248" y="285" width="4" height="3" />
      <rect x="256" y="295" width="4" height="3" />
      <rect x="308" y="295" width="5" height="3" />
      <rect x="318" y="305" width="5" height="3" />
      <rect x="345" y="275" width="4" height="3" />
      <rect x="353" y="285" width="4" height="3" />
    </g>
    <!-- Rain streaks -->
    <g stroke="white" stroke-opacity="0.06" stroke-width="0.5">
      <line x1="30" y1="0" x2="25" y2="80" />
      <line x1="80" y1="20" x2="75" y2="100" />
      <line x1="145" y1="5" x2="140" y2="85" />
      <line x1="210" y1="15" x2="205" y2="95" />
      <line x1="260" y1="0" x2="255" y2="75" />
      <line x1="320" y1="10" x2="315" y2="90" />
      <line x1="375" y1="0" x2="370" y2="70" />
      <line x1="55" y1="40" x2="50" y2="120" />
      <line x1="170" y1="30" x2="165" y2="110" />
      <line x1="290" y1="25" x2="285" y2="105" />
    </g>
    <!-- Vignette -->
    <radialGradient id="bg-vignette-rain" cx="0.5" cy="0.4" r="0.65">
      <stop offset="0%" stop-color="black" stop-opacity="0" />
      <stop offset="100%" stop-color="black" stop-opacity="0.6" />
    </radialGradient>
    <rect width="400" height="400" fill="url(#bg-vignette-rain)" />
    `;
  },

  dark_void: () => `
    <!-- Pure dark with subtle gradient -->
    <linearGradient id="bg-void" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#06060E" />
      <stop offset="100%" stop-color="#0C0C18" />
    </linearGradient>
    <rect width="400" height="400" fill="url(#bg-void)" />
    <!-- Sparse particles -->
    <g fill="white" fill-opacity="0.04">
      <circle cx="50" cy="60" r="1" />
      <circle cx="340" cy="40" r="1.5" />
      <circle cx="120" cy="350" r="1" />
      <circle cx="280" cy="370" r="1" />
      <circle cx="380" cy="200" r="1.5" />
      <circle cx="20" cy="250" r="1" />
    </g>
    <!-- Radial vignette -->
    <radialGradient id="bg-vignette-void" cx="0.5" cy="0.45" r="0.55">
      <stop offset="0%" stop-color="black" stop-opacity="0" />
      <stop offset="100%" stop-color="black" stop-opacity="0.5" />
    </radialGradient>
    <rect width="400" height="400" fill="url(#bg-vignette-void)" />
  `,
};
