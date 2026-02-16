import type { ResolvedColors } from "../../types.js";

export function coffeetalkDefs(c: ResolvedColors): string {
  const warmth = c.warmth ?? "#D4891C";

  return `
  <defs>
    <!-- Warm ambient light -->
    <filter id="warm-light" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
      <feFlood flood-color="${warmth}" flood-opacity="0.25" result="color" />
      <feComposite in="color" in2="blur" operator="in" result="glow" />
      <feMerge>
        <feMergeNode in="glow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Analog grain texture -->
    <filter id="grain-texture" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise" />
      <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
      <feBlend in="SourceGraphic" in2="mono" mode="multiply" result="grain" />
      <feComponentTransfer in="grain">
        <feFuncA type="linear" slope="1" intercept="0" />
      </feComponentTransfer>
    </filter>

    <!-- Coffee shop background gradient -->
    <linearGradient id="gradient-coffeeshop" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${warmth}" stop-opacity="0.7" />
      <stop offset="40%" stop-color="#6B4226" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#2A1A0E" stop-opacity="0.95" />
    </linearGradient>

    <!-- Face warmth highlight -->
    <radialGradient id="gradient-skin-warm" cx="0.4" cy="0.35" r="0.6">
      <stop offset="0%" stop-color="${warmth}" stop-opacity="0.08" />
      <stop offset="100%" stop-color="${warmth}" stop-opacity="0" />
    </radialGradient>

    <!-- Hair warm sheen -->
    <linearGradient id="gradient-hair-sheen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="white" stop-opacity="0.10" />
      <stop offset="50%" stop-color="white" stop-opacity="0" />
      <stop offset="100%" stop-color="${warmth}" stop-opacity="0.06" />
    </linearGradient>

    <!-- Coffee shop warm vignette -->
    <radialGradient id="coffeeshop-vignette" cx="0.5" cy="0.45" r="0.6">
      <stop offset="0%" stop-color="black" stop-opacity="0" />
      <stop offset="100%" stop-color="#1A0E05" stop-opacity="0.45" />
    </radialGradient>
  </defs>`;
}
