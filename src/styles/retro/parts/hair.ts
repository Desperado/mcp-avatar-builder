import type { PartRenderer } from "../../../types.js";

export const backVariants: Record<string, PartRenderer> = {
  feathered: (c) => `
    <!-- 80s feathered hair — big volume -->
    <path d="
      M130,140 Q128,105 140,85 Q160,68 200,64 Q240,68 260,85
      Q272,105 270,140
      L275,190 Q275,210 265,220
      L135,220 Q125,210 125,190Z
    " fill="${c.hair}" />
    <!-- Volume highlights -->
    <path d="M145,90 Q175,72 200,68 Q225,72 255,90"
      stroke="white" stroke-width="0.8" fill="none" opacity="0.08" />
    <path d="
      M130,140 Q128,105 140,85 Q160,68 200,64 Q240,68 260,85
      Q272,105 270,140
      L275,190 Q275,210 265,220
      L135,220 Q125,210 125,190Z
    " fill="url(#gradient-hair-warm)" />
  `,

  mullet: (c) => `
    <!-- Mullet — short on sides, long in back -->
    <path d="
      M142,135 Q140,110 150,95 Q166,82 200,78 Q234,82 250,95
      Q260,110 258,135
      L260,170 Q260,180 256,185 L144,185 Q140,180 140,170Z
    " fill="${c.hair}" />
    <!-- Long back section -->
    <path d="
      M148,185 Q145,220 150,260 Q155,290 165,310
      Q180,320 200,318 Q220,320 235,310
      Q245,290 250,260 Q255,220 252,185Z
    " fill="${c.hair}" />
    <!-- Sheen -->
    <path d="
      M148,185 Q145,220 150,260 Q155,290 165,310
      Q180,320 200,318 Q220,320 235,310
      Q245,290 250,260 Q255,220 252,185Z
    " fill="url(#gradient-hair-warm)" />
  `,

  shaved: (c) => `
    <!-- Buzzed/shaved (Eleven-style) -->
    <path d="
      M144,168 Q142,128 152,105 Q168,88 200,84 Q232,88 248,105
      Q258,128 256,168 L258,175 Q258,180 254,182 L146,182 Q142,180 142,175Z
    " fill="${c.hair}" opacity="0.3" />
    <!-- Stubble dots -->
    <g fill="${c.hair}" opacity="0.12">
      <circle cx="165" cy="110" r="0.8" />
      <circle cx="180" cy="102" r="0.8" />
      <circle cx="200" cy="98" r="0.8" />
      <circle cx="220" cy="102" r="0.8" />
      <circle cx="235" cy="110" r="0.8" />
      <circle cx="170" cy="125" r="0.8" />
      <circle cx="190" cy="118" r="0.8" />
      <circle cx="210" cy="118" r="0.8" />
      <circle cx="230" cy="125" r="0.8" />
    </g>
  `,

  ponytail: (c) => `
    <!-- High ponytail -->
    <path d="
      M140,140 Q138,110 148,92 Q164,78 200,74 Q236,78 252,92
      Q262,110 260,140 L262,175 Q262,182 256,185 L144,185 Q138,182 138,175Z
    " fill="${c.hair}" />
    <!-- Ponytail extending from top -->
    <path d="
      M195,76 Q200,70 205,76 Q210,72 215,80
      Q230,82 240,100 Q248,120 245,160
      Q242,200 235,230
      Q230,248 225,255
      Q220,250 218,238 Q222,200 225,160
      Q228,120 220,95
      Q210,80 200,78 Q190,80 195,76Z
    " fill="${c.hair}" />
    <!-- Hair band -->
    <ellipse cx="207" cy="78" rx="12" ry="5" fill="${c.hair}" stroke="#00000015" stroke-width="0.5" />
    <path d="
      M140,140 Q138,110 148,92 Q164,78 200,74 Q236,78 252,92
      Q262,110 260,140 L262,175 Q262,182 256,185 L144,185 Q138,182 138,175Z
    " fill="url(#gradient-hair-warm)" />
  `,
};

export const frontVariants: Record<string, PartRenderer> = {
  feathered: (c) => `
    <!-- Feathered front — big swooping bangs -->
    <path d="
      M138,135 Q140,100 152,88 Q170,74 200,70 Q230,74 248,88
      Q260,100 262,135
      L258,130 Q248,105 230,92 Q210,82 200,80 Q190,82 170,92
      Q152,105 142,130Z
    " fill="${c.hair}" />
    <!-- Side feathers -->
    <path d="M140,140 Q135,130 132,145 Q130,160 135,170" fill="${c.hair}" />
    <path d="M260,140 Q265,130 268,145 Q270,160 265,170" fill="${c.hair}" />
    <path d="
      M138,135 Q140,100 152,88 Q170,74 200,70 Q230,74 248,88
      Q260,100 262,135
      L258,130 Q248,105 230,92 Q210,82 200,80 Q190,82 170,92
      Q152,105 142,130Z
    " fill="url(#gradient-hair-warm)" />
  `,

  mullet: (c) => `
    <!-- Mullet front — short, textured bangs -->
    <path d="
      M148,130 Q150,100 162,90 Q178,80 200,78 Q222,80 238,90
      Q250,100 252,130
      L248,125 Q240,105 225,95 Q200,86 175,95 Q160,105 152,125Z
    " fill="${c.hair}" />
    <!-- Textured fringe strands -->
    <g fill="${c.hair}">
      <path d="M165,95 Q168,85 175,82 Q180,86 178,98Z" />
      <path d="M195,88 Q200,80 205,82 Q208,86 205,95Z" />
      <path d="M225,95 Q228,85 235,88 Q236,94 230,100Z" />
    </g>
  `,

  shaved: () => `
    <!-- Shaved — barely visible hairline -->
    <path d="M152,125 Q158,98 175,90 Q190,84 200,82 Q210,84 225,90 Q242,98 248,125"
      stroke="#00000006" stroke-width="1" fill="none" />
  `,

  ponytail: (c) => `
    <!-- Ponytail front — pulled back with face-framing wisps -->
    <path d="
      M148,132 Q150,105 162,92 Q178,80 200,76 Q222,80 238,92
      Q250,105 252,132
      L248,128 Q240,108 224,96 Q200,86 176,96 Q160,108 152,128Z
    " fill="${c.hair}" />
    <!-- Face-framing wisps -->
    <path d="M152,130 Q148,140 145,155" stroke="${c.hair}" stroke-width="2" fill="none" stroke-linecap="round" />
    <path d="M248,130 Q252,140 255,155" stroke="${c.hair}" stroke-width="2" fill="none" stroke-linecap="round" />
  `,
};
