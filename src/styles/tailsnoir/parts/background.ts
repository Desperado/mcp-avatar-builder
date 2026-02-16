import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  rainy_street: (c) => `
    <!-- Noir rainy street — dark Vancouver alley -->
    <rect width="400" height="400" fill="url(#gradient-noir-sky)" />
    <!-- Distant building silhouettes -->
    <rect x="0" y="60" width="60" height="280" fill="#0E0E18" />
    <rect x="50" y="40" width="45" height="300" fill="#12121E" />
    <rect x="300" y="50" width="50" height="290" fill="#0E0E18" />
    <rect x="340" y="70" width="60" height="270" fill="#12121E" />
    <!-- Windows (dim yellow) -->
    <g fill="#D4A830" opacity="0.08">
      <rect x="10" y="80" width="12" height="10" />
      <rect x="30" y="80" width="12" height="10" />
      <rect x="10" y="110" width="12" height="10" />
      <rect x="60" y="60" width="10" height="8" />
      <rect x="78" y="60" width="10" height="8" />
      <rect x="310" y="70" width="10" height="8" />
      <rect x="328" y="70" width="10" height="8" />
      <rect x="350" y="90" width="12" height="10" />
      <rect x="375" y="90" width="12" height="10" />
    </g>
    <!-- Neon sign reflection -->
    <rect x="100" y="100" width="60" height="14" rx="2" fill="${c.noir ?? "#38B8C8"}" opacity="0.15" />
    <rect x="100" y="100" width="60" height="14" rx="2" fill="none" stroke="${c.noir ?? "#38B8C8"}" stroke-width="0.5" opacity="0.3" />
    <!-- Wet ground -->
    <rect x="0" y="340" width="400" height="60" fill="url(#gradient-wet-ground)" />
    <!-- Rain overlay -->
    <rect width="400" height="400" fill="url(#rain-pattern)" />
    <!-- Neon ambient glow -->
    <rect width="400" height="400" fill="url(#neon-halo)" />
    <!-- Heavy vignette -->
    <rect width="400" height="400" fill="url(#noir-vignette)" />
  `,

  office: (c) => `
    <!-- Noir detective office — dim, venetian blinds -->
    <rect width="400" height="400" fill="#12121A" />
    <!-- Back wall -->
    <rect x="0" y="0" width="400" height="300" fill="#1A1A24" />
    <!-- Venetian blind slats casting light stripes -->
    <g fill="${c.noir ?? "#38B8C8"}" opacity="0.03">
      <rect x="30" y="40" width="340" height="6" />
      <rect x="30" y="60" width="340" height="6" />
      <rect x="30" y="80" width="340" height="6" />
      <rect x="30" y="100" width="340" height="6" />
      <rect x="30" y="120" width="340" height="6" />
      <rect x="30" y="140" width="340" height="6" />
    </g>
    <!-- Desk surface -->
    <path d="M0,340 L80,310 L320,310 L400,340 L400,400 L0,400Z" fill="#2A1A14" />
    <path d="M80,310 L320,310" stroke="#3A2A20" stroke-width="1" />
    <!-- Desk lamp glow -->
    <ellipse cx="320" cy="300" rx="40" ry="20" fill="${c.noir ?? "#38B8C8"}" opacity="0.04" />
    <!-- Ambient -->
    <rect width="400" height="400" fill="url(#noir-vignette)" />
  `,

  bar: (c) => `
    <!-- Noir dive bar -->
    <rect width="400" height="400" fill="#0E0A0A" />
    <!-- Back wall with bottles -->
    <rect x="0" y="0" width="400" height="260" fill="#1A1218" />
    <!-- Shelf -->
    <line x1="20" y1="130" x2="380" y2="130" stroke="#3A2A28" stroke-width="2" />
    <!-- Bottles silhouettes -->
    <g fill="#1A1218" stroke="#3A2A28" stroke-width="0.5">
      <rect x="40" y="95" width="14" height="35" rx="2" />
      <rect x="65" y="100" width="12" height="30" rx="2" />
      <rect x="90" y="92" width="16" height="38" rx="2" />
      <rect x="300" y="98" width="13" height="32" rx="2" />
      <rect x="325" y="94" width="15" height="36" rx="2" />
      <rect x="350" y="100" width="12" height="30" rx="2" />
    </g>
    <!-- Neon bar sign -->
    <rect x="140" y="80" width="120" height="20" rx="3" fill="none" stroke="${c.noir ?? "#38B8C8"}" stroke-width="1" opacity="0.4" />
    <ellipse cx="200" cy="90" rx="80" ry="40" fill="${c.noir ?? "#38B8C8"}" opacity="0.03" />
    <!-- Bar counter -->
    <rect x="0" y="320" width="400" height="80" fill="#2A1A16" />
    <rect x="0" y="320" width="400" height="3" fill="#3A2820" opacity="0.5" />
    <!-- Bar counter neon reflection -->
    <rect x="0" y="320" width="400" height="3" fill="${c.noir ?? "#38B8C8"}" opacity="0.06" />
    <rect width="400" height="400" fill="url(#noir-vignette)" />
  `,
};
