import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  none: () => "",

  headband: (c) => {
    const retro = c.retro ?? "#FF6B35";
    return `
    <!-- Athletic headband -->
    <path d="
      M142,155 Q144,148 155,142 Q175,134 200,132 Q225,134 245,142
      Q256,148 258,155
      Q256,162 245,168 Q225,175 200,176 Q175,175 155,168
      Q144,162 142,155Z
    " fill="${retro}" opacity="0.7" />
    <!-- Headband texture stripe -->
    <path d="
      M145,155 Q148,149 158,144 Q178,136 200,134 Q222,136 242,144
      Q252,149 255,155
    " stroke="white" stroke-width="1.5" fill="none" opacity="0.1" />
    <!-- Side fold wrinkle -->
    <path d="M145,152 Q148,155 145,158" stroke="#00000015" stroke-width="0.5" fill="none" />
    <path d="M255,152 Q252,155 255,158" stroke="#00000015" stroke-width="0.5" fill="none" />
    <!-- Knot at back -->
    <ellipse cx="142" cy="156" rx="4" ry="3" fill="${retro}" opacity="0.6" />
    `;
  },

  shades: (c) => {
    const accent = c.accent ?? "#4A6A8A";
    return `
    <!-- Aviator sunglasses -->
    <!-- Bridge -->
    <path d="M185,210 Q192,206 200,205 Q208,206 215,210"
      stroke="${accent}" stroke-width="1.5" fill="none" />
    <!-- Left lens -->
    <path d="
      M148,210 Q150,200 165,196 Q180,194 185,200
      L188,210 Q188,228 180,235 Q170,240 158,238 Q148,232 146,220Z
    " fill="#1A1A2A" opacity="0.8" />
    <!-- Right lens -->
    <path d="
      M252,210 Q250,200 235,196 Q220,194 215,200
      L212,210 Q212,228 220,235 Q230,240 242,238 Q252,232 254,220Z
    " fill="#1A1A2A" opacity="0.8" />
    <!-- Lens glare -->
    <path d="M155,208 Q162,202 170,204" stroke="white" stroke-width="0.8" fill="none" opacity="0.15" />
    <path d="M245,208 Q238,202 230,204" stroke="white" stroke-width="0.8" fill="none" opacity="0.15" />
    <!-- Frame -->
    <path d="
      M148,210 Q150,200 165,196 Q180,194 185,200
      L188,210 Q188,228 180,235 Q170,240 158,238 Q148,232 146,220Z
    " fill="none" stroke="${accent}" stroke-width="1.2" />
    <path d="
      M252,210 Q250,200 235,196 Q220,194 215,200
      L212,210 Q212,228 220,235 Q230,240 242,238 Q252,232 254,220Z
    " fill="none" stroke="${accent}" stroke-width="1.2" />
    <!-- Temple arms -->
    <path d="M148,210 Q140,208 130,210" stroke="${accent}" stroke-width="1.2" fill="none" />
    <path d="M252,210 Q260,208 270,210" stroke="${accent}" stroke-width="1.2" fill="none" />
    `;
  },
};
