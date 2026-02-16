import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  tshirt: (c) => `
    <path d="M55,175 Q55,168 65,164 Q80,158 100,158 Q120,158 135,164 Q145,168 145,175 L145,200 L55,200Z" fill="${c.clothing}" />
    <path d="M65,164 Q55,168 40,175 L40,200 L55,200 L55,175Z" fill="${c.clothing}" />
    <path d="M135,164 Q145,168 160,175 L160,200 L145,200 L145,175Z" fill="${c.clothing}" />
  `,
  hoodie: (c) => `
    <path d="M50,175 Q50,165 65,160 Q80,155 100,155 Q120,155 135,160 Q150,165 150,175 L150,200 L50,200Z" fill="${c.clothing}" />
    <path d="M65,160 Q50,165 35,175 L35,200 L50,200 L50,175Z" fill="${c.clothing}" />
    <path d="M135,160 Q150,165 165,175 L165,200 L150,200 L150,175Z" fill="${c.clothing}" />
    <path d="M88,158 Q100,170 112,158" stroke="${c.clothing}" stroke-width="2" fill="none" opacity="0.3" />
  `,
  collared: (c) => `
    <path d="M55,175 Q55,168 65,164 Q80,158 100,158 Q120,158 135,164 Q145,168 145,175 L145,200 L55,200Z" fill="${c.clothing}" />
    <path d="M65,164 Q55,168 40,175 L40,200 L55,200 L55,175Z" fill="${c.clothing}" />
    <path d="M135,164 Q145,168 160,175 L160,200 L145,200 L145,175Z" fill="${c.clothing}" />
    <path d="M85,158 L95,172 L100,165" stroke="white" stroke-width="1.5" fill="white" opacity="0.6" />
    <path d="M115,158 L105,172 L100,165" stroke="white" stroke-width="1.5" fill="white" opacity="0.6" />
  `,
};
