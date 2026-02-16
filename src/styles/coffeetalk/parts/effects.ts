import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  none: () => `
    <!-- No effects -->
  `,

  steam: (c) => `
    <!-- Gentle coffee steam wisps rising -->
    <g stroke="${c.warmth ?? "#D4891C"}" stroke-width="0.8" fill="none" opacity="0.08">
      <path d="M160,380 Q155,360 160,340 Q165,320 160,300" />
      <path d="M180,385 Q178,365 182,345 Q178,325 182,305" />
      <path d="M220,385 Q222,365 218,345 Q222,325 218,305" />
      <path d="M240,380 Q245,360 240,340 Q235,320 240,300" />
    </g>
  `,

  grain: () => `
    <!-- Lo-fi analog grain overlay -->
    <rect width="400" height="400" filter="url(#grain-texture)" opacity="0.04" />
  `,
};
