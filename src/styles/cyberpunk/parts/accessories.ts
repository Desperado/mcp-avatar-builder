import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  none: () => "",

  headset: (c) => {
    const accent = c.accent ?? "#4A4A5A";
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- Headset band over top of head -->
    <path d="
      M140,175 Q138,140 145,120 Q158,95 200,88 Q242,95 255,120
      Q262,140 260,175
    " fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round" />
    <!-- Band highlight -->
    <path d="
      M142,175 Q140,142 147,122 Q160,98 200,91 Q240,98 253,122
      Q260,142 258,175
    " fill="none" stroke="white" stroke-width="0.8" opacity="0.08" />
    <!-- Left ear cup -->
    <ellipse cx="137" cy="200" rx="12" ry="18" fill="${accent}" />
    <ellipse cx="137" cy="200" rx="12" ry="18" fill="url(#gradient-metal)" opacity="0.4" />
    <ellipse cx="137" cy="200" rx="8" ry="14" fill="#1A1A2E" />
    <!-- Right ear cup -->
    <ellipse cx="263" cy="200" rx="12" ry="18" fill="${accent}" />
    <ellipse cx="263" cy="200" rx="12" ry="18" fill="url(#gradient-metal)" opacity="0.4" />
    <ellipse cx="263" cy="200" rx="8" ry="14" fill="#1A1A2E" />
    <!-- Boom mic arm from left cup -->
    <path d="M132,212 Q128,230 140,248 Q150,258 160,260"
      stroke="${accent}" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <!-- Mic head -->
    <ellipse cx="162" cy="261" rx="5" ry="4" fill="${accent}" />
    <ellipse cx="162" cy="261" rx="3" ry="2.5" fill="#1A1A2E" />
    <!-- LED on ear cup -->
    <circle cx="137" cy="192" r="1.5" fill="${neon}" opacity="0.6" />
    <circle cx="263" cy="192" r="1.5" fill="${neon}" opacity="0.6" />
    `;
  },

  holo_visor: (c) => {
    const neon = c.neon ?? "#00E5FF";
    const accent = c.accent ?? "#4A4A5A";
    return `
    <!-- Holographic monocle visor — single lens over right eye -->
    <!-- Mounting arm from right temple -->
    <path d="M252,170 Q258,172 262,178 Q264,185 260,190"
      stroke="${accent}" stroke-width="2.5" fill="none" />
    <!-- Hinge -->
    <circle cx="252" cy="170" r="2.5" fill="${accent}" />
    <circle cx="252" cy="170" r="1.5" fill="#333345" />
    <!-- Visor lens frame -->
    <path d="
      M215,185 L255,185 Q262,185 262,192 L262,212 Q262,219 255,219
      L215,219 Q208,219 208,212 L208,192 Q208,185 215,219Z
    " fill="none" />
    <!-- Holographic lens (translucent) -->
    <rect x="210" y="186" width="50" height="32" rx="4" fill="${neon}" opacity="0.08" />
    <rect x="210" y="186" width="50" height="32" rx="4" fill="none" stroke="${neon}" stroke-width="0.8" opacity="0.35" />
    <!-- HUD readout lines -->
    <g stroke="${neon}" stroke-width="0.5" opacity="0.25">
      <line x1="215" y1="193" x2="235" y2="193" />
      <line x1="215" y1="198" x2="248" y2="198" />
      <line x1="215" y1="203" x2="240" y2="203" />
      <line x1="215" y1="208" x2="230" y2="208" />
    </g>
    <!-- HUD data blocks -->
    <rect x="242" y="191" width="12" height="8" fill="${neon}" opacity="0.06" />
    <rect x="240" y="205" width="15" height="6" fill="${neon}" opacity="0.04" />
    <!-- Lens corner brackets -->
    <g stroke="${neon}" stroke-width="0.6" fill="none" opacity="0.3">
      <path d="M213,189 L213,192 L216,192" />
      <path d="M257,189 L257,192 L254,192" />
      <path d="M213,215 L213,212 L216,212" />
      <path d="M257,215 L257,212 L254,212" />
    </g>
    <!-- Mounting arm LED -->
    <circle cx="260" cy="190" r="1.2" fill="${neon}" opacity="0.5" />
    `;
  },
};
