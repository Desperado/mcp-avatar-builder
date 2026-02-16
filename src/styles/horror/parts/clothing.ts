import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  tactical_vest: (c) => {
    const atmosphere = c.atmosphere ?? "#6A6A70";
    return `
    <!-- Base undershirt -->
    <path d="
      M118,348 Q122,332 145,324 Q170,316 200,312 Q230,316 255,324
      Q278,332 282,348 L288,400 L112,400Z
    " fill="#1A1A20" />
    <path d="M118,348 Q108,340 92,342 L82,400 L112,400Z" fill="#1A1A20" />
    <path d="M282,348 Q292,340 308,342 L318,400 L288,400Z" fill="#1A1A20" />
    <!-- Tactical vest -->
    <path d="
      M135,332 Q140,324 168,318 Q186,314 200,312 Q214,314 232,318
      Q260,324 265,332 L270,400 L130,400Z
    " fill="${c.clothing}" />
    <!-- Vest collar -->
    <path d="M172,316 Q185,310 200,308 Q215,310 228,316"
      stroke="${c.clothing}" stroke-width="3" fill="none" />
    <!-- Pocket pouches -->
    <rect x="142" y="344" width="32" height="26" rx="2" fill="${c.clothing}" stroke="${atmosphere}" stroke-width="0.6" />
    <rect x="226" y="344" width="32" height="26" rx="2" fill="${c.clothing}" stroke="${atmosphere}" stroke-width="0.6" />
    <!-- Pouch flaps -->
    <line x1="142" y1="352" x2="174" y2="352" stroke="${atmosphere}" stroke-width="1" />
    <line x1="226" y1="352" x2="258" y2="352" stroke="${atmosphere}" stroke-width="1" />
    <!-- MOLLE straps -->
    <g stroke="${atmosphere}" stroke-width="0.4" opacity="0.3">
      <line x1="142" y1="378" x2="174" y2="378" />
      <line x1="142" y1="384" x2="174" y2="384" />
      <line x1="226" y1="378" x2="258" y2="378" />
      <line x1="226" y1="384" x2="258" y2="384" />
    </g>
    <!-- Center zipper -->
    <line x1="200" y1="318" x2="200" y2="400" stroke="${atmosphere}" stroke-width="0.6" opacity="0.3" />
    `;
  },

  lab_coat: (c) => {
    const atmosphere = c.atmosphere ?? "#6A6A70";
    const blood = c.blood ?? "#8B0000";
    return `
    <!-- Lab coat -->
    <path d="
      M115,348 Q120,330 148,322 Q172,315 200,312 Q228,315 252,322
      Q280,330 285,348 L290,400 L110,400Z
    " fill="#D8D4CC" />
    <!-- Sleeves -->
    <path d="M115,348 Q105,340 88,342 L78,400 L110,400Z" fill="#D8D4CC" />
    <path d="M285,348 Q295,340 312,342 L322,400 L290,400Z" fill="#D8D4CC" />
    <!-- Lapels -->
    <path d="M175,312 Q180,316 185,330 L200,340 L215,330 Q220,316 225,312"
      stroke="#C8C4BC" stroke-width="1" fill="#D0CCC4" />
    <!-- Breast pocket -->
    <rect x="145" y="340" width="28" height="20" rx="1" fill="none" stroke="#C0BCB4" stroke-width="0.5" />
    <!-- Pen in pocket -->
    <line x1="155" y1="338" x2="155" y2="348" stroke="${atmosphere}" stroke-width="1.5" />
    <circle cx="155" cy="337" r="1.5" fill="${atmosphere}" />
    <!-- Blood stains -->
    <g fill="${blood}" opacity="0.12">
      <ellipse cx="230" cy="365" rx="12" ry="8" />
      <ellipse cx="165" cy="385" rx="8" ry="6" />
      <circle cx="240" cy="380" r="5" />
    </g>
    <!-- Blood drip -->
    <path d="M232,370 Q234,378 232,388" stroke="${blood}" stroke-width="1" fill="none" opacity="0.1" />
    <!-- Seam lines -->
    <g stroke="#00000008" stroke-width="0.5" fill="none">
      <path d="M200,312 L200,400" />
      <path d="M160,320 L148,400" />
      <path d="M240,320 L252,400" />
    </g>
    `;
  },

  jumpsuit: (c) => {
    const atmosphere = c.atmosphere ?? "#6A6A70";
    return `
    <!-- Utility jumpsuit (Nostromo/RPD style) -->
    <path d="
      M118,348 Q122,332 148,324 Q172,316 200,312 Q228,316 252,324
      Q278,332 282,348 L288,400 L112,400Z
    " fill="${c.clothing}" />
    <!-- Sleeves -->
    <path d="M118,348 Q108,340 92,342 L82,400 L112,400Z" fill="${c.clothing}" />
    <path d="M282,348 Q292,340 308,342 L318,400 L288,400Z" fill="${c.clothing}" />
    <!-- Collar -->
    <path d="M170,316 Q180,308 200,306 Q220,308 230,316"
      stroke="${c.clothing}" stroke-width="2.5" fill="none" />
    <!-- Front zip -->
    <line x1="200" y1="312" x2="200" y2="400" stroke="${atmosphere}" stroke-width="1" opacity="0.25" />
    <!-- Name patch -->
    <rect x="215" y="335" width="38" height="14" rx="1" fill="${atmosphere}" opacity="0.15" />
    <!-- Shoulder patches -->
    <ellipse cx="148" cy="330" rx="10" ry="8" fill="${atmosphere}" opacity="0.1" />
    <ellipse cx="252" cy="330" rx="10" ry="8" fill="${atmosphere}" opacity="0.1" />
    <!-- Utility belt -->
    <rect x="130" y="375" width="140" height="6" fill="${atmosphere}" opacity="0.2" />
    <rect x="195" y="373" width="10" height="10" rx="1" fill="${atmosphere}" opacity="0.25" />
    <!-- Seam details -->
    <g stroke="#00000008" stroke-width="0.5">
      <path d="M162,322 L150,400" />
      <path d="M238,322 L250,400" />
    </g>
    `;
  },
};
