import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  none: () => `
    <!-- No accessories -->
  `,

  fedora: (c) => `
    <!-- Noir fedora hat -->
    <!-- Hat brim -->
    <ellipse cx="200" cy="108" rx="80" ry="14" fill="${c.accent ?? "#3A3A42"}" />
    <ellipse cx="200" cy="108" rx="80" ry="14" fill="#00000010" />
    <!-- Hat crown -->
    <path d="
      M148,108 Q148,78 165,68 Q180,60 200,58
      Q220,60 235,68 Q252,78 252,108Z
    " fill="${c.accent ?? "#3A3A42"}" />
    <!-- Hat band -->
    <rect x="148" y="100" width="104" height="8" fill="${c.accent ?? "#3A3A42"}" />
    <rect x="148" y="100" width="104" height="8" fill="${c.noir ?? "#38B8C8"}" opacity="0.1" />
    <!-- Crown dent -->
    <path d="M170,72 Q185,68 200,70 Q215,68 230,72" stroke="#00000015" stroke-width="0.8" fill="none" />
    <!-- Brim shadow on face -->
    <path d="M140,115 Q170,125 200,128 Q230,125 260,115" fill="black" opacity="0.08" />
  `,

  badge: (c) => `
    <!-- Detective badge on chest -->
    <path d="
      M164,330 L170,322 L176,330 L184,326 L180,336
      L176,344 L170,340 L164,344 L160,336 L156,326Z
    " fill="${c.noir ?? "#38B8C8"}" opacity="0.3" />
    <circle cx="170" cy="334" r="4" fill="${c.noir ?? "#38B8C8"}" opacity="0.2" />
    <!-- Badge shine -->
    <path d="M166,328 L170,324" stroke="white" stroke-width="0.5" opacity="0.15" />
  `,

  glasses: (c) => `
    <!-- Round noir glasses -->
    <circle cx="175" cy="205" r="18" fill="none" stroke="${c.accent ?? "#3A3A42"}" stroke-width="2" opacity="0.7" />
    <circle cx="228" cy="205" r="18" fill="none" stroke="${c.accent ?? "#3A3A42"}" stroke-width="2" opacity="0.7" />
    <!-- Bridge -->
    <path d="M193,202 Q200,198 207,202" stroke="${c.accent ?? "#3A3A42"}" stroke-width="1.5" fill="none" opacity="0.7" />
    <!-- Lens tint -->
    <circle cx="175" cy="205" r="16" fill="${c.noir ?? "#38B8C8"}" opacity="0.04" />
    <circle cx="228" cy="205" r="16" fill="${c.noir ?? "#38B8C8"}" opacity="0.04" />
    <!-- Glint -->
    <path d="M164,198 Q168,194 172,196" stroke="white" stroke-width="0.5" fill="none" opacity="0.12" />
  `,

  scarf: (c) => `
    <!-- Dark scarf wrapped around neck -->
    <path d="
      M168,288 Q160,292 156,302 Q154,312 158,318
      Q178,308 200,305 Q222,308 242,318
      Q246,312 244,302 Q240,292 232,288
    " fill="${c.accent ?? "#3A3A42"}" opacity="0.8" />
    <g stroke="#00000008" stroke-width="0.5" fill="none">
      <path d="M166,296 Q184,292 200,294 Q216,292 234,296" />
      <path d="M162,306 Q182,300 200,302 Q218,300 238,306" />
    </g>
    <!-- Scarf tail -->
    <path d="M158,318 Q155,335 158,350 Q160,354 163,348 Q165,335 162,320"
      fill="${c.accent ?? "#3A3A42"}" opacity="0.7" />
  `,
};
