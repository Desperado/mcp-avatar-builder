import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  furrowed: (c) => `
    <!-- Furrowed, concerned brows -->
    <path d="M155,190 Q165,184 175,183 Q185,184 192,188"
      stroke="${c.hair}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6" />
    <path d="M208,188 Q215,184 228,183 Q238,184 248,190"
      stroke="${c.hair}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6" />
  `,

  thin: (c) => `
    <!-- Thin, refined brows -->
    <path d="M156,188 Q166,184 175,183 Q184,184 190,186"
      stroke="${c.hair}" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5" />
    <path d="M210,186 Q216,184 228,183 Q238,184 248,188"
      stroke="${c.hair}" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5" />
  `,

  heavy: (c) => `
    <!-- Heavy, brooding brows -->
    <path d="M152,192 Q164,182 175,181 Q186,182 194,186"
      stroke="${c.hair}" stroke-width="3.5" fill="none" stroke-linecap="round" opacity="0.55" />
    <path d="M206,186 Q214,182 228,181 Q240,182 252,192"
      stroke="${c.hair}" stroke-width="3.5" fill="none" stroke-linecap="round" opacity="0.55" />
  `,
};
