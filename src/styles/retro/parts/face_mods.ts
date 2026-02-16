import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  nosebleed: (c) => {
    const retro = c.retro ?? "#FF6B35";
    return `
    <!-- Nosebleed (Eleven-style psychic strain) -->
    <path d="M200,248 Q201,255 200,265 Q199,272 200,278"
      stroke="#CC2233" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5" />
    <!-- Blood drop -->
    <circle cx="200" cy="280" r="2" fill="#CC2233" opacity="0.4" />
    <!-- Slight drip trail -->
    <path d="M200,278 Q201,282 200,286"
      stroke="#CC2233" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.3" />
    <!-- Strain veins at temple -->
    <g stroke="${retro}" stroke-width="0.4" fill="none" opacity="0.12">
      <path d="M148,190 Q142,188 138,185" />
      <path d="M146,196 Q140,196 136,194" />
    </g>
    `;
  },

  freckles: () => `
    <!-- Freckles across nose and cheeks -->
    <g fill="#8B6B4A" opacity="0.12">
      <!-- Left cheek -->
      <circle cx="162" cy="228" r="1.5" />
      <circle cx="168" cy="232" r="1.2" />
      <circle cx="158" cy="234" r="1" />
      <circle cx="165" cy="238" r="1.3" />
      <circle cx="172" cy="226" r="1" />
      <!-- Nose bridge -->
      <circle cx="195" cy="232" r="1" />
      <circle cx="200" cy="230" r="1.2" />
      <circle cx="205" cy="232" r="1" />
      <!-- Right cheek -->
      <circle cx="232" cy="226" r="1" />
      <circle cx="238" cy="228" r="1.5" />
      <circle cx="235" cy="234" r="1.3" />
      <circle cx="242" cy="232" r="1.2" />
      <circle cx="228" cy="238" r="1" />
    </g>
  `,

  band_aid: (c) => {
    const accent = c.accent ?? "#4A6A8A";
    return `
    <!-- Band-aid on left cheek -->
    <g transform="rotate(-15, 160, 235)">
      <rect x="142" y="228" width="36" height="14" rx="3" fill="#E8D0A8" />
      <rect x="148" y="228" width="24" height="14" fill="#D4BA90" />
      <!-- Pad dots -->
      <g fill="#C0A878" opacity="0.3">
        <circle cx="155" cy="235" r="0.8" />
        <circle cx="160" cy="233" r="0.8" />
        <circle cx="165" cy="236" r="0.8" />
        <circle cx="158" cy="238" r="0.8" />
      </g>
    </g>
    <!-- Small scratch underneath -->
    <path d="M152,238 L162,232" stroke="#CC4444" stroke-width="0.5" fill="none" opacity="0.15" />
    `;
  },
};
