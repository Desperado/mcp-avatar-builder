import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  round: (c) => `
    <ellipse cx="75" cy="110" rx="10" ry="12" fill="white" />
    <ellipse cx="125" cy="110" rx="10" ry="12" fill="white" />
    <circle cx="75" cy="110" r="7" fill="${c.eyes}" />
    <circle cx="125" cy="110" r="7" fill="${c.eyes}" />
    <circle cx="77" cy="107" r="2.5" fill="white" />
    <circle cx="127" cy="107" r="2.5" fill="white" />
  `,
  cat: (c) => `
    <ellipse cx="75" cy="110" rx="11" ry="10" fill="white" />
    <ellipse cx="125" cy="110" rx="11" ry="10" fill="white" />
    <ellipse cx="75" cy="110" rx="4" ry="9" fill="${c.eyes}" />
    <ellipse cx="125" cy="110" rx="4" ry="9" fill="${c.eyes}" />
    <circle cx="76" cy="106" r="2" fill="white" />
    <circle cx="126" cy="106" r="2" fill="white" />
  `,
  sparkle: (c) => `
    <ellipse cx="75" cy="110" rx="12" ry="14" fill="white" />
    <ellipse cx="125" cy="110" rx="12" ry="14" fill="white" />
    <circle cx="75" cy="111" r="9" fill="${c.eyes}" />
    <circle cx="125" cy="111" r="9" fill="${c.eyes}" />
    <circle cx="78" cy="106" r="3.5" fill="white" />
    <circle cx="128" cy="106" r="3.5" fill="white" />
    <circle cx="72" cy="113" r="2" fill="white" opacity="0.7" />
    <circle cx="122" cy="113" r="2" fill="white" opacity="0.7" />
  `,
};
