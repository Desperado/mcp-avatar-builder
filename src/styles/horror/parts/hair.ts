import type { PartRenderer } from "../../../types.js";

export const backVariants: Record<string, PartRenderer> = {
  military: (c) => `
    <path d="
      M144,140 Q142,118 150,100 Q164,86 200,82 Q236,86 250,100
      Q258,118 256,140 L260,172 Q260,180 255,183 L145,183 Q140,180 140,172Z
    " fill="${c.hair}" />
    <path d="
      M144,140 Q142,118 150,100 Q164,86 200,82 Q236,86 250,100
      Q258,118 256,140 L260,172 Q260,180 255,183 L145,183 Q140,180 140,172Z
    " fill="black" opacity="0.06" />
  `,

  messy: (c) => `
    <path d="
      M140,130 Q138,105 150,90 Q168,75 200,72 Q232,75 250,90
      Q262,105 260,130 L265,170 Q265,185 258,190
      L142,190 Q135,185 135,170Z
    " fill="${c.hair}" />
    <!-- Messy strands poking out -->
    <g stroke="${c.hair}" stroke-width="2" fill="none" stroke-linecap="round">
      <path d="M145,130 Q138,120 135,105" />
      <path d="M255,130 Q262,120 265,105" />
      <path d="M155,100 Q148,85 142,78" />
      <path d="M245,100 Q252,85 258,78" />
    </g>
    <path d="
      M140,130 Q138,105 150,90 Q168,75 200,72 Q232,75 250,90
      Q262,105 260,130 L265,170 Q265,185 258,190
      L142,190 Q135,185 135,170Z
    " fill="black" opacity="0.05" />
  `,

  slicked: (c) => `
    <path d="
      M142,145 Q140,115 150,95 Q166,80 200,76 Q234,80 250,95
      Q260,115 258,145
      L262,180 Q262,195 255,200
      Q230,205 200,205 Q170,205 145,200
      Q138,195 138,180Z
    " fill="${c.hair}" />
    <!-- Slick gel sheen -->
    <path d="M155,100 Q180,90 200,88 Q220,90 245,100"
      stroke="white" stroke-width="1" fill="none" opacity="0.08" />
    <path d="
      M142,145 Q140,115 150,95 Q166,80 200,76 Q234,80 250,95
      Q260,115 258,145
      L262,180 Q262,195 255,200
      Q230,205 200,205 Q170,205 145,200
      Q138,195 138,180Z
    " fill="black" opacity="0.05" />
  `,
};

export const frontVariants: Record<string, PartRenderer> = {
  military: (c) => `
    <!-- Military buzz — just a hairline -->
    <path d="M150,128 Q155,98 172,90 Q188,84 200,82 Q212,84 228,90 Q245,98 250,128"
      stroke="${c.hair}" stroke-width="3" fill="none" opacity="0.4" />
  `,

  messy: (c) => `
    <!-- Messy front strands falling over forehead -->
    <g fill="${c.hair}">
      <path d="M160,100 Q155,85 165,78 Q175,75 180,82 Q175,95 168,110Z" />
      <path d="M190,92 Q195,78 205,75 Q215,78 210,92 Q205,100 195,105Z" />
      <path d="M225,100 Q230,82 240,78 Q248,82 245,100 Q240,110 232,115Z" />
    </g>
    <!-- Strand shadows -->
    <g fill="black" opacity="0.04">
      <path d="M160,100 Q155,85 165,78 Q175,75 180,82 Q175,95 168,110Z" />
      <path d="M190,92 Q195,78 205,75 Q215,78 210,92 Q205,100 195,105Z" />
    </g>
  `,

  slicked: (c) => `
    <!-- Slicked back — clean hairline, combed back -->
    <path d="
      M148,140 Q146,110 155,95 Q170,82 200,78 Q230,82 245,95
      Q254,110 252,140
      L248,135 Q242,108 225,98 Q200,90 175,98 Q158,108 152,135Z
    " fill="${c.hair}" />
    <!-- Comb lines -->
    <g stroke="black" stroke-width="0.4" fill="none" opacity="0.08">
      <path d="M165,100 Q175,90 200,86" />
      <path d="M170,108 Q180,95 200,90" />
      <path d="M175,116 Q185,100 200,94" />
    </g>
  `,
};
