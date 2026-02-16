import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  narrow: (c) => `
    <!-- Narrow, suspicious noir eyes -->
    <path d="M154,205 Q164,198 175,197 Q185,198 192,205 Q185,210 175,211 Q164,210 154,205Z" fill="white" opacity="0.9" />
    <ellipse cx="175" cy="205" rx="8" ry="6" fill="${c.eyes}" />
    <ellipse cx="175" cy="205" rx="4" ry="4" fill="#0A0A12" />
    <ellipse cx="172" cy="203" rx="2" ry="1.5" fill="white" opacity="0.5" />
    <path d="M153,204 Q164,196 175,195 Q186,196 193,204" stroke="#0A0A12" stroke-width="2" fill="none" />
    <path d="M208,205 Q218,198 228,197 Q238,198 248,205 Q238,210 228,211 Q218,210 208,205Z" fill="white" opacity="0.9" />
    <ellipse cx="228" cy="205" rx="8" ry="6" fill="${c.eyes}" />
    <ellipse cx="228" cy="205" rx="4" ry="4" fill="#0A0A12" />
    <ellipse cx="225" cy="203" rx="2" ry="1.5" fill="white" opacity="0.5" />
    <path d="M207,204 Q218,196 228,195 Q238,196 249,204" stroke="#0A0A12" stroke-width="2" fill="none" />
  `,

  tired: (c) => `
    <!-- Tired, world-weary detective eyes — heavy lids -->
    <path d="M155,208 Q165,202 175,201 Q185,202 192,208 Q185,213 175,214 Q165,213 155,208Z" fill="white" opacity="0.85" />
    <ellipse cx="175" cy="208" rx="8" ry="5.5" fill="${c.eyes}" />
    <ellipse cx="175" cy="208" rx="4" ry="4" fill="#0A0A12" />
    <ellipse cx="172" cy="206" rx="1.5" ry="1" fill="white" opacity="0.4" />
    <!-- Heavy drooping upper lid -->
    <path d="M154,206 Q164,196 175,195 Q186,196 193,202" stroke="#0A0A12" stroke-width="2.5" fill="none" />
    <!-- Under-eye shadow -->
    <path d="M158,214 Q167,218 175,219 Q183,218 190,214" stroke="#0A0A12" stroke-width="0.5" fill="none" opacity="0.15" />
    <path d="M208,208 Q218,202 228,201 Q238,202 248,208 Q238,213 228,214 Q218,213 208,208Z" fill="white" opacity="0.85" />
    <ellipse cx="228" cy="208" rx="8" ry="5.5" fill="${c.eyes}" />
    <ellipse cx="228" cy="208" rx="4" ry="4" fill="#0A0A12" />
    <ellipse cx="225" cy="206" rx="1.5" ry="1" fill="white" opacity="0.4" />
    <path d="M207,206 Q218,196 228,195 Q238,196 249,202" stroke="#0A0A12" stroke-width="2.5" fill="none" />
    <path d="M212,214 Q220,218 228,219 Q236,218 244,214" stroke="#0A0A12" stroke-width="0.5" fill="none" opacity="0.15" />
  `,

  sharp: (c) => `
    <!-- Sharp, alert predator eyes -->
    <path d="M152,204 Q164,196 175,195 Q186,196 194,204 Q186,212 175,213 Q164,212 152,204Z" fill="white" opacity="0.9" />
    <ellipse cx="175" cy="204" rx="9" ry="7" fill="${c.eyes}" />
    <ellipse cx="175" cy="204" rx="5" ry="5" fill="#0A0A12" />
    <!-- Sharp highlight -->
    <ellipse cx="172" cy="201" rx="2.5" ry="2" fill="white" opacity="0.6" />
    <!-- Angular upper lid -->
    <path d="M151,203 Q162,194 175,193 Q188,194 195,203" stroke="#0A0A12" stroke-width="2.2" fill="none" />
    <!-- Outer corner flick -->
    <path d="M193,200 L198,196" stroke="#0A0A12" stroke-width="1" fill="none" stroke-linecap="round" />
    <path d="M206,204 Q218,196 228,195 Q238,196 250,204 Q238,212 228,213 Q218,212 206,204Z" fill="white" opacity="0.9" />
    <ellipse cx="228" cy="204" rx="9" ry="7" fill="${c.eyes}" />
    <ellipse cx="228" cy="204" rx="5" ry="5" fill="#0A0A12" />
    <ellipse cx="225" cy="201" rx="2.5" ry="2" fill="white" opacity="0.6" />
    <path d="M205,203 Q216,194 228,193 Q240,194 251,203" stroke="#0A0A12" stroke-width="2.2" fill="none" />
    <path d="M207,200 L202,196" stroke="#0A0A12" stroke-width="1" fill="none" stroke-linecap="round" />
  `,
};
