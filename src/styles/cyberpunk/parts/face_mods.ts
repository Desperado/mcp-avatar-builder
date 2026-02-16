import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  neural_port: (c) => {
    const accent = c.accent ?? "#4A4A5A";
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- Neural port — circular implant on right temple -->
    <circle cx="255" cy="185" r="10" fill="${accent}" />
    <circle cx="255" cy="185" r="10" fill="url(#gradient-metal)" opacity="0.5" />
    <circle cx="255" cy="185" r="8" fill="#1A1A2E" />
    <circle cx="255" cy="185" r="6" fill="#0D0D18" />
    <!-- Port inner ring -->
    <circle cx="255" cy="185" r="4.5" fill="none" stroke="${accent}" stroke-width="0.8" />
    <!-- Port center LED -->
    <circle cx="255" cy="185" r="2" fill="${neon}" opacity="0.8" />
    <circle cx="255" cy="185" r="4" fill="${neon}" opacity="0.15" />
    <!-- Connection traces from port -->
    <g stroke="${neon}" stroke-width="0.6" fill="none" opacity="0.25">
      <path d="M265,185 L272,185 L278,180" />
      <path d="M265,188 L270,192 L275,192" />
      <path d="M255,175 L255,168 L260,162" />
    </g>
    <!-- Port mounting screws -->
    <circle cx="248" cy="178" r="1" fill="#666676" />
    <circle cx="262" cy="178" r="1" fill="#666676" />
    <circle cx="248" cy="192" r="1" fill="#666676" />
    <circle cx="262" cy="192" r="1" fill="#666676" />
    `;
  },

  led_tattoo: (c) => {
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- LED tattoo — circuit-like lines on left cheek and temple -->
    <g stroke="${neon}" stroke-width="1" fill="none" opacity="0.5" filter="url(#soft-glow)">
      <!-- Temple circuit -->
      <path d="M148,170 L142,175 L142,190 L148,195" />
      <path d="M142,180 L135,180 L130,185" />
      <!-- Cheek circuit -->
      <path d="M155,230 L150,238 L152,248 L160,252" />
      <path d="M150,238 L142,240" />
    </g>
    <!-- Circuit nodes (bright dots at junctions) -->
    <g fill="${neon}" opacity="0.7">
      <circle cx="148" cy="170" r="1.5" />
      <circle cx="142" cy="180" r="1.2" />
      <circle cx="148" cy="195" r="1.5" />
      <circle cx="130" cy="185" r="1" />
      <circle cx="155" cy="230" r="1.5" />
      <circle cx="152" cy="248" r="1.2" />
      <circle cx="160" cy="252" r="1.5" />
      <circle cx="142" cy="240" r="1" />
    </g>
    <!-- Subtle glow halos at main nodes -->
    <g fill="${neon}" opacity="0.1">
      <circle cx="148" cy="170" r="5" />
      <circle cx="148" cy="195" r="5" />
      <circle cx="155" cy="230" r="5" />
      <circle cx="160" cy="252" r="5" />
    </g>
    `;
  },

  jaw_plate: (c) => {
    const accent = c.accent ?? "#4A4A5A";
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- Cybernetic jaw plate — metal replacement on right jaw -->
    <path d="
      M218,272 Q225,265 240,260 Q252,258 258,265
      L260,280 Q258,295 248,300
      Q235,305 222,298
      L218,290Z
    " fill="${accent}" />
    <path d="
      M218,272 Q225,265 240,260 Q252,258 258,265
      L260,280 Q258,295 248,300
      Q235,305 222,298
      L218,290Z
    " fill="url(#gradient-metal)" opacity="0.5" />
    <!-- Plate edge -->
    <path d="
      M218,272 Q225,265 240,260 Q252,258 258,265
      L260,280 Q258,295 248,300
      Q235,305 222,298
      L218,290Z
    " fill="none" stroke="${accent}" stroke-width="0.6" opacity="0.5" />
    <!-- Plate seam lines -->
    <path d="M222,275 L252,268" stroke="#00000020" stroke-width="0.5" />
    <path d="M220,285 L255,280" stroke="#00000020" stroke-width="0.5" />
    <!-- Rivets -->
    <circle cx="225" cy="268" r="1.5" fill="#666676" />
    <circle cx="248" cy="263" r="1.5" fill="#666676" />
    <circle cx="255" cy="290" r="1.5" fill="#666676" />
    <circle cx="228" cy="295" r="1.5" fill="#666676" />
    <!-- LED strip along plate edge -->
    <path d="M220,272 Q230,267 242,262"
      stroke="${neon}" stroke-width="0.8" fill="none" opacity="0.3" />
    <!-- Ventilation slots -->
    <g stroke="#1A1A2E" stroke-width="1" opacity="0.4">
      <line x1="232" y1="278" x2="245" y2="275" />
      <line x1="230" y1="284" x2="248" y2="280" />
      <line x1="228" y1="290" x2="246" y2="286" />
    </g>
    `;
  },
};
