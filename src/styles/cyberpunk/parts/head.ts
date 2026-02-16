import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  angular: (c) => `
    <!-- Neck -->
    <path d="M178,300 L178,330 Q178,340 185,345 L215,345 Q222,340 222,330 L222,300"
      fill="${c.skin}" />
    <path d="M178,300 L178,330 Q178,340 185,345 L215,345 Q222,340 222,330 L222,300"
      fill="none" stroke="#00000015" stroke-width="0.8" />
    <!-- Neck shadow -->
    <path d="M178,300 Q195,310 222,300 L222,308 Q195,318 178,308Z"
      fill="black" opacity="0.08" />
    <!-- Head base — angular jaw, sharp cheekbones -->
    <path d="
      M140,170
      C140,115 155,90 200,85
      C245,90 260,115 260,170
      C260,210 258,240 250,260
      C242,278 230,292 218,298
      Q200,305 182,298
      C170,292 158,278 150,260
      C142,240 140,210 140,170Z
    " fill="${c.skin}" />
    <!-- Subtle skin highlight -->
    <path d="
      M140,170
      C140,115 155,90 200,85
      C245,90 260,115 260,170
      C260,210 258,240 250,260
      C242,278 230,292 218,298
      Q200,305 182,298
      C170,292 158,278 150,260
      C142,240 140,210 140,170Z
    " fill="url(#gradient-skin-highlight)" />
    <!-- Edge stroke -->
    <path d="
      M140,170
      C140,115 155,90 200,85
      C245,90 260,115 260,170
      C260,210 258,240 250,260
      C242,278 230,292 218,298
      Q200,305 182,298
      C170,292 158,278 150,260
      C142,240 140,210 140,170Z
    " fill="none" stroke="#00000012" stroke-width="0.8" />
    <!-- Cheekbone highlight left -->
    <path d="M148,200 Q155,190 160,200 Q155,205 148,200Z" fill="white" opacity="0.06" />
    <!-- Cheekbone highlight right -->
    <path d="M252,200 Q245,190 240,200 Q245,205 252,200Z" fill="white" opacity="0.06" />
    <!-- Nose bridge -->
    <path d="M196,215 L198,240 L200,245 L202,240 L204,215" stroke="#00000015" stroke-width="0.6" fill="none" />
    <!-- Nose tip -->
    <ellipse cx="200" cy="245" rx="8" ry="4" fill="#00000008" />
  `,

  scarred: (c) => `
    <!-- Neck -->
    <path d="M178,300 L178,330 Q178,340 185,345 L215,345 Q222,340 222,330 L222,300"
      fill="${c.skin}" />
    <path d="M178,300 Q195,310 222,300 L222,308 Q195,318 178,308Z"
      fill="black" opacity="0.08" />
    <!-- Head base — broad and angular -->
    <path d="
      M138,175
      C138,118 154,88 200,82
      C246,88 262,118 262,175
      C262,212 260,242 252,262
      C244,280 232,294 220,300
      Q200,308 180,300
      C168,294 156,280 148,262
      C140,242 138,212 138,175Z
    " fill="${c.skin}" />
    <path d="
      M138,175
      C138,118 154,88 200,82
      C246,88 262,118 262,175
      C262,212 260,242 252,262
      C244,280 232,294 220,300
      Q200,308 180,300
      C168,294 156,280 148,262
      C140,242 138,212 138,175Z
    " fill="url(#gradient-skin-highlight)" />
    <path d="
      M138,175
      C138,118 154,88 200,82
      C246,88 262,118 262,175
      C262,212 260,242 252,262
      C244,280 232,294 220,300
      Q200,308 180,300
      C168,294 156,280 148,262
      C140,242 138,212 138,175Z
    " fill="none" stroke="#00000012" stroke-width="0.8" />
    <!-- Scar across left eye area -->
    <path d="M155,165 L165,185 L158,210 L162,225"
      stroke="#00000025" stroke-width="1.5" fill="none" stroke-linecap="round" />
    <path d="M155,165 L165,185 L158,210 L162,225"
      stroke="${c.skin}" stroke-width="0.6" fill="none" stroke-linecap="round" opacity="0.5" />
    <!-- Nose -->
    <path d="M196,215 L198,240 L200,245 L202,240 L204,215" stroke="#00000015" stroke-width="0.6" fill="none" />
    <ellipse cx="200" cy="245" rx="8" ry="4" fill="#00000008" />
  `,

  implanted: (c) => {
    const accent = c.accent ?? "#4A4A5A";
    return `
    <!-- Neck -->
    <path d="M178,300 L178,330 Q178,340 185,345 L215,345 Q222,340 222,330 L222,300"
      fill="${c.skin}" />
    <path d="M178,300 Q195,310 222,300 L222,308 Q195,318 178,308Z"
      fill="black" opacity="0.08" />
    <!-- Head base -->
    <path d="
      M140,172
      C140,116 156,88 200,83
      C244,88 260,116 260,172
      C260,210 258,240 250,260
      C242,278 230,292 218,298
      Q200,305 182,298
      C170,292 158,278 150,260
      C142,240 140,210 140,172Z
    " fill="${c.skin}" />
    <path d="
      M140,172
      C140,116 156,88 200,83
      C244,88 260,116 260,172
      C260,210 258,240 250,260
      C242,278 230,292 218,298
      Q200,305 182,298
      C170,292 158,278 150,260
      C142,240 140,210 140,172Z
    " fill="url(#gradient-skin-highlight)" />
    <path d="
      M140,172
      C140,116 156,88 200,83
      C244,88 260,116 260,172
      C260,210 258,240 250,260
      C242,278 230,292 218,298
      Q200,305 182,298
      C170,292 158,278 150,260
      C142,240 140,210 140,172Z
    " fill="none" stroke="#00000012" stroke-width="0.8" />
    <!-- Metal plate on right temple -->
    <path d="
      M248,150 L258,160 L260,180 L256,200 L248,195 L245,175 L248,150Z
    " fill="${accent}" />
    <path d="
      M248,150 L258,160 L260,180 L256,200 L248,195 L245,175 L248,150Z
    " fill="url(#gradient-metal)" opacity="0.5" />
    <path d="
      M248,150 L258,160 L260,180 L256,200 L248,195 L245,175 L248,150Z
    " fill="none" stroke="${accent}" stroke-width="0.5" opacity="0.6" />
    <!-- Rivets on plate -->
    <circle cx="252" cy="162" r="1.5" fill="#888898" />
    <circle cx="254" cy="180" r="1.5" fill="#888898" />
    <circle cx="252" cy="195" r="1.5" fill="#888898" />
    <!-- Nose -->
    <path d="M196,215 L198,240 L200,245 L202,240 L204,215" stroke="#00000015" stroke-width="0.6" fill="none" />
    <ellipse cx="200" cy="245" rx="8" ry="4" fill="#00000008" />
    `;
  },
};
