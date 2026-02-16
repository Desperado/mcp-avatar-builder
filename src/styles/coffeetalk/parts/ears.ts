import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  human: (c) => `
    <!-- Standard human ears -->
    <path d="M130,192 Q122,182 120,197 Q118,212 126,217 Q130,212 132,202Z" fill="${c.skin}" />
    <path d="M124,197 Q122,202 125,210" stroke="#00000010" stroke-width="0.5" fill="none" />
    <path d="M270,192 Q278,182 280,197 Q282,212 274,217 Q270,212 268,202Z" fill="${c.skin}" />
    <path d="M276,197 Q278,202 275,210" stroke="#00000010" stroke-width="0.5" fill="none" />
  `,

  elf: (c) => `
    <!-- Elegant elven ears — long, swept back -->
    <path d="
      M128,186 Q120,176 100,148 Q90,132 87,125
      Q85,120 88,118 Q92,116 97,122
      Q110,140 122,160 Q126,170 128,186Z
    " fill="${c.skin}" />
    <path d="M122,165 Q110,145 97,125" stroke="#00000010" stroke-width="0.5" fill="none" />
    <!-- Inner ear warm glow -->
    <path d="M124,175 Q114,155 102,135 Q112,150 122,170Z" fill="${c.warmth ?? "#D4891C"}" opacity="0.08" />
    <path d="
      M272,186 Q280,176 300,148 Q310,132 313,125
      Q315,120 312,118 Q308,116 303,122
      Q290,140 278,160 Q274,170 272,186Z
    " fill="${c.skin}" />
    <path d="M278,165 Q290,145 303,125" stroke="#00000010" stroke-width="0.5" fill="none" />
    <path d="M276,175 Q286,155 298,135 Q288,150 278,170Z" fill="${c.warmth ?? "#D4891C"}" opacity="0.08" />
  `,

  cat: (c) => `
    <!-- Cat/nekomimi ears — triangular, perky -->
    <path d="
      M142,140 L124,78 Q122,70 129,73 L152,118Z
    " fill="${c.skin}" />
    <path d="
      M142,135 L128,82 Q132,78 136,88 L146,120Z
    " fill="${c.warmth ?? "#D4891C"}" opacity="0.15" />
    <!-- Fur tufts -->
    <path d="M126,80 Q124,76 129,73" stroke="${c.hair}" stroke-width="1.5" fill="none" />
    <path d="
      M258,140 L276,78 Q278,70 271,73 L248,118Z
    " fill="${c.skin}" />
    <path d="
      M258,135 L272,82 Q268,78 264,88 L254,120Z
    " fill="${c.warmth ?? "#D4891C"}" opacity="0.15" />
    <path d="M274,80 Q276,76 271,73" stroke="${c.hair}" stroke-width="1.5" fill="none" />
  `,

  fin: (c) => `
    <!-- Aquatic fin ears — mermaid/sea folk -->
    <path d="
      M126,182 Q112,172 100,157 Q92,147 90,152
      Q88,160 97,177 Q107,192 122,197Z
    " fill="${c.skin}" opacity="0.8" />
    <!-- Fin membrane detail -->
    <g stroke="${c.eyes}" stroke-width="0.4" opacity="0.2" fill="none">
      <path d="M122,187 Q110,174 100,160" />
      <path d="M124,192 Q114,180 104,167" />
      <path d="M120,182 Q107,170 97,157" />
    </g>
    <path d="
      M274,182 Q288,172 300,157 Q308,147 310,152
      Q312,160 303,177 Q293,192 278,197Z
    " fill="${c.skin}" opacity="0.8" />
    <g stroke="${c.eyes}" stroke-width="0.4" opacity="0.2" fill="none">
      <path d="M278,187 Q290,174 300,160" />
      <path d="M276,192 Q286,180 296,167" />
      <path d="M280,182 Q293,170 303,157" />
    </g>
  `,

  pointed: (c) => `
    <!-- Slightly pointed ears — werewolf/demon subtle -->
    <path d="
      M128,190 Q120,177 114,162 Q110,152 112,150
      Q115,148 118,154 Q124,167 129,182Z
    " fill="${c.skin}" />
    <path d="M122,170 Q118,160 115,152" stroke="#00000010" stroke-width="0.5" fill="none" />
    <path d="
      M272,190 Q280,177 286,162 Q290,152 288,150
      Q285,148 282,154 Q276,167 271,182Z
    " fill="${c.skin}" />
    <path d="M278,170 Q282,160 285,152" stroke="#00000010" stroke-width="0.5" fill="none" />
  `,
};
