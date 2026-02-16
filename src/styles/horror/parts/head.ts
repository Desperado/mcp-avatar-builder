import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  gaunt: (c) => `
    <!-- Neck -->
    <path d="M180,302 L180,335 Q180,345 188,348 L212,348 Q220,345 220,335 L220,302"
      fill="${c.skin}" />
    <path d="M180,302 Q198,312 220,302 L220,310 Q198,320 180,310Z" fill="black" opacity="0.08" />
    <!-- Gaunt head — sunken cheeks, pronounced jaw -->
    <path d="
      M142,175 C142,118 157,90 200,84
      C243,90 258,118 258,175
      C258,208 256,235 250,255
      C244,275 234,290 222,298
      Q200,306 178,298
      C166,290 156,275 150,255
      C144,235 142,208 142,175Z
    " fill="${c.skin}" />
    <!-- Sickly pallor overlay -->
    <path d="
      M142,175 C142,118 157,90 200,84
      C243,90 258,118 258,175
      C258,208 256,235 250,255
      C244,275 234,290 222,298
      Q200,306 178,298
      C166,290 156,275 150,255
      C144,235 142,208 142,175Z
    " fill="url(#gradient-skin-sickly)" />
    <!-- Sunken cheek shadows -->
    <ellipse cx="165" cy="230" rx="12" ry="18" fill="black" opacity="0.06" />
    <ellipse cx="235" cy="230" rx="12" ry="18" fill="black" opacity="0.06" />
    <!-- Pronounced cheekbone ridges -->
    <path d="M150,210 Q158,205 165,210" stroke="white" stroke-width="0.5" fill="none" opacity="0.06" />
    <path d="M235,210 Q242,205 250,210" stroke="white" stroke-width="0.5" fill="none" opacity="0.06" />
    <!-- Nose -->
    <path d="M196,218 L197,242 L200,248 L203,242 L204,218" stroke="#00000018" stroke-width="0.6" fill="none" />
    <ellipse cx="200" cy="248" rx="8" ry="4" fill="#00000008" />
    <!-- Dark circles under eyes -->
    <ellipse cx="172" cy="212" rx="16" ry="6" fill="#4A2040" opacity="0.08" />
    <ellipse cx="228" cy="212" rx="16" ry="6" fill="#4A2040" opacity="0.08" />
  `,

  scarred: (c) => `
    <!-- Neck -->
    <path d="M180,302 L180,335 Q180,345 188,348 L212,348 Q220,345 220,335 L220,302"
      fill="${c.skin}" />
    <path d="M180,302 Q198,312 220,302 L220,310 Q198,320 180,310Z" fill="black" opacity="0.08" />
    <!-- Broader, rougher head -->
    <path d="
      M138,178 C138,120 155,88 200,82
      C245,88 262,120 262,178
      C262,215 260,242 252,262
      C244,280 232,295 220,300
      Q200,308 180,300
      C168,295 156,280 148,262
      C140,242 138,215 138,178Z
    " fill="${c.skin}" />
    <path d="
      M138,178 C138,120 155,88 200,82
      C245,88 262,120 262,178
      C262,215 260,242 252,262
      C244,280 232,295 220,300
      Q200,308 180,300
      C168,295 156,280 148,262
      C140,242 138,215 138,178Z
    " fill="url(#gradient-skin-sickly)" />
    <!-- Scar across right cheek -->
    <path d="M230,205 L242,225 L238,248 L244,262"
      stroke="#5C1010" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0.5" />
    <path d="M230,205 L242,225 L238,248 L244,262"
      stroke="${c.skin}" stroke-width="0.5" fill="none" stroke-linecap="round" opacity="0.4" />
    <!-- Scar across forehead -->
    <path d="M160,140 L180,135 L210,138 L225,132"
      stroke="#5C1010" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.35" />
    <!-- Nose -->
    <path d="M196,218 L197,242 L200,248 L203,242 L204,218" stroke="#00000018" stroke-width="0.6" fill="none" />
    <ellipse cx="200" cy="248" rx="8" ry="4" fill="#00000008" />
  `,

  infected: (c) => {
    const blood = c.blood ?? "#8B0000";
    return `
    <!-- Neck -->
    <path d="M180,302 L180,335 Q180,345 188,348 L212,348 Q220,345 220,335 L220,302"
      fill="${c.skin}" />
    <path d="M180,302 Q198,312 220,302 L220,310 Q198,320 180,310Z" fill="black" opacity="0.08" />
    <!-- Head -->
    <path d="
      M140,175 C140,118 156,88 200,83
      C244,88 260,118 260,175
      C260,212 258,240 250,260
      C242,278 230,292 218,298
      Q200,305 182,298
      C170,292 158,278 150,260
      C142,240 140,212 140,175Z
    " fill="${c.skin}" />
    <path d="
      M140,175 C140,118 156,88 200,83
      C244,88 260,118 260,175
      C260,212 258,240 250,260
      C242,278 230,292 218,298
      Q200,305 182,298
      C170,292 158,278 150,260
      C142,240 140,212 140,175Z
    " fill="url(#gradient-skin-sickly)" />
    <!-- Infection spreading on left side -->
    <g opacity="0.2">
      <path d="M145,180 Q150,170 155,178 Q152,185 145,180Z" fill="${blood}" />
      <path d="M148,195 Q155,188 158,198 Q153,205 148,195Z" fill="${blood}" />
      <path d="M150,210 Q156,204 160,212 Q155,218 150,210Z" fill="${blood}" />
    </g>
    <!-- Veins spreading from infection -->
    <g stroke="${blood}" stroke-width="0.6" fill="none" opacity="0.15">
      <path d="M152,185 Q160,180 168,185 Q172,190 170,198" />
      <path d="M155,200 Q162,196 170,202" />
      <path d="M148,195 Q142,200 140,210" />
    </g>
    <!-- Nose -->
    <path d="M196,218 L197,242 L200,248 L203,242 L204,218" stroke="#00000018" stroke-width="0.6" fill="none" />
    <ellipse cx="200" cy="248" rx="8" ry="4" fill="#00000008" />
    `;
  },
};
