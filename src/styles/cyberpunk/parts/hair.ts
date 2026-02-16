import type { PartRenderer } from "../../../types.js";

// hair_back renders behind the head
export const backVariants: Record<string, PartRenderer> = {
  mohawk: (c) => `
    <!-- Mohawk back — tall swept ridge -->
    <path d="
      M185,85 Q190,40 200,25 Q210,40 215,85
      Q220,80 218,95
      L200,90
      L182,95
      Q180,80 185,85Z
    " fill="${c.hair}" />
    <path d="
      M185,85 Q190,40 200,25 Q210,40 215,85
      Q220,80 218,95 L200,90 L182,95 Q180,80 185,85Z
    " fill="url(#gradient-hair-sheen)" />
  `,

  undercut: (c) => `
    <!-- Undercut back — short sides, volume on top -->
    <path d="
      M145,140 Q142,120 148,105 Q160,90 200,85 Q240,90 252,105
      Q258,120 255,140 L260,170 Q260,180 255,185
      L145,185 Q140,180 140,170Z
    " fill="${c.hair}" />
    <!-- Shaved side texture (left) -->
    <g stroke="${c.hair}" stroke-width="0.5" opacity="0.3">
      <line x1="143" y1="145" x2="155" y2="142" />
      <line x1="142" y1="152" x2="154" y2="149" />
      <line x1="142" y1="159" x2="153" y2="156" />
      <line x1="141" y1="166" x2="153" y2="163" />
    </g>
    <!-- Shaved side texture (right) -->
    <g stroke="${c.hair}" stroke-width="0.5" opacity="0.3">
      <line x1="245" y1="142" x2="257" y2="145" />
      <line x1="246" y1="149" x2="258" y2="152" />
      <line x1="247" y1="156" x2="258" y2="159" />
      <line x1="247" y1="163" x2="259" y2="166" />
    </g>
    <path d="
      M145,140 Q142,120 148,105 Q160,90 200,85 Q240,90 252,105
      Q258,120 255,140 L260,170 Q260,180 255,185
      L145,185 Q140,180 140,170Z
    " fill="url(#gradient-hair-sheen)" />
  `,

  wired: (c) => {
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- Wired hair back — cables and strands -->
    <path d="
      M148,120 Q145,100 155,90 Q175,78 200,75 Q225,78 245,90
      Q255,100 252,120
      L258,160 Q260,175 255,185
      L145,185 Q140,175 142,160Z
    " fill="${c.hair}" />
    <path d="
      M148,120 Q145,100 155,90 Q175,78 200,75 Q225,78 245,90
      Q255,100 252,120
      L258,160 Q260,175 255,185
      L145,185 Q140,175 142,160Z
    " fill="url(#gradient-hair-sheen)" />
    <!-- Neon wire strands -->
    <g stroke="${neon}" stroke-width="1" fill="none" opacity="0.4">
      <path d="M160,90 Q155,120 150,170 Q148,190 140,210" />
      <path d="M240,90 Q245,120 250,170 Q252,190 260,210" />
      <path d="M170,82 Q162,130 155,185 Q150,200 145,220" />
    </g>
    <!-- Wire glow -->
    <g stroke="${neon}" stroke-width="3" fill="none" opacity="0.08">
      <path d="M160,90 Q155,120 150,170 Q148,190 140,210" />
      <path d="M240,90 Q245,120 250,170 Q252,190 260,210" />
    </g>
    `;
  },

  shaved: (c) => `
    <!-- Shaved/buzz cut back — minimal, shows scalp -->
    <path d="
      M142,170 Q140,125 150,100 Q165,85 200,82 Q235,85 250,100
      Q260,125 258,170
      L260,175 Q260,180 255,182
      L145,182 Q140,180 140,175Z
    " fill="${c.hair}" opacity="0.4" />
    <!-- Stubble texture -->
    <g fill="${c.hair}" opacity="0.15">
      <circle cx="160" cy="110" r="0.8" />
      <circle cx="170" cy="105" r="0.8" />
      <circle cx="180" cy="100" r="0.8" />
      <circle cx="190" cy="98" r="0.8" />
      <circle cx="200" cy="97" r="0.8" />
      <circle cx="210" cy="98" r="0.8" />
      <circle cx="220" cy="100" r="0.8" />
      <circle cx="230" cy="105" r="0.8" />
      <circle cx="240" cy="110" r="0.8" />
      <circle cx="165" cy="120" r="0.8" />
      <circle cx="185" cy="115" r="0.8" />
      <circle cx="215" cy="115" r="0.8" />
      <circle cx="235" cy="120" r="0.8" />
    </g>
  `,
};

// hair_front renders on top of everything
export const frontVariants: Record<string, PartRenderer> = {
  mohawk: (c) => {
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- Mohawk front — dramatic ridge -->
    <path d="
      M180,100 Q185,55 190,35 Q195,20 200,15
      Q205,20 210,35 Q215,55 220,100
      L218,105 Q200,98 182,105Z
    " fill="${c.hair}" />
    <!-- Hair strand detail -->
    <path d="M192,35 Q197,50 195,80" stroke="${c.hair}" stroke-width="2" fill="none" opacity="0.3" />
    <path d="M208,35 Q203,50 205,80" stroke="${c.hair}" stroke-width="2" fill="none" opacity="0.3" />
    <!-- Neon tip highlight -->
    <path d="M195,20 Q200,12 205,20" stroke="${neon}" stroke-width="1" fill="none" opacity="0.3" />
    <!-- Sheen -->
    <path d="
      M180,100 Q185,55 190,35 Q195,20 200,15
      Q205,20 210,35 Q215,55 220,100
      L218,105 Q200,98 182,105Z
    " fill="url(#gradient-hair-sheen)" />
    `;
  },

  undercut: (c) => `
    <!-- Undercut front — swept volume -->
    <path d="
      M150,140 Q148,115 155,100 Q168,88 200,84 Q232,88 245,100
      Q252,115 250,140
      L248,138 Q240,120 220,112 Q200,108 180,112 Q160,120 152,138Z
    " fill="${c.hair}" />
    <!-- Swept fringe -->
    <path d="
      M155,135 Q160,105 175,95 Q190,88 200,87
      Q210,88 225,95 Q240,105 245,135
      L240,130 Q232,108 215,100 Q200,96 185,100 Q168,108 160,130Z
    " fill="${c.hair}" />
    <path d="
      M155,135 Q160,105 175,95 Q190,88 200,87
      Q210,88 225,95 Q240,105 245,135
      L240,130 Q232,108 215,100 Q200,96 185,100 Q168,108 160,130Z
    " fill="url(#gradient-hair-sheen)" />
    <!-- Parting line -->
    <path d="M200,87 Q198,100 195,120" stroke="#00000015" stroke-width="0.8" fill="none" />
  `,

  wired: (c) => {
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- Wired front — cable-like strands -->
    <path d="
      M155,120 Q152,100 160,90 Q175,78 200,75
      Q225,78 240,90 Q248,100 245,120
      L242,115 Q235,95 215,88 Q200,84 185,88 Q165,95 158,115Z
    " fill="${c.hair}" />
    <path d="
      M155,120 Q152,100 160,90 Q175,78 200,75
      Q225,78 240,90 Q248,100 245,120
      L242,115 Q235,95 215,88 Q200,84 185,88 Q165,95 158,115Z
    " fill="url(#gradient-hair-sheen)" />
    <!-- Front wire strands falling over forehead -->
    <g stroke="${c.hair}" stroke-width="2.5" fill="none" stroke-linecap="round">
      <path d="M175,85 Q168,110 165,140 Q162,160 158,175" />
      <path d="M185,82 Q180,105 178,130" />
    </g>
    <!-- Neon wire accents -->
    <g stroke="${neon}" stroke-width="0.8" fill="none" opacity="0.5">
      <path d="M175,85 Q168,110 165,140 Q162,160 158,175" />
    </g>
    `;
  },

  shaved: () => `
    <!-- Shaved front — minimal, just hairline definition -->
    <path d="M150,130 Q155,100 170,92 Q185,86 200,84 Q215,86 230,92 Q245,100 250,130"
      stroke="#00000008" stroke-width="1" fill="none" />
  `,
};
