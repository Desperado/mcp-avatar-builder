import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  round: (c) => `
    <ellipse cx="100" cy="108" rx="62" ry="68" fill="${c.skin}" />
    <ellipse cx="100" cy="108" rx="62" ry="68" fill="none" stroke="#00000020" stroke-width="1" />
  `,
  oval: (c) => `
    <ellipse cx="100" cy="105" rx="58" ry="72" fill="${c.skin}" />
    <ellipse cx="100" cy="105" rx="58" ry="72" fill="none" stroke="#00000020" stroke-width="1" />
  `,
  soft: (c) => `
    <path d="M38,108 Q38,36 100,36 Q162,36 162,108 Q162,176 100,180 Q38,176 38,108Z" fill="${c.skin}" />
    <path d="M38,108 Q38,36 100,36 Q162,36 162,108 Q162,176 100,180 Q38,176 38,108Z" fill="none" stroke="#00000020" stroke-width="1" />
  `,
};
