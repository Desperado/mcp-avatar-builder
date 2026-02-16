import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  none: () => "",

  dog_tags: (c) => {
    const atmosphere = c.atmosphere ?? "#6A6A70";
    return `
    <!-- Dog tags on chain -->
    <path d="M185,312 Q190,318 195,330 Q198,340 200,350"
      stroke="${atmosphere}" stroke-width="0.8" fill="none" opacity="0.4" />
    <path d="M215,312 Q210,318 205,330 Q202,340 200,350"
      stroke="${atmosphere}" stroke-width="0.8" fill="none" opacity="0.4" />
    <!-- Tag 1 -->
    <rect x="192" y="350" width="16" height="22" rx="2" fill="${atmosphere}" opacity="0.3" />
    <rect x="194" y="352" width="12" height="1" fill="white" opacity="0.06" />
    <rect x="194" y="355" width="10" height="1" fill="white" opacity="0.06" />
    <rect x="194" y="358" width="11" height="1" fill="white" opacity="0.06" />
    <!-- Tag notch -->
    <circle cx="200" y="352" r="1.5" fill="#1A1A20" opacity="0.3" />
    <!-- Tag 2 (slightly offset) -->
    <rect x="195" y="354" width="16" height="22" rx="2" fill="${atmosphere}" opacity="0.25"
      transform="rotate(8, 203, 365)" />
    <!-- Chain links shimmer -->
    <g fill="white" opacity="0.04">
      <circle cx="190" cy="320" r="1" />
      <circle cx="195" cy="335" r="1" />
      <circle cx="210" cy="320" r="1" />
    </g>
    `;
  },

  herb_vial: (c) => {
    const atmosphere = c.atmosphere ?? "#6A6A70";
    return `
    <!-- Herb vial on cord around neck -->
    <path d="M180,312 Q185,320 188,335 Q190,345 192,352"
      stroke="#4A3828" stroke-width="1" fill="none" opacity="0.3" />
    <path d="M220,312 Q215,320 212,335 Q210,345 208,352"
      stroke="#4A3828" stroke-width="1" fill="none" opacity="0.3" />
    <!-- Vial body -->
    <rect x="193" y="352" width="14" height="28" rx="3" fill="#2A4A20" opacity="0.35" />
    <!-- Glass highlight -->
    <rect x="195" y="354" width="3" height="24" rx="1" fill="white" opacity="0.06" />
    <!-- Cork stopper -->
    <rect x="194" y="349" width="12" height="5" rx="1" fill="#6A4A2A" opacity="0.4" />
    <!-- Green herbs inside -->
    <g fill="#4A8A30" opacity="0.2">
      <circle cx="200" cy="362" r="2" />
      <circle cx="198" cy="368" r="1.5" />
      <circle cx="202" cy="365" r="1.8" />
      <circle cx="199" cy="372" r="1.5" />
    </g>
    <!-- Liquid level -->
    <rect x="194" y="360" width="12" height="18" rx="2" fill="#3A6A28" opacity="0.1" />
    `;
  },
};
