import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  none: () => `
    <!-- No effects -->
  `,

  rain: (c) => `
    <!-- Pouring rain overlay -->
    <g stroke="#88AACC" stroke-width="0.6" opacity="0.12">
      <line x1="50" y1="0" x2="38" y2="80" />
      <line x1="95" y1="10" x2="83" y2="90" />
      <line x1="140" y1="0" x2="128" y2="75" />
      <line x1="185" y1="15" x2="173" y2="85" />
      <line x1="230" y1="5" x2="218" y2="70" />
      <line x1="275" y1="0" x2="263" y2="80" />
      <line x1="320" y1="10" x2="308" y2="85" />
      <line x1="365" y1="0" x2="353" y2="75" />
      <line x1="70" y1="120" x2="58" y2="200" />
      <line x1="155" y1="110" x2="143" y2="190" />
      <line x1="250" y1="115" x2="238" y2="195" />
      <line x1="340" y1="105" x2="328" y2="185" />
      <line x1="30" y1="240" x2="18" y2="320" />
      <line x1="120" y1="235" x2="108" y2="310" />
      <line x1="210" y1="245" x2="198" y2="320" />
      <line x1="300" y1="230" x2="288" y2="310" />
      <line x1="380" y1="240" x2="368" y2="315" />
    </g>
    <!-- Rain mist at bottom -->
    <ellipse cx="200" cy="390" rx="200" ry="20" fill="${c.noir ?? "#38B8C8"}" opacity="0.02" />
  `,

  noir_grain: () => `
    <!-- Heavy film noir grain -->
    <rect width="400" height="400" filter="url(#film-grain)" opacity="0.06" />
  `,
};
