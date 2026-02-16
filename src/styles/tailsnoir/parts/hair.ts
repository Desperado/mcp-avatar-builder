import type { PartRenderer } from "../../../types.js";

export const backVariants: Record<string, PartRenderer> = {
  none: () => `
    <!-- No hair — natural fur only -->
  `,

  slicked: (c) => `
    <!-- Slicked back fur/hair -->
    <path d="
      M132,155 Q130,118 144,98 Q164,80 200,76 Q236,80 256,98
      Q270,118 268,155 L270,178 Q270,185 264,188 L136,188 Q130,185 130,178Z
    " fill="${c.hair}" />
    <path d="
      M132,155 Q130,118 144,98 Q164,80 200,76 Q236,80 256,98
      Q270,118 268,155
    " fill="url(#gradient-fur-sheen)" />
  `,

  headfur: (c) => `
    <!-- Messy head fur — natural animal look -->
    <path d="
      M130,155 Q126,115 142,92 Q162,74 200,70 Q238,74 258,92
      Q274,115 270,155
      L274,185 Q274,192 266,195 L134,195 Q126,192 126,185Z
    " fill="${c.hair}" />
    <!-- Tufts -->
    <path d="M165,78 Q168,68 175,64" stroke="${c.hair}" stroke-width="3" fill="none" stroke-linecap="round" />
    <path d="M200,72 Q200,60 204,56" stroke="${c.hair}" stroke-width="3" fill="none" stroke-linecap="round" />
    <path d="M235,78 Q232,68 225,64" stroke="${c.hair}" stroke-width="3" fill="none" stroke-linecap="round" />
    <path d="
      M130,155 Q126,115 142,92 Q162,74 200,70 Q238,74 258,92
      Q274,115 270,155
    " fill="url(#gradient-fur-sheen)" />
  `,
};

export const frontVariants: Record<string, PartRenderer> = {
  none: () => `
    <!-- No front hair -->
  `,

  slicked: (c) => `
    <!-- Slicked front — smooth, pulled back -->
    <path d="
      M136,148 Q138,112 152,96 Q170,82 200,78 Q230,82 248,96
      Q262,112 264,148
      L260,142 Q252,115 234,100 Q214,86 200,84 Q186,86 166,100
      Q148,115 140,142Z
    " fill="${c.hair}" />
    <path d="
      M136,148 Q138,112 152,96 Q170,82 200,78 Q230,82 248,96
      Q262,112 264,148
    " fill="url(#gradient-fur-sheen)" />
  `,

  headfur: (c) => `
    <!-- Messy front fur -->
    <path d="
      M134,150 Q136,110 150,92 Q168,78 200,74 Q232,78 250,92
      Q264,110 266,150
      L262,144 Q254,112 236,98 Q216,84 200,82 Q184,84 164,98
      Q146,112 138,144Z
    " fill="${c.hair}" />
    <!-- Choppy strands -->
    <g fill="${c.hair}">
      <path d="M162,96 Q166,84 174,80 Q178,86 175,100Z" />
      <path d="M195,88 Q200,76 206,78 Q208,84 204,96Z" />
      <path d="M232,96 Q228,84 222,80 Q218,86 220,100Z" />
    </g>
  `,
};
