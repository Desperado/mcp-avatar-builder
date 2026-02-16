import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  smile: () => `
    <path d="M88,138 Q100,150 112,138" stroke="#C0756B" stroke-width="2" fill="none" stroke-linecap="round" />
  `,
  open: () => `
    <path d="M88,136 Q100,152 112,136" stroke="#C0756B" stroke-width="2" fill="#F4A0A0" stroke-linecap="round" />
  `,
  cat: () => `
    <path d="M92,138 L100,142 L108,138" stroke="#C0756B" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
  `,
};
