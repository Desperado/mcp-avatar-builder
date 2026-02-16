import type { ResolvedColors } from "../../types.js";

export function retroDefs(c: ResolvedColors): string {
  const retro = c.retro ?? "#FF6B35";
  const accent = c.accent ?? "#4A6A8A";

  return `
  <defs>
    <!-- Warm sunset glow -->
    <filter id="warm-glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
      <feFlood flood-color="${retro}" flood-opacity="0.3" result="color" />
      <feComposite in="color" in2="blur" operator="in" result="glow" />
      <feMerge>
        <feMergeNode in="glow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Soft glow for highlights -->
    <filter id="retro-soft-glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- VHS scanline pattern -->
    <pattern id="vhs-lines" patternUnits="userSpaceOnUse" width="400" height="6">
      <rect width="400" height="2" fill="white" opacity="0.03" />
    </pattern>

    <!-- Warm color wash -->
    <radialGradient id="retro-warmth" cx="0.5" cy="0.4" r="0.7">
      <stop offset="0%" stop-color="${retro}" stop-opacity="0.04" />
      <stop offset="100%" stop-color="${retro}" stop-opacity="0" />
    </radialGradient>

    <!-- Sunset gradient (for backgrounds) -->
    <linearGradient id="gradient-sunset" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FF6B35" stop-opacity="0.8" />
      <stop offset="40%" stop-color="#FF5588" stop-opacity="0.6" />
      <stop offset="70%" stop-color="#9B59B6" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#2A1A3E" stop-opacity="0.9" />
    </linearGradient>

    <!-- Skin warmth highlight -->
    <radialGradient id="gradient-skin-warm" cx="0.4" cy="0.35" r="0.6">
      <stop offset="0%" stop-color="#FFDDAA" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#FFDDAA" stop-opacity="0" />
    </radialGradient>

    <!-- Hair sheen (warmer than cyberpunk) -->
    <linearGradient id="gradient-hair-warm" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="white" stop-opacity="0.12" />
      <stop offset="50%" stop-color="white" stop-opacity="0" />
      <stop offset="100%" stop-color="${retro}" stop-opacity="0.05" />
    </linearGradient>

    <!-- Denim texture gradient -->
    <linearGradient id="gradient-denim" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${accent}" />
      <stop offset="50%" stop-color="#3A5A7A" />
      <stop offset="100%" stop-color="${accent}" />
    </linearGradient>

    <!-- VHS vignette (lighter, warmer) -->
    <radialGradient id="retro-vignette" cx="0.5" cy="0.45" r="0.65">
      <stop offset="0%" stop-color="black" stop-opacity="0" />
      <stop offset="100%" stop-color="#1A0A0A" stop-opacity="0.4" />
    </radialGradient>
  </defs>`;
}
