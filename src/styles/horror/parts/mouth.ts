import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  grimace: (c) => `
    <!-- Pained grimace — teeth showing -->
    <path d="M180,262 Q190,258 200,260 Q210,258 220,262"
      stroke="#00000025" stroke-width="1.2" fill="none" stroke-linecap="round" />
    <!-- Teeth line -->
    <path d="M184,262 Q192,260 200,261 Q208,260 216,262"
      fill="#D0C8B8" stroke="#00000015" stroke-width="0.5" />
    <!-- Individual tooth lines -->
    <g stroke="#00000012" stroke-width="0.4">
      <line x1="192" y1="260" x2="192" y2="264" />
      <line x1="200" y1="259" x2="200" y2="263" />
      <line x1="208" y1="260" x2="208" y2="264" />
    </g>
    <!-- Lip tension -->
    <path d="M182,264 Q200,270 218,264" fill="#00000008" />
  `,

  gas_mask: (c) => {
    const atmosphere = c.atmosphere ?? "#6A6A70";
    const blood = c.blood ?? "#8B0000";
    return `
    <!-- Military gas mask -->
    <path d="
      M155,242 Q160,234 178,230 Q200,226 222,230 Q240,234 245,242
      L250,268 Q250,298 238,305
      Q200,316 162,305
      Q150,298 150,268Z
    " fill="${atmosphere}" />
    <!-- Mask surface -->
    <path d="
      M155,242 Q160,234 178,230 Q200,226 222,230 Q240,234 245,242
      L250,268 Q250,298 238,305
      Q200,316 162,305
      Q150,298 150,268Z
    " fill="url(#gradient-metal-dark)" opacity="0.4" />
    <!-- Eye holes (circular filter ports) -->
    <circle cx="175" cy="255" r="14" fill="#1A1A1A" />
    <circle cx="225" cy="255" r="14" fill="#1A1A1A" />
    <circle cx="175" cy="255" r="12" fill="#0E0E12" />
    <circle cx="225" cy="255" r="12" fill="#0E0E12" />
    <!-- Filter canister (front) -->
    <ellipse cx="200" cy="282" rx="15" ry="10" fill="#3A3A42" />
    <ellipse cx="200" cy="282" rx="12" ry="8" fill="#2A2A30" />
    <circle cx="200" cy="282" r="4" fill="#1A1A20" />
    <!-- Straps -->
    <path d="M155,245 Q140,245 135,250 L132,260" stroke="${atmosphere}" stroke-width="3" fill="none" />
    <path d="M245,245 Q260,245 265,250 L268,260" stroke="${atmosphere}" stroke-width="3" fill="none" />
    <!-- Seam line -->
    <path d="M155,255 Q200,248 245,255" stroke="#00000015" stroke-width="0.5" fill="none" />
    <!-- Blood splatter on mask -->
    <circle cx="220" cy="270" r="3" fill="${blood}" opacity="0.15" />
    <circle cx="224" cy="268" r="1.5" fill="${blood}" opacity="0.1" />
    `;
  },

  stitched: (c) => {
    const blood = c.blood ?? "#8B0000";
    return `
    <!-- Stitched-shut mouth -->
    <path d="M180,262 Q190,258 200,260 Q210,258 220,262"
      stroke="#00000020" stroke-width="1.5" fill="none" stroke-linecap="round" />
    <!-- Stitch marks -->
    <g stroke="${blood}" stroke-width="0.8" opacity="0.5" stroke-linecap="round">
      <line x1="184" y1="258" x2="186" y2="266" />
      <line x1="190" y1="257" x2="192" y2="265" />
      <line x1="196" y1="256" x2="198" y2="264" />
      <line x1="202" y1="256" x2="204" y2="264" />
      <line x1="208" y1="257" x2="210" y2="265" />
      <line x1="214" y1="258" x2="216" y2="266" />
    </g>
    <!-- Thread connecting stitches -->
    <path d="M184,262 L186,262 L190,261 L192,261 L196,260 L198,260 L202,260 L204,260 L208,261 L210,261 L214,262 L216,262"
      stroke="${blood}" stroke-width="0.4" fill="none" opacity="0.35" />
    <!-- Bruising around mouth -->
    <path d="M178,264 Q200,272 222,264" fill="#4A2040" opacity="0.06" />
    `;
  },
};
