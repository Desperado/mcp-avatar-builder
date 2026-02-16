import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  thick: (c) => `
    <!-- Thick 80s eyebrows -->
    <path d="M152,184 Q168,176 190,180"
      stroke="${c.hair}" stroke-width="3.5" fill="none" stroke-linecap="round" />
    <path d="M210,180 Q232,176 248,184"
      stroke="${c.hair}" stroke-width="3.5" fill="none" stroke-linecap="round" />
  `,

  thin: (c) => `
    <!-- Thin, shaped eyebrows -->
    <path d="M155,182 Q170,176 188,180"
      stroke="${c.hair}" stroke-width="2" fill="none" stroke-linecap="round" />
    <path d="M212,180 Q230,176 245,182"
      stroke="${c.hair}" stroke-width="2" fill="none" stroke-linecap="round" />
  `,

  arched: (c) => `
    <!-- High arched 80s brows -->
    <path d="M153,186 Q170,172 190,178"
      stroke="${c.hair}" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <path d="M210,178 Q230,172 247,186"
      stroke="${c.hair}" stroke-width="2.5" fill="none" stroke-linecap="round" />
  `,
};
