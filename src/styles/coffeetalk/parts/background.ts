import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  counter: (c) => `
    <!-- Coffee shop counter scene -->
    <rect width="400" height="400" fill="url(#gradient-coffeeshop)" />
    <!-- Back wall -->
    <rect x="0" y="0" width="400" height="240" fill="#3D2517" opacity="0.4" />
    <!-- Shelf line -->
    <line x1="0" y1="120" x2="400" y2="120" stroke="#5C3D2E" stroke-width="2" opacity="0.3" />
    <!-- Bottles on shelf -->
    <rect x="40" y="85" width="18" height="35" rx="3" fill="${c.warmth ?? "#D4891C"}" opacity="0.2" />
    <rect x="70" y="90" width="15" height="30" rx="3" fill="#8B6B4E" opacity="0.2" />
    <rect x="100" y="82" width="20" height="38" rx="3" fill="${c.accent ?? "#4A6A8A"}" opacity="0.15" />
    <rect x="300" y="88" width="16" height="32" rx="3" fill="#6B4226" opacity="0.2" />
    <rect x="330" y="84" width="18" height="36" rx="3" fill="${c.warmth ?? "#D4891C"}" opacity="0.15" />
    <!-- Counter surface -->
    <rect x="0" y="320" width="400" height="80" fill="#4A2E1A" />
    <rect x="0" y="320" width="400" height="3" fill="#6B4226" opacity="0.5" />
    <!-- Warm ambient glow -->
    <ellipse cx="200" cy="200" rx="180" ry="160" fill="${c.warmth ?? "#D4891C"}" opacity="0.04" />
    <!-- Vignette -->
    <rect width="400" height="400" fill="url(#coffeeshop-vignette)" />
  `,

  window: (c) => `
    <!-- Window seat scene -->
    <rect width="400" height="400" fill="#2A1A0E" />
    <!-- Window frame -->
    <rect x="60" y="20" width="280" height="200" rx="4" fill="#1A2A3A" opacity="0.6" />
    <rect x="65" y="25" width="270" height="190" rx="2" fill="#1A2A4A" opacity="0.3" />
    <!-- Night sky through window -->
    <circle cx="280" cy="60" r="15" fill="#F0E8C0" opacity="0.15" />
    <!-- Rain streaks on window -->
    <g stroke="#88AACC" stroke-width="0.5" opacity="0.15">
      <line x1="100" y1="30" x2="95" y2="100" />
      <line x1="150" y1="40" x2="147" y2="90" />
      <line x1="220" y1="35" x2="216" y2="110" />
      <line x1="270" y1="45" x2="268" y2="85" />
      <line x1="310" y1="30" x2="305" y2="105" />
    </g>
    <!-- Window sill -->
    <rect x="50" y="215" width="300" height="10" fill="#5C3D2E" />
    <!-- Floor -->
    <rect x="0" y="280" width="400" height="120" fill="#3D2517" opacity="0.5" />
    <!-- Warm interior light -->
    <ellipse cx="200" cy="250" rx="200" ry="150" fill="${c.warmth ?? "#D4891C"}" opacity="0.05" />
    <rect width="400" height="400" fill="url(#coffeeshop-vignette)" />
  `,

  cozy_corner: (c) => `
    <!-- Cozy booth corner -->
    <rect width="400" height="400" fill="url(#gradient-coffeeshop)" />
    <!-- Brick wall texture -->
    <g fill="#5C3D2E" opacity="0.15">
      <rect x="10" y="20" width="45" height="20" rx="2" />
      <rect x="60" y="20" width="45" height="20" rx="2" />
      <rect x="35" y="45" width="45" height="20" rx="2" />
      <rect x="85" y="45" width="45" height="20" rx="2" />
      <rect x="10" y="70" width="45" height="20" rx="2" />
      <rect x="290" y="20" width="45" height="20" rx="2" />
      <rect x="340" y="20" width="50" height="20" rx="2" />
      <rect x="310" y="45" width="45" height="20" rx="2" />
      <rect x="360" y="45" width="35" height="20" rx="2" />
      <rect x="290" y="70" width="45" height="20" rx="2" />
    </g>
    <!-- Hanging pendant light -->
    <line x1="200" y1="0" x2="200" y2="40" stroke="#6B4226" stroke-width="1.5" />
    <path d="M185,40 Q185,55 200,58 Q215,55 215,40Z" fill="${c.warmth ?? "#D4891C"}" opacity="0.6" />
    <ellipse cx="200" cy="50" rx="20" ry="10" fill="${c.warmth ?? "#D4891C"}" opacity="0.03" />
    <!-- Light cone -->
    <path d="M185,55 L140,200 L260,200 L215,55Z" fill="${c.warmth ?? "#D4891C"}" opacity="0.03" />
    <!-- Booth seat hint -->
    <path d="M0,340 L60,320 L60,400 L0,400Z" fill="#6B3A2A" opacity="0.3" />
    <path d="M400,340 L340,320 L340,400 L400,400Z" fill="#6B3A2A" opacity="0.3" />
    <rect width="400" height="400" fill="url(#coffeeshop-vignette)" />
  `,
};
