import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  techwear: (c) => {
    const accent = c.accent ?? "#4A4A5A";
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- Techwear jacket — high collar, angular seams -->
    <!-- Shoulders and body -->
    <path d="
      M120,345 Q125,330 145,322 Q165,315 185,312 Q200,310 215,312
      Q235,315 255,322 Q275,330 280,345
      L285,400 L115,400Z
    " fill="${c.clothing}" />
    <!-- Left sleeve -->
    <path d="M120,345 Q110,338 95,340 L85,400 L115,400Z" fill="${c.clothing}" />
    <!-- Right sleeve -->
    <path d="M280,345 Q290,338 305,340 L315,400 L285,400Z" fill="${c.clothing}" />
    <!-- Collar — high standing -->
    <path d="
      M165,312 Q170,298 180,295 Q200,290 220,295 Q230,298 235,312
      L230,315 Q215,308 200,306 Q185,308 170,315Z
    " fill="${c.clothing}" />
    <!-- Collar inner darkness -->
    <path d="
      M170,312 Q175,302 185,300 Q200,296 215,300 Q225,302 230,312
      L226,314 Q215,306 200,304 Q185,306 174,314Z
    " fill="#0A0A14" opacity="0.5" />
    <!-- Seam lines -->
    <g stroke="#00000018" stroke-width="0.8" fill="none">
      <path d="M200,310 L200,400" />
      <path d="M160,320 L145,400" />
      <path d="M240,320 L255,400" />
    </g>
    <!-- Shoulder seam highlight -->
    <path d="M145,322 Q165,315 200,310" stroke="white" stroke-width="0.5" fill="none" opacity="0.06" />
    <path d="M255,322 Q235,315 200,310" stroke="white" stroke-width="0.5" fill="none" opacity="0.06" />
    <!-- Tech accent strip -->
    <path d="M155,335 L155,380" stroke="${neon}" stroke-width="1.5" fill="none" opacity="0.2" />
    <path d="M245,335 L245,380" stroke="${neon}" stroke-width="1.5" fill="none" opacity="0.2" />
    <!-- Zipper line -->
    <g stroke="${accent}" stroke-width="0.6" opacity="0.4">
      <line x1="200" y1="315" x2="200" y2="320" />
      <line x1="200" y1="325" x2="200" y2="330" />
      <line x1="200" y1="335" x2="200" y2="340" />
      <line x1="200" y1="345" x2="200" y2="350" />
      <line x1="200" y1="355" x2="200" y2="360" />
    </g>
    `;
  },

  tactical_vest: (c) => {
    const accent = c.accent ?? "#4A4A5A";
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- Base layer (undershirt visible at shoulders) -->
    <path d="
      M115,345 Q120,330 140,322 Q165,314 200,310 Q235,314 260,322
      Q280,330 285,345 L290,400 L110,400Z
    " fill="#1A1A2E" />
    <!-- Sleeves (undershirt) -->
    <path d="M115,345 Q105,338 90,340 L80,400 L110,400Z" fill="#1A1A2E" />
    <path d="M285,345 Q295,338 310,340 L320,400 L290,400Z" fill="#1A1A2E" />
    <!-- Tactical vest overlay -->
    <path d="
      M135,330 Q140,322 165,316 Q185,312 200,310 Q215,312 235,316
      Q260,322 265,330
      L270,400 L130,400Z
    " fill="${c.clothing}" />
    <!-- Vest collar / neckline -->
    <path d="M170,314 Q185,308 200,306 Q215,308 230,314"
      stroke="${c.clothing}" stroke-width="2" fill="none" />
    <!-- Chest pockets -->
    <rect x="145" y="342" width="35" height="28" rx="2" fill="${c.clothing}" stroke="${accent}" stroke-width="0.6" />
    <rect x="220" y="342" width="35" height="28" rx="2" fill="${c.clothing}" stroke="${accent}" stroke-width="0.6" />
    <!-- Pocket flaps -->
    <path d="M145,342 L180,342" stroke="${accent}" stroke-width="1.2" />
    <path d="M220,342 L255,342" stroke="${accent}" stroke-width="1.2" />
    <!-- MOLLE webbing straps -->
    <g stroke="${accent}" stroke-width="0.5" opacity="0.35">
      <line x1="145" y1="378" x2="180" y2="378" />
      <line x1="145" y1="384" x2="180" y2="384" />
      <line x1="145" y1="390" x2="180" y2="390" />
      <line x1="220" y1="378" x2="255" y2="378" />
      <line x1="220" y1="384" x2="255" y2="384" />
      <line x1="220" y1="390" x2="255" y2="390" />
    </g>
    <!-- Center zipper -->
    <line x1="200" y1="316" x2="200" y2="400" stroke="${accent}" stroke-width="0.8" opacity="0.3" />
    <!-- Status LED on collar -->
    <circle cx="175" cy="318" r="1.5" fill="${neon}" opacity="0.6" />
    `;
  },

  collar_rig: (c) => {
    const accent = c.accent ?? "#4A4A5A";
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- Slim bodysuit base -->
    <path d="
      M120,345 Q125,330 150,322 Q170,315 200,312 Q230,315 250,322
      Q275,330 280,345
      L285,400 L115,400Z
    " fill="${c.clothing}" />
    <!-- Sleeves -->
    <path d="M120,345 Q110,338 95,340 L85,400 L115,400Z" fill="${c.clothing}" />
    <path d="M280,345 Q290,338 305,340 L315,400 L285,400Z" fill="${c.clothing}" />
    <!-- Bodysuit seam pattern -->
    <g stroke="#FFFFFF06" stroke-width="0.6" fill="none">
      <path d="M165,320 L155,400" />
      <path d="M235,320 L245,400" />
      <path d="M200,312 L200,400" />
    </g>
    <!-- Heavy collar rig — mechanical collar piece -->
    <path d="
      M148,310 Q155,295 175,288 Q200,282 225,288 Q245,295 252,310
      L260,318 Q258,325 250,325
      L150,325 Q142,325 140,318Z
    " fill="${accent}" />
    <path d="
      M148,310 Q155,295 175,288 Q200,282 225,288 Q245,295 252,310
      L260,318 Q258,325 250,325
      L150,325 Q142,325 140,318Z
    " fill="url(#gradient-metal)" opacity="0.4" />
    <!-- Collar inner rim -->
    <path d="M155,312 Q165,300 185,295 Q200,292 215,295 Q235,300 245,312"
      stroke="#0A0A14" stroke-width="2" fill="none" />
    <!-- Collar LED strips -->
    <path d="M152,315 Q200,308 248,315"
      stroke="${neon}" stroke-width="1" fill="none" opacity="0.35" />
    <path d="M150,320 Q200,312 250,320"
      stroke="${neon}" stroke-width="0.6" fill="none" opacity="0.2" />
    <!-- Collar bolts -->
    <circle cx="155" cy="310" r="2" fill="#555565" />
    <circle cx="245" cy="310" r="2" fill="#555565" />
    <circle cx="155" cy="322" r="1.5" fill="#444454" />
    <circle cx="245" cy="322" r="1.5" fill="#444454" />
    `;
  },
};
