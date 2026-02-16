import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  round: (c) => `
    <!-- Round ears — raccoon / bear -->
    <ellipse cx="140" cy="120" rx="18" ry="20" fill="${c.skin}" />
    <ellipse cx="140" cy="120" rx="12" ry="14" fill="${c.skin}" />
    <ellipse cx="140" cy="120" rx="12" ry="14" fill="white" opacity="0.05" />
    <ellipse cx="260" cy="120" rx="18" ry="20" fill="${c.skin}" />
    <ellipse cx="260" cy="120" rx="12" ry="14" fill="${c.skin}" />
    <ellipse cx="260" cy="120" rx="12" ry="14" fill="white" opacity="0.05" />
  `,

  pointed: (c) => `
    <!-- Pointed ears — fox / wolf -->
    <path d="M140,140 L122,72 Q120,65 128,68 L150,115Z" fill="${c.skin}" />
    <path d="M140,135 L126,78 Q130,74 134,82 L145,118Z" fill="${c.skin}" />
    <path d="M140,135 L126,78 Q130,74 134,82 L145,118Z" fill="white" opacity="0.04" />
    <!-- Inner ear -->
    <path d="M138,130 L128,82 Q132,80 136,88 L142,120Z" fill="${c.noir ?? "#38B8C8"}" opacity="0.04" />
    <path d="M260,140 L278,72 Q280,65 272,68 L250,115Z" fill="${c.skin}" />
    <path d="M260,135 L274,78 Q270,74 266,82 L255,118Z" fill="${c.skin}" />
    <path d="M260,135 L274,78 Q270,74 266,82 L255,118Z" fill="white" opacity="0.04" />
    <path d="M262,130 L272,82 Q268,80 264,88 L258,120Z" fill="${c.noir ?? "#38B8C8"}" opacity="0.04" />
  `,

  tall: (c) => `
    <!-- Tall triangular ears — cat -->
    <path d="M145,138 L130,62 Q128,54 136,58 L155,112Z" fill="${c.skin}" />
    <path d="M145,132 L134,68 Q138,62 142,72 L150,116Z" fill="${c.skin}" />
    <path d="M145,132 L134,68 Q138,62 142,72 L150,116Z" fill="white" opacity="0.04" />
    <!-- Pink inner ear -->
    <path d="M144,126 L136,74 Q140,68 143,78 L148,114Z" fill="#C87878" opacity="0.08" />
    <path d="M255,138 L270,62 Q272,54 264,58 L245,112Z" fill="${c.skin}" />
    <path d="M255,132 L266,68 Q262,62 258,72 L250,116Z" fill="${c.skin}" />
    <path d="M255,132 L266,68 Q262,62 258,72 L250,116Z" fill="white" opacity="0.04" />
    <path d="M256,126 L264,74 Q260,68 257,78 L252,114Z" fill="#C87878" opacity="0.08" />
  `,

  tufted: (c) => `
    <!-- Tufted ears — lynx / wildcat -->
    <path d="M142,138 L128,70 Q126,62 134,66 L152,114Z" fill="${c.skin}" />
    <path d="M142,132 L132,76 Q136,70 140,80 L148,118Z" fill="white" opacity="0.04" />
    <!-- Ear tufts -->
    <path d="M128,70 Q124,58 126,50" stroke="${c.hair}" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <path d="M130,68 Q128,56 132,48" stroke="${c.hair}" stroke-width="1.5" fill="none" stroke-linecap="round" />
    <path d="M258,138 L272,70 Q274,62 266,66 L248,114Z" fill="${c.skin}" />
    <path d="M258,132 L268,76 Q264,70 260,80 L252,118Z" fill="white" opacity="0.04" />
    <path d="M272,70 Q276,58 274,50" stroke="${c.hair}" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <path d="M270,68 Q272,56 268,48" stroke="${c.hair}" stroke-width="1.5" fill="none" stroke-linecap="round" />
  `,

  folded: (c) => `
    <!-- Folded ears — dog / hound -->
    <path d="M132,150 Q122,135 118,155 Q114,175 122,190 Q128,195 136,185 Q140,170 138,155Z" fill="${c.skin}" />
    <path d="M124,160 Q122,170 125,182" stroke="white" stroke-width="0.5" fill="none" opacity="0.05" />
    <path d="M268,150 Q278,135 282,155 Q286,175 278,190 Q272,195 264,185 Q260,170 262,155Z" fill="${c.skin}" />
    <path d="M276,160 Q278,170 275,182" stroke="white" stroke-width="0.5" fill="none" opacity="0.05" />
  `,
};
