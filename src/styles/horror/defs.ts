import type { ResolvedColors } from "../../types.js";

export function horrorDefs(c: ResolvedColors): string {
  const blood = c.blood ?? "#8B0000";
  const atmosphere = c.atmosphere ?? "#6A6A70";

  return `
  <defs>
    <!-- Blood drip glow -->
    <filter id="blood-glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
      <feFlood flood-color="${blood}" flood-opacity="0.4" result="color" />
      <feComposite in="color" in2="blur" operator="in" result="glow" />
      <feMerge>
        <feMergeNode in="glow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Fog / mist overlay -->
    <filter id="fog-effect" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="fog" />
      <feColorMatrix type="saturate" values="0" in="fog" result="gray" />
      <feBlend in="SourceGraphic" in2="gray" mode="screen" />
    </filter>

    <!-- Dark vignette (heavier than cyberpunk) -->
    <radialGradient id="horror-vignette" cx="0.5" cy="0.45" r="0.55">
      <stop offset="0%" stop-color="black" stop-opacity="0" />
      <stop offset="70%" stop-color="black" stop-opacity="0.15" />
      <stop offset="100%" stop-color="black" stop-opacity="0.65" />
    </radialGradient>

    <!-- Skin pallor gradient -->
    <radialGradient id="gradient-skin-sickly" cx="0.4" cy="0.35" r="0.6">
      <stop offset="0%" stop-color="${atmosphere}" stop-opacity="0.06" />
      <stop offset="100%" stop-color="black" stop-opacity="0.04" />
    </radialGradient>

    <!-- Blood gradient (for drips/wounds) -->
    <linearGradient id="gradient-blood" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${blood}" />
      <stop offset="100%" stop-color="#2A0000" />
    </linearGradient>

    <!-- Metal surface (tactical/industrial) -->
    <linearGradient id="gradient-metal-dark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${atmosphere}" />
      <stop offset="40%" stop-color="#555560" />
      <stop offset="60%" stop-color="#3A3A42" />
      <stop offset="100%" stop-color="#2A2A30" />
    </linearGradient>

    <!-- Infection pulse glow -->
    <filter id="infection-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Subtle grain -->
    <filter id="horror-grain" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" result="noise" />
      <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
      <feBlend in="SourceGraphic" in2="gray" mode="overlay" />
    </filter>
  </defs>`;
}
