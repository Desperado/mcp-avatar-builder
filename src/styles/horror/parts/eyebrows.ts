import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  thin: (c) => `
    <!-- Thin, worried eyebrows -->
    <path d="M152,182 Q165,176 188,180"
      stroke="${c.hair}" stroke-width="2" fill="none" stroke-linecap="round" />
    <path d="M212,180 Q235,176 248,182"
      stroke="${c.hair}" stroke-width="2" fill="none" stroke-linecap="round" />
  `,

  furrowed: (c) => `
    <!-- Heavy furrowed brows — angry/pained -->
    <path d="M150,184 L162,176 L180,178 L190,175"
      stroke="${c.hair}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M210,175 L220,178 L238,176 L250,184"
      stroke="${c.hair}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Furrow crease -->
    <path d="M192,172 Q200,168 208,172" stroke="#00000015" stroke-width="0.6" fill="none" />
  `,

  none: () => "",
};
