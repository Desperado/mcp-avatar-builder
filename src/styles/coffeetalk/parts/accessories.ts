import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  none: () => `
    <!-- No accessories -->
  `,

  glasses: (c) => `
    <!-- Round wire-frame glasses -->
    <circle cx="172" cy="207" r="20" fill="none" stroke="${c.accent ?? "#4A6A8A"}" stroke-width="1.5" opacity="0.6" />
    <circle cx="228" cy="207" r="20" fill="none" stroke="${c.accent ?? "#4A6A8A"}" stroke-width="1.5" opacity="0.6" />
    <!-- Bridge -->
    <path d="M192,204 Q200,200 208,204" stroke="${c.accent ?? "#4A6A8A"}" stroke-width="1.2" fill="none" opacity="0.6" />
    <!-- Lens reflection -->
    <path d="M160,198 Q165,194 170,196" stroke="white" stroke-width="0.5" fill="none" opacity="0.15" />
    <path d="M216,198 Q221,194 226,196" stroke="white" stroke-width="0.5" fill="none" opacity="0.15" />
  `,

  necklace: (c) => `
    <!-- Simple pendant necklace -->
    <path d="M175,298 Q180,310 200,315 Q220,310 225,298"
      stroke="${c.warmth ?? "#D4891C"}" stroke-width="1" fill="none" opacity="0.5" />
    <!-- Pendant -->
    <circle cx="200" cy="318" r="4" fill="${c.warmth ?? "#D4891C"}" opacity="0.5" />
    <circle cx="200" cy="318" r="2" fill="white" opacity="0.15" />
  `,

  scarf: (c) => `
    <!-- Cozy knit scarf -->
    <path d="
      M170,295 Q165,300 162,310 Q160,320 165,325
      Q180,315 200,312 Q220,315 235,325
      Q240,320 238,310 Q235,300 230,295
    " fill="${c.warmth ?? "#D4891C"}" opacity="0.7" />
    <!-- Scarf texture lines -->
    <g stroke="#00000010" stroke-width="0.5" fill="none">
      <path d="M170,302 Q185,298 200,300 Q215,298 230,302" />
      <path d="M168,310 Q184,306 200,308 Q216,306 232,310" />
      <path d="M170,318 Q185,314 200,316 Q215,314 230,318" />
    </g>
    <!-- Scarf tail -->
    <path d="M165,325 Q162,340 165,355 Q167,360 170,355 Q172,340 170,328"
      fill="${c.warmth ?? "#D4891C"}" opacity="0.6" />
  `,
};
