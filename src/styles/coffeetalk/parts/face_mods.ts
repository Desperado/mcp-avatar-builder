import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  none: () => `
    <!-- No face modifications -->
  `,

  horns: (c) => `
    <!-- Small curved horns — demon/succubus -->
    <path d="
      M158,115 Q155,100 148,85 Q144,75 146,72
      Q150,70 154,78 Q160,90 162,108Z
    " fill="${c.warmth ?? "#D4891C"}" opacity="0.7" />
    <path d="M155,98 Q152,88 148,78" stroke="#00000015" stroke-width="0.5" fill="none" />
    <path d="
      M242,115 Q245,100 252,85 Q256,75 254,72
      Q250,70 246,78 Q240,90 238,108Z
    " fill="${c.warmth ?? "#D4891C"}" opacity="0.7" />
    <path d="M245,98 Q248,88 252,78" stroke="#00000015" stroke-width="0.5" fill="none" />
  `,

  fangs: () => `
    <!-- Subtle vampire/werewolf fangs -->
    <path d="M190,268 L188,278 Q189,280 190,278Z" fill="white" opacity="0.85" />
    <path d="M190,268 L188,278" stroke="#00000015" stroke-width="0.3" fill="none" />
    <path d="M210,268 L212,278 Q211,280 210,278Z" fill="white" opacity="0.85" />
    <path d="M210,268 L212,278" stroke="#00000015" stroke-width="0.3" fill="none" />
  `,

  freckles: (c) => `
    <!-- Warm freckles across cheeks and nose -->
    <g fill="${c.warmth ?? "#D4891C"}" opacity="0.15">
      <!-- Left cheek -->
      <circle cx="162" cy="232" r="1.5" />
      <circle cx="158" cy="238" r="1.2" />
      <circle cx="166" cy="237" r="1.3" />
      <circle cx="155" cy="228" r="1" />
      <circle cx="170" cy="230" r="1.1" />
      <circle cx="163" cy="242" r="1" />
      <!-- Bridge of nose -->
      <circle cx="195" cy="228" r="1" />
      <circle cx="200" cy="226" r="1.2" />
      <circle cx="205" cy="228" r="1" />
      <!-- Right cheek -->
      <circle cx="238" cy="232" r="1.5" />
      <circle cx="242" cy="238" r="1.2" />
      <circle cx="234" cy="237" r="1.3" />
      <circle cx="245" cy="228" r="1" />
      <circle cx="230" cy="230" r="1.1" />
      <circle cx="237" cy="242" r="1" />
    </g>
  `,

  scar: () => `
    <!-- Subtle facial scar — across cheek -->
    <path d="M240,210 Q248,225 244,245" stroke="#00000012" stroke-width="1" fill="none" stroke-linecap="round" />
    <path d="M241,215 L246,218" stroke="#00000008" stroke-width="0.5" fill="none" />
    <path d="M243,230 L248,232" stroke="#00000008" stroke-width="0.5" fill="none" />
  `,
};
