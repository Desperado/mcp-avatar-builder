import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  none: () => "",

  scanlines: () => `
    <!-- Scanline overlay across entire frame -->
    <rect width="400" height="400" fill="url(#scanlines)" />
    <!-- Subtle edge darkening -->
    <rect width="400" height="400" fill="black" opacity="0.03" />
  `,

  glitch: (c) => {
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- Glitch effect — offset color bars -->
    <g opacity="0.06">
      <!-- Horizontal displacement bars -->
      <rect x="0" y="85" width="400" height="3" fill="${neon}" />
      <rect x="5" y="145" width="395" height="2" fill="#FF2D95" />
      <rect x="-3" y="228" width="403" height="2" fill="${neon}" />
      <rect x="2" y="310" width="398" height="3" fill="#FF2D95" />
      <rect x="-2" y="365" width="402" height="1.5" fill="${neon}" />
    </g>
    <!-- Scanlines on top -->
    <rect width="400" height="400" fill="url(#scanlines)" opacity="0.7" />
    <!-- CRT corner vignette -->
    <radialGradient id="fx-crt-vignette" cx="0.5" cy="0.5" r="0.7">
      <stop offset="0%" stop-color="black" stop-opacity="0" />
      <stop offset="85%" stop-color="black" stop-opacity="0" />
      <stop offset="100%" stop-color="black" stop-opacity="0.15" />
    </radialGradient>
    <rect width="400" height="400" fill="url(#fx-crt-vignette)" />
    `;
  },
};
