import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  none: () => "",
  glasses: () => `
    <circle cx="75" cy="110" r="14" stroke="#333" stroke-width="2" fill="none" />
    <circle cx="125" cy="110" r="14" stroke="#333" stroke-width="2" fill="none" />
    <line x1="89" y1="110" x2="111" y2="110" stroke="#333" stroke-width="2" />
    <line x1="61" y1="108" x2="50" y2="105" stroke="#333" stroke-width="2" />
    <line x1="139" y1="108" x2="150" y2="105" stroke="#333" stroke-width="2" />
  `,
  round_glasses: () => `
    <circle cx="75" cy="110" r="16" stroke="#886644" stroke-width="1.5" fill="#FFFFFF10" />
    <circle cx="125" cy="110" r="16" stroke="#886644" stroke-width="1.5" fill="#FFFFFF10" />
    <line x1="91" y1="110" x2="109" y2="110" stroke="#886644" stroke-width="1.5" />
    <line x1="59" y1="108" x2="48" y2="104" stroke="#886644" stroke-width="1.5" />
    <line x1="141" y1="108" x2="152" y2="104" stroke="#886644" stroke-width="1.5" />
  `,
};
