import type { PartRenderer } from "../../../types.js";

export const backVariants: Record<string, PartRenderer> = {
  short: (c) => `
    <!-- Short hair back -->
    <path d="
      M138,150 Q136,115 148,95 Q165,78 200,74 Q235,78 252,95
      Q264,115 262,150 L264,180 Q264,188 258,190 L142,190 Q136,188 136,180Z
    " fill="${c.hair}" />
    <path d="
      M138,150 Q136,115 148,95 Q165,78 200,74 Q235,78 252,95
      Q264,115 262,150 L264,180 Q264,188 258,190 L142,190 Q136,188 136,180Z
    " fill="url(#gradient-hair-sheen)" />
  `,

  messy: (c) => `
    <!-- Messy, textured hair back — volume -->
    <path d="
      M130,150 Q126,110 142,88 Q162,68 200,64 Q238,68 258,88
      Q274,110 270,150
      L275,195 Q275,210 265,215 L135,215 Q125,210 125,195Z
    " fill="${c.hair}" />
    <!-- Messy strands sticking out -->
    <path d="M132,130 Q125,120 128,108" stroke="${c.hair}" stroke-width="4" fill="none" stroke-linecap="round" />
    <path d="M268,125 Q276,115 274,102" stroke="${c.hair}" stroke-width="4" fill="none" stroke-linecap="round" />
    <path d="M200,66 Q198,56 202,50" stroke="${c.hair}" stroke-width="3" fill="none" stroke-linecap="round" />
    <path d="
      M130,150 Q126,110 142,88 Q162,68 200,64 Q238,68 258,88
      Q274,110 270,150
      L275,195 Q275,210 265,215 L135,215 Q125,210 125,195Z
    " fill="url(#gradient-hair-sheen)" />
  `,

  long: (c) => `
    <!-- Long flowing hair back -->
    <path d="
      M128,145 Q124,108 140,85 Q160,65 200,60 Q240,65 260,85
      Q276,108 272,145
      L278,220 Q280,280 270,320 Q260,350 240,360
      Q220,365 200,362 Q180,365 160,360
      Q140,350 130,320 Q120,280 122,220Z
    " fill="${c.hair}" />
    <path d="
      M128,145 Q124,108 140,85 Q160,65 200,60 Q240,65 260,85
      Q276,108 272,145
      L278,220 Q280,280 270,320 Q260,350 240,360
      Q220,365 200,362 Q180,365 160,360
      Q140,350 130,320 Q120,280 122,220Z
    " fill="url(#gradient-hair-sheen)" />
    <!-- Strand details -->
    <path d="M145,200 Q142,260 148,310" stroke="white" stroke-width="0.5" fill="none" opacity="0.06" />
    <path d="M255,200 Q258,260 252,310" stroke="white" stroke-width="0.5" fill="none" opacity="0.06" />
  `,

  styled: (c) => `
    <!-- Styled/swept back hair -->
    <path d="
      M135,155 Q132,115 145,92 Q165,74 200,70 Q235,74 255,92
      Q268,115 265,155
      L268,190 Q268,200 260,205
      L140,205 Q132,200 132,190Z
    " fill="${c.hair}" />
    <!-- Volume on one side -->
    <path d="M130,140 Q125,120 128,100 Q132,88 142,80" fill="${c.hair}" />
    <path d="
      M135,155 Q132,115 145,92 Q165,74 200,70 Q235,74 255,92
      Q268,115 265,155
      L268,190 Q268,200 260,205
      L140,205 Q132,200 132,190Z
    " fill="url(#gradient-hair-sheen)" />
  `,

  dreadlocks: (c) => `
    <!-- Dreadlocks back — thick rope-like strands -->
    <path d="
      M132,150 Q128,112 142,90 Q162,72 200,68 Q238,72 258,90
      Q272,112 268,150 L270,185 Q270,195 264,198 L136,198 Q130,195 130,185Z
    " fill="${c.hair}" />
    <!-- Individual dreadlock strands hanging down -->
    <g fill="${c.hair}">
      <path d="M140,195 Q135,240 132,290 Q130,320 135,340 Q138,345 142,340 Q145,320 144,290 Q146,240 148,195Z" />
      <path d="M155,198 Q152,250 150,300 Q148,335 153,355 Q156,360 160,355 Q162,335 160,300 Q162,250 165,198Z" />
      <path d="M240,198 Q238,250 240,300 Q238,335 243,355 Q246,360 250,355 Q252,335 250,300 Q252,250 255,198Z" />
      <path d="M258,195 Q262,240 264,290 Q266,320 262,340 Q259,345 255,340 Q253,320 254,290 Q252,240 250,195Z" />
    </g>
    <path d="
      M132,150 Q128,112 142,90 Q162,72 200,68 Q238,72 258,90
      Q272,112 268,150 L270,185 Q270,195 264,198 L136,198 Q130,195 130,185Z
    " fill="url(#gradient-hair-sheen)" />
  `,
};

export const frontVariants: Record<string, PartRenderer> = {
  short: (c) => `
    <!-- Short hair front — neat fringe -->
    <path d="
      M142,145 Q144,110 156,95 Q172,82 200,78 Q228,82 244,95
      Q256,110 258,145
      L254,140 Q246,112 230,98 Q210,86 200,84 Q190,86 170,98
      Q154,112 146,140Z
    " fill="${c.hair}" />
    <path d="
      M142,145 Q144,110 156,95 Q172,82 200,78 Q228,82 244,95
      Q256,110 258,145
      L254,140 Q246,112 230,98 Q210,86 200,84 Q190,86 170,98
      Q154,112 146,140Z
    " fill="url(#gradient-hair-sheen)" />
  `,

  messy: (c) => `
    <!-- Messy front bangs — asymmetric, choppy -->
    <path d="
      M135,148 Q138,105 152,88 Q172,72 200,68 Q228,72 248,88
      Q262,105 265,148
      L260,142 Q250,108 232,92 Q210,78 200,76 Q190,78 168,92
      Q150,108 140,142Z
    " fill="${c.hair}" />
    <!-- Choppy bang strands -->
    <g fill="${c.hair}">
      <path d="M158,100 Q162,88 170,82 Q174,88 172,102Z" />
      <path d="M190,92 Q195,80 202,78 Q206,82 204,96Z" />
      <path d="M230,100 Q234,88 240,85 Q242,92 238,105Z" />
    </g>
    <!-- Side wisps -->
    <path d="M133,150 Q128,140 126,155 Q125,165 130,172" fill="${c.hair}" />
    <path d="M267,150 Q272,140 274,155 Q275,165 270,172" fill="${c.hair}" />
  `,

  long: (c) => `
    <!-- Long hair front — face-framing layers -->
    <path d="
      M132,145 Q134,105 148,88 Q166,72 200,68 Q234,72 252,88
      Q266,105 268,145
      L264,140 Q256,108 238,92 Q218,78 200,76 Q182,78 162,92
      Q144,108 136,140Z
    " fill="${c.hair}" />
    <!-- Long face-framing strands -->
    <path d="M136,145 Q130,175 128,210 Q126,240 130,260"
      stroke="${c.hair}" stroke-width="8" fill="none" stroke-linecap="round" />
    <path d="M264,145 Q270,175 272,210 Q274,240 270,260"
      stroke="${c.hair}" stroke-width="8" fill="none" stroke-linecap="round" />
    <path d="
      M132,145 Q134,105 148,88 Q166,72 200,68 Q234,72 252,88
      Q266,105 268,145
    " fill="url(#gradient-hair-sheen)" />
  `,

  styled: (c) => `
    <!-- Styled front — swept to one side -->
    <path d="
      M138,148 Q140,108 154,92 Q172,78 200,74 Q228,78 246,92
      Q260,108 262,148
      L258,142 Q250,110 234,96 Q214,82 200,80 Q186,82 166,96
      Q150,110 142,142Z
    " fill="${c.hair}" />
    <!-- Dramatic side sweep -->
    <path d="M142,130 Q136,118 130,125 Q126,135 128,148 Q130,158 136,162"
      fill="${c.hair}" />
    <path d="
      M138,148 Q140,108 154,92 Q172,78 200,74 Q228,78 246,92
      Q260,108 262,148
    " fill="url(#gradient-hair-sheen)" />
  `,

  dreadlocks: (c) => `
    <!-- Dreadlocks front — thick ropes framing face -->
    <path d="
      M136,150 Q138,112 150,95 Q168,78 200,74 Q232,78 250,95
      Q262,112 264,150
      L260,145 Q252,115 236,100 Q216,85 200,82 Q184,85 164,100
      Q148,115 140,145Z
    " fill="${c.hair}" />
    <!-- Front dread strands -->
    <path d="M140,150 Q135,165 132,185 Q130,200 134,210"
      stroke="${c.hair}" stroke-width="6" fill="none" stroke-linecap="round" />
    <path d="M260,150 Q265,165 268,185 Q270,200 266,210"
      stroke="${c.hair}" stroke-width="6" fill="none" stroke-linecap="round" />
  `,
};
