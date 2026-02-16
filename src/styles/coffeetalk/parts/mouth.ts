import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  smile: (c) => `
    <!-- Warm, gentle smile -->
    <path d="M185,260 Q192,268 200,270 Q208,268 215,260"
      stroke="#00000030" stroke-width="1.8" fill="none" stroke-linecap="round" />
    <!-- Slight lip color -->
    <path d="M187,261 Q193,267 200,269 Q207,267 213,261"
      stroke="${c.warmth ?? "#D4891C"}" stroke-width="0.8" fill="none" opacity="0.15" />
  `,

  neutral: () => `
    <!-- Neutral, relaxed mouth -->
    <path d="M188,264 Q194,266 200,266 Q206,266 212,264"
      stroke="#00000025" stroke-width="1.5" fill="none" stroke-linecap="round" />
  `,

  sip: (c) => `
    <!-- Sipping coffee — hands holding cup below chin -->
    <!-- Small pursed lips -->
    <ellipse cx="200" cy="264" rx="5" ry="3.5" fill="#00000015" />
    <!-- Hands holding cup at chest level -->
    <g>
      <!-- Left hand -->
      <path d="M178,338 Q172,332 170,340 Q168,348 174,352 Q178,348 180,342Z" fill="${c.skin}" />
      <!-- Right hand -->
      <path d="M222,338 Q228,332 230,340 Q232,348 226,352 Q222,348 220,342Z" fill="${c.skin}" />
      <!-- Coffee cup held at chest -->
      <path d="
        M174,328 L174,358 Q174,366 182,366 L218,366 Q226,366 226,358 L226,328Z
      " fill="${c.accent ?? "#4A6A8A"}" opacity="0.85" />
      <!-- Cup highlight -->
      <path d="M177,331 L177,354 Q177,362 183,362" stroke="white" stroke-width="0.8" fill="none" opacity="0.12" />
      <!-- Cup handle -->
      <path d="M226,338 Q238,338 238,348 Q238,358 226,358" stroke="${c.accent ?? "#4A6A8A"}" stroke-width="3" fill="none" opacity="0.85" />
      <!-- Coffee surface -->
      <ellipse cx="200" cy="330" rx="24" ry="4" fill="#3D2517" opacity="0.3" />
    </g>
    <!-- Steam wisps rising from cup toward face -->
    <g stroke="${c.warmth ?? "#D4891C"}" stroke-width="0.7" fill="none" opacity="0.10">
      <path d="M190,326 Q188,314 190,302 Q192,290 190,280" />
      <path d="M200,324 Q202,312 200,300 Q198,288 200,278" />
      <path d="M210,326 Q208,314 210,302 Q212,290 210,280" />
    </g>
  `,
};
