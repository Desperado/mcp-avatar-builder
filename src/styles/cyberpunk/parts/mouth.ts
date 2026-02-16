import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  neutral: (c) => `
    <!-- Lips — closed, neutral expression -->
    <path d="M182,264 Q191,260 200,262 Q209,260 218,264"
      stroke="#00000020" stroke-width="1.2" fill="none" stroke-linecap="round" />
    <!-- Upper lip definition -->
    <path d="M185,263 Q193,259 200,261 Q207,259 215,263"
      fill="#00000010" />
    <!-- Lower lip highlight -->
    <path d="M186,265 Q200,272 214,265"
      fill="white" opacity="0.04" />
    <!-- Lip color tint -->
    <path d="M184,264 Q200,268 216,264 Q200,270 184,264Z"
      fill="${c.skin}" opacity="0.3" />
  `,

  respirator: (c) => {
    const accent = c.accent ?? "#4A4A5A";
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- Respirator mask covering lower face -->
    <path d="
      M155,245 Q158,238 175,235 Q200,230 225,235 Q242,238 245,245
      L248,270 Q248,295 235,300
      Q200,310 165,300
      Q152,295 152,270Z
    " fill="${accent}" />
    <!-- Mask surface detail — gradient overlay -->
    <path d="
      M155,245 Q158,238 175,235 Q200,230 225,235 Q242,238 245,245
      L248,270 Q248,295 235,300
      Q200,310 165,300
      Q152,295 152,270Z
    " fill="url(#gradient-metal)" opacity="0.4" />
    <!-- Ventilation grille -->
    <g stroke="${accent}" stroke-width="0.8" opacity="0.6">
      <line x1="185" y1="268" x2="215" y2="268" />
      <line x1="183" y1="273" x2="217" y2="273" />
      <line x1="185" y1="278" x2="215" y2="278" />
      <line x1="183" y1="283" x2="217" y2="283" />
      <line x1="185" y1="288" x2="215" y2="288" />
    </g>
    <!-- Filter canister left -->
    <ellipse cx="158" cy="268" rx="8" ry="12" fill="${accent}" />
    <ellipse cx="158" cy="268" rx="6" ry="10" fill="#333345" />
    <circle cx="158" cy="268" r="3" fill="#222235" />
    <!-- Filter canister right -->
    <ellipse cx="242" cy="268" rx="8" ry="12" fill="${accent}" />
    <ellipse cx="242" cy="268" rx="6" ry="10" fill="#333345" />
    <circle cx="242" cy="268" r="3" fill="#222235" />
    <!-- LED indicator -->
    <circle cx="200" cy="258" r="2" fill="${neon}" opacity="0.7" />
    <!-- Edge seam lines -->
    <path d="M155,245 Q200,240 245,245" stroke="#00000020" stroke-width="0.5" fill="none" />
    <path d="M155,260 Q200,255 245,260" stroke="#FFFFFF08" stroke-width="0.5" fill="none" />
    `;
  },

  smirk: (c) => `
    <!-- Asymmetric smirk -->
    <path d="M182,264 Q193,260 200,262 Q210,261 220,258"
      stroke="#00000025" stroke-width="1.4" fill="none" stroke-linecap="round" />
    <!-- Lip fill -->
    <path d="M184,264 Q200,267 218,260 Q200,272 184,264Z"
      fill="${c.skin}" opacity="0.25" />
    <!-- Lower lip -->
    <path d="M186,265 Q198,272 212,266"
      fill="white" opacity="0.04" />
    <!-- Corner shadow (smirk side) -->
    <circle cx="220" cy="259" r="1.5" fill="#00000012" />
  `,
};
