import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  bite_wound: (c) => {
    const blood = c.blood ?? "#8B0000";
    return `
    <!-- Bite wound on right neck/jaw area -->
    <ellipse cx="238" cy="290" rx="14" ry="10" fill="${blood}" opacity="0.25" />
    <!-- Torn skin edges -->
    <path d="M226,284 Q232,280 238,283 Q244,280 250,284"
      stroke="${blood}" stroke-width="0.8" fill="none" opacity="0.5" />
    <path d="M228,296 Q235,300 242,296 Q248,300 252,296"
      stroke="${blood}" stroke-width="0.8" fill="none" opacity="0.5" />
    <!-- Puncture marks (teeth) -->
    <g fill="${blood}" opacity="0.4">
      <circle cx="232" cy="286" r="1.5" />
      <circle cx="238" cy="284" r="1.5" />
      <circle cx="244" cy="286" r="1.5" />
      <circle cx="234" cy="294" r="1.5" />
      <circle cx="242" cy="294" r="1.5" />
    </g>
    <!-- Blood drip -->
    <path d="M238,300 Q240,310 238,322 Q237,328 238,332"
      stroke="${blood}" stroke-width="1.5" fill="none" opacity="0.3" stroke-linecap="round" />
    <circle cx="238" cy="334" r="2" fill="${blood}" opacity="0.25" />
    <!-- Bruising around wound -->
    <ellipse cx="238" cy="290" rx="18" ry="14" fill="#4A2040" opacity="0.06" />
    `;
  },

  stitches: (c) => {
    const blood = c.blood ?? "#8B0000";
    return `
    <!-- Surgical stitches across left cheek -->
    <path d="M150,225 L160,220 L172,228 L180,222"
      stroke="#2A2A30" stroke-width="1.2" fill="none" stroke-linecap="round" />
    <!-- Stitch crosses -->
    <g stroke="${blood}" stroke-width="0.7" opacity="0.45" stroke-linecap="round">
      <line x1="153" y1="221" x2="157" y2="227" />
      <line x1="163" y1="217" x2="167" y2="224" />
      <line x1="174" y1="224" x2="178" y2="231" />
    </g>
    <!-- Wound redness beneath -->
    <path d="M150,225 L160,220 L172,228 L180,222"
      stroke="${blood}" stroke-width="3" fill="none" opacity="0.08" />
    <!-- Second stitch line on forehead -->
    <path d="M175,148 L190,145 L205,150"
      stroke="#2A2A30" stroke-width="1" fill="none" stroke-linecap="round" />
    <g stroke="${blood}" stroke-width="0.6" opacity="0.4" stroke-linecap="round">
      <line x1="180" y1="144" x2="183" y2="150" />
      <line x1="192" y1="143" x2="195" y2="149" />
    </g>
    `;
  },

  infection: (c) => {
    const blood = c.blood ?? "#8B0000";
    return `
    <!-- Spreading infection patches -->
    <g opacity="0.2">
      <!-- Right temple cluster -->
      <ellipse cx="250" cy="175" rx="10" ry="8" fill="${blood}" />
      <ellipse cx="256" cy="185" rx="7" ry="6" fill="${blood}" />
      <ellipse cx="248" cy="192" rx="5" ry="5" fill="${blood}" />
    </g>
    <!-- Infection veins radiating outward -->
    <g stroke="${blood}" stroke-width="0.5" fill="none" opacity="0.18">
      <path d="M250,175 Q258,168 264,160" />
      <path d="M256,185 Q264,184 270,180" />
      <path d="M248,192 Q255,200 258,210" />
      <path d="M245,178 Q238,175 232,178" />
    </g>
    <!-- Raised bumps / boils -->
    <g fill="${blood}" opacity="0.12">
      <circle cx="252" cy="178" r="3" />
      <circle cx="258" cy="188" r="2.5" />
      <circle cx="246" cy="190" r="2" />
    </g>
    <!-- Skin discoloration around infection -->
    <ellipse cx="252" cy="183" rx="18" ry="15" fill="#4A5A00" opacity="0.05" />
    `;
  },
};
