import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  grin: () => `
    <!-- Big friendly 80s grin -->
    <path d="M180,260 Q190,256 200,258 Q210,256 220,260"
      stroke="#C0756B" stroke-width="1.5" fill="none" stroke-linecap="round" />
    <path d="M182,261 Q200,275 218,261"
      stroke="#C0756B" stroke-width="1.8" fill="none" stroke-linecap="round" />
    <!-- Teeth flash -->
    <path d="M188,264 Q200,270 212,264" fill="white" opacity="0.6" />
  `,

  bubblegum: (c) => {
    const retro = c.retro ?? "#FF5588";
    return `
    <!-- Bubblegum blowing mouth -->
    <path d="M186,260 Q200,256 214,260"
      stroke="#C0756B" stroke-width="1.5" fill="none" stroke-linecap="round" />
    <!-- Small open mouth -->
    <ellipse cx="200" cy="264" rx="8" ry="5" fill="#C0756B" opacity="0.4" />
    <!-- Bubblegum bubble -->
    <circle cx="200" cy="278" r="14" fill="${retro}" opacity="0.35" />
    <circle cx="200" cy="278" r="14" fill="none" stroke="${retro}" stroke-width="0.8" opacity="0.5" />
    <!-- Bubble highlight -->
    <circle cx="194" cy="273" r="3" fill="white" opacity="0.15" />
    `;
  },

  neutral: () => `
    <!-- Relaxed neutral mouth -->
    <path d="M184,262 Q194,258 200,260 Q206,258 216,262"
      stroke="#C0756B" stroke-width="1.5" fill="none" stroke-linecap="round" />
    <!-- Slight lower lip -->
    <path d="M188,264 Q200,268 212,264"
      fill="white" opacity="0.03" />
  `,
};
