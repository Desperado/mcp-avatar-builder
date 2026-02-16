import type { ResolvedColors } from "../../types.js";

export function tailsnoirDefs(c: ResolvedColors): string {
  const noir = c.noir ?? "#38B8C8";

  return `
  <defs>
    <!-- Neon glow bloom -->
    <filter id="neon-glow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
      <feFlood flood-color="${noir}" flood-opacity="0.35" result="color" />
      <feComposite in="color" in2="blur" operator="in" result="glow" />
      <feMerge>
        <feMergeNode in="glow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Film grain / noise -->
    <filter id="film-grain" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
      <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
      <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
    </filter>

    <!-- Rainy street background gradient -->
    <linearGradient id="gradient-noir-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0A0A12" stop-opacity="0.95" />
      <stop offset="40%" stop-color="#1A1A28" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#0E0E18" stop-opacity="0.98" />
    </linearGradient>

    <!-- Heavy noir vignette -->
    <radialGradient id="noir-vignette" cx="0.5" cy="0.45" r="0.55">
      <stop offset="0%" stop-color="black" stop-opacity="0" />
      <stop offset="70%" stop-color="black" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#000005" stop-opacity="0.7" />
    </radialGradient>

    <!-- Fur sheen highlight -->
    <radialGradient id="gradient-fur-sheen" cx="0.4" cy="0.3" r="0.6">
      <stop offset="0%" stop-color="white" stop-opacity="0.06" />
      <stop offset="100%" stop-color="white" stop-opacity="0" />
    </radialGradient>

    <!-- Rim light (backlight from neon) -->
    <linearGradient id="gradient-rim-light" x1="1" y1="0" x2="0" y2="0.5">
      <stop offset="0%" stop-color="${noir}" stop-opacity="0.12" />
      <stop offset="100%" stop-color="${noir}" stop-opacity="0" />
    </linearGradient>

    <!-- Wet surface reflection -->
    <linearGradient id="gradient-wet-ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${noir}" stop-opacity="0.08" />
      <stop offset="60%" stop-color="${noir}" stop-opacity="0.02" />
      <stop offset="100%" stop-color="black" stop-opacity="0.5" />
    </linearGradient>

    <!-- Neon sign glow halo -->
    <radialGradient id="neon-halo" cx="0.5" cy="0.3" r="0.4">
      <stop offset="0%" stop-color="${noir}" stop-opacity="0.06" />
      <stop offset="100%" stop-color="${noir}" stop-opacity="0" />
    </radialGradient>

    <!-- Diagonal rain pattern -->
    <pattern id="rain-pattern" patternUnits="userSpaceOnUse" width="40" height="80" patternTransform="rotate(-15)">
      <line x1="0" y1="0" x2="0" y2="80" stroke="#88AACC" stroke-width="0.5" opacity="0.15" />
      <line x1="20" y1="0" x2="20" y2="80" stroke="#88AACC" stroke-width="0.3" opacity="0.10" />
    </pattern>
  </defs>`;
}
