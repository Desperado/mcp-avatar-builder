import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  sharp: (c) => `
    <!-- Left eyebrow — angular sharp -->
    <path d="M150,180 L165,174 L185,178 L190,176"
      stroke="${c.hair}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Right eyebrow — angular sharp -->
    <path d="M210,176 L215,178 L235,174 L250,180"
      stroke="${c.hair}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Subtle brow shadow -->
    <path d="M150,181 Q170,175 190,178" fill="black" opacity="0.04" />
    <path d="M210,178 Q230,175 250,181" fill="black" opacity="0.04" />
  `,

  none: () => "",
};
