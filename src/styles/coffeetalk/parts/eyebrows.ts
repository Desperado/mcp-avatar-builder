import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  relaxed: (c) => `
    <!-- Relaxed, gentle eyebrows -->
    <path d="M155,186 Q163,182 172,181 Q181,182 188,184"
      stroke="${c.hair}" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7" />
    <path d="M212,184 Q219,182 228,181 Q237,182 245,186"
      stroke="${c.hair}" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7" />
  `,

  arched: (c) => `
    <!-- Arched, expressive eyebrows -->
    <path d="M155,188 Q163,178 172,177 Q181,178 188,182"
      stroke="${c.hair}" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.75" />
    <path d="M212,182 Q219,178 228,177 Q237,178 245,188"
      stroke="${c.hair}" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.75" />
  `,

  thick: (c) => `
    <!-- Thick, bold eyebrows -->
    <path d="M154,187 Q163,180 172,179 Q181,180 189,184"
      stroke="${c.hair}" stroke-width="3.5" fill="none" stroke-linecap="round" opacity="0.65" />
    <path d="M211,184 Q219,180 228,179 Q237,180 246,187"
      stroke="${c.hair}" stroke-width="3.5" fill="none" stroke-linecap="round" opacity="0.65" />
  `,
};
