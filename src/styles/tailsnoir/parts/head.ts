import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  raccoon: (c) => `
    <!-- Raccoon head — round with pointed muzzle, Howard Lotor style -->
    <!-- Neck -->
    <path d="M180,288 L180,320 Q180,330 188,332 L212,332 Q220,330 220,320 L220,288"
      fill="${c.skin}" />
    <!-- Head — wide, round raccoon shape -->
    <path d="
      M128,190 C128,138 150,108 200,100
      C250,108 272,138 272,190
      C272,218 268,238 260,252
      C250,264 236,274 220,280
      Q200,286 180,280
      C164,274 150,264 140,252
      C132,238 128,218 128,190Z
    " fill="${c.skin}" />
    <!-- Fur sheen -->
    <path d="
      M128,190 C128,138 150,108 200,100
      C250,108 272,138 272,190
      C272,218 268,238 260,252
      C250,264 236,274 220,280
      Q200,286 180,280
      C164,274 150,264 140,252
      C132,238 128,218 128,190Z
    " fill="url(#gradient-fur-sheen)" />
    <!-- Lighter muzzle area -->
    <ellipse cx="200" cy="248" rx="28" ry="20" fill="${c.skin}" />
    <ellipse cx="200" cy="248" rx="28" ry="20" fill="white" opacity="0.12" />
    <!-- Raccoon mask (dark patches around eyes) -->
    <path d="M145,195 Q160,185 175,190 Q185,196 182,208 Q178,218 165,218 Q150,215 145,205Z"
      fill="#1A1A22" opacity="0.5" />
    <path d="M255,195 Q240,185 225,190 Q215,196 218,208 Q222,218 235,218 Q250,215 255,205Z"
      fill="#1A1A22" opacity="0.5" />
    <!-- Nose — dark, prominent -->
    <ellipse cx="200" cy="240" rx="8" ry="5" fill="#1A1A22" />
    <ellipse cx="198" cy="238" rx="2" ry="1.5" fill="white" opacity="0.15" />
    <!-- Rim light -->
    <path d="
      M128,190 C128,138 150,108 200,100
      C250,108 272,138 272,190
      C272,218 268,238 260,252
    " fill="url(#gradient-rim-light)" />
  `,

  fox: (c) => `
    <!-- Fox head — narrow, elegant, pointed muzzle -->
    <!-- Neck -->
    <path d="M180,288 L180,320 Q180,330 188,332 L212,332 Q220,330 220,320 L220,288"
      fill="${c.skin}" />
    <!-- Head — narrower, more angular -->
    <path d="
      M132,185 C132,135 154,106 200,98
      C246,106 268,135 268,185
      C268,215 264,236 256,250
      C246,264 234,274 220,280
      Q200,286 180,280
      C166,274 154,264 144,250
      C136,236 132,215 132,185Z
    " fill="${c.skin}" />
    <path d="
      M132,185 C132,135 154,106 200,98
      C246,106 268,135 268,185
    " fill="url(#gradient-fur-sheen)" />
    <!-- White muzzle — elongated, fox-like -->
    <path d="
      M172,230 Q180,225 200,224 Q220,225 228,230
      L230,250 Q228,268 218,275
      Q200,282 182,275 Q172,268 170,250Z
    " fill="${c.skin}" />
    <path d="
      M172,230 Q180,225 200,224 Q220,225 228,230
      L230,250 Q228,268 218,275
      Q200,282 182,275 Q172,268 170,250Z
    " fill="white" opacity="0.15" />
    <!-- Dark nose bridge stripe -->
    <path d="M195,180 Q200,175 205,180 L204,224 Q200,226 196,224Z" fill="#1A1A22" opacity="0.15" />
    <!-- Fox nose -->
    <ellipse cx="200" cy="245" rx="7" ry="4.5" fill="#1A1A22" />
    <ellipse cx="198" cy="243" rx="2" ry="1.3" fill="white" opacity="0.15" />
    <!-- Rim light -->
    <path d="M268,185 C268,135 246,106 200,98" fill="url(#gradient-rim-light)" />
  `,

  bear: (c) => `
    <!-- Bear head — broad, heavy, round -->
    <!-- Thick neck -->
    <path d="M176,286 L176,322 Q176,332 186,335 L214,335 Q224,332 224,322 L224,286"
      fill="${c.skin}" />
    <!-- Head — wide and solid -->
    <path d="
      M122,192 C122,138 148,106 200,98
      C252,106 278,138 278,192
      C278,222 274,242 264,256
      C254,268 240,278 224,282
      Q200,288 176,282
      C160,278 146,268 136,256
      C126,242 122,222 122,192Z
    " fill="${c.skin}" />
    <path d="
      M122,192 C122,138 148,106 200,98
      C252,106 278,138 278,192
    " fill="url(#gradient-fur-sheen)" />
    <!-- Lighter muzzle — wide, rounded -->
    <ellipse cx="200" cy="248" rx="34" ry="22" fill="${c.skin}" />
    <ellipse cx="200" cy="248" rx="34" ry="22" fill="white" opacity="0.08" />
    <!-- Bear nose — large, round -->
    <ellipse cx="200" cy="240" rx="10" ry="7" fill="#1A1A22" />
    <ellipse cx="197" cy="238" rx="2.5" ry="1.8" fill="white" opacity="0.12" />
    <!-- Heavy brow ridge shadow -->
    <path d="M140,190 Q170,182 200,180 Q230,182 260,190" stroke="#00000020" stroke-width="2" fill="none" />
    <!-- Rim light -->
    <path d="M278,192 C278,138 252,106 200,98" fill="url(#gradient-rim-light)" />
  `,

  cat: (c) => `
    <!-- Cat head — sleek, angular, refined -->
    <!-- Slender neck -->
    <path d="M182,286 L182,318 Q182,328 190,330 L210,330 Q218,328 218,318 L218,286"
      fill="${c.skin}" />
    <!-- Head — angular, V-shaped chin -->
    <path d="
      M132,188 C132,138 155,108 200,100
      C245,108 268,138 268,188
      C268,216 264,234 258,246
      C250,258 238,268 224,274
      Q200,282 176,274
      C162,268 150,258 142,246
      C136,234 132,216 132,188Z
    " fill="${c.skin}" />
    <path d="
      M132,188 C132,138 155,108 200,100
      C245,108 268,138 268,188
    " fill="url(#gradient-fur-sheen)" />
    <!-- Lighter muzzle — small, delicate -->
    <ellipse cx="200" cy="248" rx="22" ry="16" fill="${c.skin}" />
    <ellipse cx="200" cy="248" rx="22" ry="16" fill="white" opacity="0.1" />
    <!-- Cat nose — small, pink triangle -->
    <path d="M196,240 L200,236 L204,240Z" fill="#C87878" />
    <path d="M197,239 L199,237" stroke="white" stroke-width="0.3" opacity="0.2" />
    <!-- Whisker dots -->
    <g fill="#00000015">
      <circle cx="182" cy="248" r="1" />
      <circle cx="178" cy="244" r="1" />
      <circle cx="178" cy="252" r="1" />
      <circle cx="218" cy="248" r="1" />
      <circle cx="222" cy="244" r="1" />
      <circle cx="222" cy="252" r="1" />
    </g>
    <!-- Rim light -->
    <path d="M268,188 C268,138 245,108 200,100" fill="url(#gradient-rim-light)" />
  `,

  wolf: (c) => `
    <!-- Wolf head — strong, long muzzle -->
    <!-- Neck -->
    <path d="M178,288 L178,322 Q178,332 186,334 L214,334 Q222,332 222,322 L222,288"
      fill="${c.skin}" />
    <!-- Head -->
    <path d="
      M128,188 C128,136 152,106 200,98
      C248,106 272,136 272,188
      C272,218 268,238 260,252
      C250,264 236,276 220,282
      Q200,288 180,282
      C164,276 150,264 140,252
      C132,238 128,218 128,188Z
    " fill="${c.skin}" />
    <path d="
      M128,188 C128,136 152,106 200,98
      C248,106 272,136 272,188
    " fill="url(#gradient-fur-sheen)" />
    <!-- Wolf muzzle — long, pronounced -->
    <path d="
      M170,228 Q180,222 200,220 Q220,222 230,228
      L234,252 Q230,272 218,280
      Q200,288 182,280 Q170,272 166,252Z
    " fill="${c.skin}" />
    <path d="
      M170,228 Q180,222 200,220 Q220,222 230,228
      L234,252 Q230,272 218,280
      Q200,288 182,280 Q170,272 166,252Z
    " fill="white" opacity="0.08" />
    <!-- Dark nose bridge -->
    <path d="M194,185 Q200,180 206,185 L205,222 Q200,224 195,222Z" fill="#1A1A22" opacity="0.1" />
    <!-- Wolf nose -->
    <ellipse cx="200" cy="242" rx="9" ry="6" fill="#1A1A22" />
    <ellipse cx="198" cy="240" rx="2" ry="1.5" fill="white" opacity="0.12" />
    <!-- Rim light -->
    <path d="M272,188 C272,136 248,106 200,98" fill="url(#gradient-rim-light)" />
  `,
};
