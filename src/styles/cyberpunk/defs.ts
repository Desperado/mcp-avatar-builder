import type { ResolvedColors } from "../../types.js";

export function cyberpunkDefs(c: ResolvedColors): string {
  const neon = c.neon ?? "#00E5FF";
  const accent = c.accent ?? "#4A4A5A";

  return `
  <defs>
    <!-- Neon glow: soft outer bloom -->
    <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
      <feFlood flood-color="${neon}" flood-opacity="0.6" result="color" />
      <feComposite in="color" in2="blur" operator="in" result="glow" />
      <feMerge>
        <feMergeNode in="glow" />
        <feMergeNode in="glow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Subtle glow for secondary elements -->
    <filter id="soft-glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Scanline overlay pattern -->
    <pattern id="scanlines" patternUnits="userSpaceOnUse" width="400" height="4">
      <rect width="400" height="2" fill="black" opacity="0.08" />
    </pattern>

    <!-- Noise grain texture -->
    <filter id="noise-texture" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
      <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
      <feBlend in="SourceGraphic" in2="gray" mode="overlay" />
    </filter>

    <!-- Neon linear gradient (vertical) -->
    <linearGradient id="gradient-neon" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${neon}" />
      <stop offset="100%" stop-color="${accent}" />
    </linearGradient>

    <!-- Hair sheen gradient -->
    <linearGradient id="gradient-hair-sheen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="white" stop-opacity="0.15" />
      <stop offset="50%" stop-color="white" stop-opacity="0" />
      <stop offset="100%" stop-color="white" stop-opacity="0.08" />
    </linearGradient>

    <!-- Skin highlight gradient (radial) -->
    <radialGradient id="gradient-skin-highlight" cx="0.4" cy="0.35" r="0.6">
      <stop offset="0%" stop-color="white" stop-opacity="0.12" />
      <stop offset="100%" stop-color="white" stop-opacity="0" />
    </radialGradient>

    <!-- Metal surface gradient -->
    <linearGradient id="gradient-metal" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${accent}" />
      <stop offset="40%" stop-color="#888898" />
      <stop offset="60%" stop-color="#555565" />
      <stop offset="100%" stop-color="${accent}" />
    </linearGradient>

    <!-- Eye glow radial -->
    <radialGradient id="gradient-eye-glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="${c.eyes}" stop-opacity="1" />
      <stop offset="60%" stop-color="${c.eyes}" stop-opacity="0.6" />
      <stop offset="100%" stop-color="${c.eyes}" stop-opacity="0" />
    </radialGradient>
  </defs>`;
}
