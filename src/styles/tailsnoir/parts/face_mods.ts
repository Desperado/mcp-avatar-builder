import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  none: () => `
    <!-- No face modifications -->
  `,

  whiskers: () => `
    <!-- Prominent whiskers -->
    <g stroke="#00000018" stroke-width="0.8" fill="none">
      <!-- Left whiskers -->
      <path d="M168,248 Q148,244 128,240" />
      <path d="M168,252 Q148,252 128,252" />
      <path d="M168,256 Q148,260 128,264" />
      <!-- Right whiskers -->
      <path d="M232,248 Q252,244 272,240" />
      <path d="M232,252 Q252,252 272,252" />
      <path d="M232,256 Q252,260 272,264" />
    </g>
  `,

  scar: () => `
    <!-- Facial scar across cheek -->
    <path d="M240,200 Q250,218 246,240" stroke="#00000018" stroke-width="1.2" fill="none" stroke-linecap="round" />
    <path d="M242,210 L248,213" stroke="#00000012" stroke-width="0.5" fill="none" />
    <path d="M245,224 L250,226" stroke="#00000012" stroke-width="0.5" fill="none" />
  `,

  eye_patch: (c) => `
    <!-- Noir eye patch -->
    <ellipse cx="175" cy="205" rx="18" ry="14" fill="#1A1A22" />
    <path d="M158,200 Q140,190 130,185" stroke="#1A1A22" stroke-width="2" fill="none" />
    <path d="M192,200 Q210,190 230,188 Q260,188 272,192" stroke="#1A1A22" stroke-width="2" fill="none" />
    <!-- Patch buckle hint -->
    <rect x="128" y="183" width="6" height="4" rx="1" fill="${c.accent ?? "#3A3A42"}" opacity="0.5" />
  `,

  marking: (c) => `
    <!-- Fur markings — breed pattern -->
    <path d="M155,160 Q170,152 200,150 Q230,152 245,160 L240,170 Q225,162 200,160 Q175,162 160,170Z"
      fill="${c.hair}" opacity="0.2" />
    <path d="M180,170 Q200,164 220,170" stroke="${c.hair}" stroke-width="1" fill="none" opacity="0.15" />
  `,
};
