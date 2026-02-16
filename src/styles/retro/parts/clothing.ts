import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  denim_jacket: (c) => {
    const accent = c.accent ?? "#4A6A8A";
    return `
    <!-- Denim jacket -->
    <path d="
      M118,345 Q122,330 148,322 Q172,315 200,312 Q228,315 252,322
      Q278,330 282,345 L288,400 L112,400Z
    " fill="${accent}" />
    <!-- Sleeves -->
    <path d="M118,345 Q108,338 92,340 L82,400 L112,400Z" fill="${accent}" />
    <path d="M282,345 Q292,338 308,340 L318,400 L288,400Z" fill="${accent}" />
    <!-- Denim texture gradient -->
    <path d="
      M118,345 Q122,330 148,322 Q172,315 200,312 Q228,315 252,322
      Q278,330 282,345 L288,400 L112,400Z
    " fill="url(#gradient-denim)" opacity="0.3" />
    <!-- Collar — turned up -->
    <path d="
      M168,316 Q172,304 182,300 Q200,294 218,300 Q228,304 232,316
      L226,318 Q220,306 200,302 Q180,306 174,318Z
    " fill="${accent}" />
    <!-- Lapel fold lines -->
    <path d="M174,316 Q180,310 188,322" stroke="white" stroke-width="0.5" fill="none" opacity="0.06" />
    <path d="M226,316 Q220,310 212,322" stroke="white" stroke-width="0.5" fill="none" opacity="0.06" />
    <!-- Button placket -->
    <line x1="200" y1="318" x2="200" y2="400" stroke="#00000015" stroke-width="1" />
    <!-- Buttons -->
    <g fill="#C0C0C0" opacity="0.3">
      <circle cx="200" cy="335" r="2.5" />
      <circle cx="200" cy="355" r="2.5" />
      <circle cx="200" cy="375" r="2.5" />
    </g>
    <!-- Chest pockets -->
    <path d="M150,340 L150,362 L178,362 L178,340Z" fill="none" stroke="#00000012" stroke-width="0.6" />
    <path d="M222,340 L222,362 L250,362 L250,340Z" fill="none" stroke="#00000012" stroke-width="0.6" />
    <!-- Pocket flap V -->
    <path d="M150,340 L164,348 L178,340" stroke="#00000012" stroke-width="0.6" fill="${accent}" />
    <path d="M222,340 L236,348 L250,340" stroke="#00000012" stroke-width="0.6" fill="${accent}" />
    `;
  },

  hawkins_tee: (c) => {
    const retro = c.retro ?? "#FF6B35";
    return `
    <!-- Graphic t-shirt -->
    <path d="
      M125,345 Q128,330 152,322 Q175,315 200,312 Q225,315 248,322
      Q272,330 275,345 L280,400 L120,400Z
    " fill="${c.clothing}" />
    <!-- Short sleeves -->
    <path d="M125,345 Q115,338 100,340 L95,380 L120,375Z" fill="${c.clothing}" />
    <path d="M275,345 Q285,338 300,340 L305,380 L280,375Z" fill="${c.clothing}" />
    <!-- Crew neck -->
    <path d="M175,314 Q188,308 200,306 Q212,308 225,314"
      stroke="${c.clothing}" stroke-width="3" fill="none" />
    <path d="M178,315 Q190,310 200,308 Q210,310 222,315"
      stroke="#00000010" stroke-width="1" fill="none" />
    <!-- Retro graphic on chest (abstract stripes) -->
    <g opacity="0.2">
      <rect x="170" y="338" width="60" height="4" rx="1" fill="${retro}" />
      <rect x="175" y="346" width="50" height="4" rx="1" fill="#FFD700" />
      <rect x="170" y="354" width="60" height="4" rx="1" fill="${retro}" />
    </g>
    <!-- Sleeve seams -->
    <path d="M125,345 Q140,335 152,322" stroke="#00000008" stroke-width="0.5" fill="none" />
    <path d="M275,345 Q260,335 248,322" stroke="#00000008" stroke-width="0.5" fill="none" />
    `;
  },

  leather_jacket: (c) => {
    const accent = c.accent ?? "#6A3A1A";
    return `
    <!-- Leather jacket -->
    <path d="
      M115,345 Q120,328 148,320 Q172,314 200,310 Q228,314 252,320
      Q280,328 285,345 L290,400 L110,400Z
    " fill="${accent}" />
    <!-- Sleeves -->
    <path d="M115,345 Q105,338 88,340 L78,400 L110,400Z" fill="${accent}" />
    <path d="M285,345 Q295,338 312,340 L322,400 L290,400Z" fill="${accent}" />
    <!-- Leather sheen -->
    <path d="M152,322 Q175,315 200,312 Q225,315 248,322"
      stroke="white" stroke-width="0.6" fill="none" opacity="0.06" />
    <!-- Lapels -->
    <path d="M170,316 L185,340 L200,335 L215,340 L230,316"
      stroke="${accent}" stroke-width="1" fill="#1A1410" opacity="0.3" />
    <!-- Diagonal zip -->
    <path d="M200,335 L175,395" stroke="#C0C0C0" stroke-width="0.8" opacity="0.3" />
    <!-- Zipper teeth -->
    <g stroke="#C0C0C0" stroke-width="0.4" opacity="0.2">
      <line x1="198" y1="340" x2="196" y2="342" />
      <line x1="195" y1="348" x2="193" y2="350" />
      <line x1="192" y1="356" x2="190" y2="358" />
      <line x1="189" y1="364" x2="187" y2="366" />
      <line x1="186" y1="372" x2="184" y2="374" />
      <line x1="183" y1="380" x2="181" y2="382" />
    </g>
    <!-- Shoulder seam padding -->
    <path d="M148,322 Q155,318 162,322" stroke="#00000015" stroke-width="1" fill="none" />
    <path d="M238,322 Q245,318 252,322" stroke="#00000015" stroke-width="1" fill="none" />
    `;
  },
};
