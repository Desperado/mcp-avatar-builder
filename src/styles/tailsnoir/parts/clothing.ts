import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  trenchcoat: (c) => `
    <!-- Noir trenchcoat — the classic -->
    <path d="
      M142,348 Q142,326 150,312 Q162,296 182,288
      Q194,284 200,284
      Q206,284 218,288 Q238,296 250,312 Q258,326 258,348
      L258,400 L142,400Z
    " fill="${c.accent ?? "#B8A078"}" />
    <!-- Lapels -->
    <path d="M192,288 L178,324 L190,340" fill="#00000015" />
    <path d="M208,288 L222,324 L210,340" fill="#00000015" />
    <!-- Belt -->
    <rect x="155" y="355" width="90" height="5" rx="1" fill="${c.accent ?? "#B8A078"}" />
    <rect x="155" y="355" width="90" height="5" rx="1" fill="#00000012" />
    <!-- Belt buckle -->
    <rect x="195" y="353" width="10" height="9" rx="1" fill="#C8B070" opacity="0.4" />
    <!-- Button line -->
    <line x1="200" y1="308" x2="200" y2="354" stroke="#00000010" stroke-width="0.8" />
    <!-- Collar -->
    <path d="M175,290 Q168,286 164,292 Q160,300 165,308" fill="${c.accent ?? "#B8A078"}" />
    <path d="M175,290 Q168,286 164,292" stroke="#00000010" stroke-width="0.5" fill="none" />
    <path d="M225,290 Q232,286 236,292 Q240,300 235,308" fill="${c.accent ?? "#B8A078"}" />
    <path d="M225,290 Q232,286 236,292" stroke="#00000010" stroke-width="0.5" fill="none" />
  `,

  suit: (c) => `
    <!-- Suit jacket — formal noir -->
    <!-- Shirt -->
    <path d="
      M168,340 Q168,328 174,318 Q182,306 194,298
      Q200,296 206,298 Q218,306 226,318 Q232,328 232,340
      L232,400 L168,400Z
    " fill="white" opacity="0.85" />
    <!-- Tie -->
    <path d="M196,298 L194,330 L200,360 L206,330 L204,298Z" fill="${c.noir ?? "#38B8C8"}" opacity="0.6" />
    <!-- Jacket -->
    <path d="
      M145,348 Q145,325 152,312 Q164,296 184,288
      Q194,284 200,284
      Q206,284 216,288 Q236,296 248,312 Q255,325 255,348
      L255,400 L145,400Z
    " fill="${c.accent ?? "#3A3A42"}" />
    <!-- Lapels -->
    <path d="M194,288 L180,322 L192,336" fill="#00000015" />
    <path d="M206,288 L220,322 L208,336" fill="#00000015" />
    <!-- Button -->
    <circle cx="200" cy="345" r="2.5" fill="#00000020" />
  `,

  leather_jacket: (c) => `
    <!-- Leather jacket -->
    <path d="
      M148,348 Q148,326 155,314 Q166,298 186,290
      Q196,286 200,286
      Q204,286 214,290 Q234,298 245,314 Q252,326 252,348
      L252,400 L148,400Z
    " fill="${c.accent ?? "#3A3A42"}" />
    <!-- Zipper line -->
    <line x1="200" y1="298" x2="200" y2="400" stroke="#C8B070" stroke-width="1" opacity="0.3" />
    <!-- Collar — popped -->
    <path d="M178,292 Q170,285 166,290 Q162,298 168,306" fill="${c.accent ?? "#3A3A42"}" />
    <path d="M222,292 Q230,285 234,290 Q238,298 232,306" fill="${c.accent ?? "#3A3A42"}" />
    <path d="M178,292 Q170,285 166,290" stroke="#00000015" stroke-width="0.5" fill="none" />
    <path d="M222,292 Q230,285 234,290" stroke="#00000015" stroke-width="0.5" fill="none" />
    <!-- Shoulder seam -->
    <path d="M155,318 Q165,310 178,304" stroke="#00000010" stroke-width="0.5" fill="none" />
    <path d="M245,318 Q235,310 222,304" stroke="#00000010" stroke-width="0.5" fill="none" />
  `,

  vest: (c) => `
    <!-- Waistcoat / vest over shirt -->
    <!-- Shirt sleeves -->
    <path d="
      M155,345 Q155,328 162,316 Q172,302 190,295
      Q200,292 210,295 Q228,302 238,316 Q245,328 245,345
      L245,400 L155,400Z
    " fill="white" opacity="0.8" />
    <!-- Vest -->
    <path d="
      M168,345 Q168,328 174,318 Q184,305 196,298
      Q200,296 204,298 Q216,305 226,318 Q232,328 232,345
      L232,400 L168,400Z
    " fill="${c.accent ?? "#3A3A42"}" />
    <!-- Vest buttons -->
    <circle cx="200" cy="325" r="1.8" fill="#C8B070" opacity="0.3" />
    <circle cx="200" cy="345" r="1.8" fill="#C8B070" opacity="0.3" />
    <circle cx="200" cy="365" r="1.8" fill="#C8B070" opacity="0.3" />
  `,

  hoodie: (c) => `
    <!-- Streetwear hoodie -->
    <path d="
      M150,348 Q150,326 156,314 Q166,298 186,290
      Q196,286 200,286
      Q204,286 214,290 Q234,298 244,314 Q250,326 250,348
      L250,400 L150,400Z
    " fill="${c.accent ?? "#3A3A42"}" />
    <!-- Hood -->
    <path d="
      M170,296 Q162,290 158,296 Q150,308 152,318
      Q176,304 200,300 Q224,304 248,318
      Q250,308 242,296 Q238,290 230,296
    " fill="${c.accent ?? "#3A3A42"}" />
    <path d="M170,296 Q162,290 158,296 Q150,308 152,318" stroke="#00000010" stroke-width="0.5" fill="none" />
    <!-- Drawstrings -->
    <line x1="192" y1="306" x2="190" y2="336" stroke="#00000018" stroke-width="0.8" />
    <line x1="208" y1="306" x2="210" y2="336" stroke="#00000018" stroke-width="0.8" />
  `,
};
