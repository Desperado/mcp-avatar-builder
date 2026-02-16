import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  none: () => "",

  vhs_lines: () => `
    <!-- VHS tracking lines effect -->
    <rect x="0" y="0" width="400" height="400" fill="url(#vhs-lines)" opacity="0.08" />
    <!-- Horizontal glitch bands -->
    <rect x="0" y="85" width="400" height="3" fill="white" opacity="0.03" />
    <rect x="0" y="86" width="400" height="1" fill="#FF6B35" opacity="0.02" />
    <rect x="0" y="220" width="400" height="2" fill="white" opacity="0.02" />
    <rect x="0" y="310" width="400" height="4" fill="white" opacity="0.025" />
    <rect x="0" y="311" width="400" height="1" fill="#00BFFF" opacity="0.02" />
    <!-- Color fringing (chromatic aberration hint) -->
    <rect x="0" y="0" width="400" height="400" fill="#FF0000" opacity="0.008"
      transform="translate(1, 0)" />
    <rect x="0" y="0" width="400" height="400" fill="#0000FF" opacity="0.008"
      transform="translate(-1, 0)" />
    <!-- Warm vignette -->
    <rect x="0" y="0" width="400" height="400" fill="url(#retro-vignette)" opacity="0.5" />
  `,

  warm_glow: () => `
    <!-- Warm golden hour glow -->
    <rect x="0" y="0" width="400" height="400" fill="url(#retro-warmth)" opacity="0.15" />
    <!-- Soft light bloom from upper-left -->
    <radialGradient id="light-bloom" cx="25%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#FFD700" stop-opacity="0.08" />
      <stop offset="50%" stop-color="#FF8C00" stop-opacity="0.03" />
      <stop offset="100%" stop-color="#FF8C00" stop-opacity="0" />
    </radialGradient>
    <rect x="0" y="0" width="400" height="400" fill="url(#light-bloom)" />
    <!-- Lens flare accent -->
    <circle cx="100" cy="80" r="30" fill="#FFD700" opacity="0.04" />
    <circle cx="100" cy="80" r="15" fill="#FFFFFF" opacity="0.03" />
    <!-- Film grain (subtle) -->
    <rect x="0" y="0" width="400" height="400" filter="url(#retro-soft-glow)" opacity="0.03" />
    <!-- Warm vignette -->
    <rect x="0" y="0" width="400" height="400" fill="url(#retro-vignette)" opacity="0.4" />
  `,
};
