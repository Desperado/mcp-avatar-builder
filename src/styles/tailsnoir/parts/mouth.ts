import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  neutral: () => `
    <!-- Neutral, stoic mouth -->
    <path d="M188,258 Q194,260 200,260 Q206,260 212,258"
      stroke="#00000025" stroke-width="1.5" fill="none" stroke-linecap="round" />
  `,

  cigarette: (c) => `
    <!-- Noir cigarette in mouth -->
    <path d="M188,258 Q194,260 200,260 Q206,260 212,258"
      stroke="#00000025" stroke-width="1.5" fill="none" stroke-linecap="round" />
    <!-- Cigarette -->
    <rect x="210" y="256" width="28" height="3.5" rx="1" fill="#D8C8A0" transform="rotate(8, 210, 257)" />
    <rect x="234" y="255" width="4" height="3.5" rx="1" fill="#C85838" opacity="0.7" transform="rotate(8, 234, 256)" />
    <!-- Smoke wisp -->
    <g stroke="${c.noir ?? "#38B8C8"}" stroke-width="0.4" fill="none" opacity="0.08">
      <path d="M238,252 Q240,244 237,236 Q240,228 237,220" />
      <path d="M241,250 Q244,242 241,234 Q244,226 241,218" />
    </g>
  `,

  smirk: () => `
    <!-- Knowing smirk — one side up -->
    <path d="M188,258 Q196,260 200,260 Q208,258 214,254"
      stroke="#00000030" stroke-width="1.8" fill="none" stroke-linecap="round" />
  `,
};
