import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  none: () => "",

  fog: () => `
    <!-- Creeping fog effect -->
    <g opacity="0.15">
      <!-- Low fog layer -->
      <ellipse cx="120" cy="390" rx="100" ry="20" fill="white" />
      <ellipse cx="280" cy="385" rx="90" ry="18" fill="white" />
      <ellipse cx="200" cy="395" rx="120" ry="15" fill="white" />
      <!-- Mid fog wisps -->
      <ellipse cx="100" cy="370" rx="60" ry="10" fill="white" opacity="0.6" />
      <ellipse cx="300" cy="365" rx="55" ry="8" fill="white" opacity="0.5" />
      <ellipse cx="200" cy="375" rx="80" ry="12" fill="white" opacity="0.4" />
    </g>
    <!-- Fog tendrils reaching up -->
    <g stroke="white" stroke-width="1.5" fill="none" opacity="0.06">
      <path d="M140,380 Q135,360 145,340" />
      <path d="M260,375 Q265,355 255,335" />
      <path d="M200,385 Q195,365 200,345" />
    </g>
    <!-- Atmospheric haze overlay -->
    <rect x="0" y="0" width="400" height="400" fill="url(#horror-vignette)" opacity="0.6" />
  `,

  blood_splatter: (c) => {
    const blood = c.blood ?? "#8B0000";
    return `
    <!-- Blood splatter effect -->
    <!-- Large splatter top-right -->
    <g fill="${blood}" opacity="0.12">
      <circle cx="320" cy="60" r="18" />
      <circle cx="335" cy="50" r="10" />
      <circle cx="310" cy="45" r="8" />
      <circle cx="340" cy="70" r="6" />
    </g>
    <!-- Drip trails -->
    <g stroke="${blood}" stroke-width="2" fill="none" opacity="0.08" stroke-linecap="round">
      <path d="M320,78 Q322,100 320,130 Q319,150 320,170" />
      <path d="M335,60 Q336,75 334,95" />
      <path d="M308,53 Q306,70 308,85" />
    </g>
    <!-- Small splatter bottom-left -->
    <g fill="${blood}" opacity="0.08">
      <circle cx="80" cy="340" r="12" />
      <circle cx="70" cy="330" r="6" />
      <circle cx="90" cy="350" r="5" />
    </g>
    <!-- Micro droplets scattered -->
    <g fill="${blood}" opacity="0.1">
      <circle cx="150" cy="30" r="2" />
      <circle cx="60" cy="120" r="1.5" />
      <circle cx="350" cy="200" r="2" />
      <circle cx="40" cy="280" r="1.5" />
      <circle cx="370" cy="320" r="1" />
    </g>
    <!-- Vignette -->
    <rect x="0" y="0" width="400" height="400" fill="url(#horror-vignette)" opacity="0.5" />
    `;
  },
};
