import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  flat: (c) => `
    <line x1="63" y1="93" x2="87" y2="93" stroke="${c.hair}" stroke-width="2.5" stroke-linecap="round" />
    <line x1="113" y1="93" x2="137" y2="93" stroke="${c.hair}" stroke-width="2.5" stroke-linecap="round" />
  `,
  arched: (c) => `
    <path d="M63,96 Q75,88 87,94" stroke="${c.hair}" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <path d="M113,94 Q125,88 137,96" stroke="${c.hair}" stroke-width="2.5" fill="none" stroke-linecap="round" />
  `,
  angled: (c) => `
    <path d="M63,96 L75,90 L87,93" stroke="${c.hair}" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M113,93 L125,90 L137,96" stroke="${c.hair}" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
  `,
};
