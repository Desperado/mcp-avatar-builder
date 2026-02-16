import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  tshirt: (c) => `
    <!-- Simple t-shirt -->
    <path d="
      M155,340 Q155,330 160,320 Q170,305 188,298
      Q200,295 212,298 Q230,305 240,320 Q245,330 245,340
      L245,400 L155,400Z
    " fill="${c.accent ?? "#4A6A8A"}" />
    <!-- Collar -->
    <path d="M185,298 Q192,305 200,307 Q208,305 215,298"
      stroke="#00000015" stroke-width="1" fill="none" />
    <!-- Shirt highlight -->
    <path d="M168,315 Q175,310 188,305" stroke="white" stroke-width="0.5" fill="none" opacity="0.08" />
  `,

  jacket: (c) => `
    <!-- Casual jacket over shirt -->
    <!-- Inner shirt -->
    <path d="
      M165,340 Q165,330 170,322 Q178,310 190,302
      Q200,298 210,302 Q222,310 230,322 Q235,330 235,340
      L235,400 L165,400Z
    " fill="#2A2A2A" />
    <!-- Jacket -->
    <path d="
      M148,345 Q148,330 154,318 Q164,302 182,295
      Q192,292 200,292
      Q208,292 218,295 Q236,302 246,318 Q252,330 252,345
      L252,400 L148,400Z
    " fill="${c.accent ?? "#4A6A8A"}" />
    <!-- Jacket lapels -->
    <path d="M192,295 L185,330 L195,340" fill="#00000012" />
    <path d="M208,295 L215,330 L205,340" fill="#00000012" />
    <!-- Zipper line -->
    <line x1="200" y1="308" x2="200" y2="400" stroke="#00000015" stroke-width="0.8" />
  `,

  hoodie: (c) => `
    <!-- Cozy hoodie -->
    <path d="
      M150,345 Q150,328 156,316 Q166,300 184,293
      Q194,290 200,290
      Q206,290 216,293 Q234,300 244,316 Q250,328 250,345
      L250,400 L150,400Z
    " fill="${c.accent ?? "#4A6A8A"}" />
    <!-- Hood behind neck -->
    <path d="
      M168,300 Q160,295 155,300 Q148,310 150,320
      Q175,305 200,302 Q225,305 250,320
      Q252,310 245,300 Q240,295 232,300
    " fill="${c.accent ?? "#4A6A8A"}" />
    <path d="
      M168,300 Q160,295 155,300 Q148,310 150,320
    " stroke="#00000010" stroke-width="0.5" fill="none" />
    <path d="
      M232,300 Q240,295 245,300 Q252,310 250,320
    " stroke="#00000010" stroke-width="0.5" fill="none" />
    <!-- Hoodie strings -->
    <line x1="192" y1="308" x2="190" y2="340" stroke="#00000020" stroke-width="1" />
    <line x1="208" y1="308" x2="210" y2="340" stroke="#00000020" stroke-width="1" />
    <!-- Kangaroo pocket -->
    <path d="M175,365 Q175,358 185,355 L215,355 Q225,358 225,365 L225,385 L175,385Z"
      fill="#00000008" />
  `,

  apron: (c) => `
    <!-- Barista apron over shirt -->
    <!-- Base shirt -->
    <path d="
      M155,340 Q155,330 160,320 Q170,305 188,298
      Q200,295 212,298 Q230,305 240,320 Q245,330 245,340
      L245,400 L155,400Z
    " fill="#2A2A2A" />
    <!-- Apron -->
    <path d="
      M165,315 L165,400 L235,400 L235,315
      Q225,308 215,305 L185,305 Q175,308 165,315Z
    " fill="${c.accent ?? "#4A6A8A"}" />
    <!-- Apron neck strap -->
    <line x1="185" y1="305" x2="190" y2="295" stroke="${c.accent ?? "#4A6A8A"}" stroke-width="3" />
    <line x1="215" y1="305" x2="210" y2="295" stroke="${c.accent ?? "#4A6A8A"}" stroke-width="3" />
    <!-- Apron pocket -->
    <rect x="180" y="350" width="40" height="25" rx="2" fill="#00000010" />
  `,

  blazer: (c) => `
    <!-- Smart casual blazer -->
    <!-- Inner shirt -->
    <path d="
      M168,340 Q168,330 172,322 Q180,310 192,303
      Q200,300 208,303 Q220,310 228,322 Q232,330 232,340
      L232,400 L168,400Z
    " fill="white" opacity="0.9" />
    <!-- Blazer -->
    <path d="
      M145,348 Q145,328 152,315 Q162,298 182,290
      Q194,286 200,286
      Q206,286 218,290 Q238,298 248,315 Q255,328 255,348
      L255,400 L145,400Z
    " fill="${c.accent ?? "#4A6A8A"}" />
    <!-- Lapels -->
    <path d="M194,290 L182,325 L192,338" fill="#00000015" />
    <path d="M206,290 L218,325 L208,338" fill="#00000015" />
    <!-- Button -->
    <circle cx="200" cy="350" r="2.5" fill="#00000020" />
    <!-- Pocket square hint -->
    <path d="M160,320 L165,315 L170,320" fill="${c.warmth ?? "#D4891C"}" opacity="0.3" />
  `,
};
