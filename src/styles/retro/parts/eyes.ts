import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  wide: (c) => `
    <!-- Bright, wide eyes — expressive 80s look -->
    <ellipse cx="172" cy="200" rx="20" ry="15" fill="white" />
    <ellipse cx="228" cy="200" rx="20" ry="15" fill="white" />
    <!-- Iris — large and bright -->
    <circle cx="172" cy="201" r="11" fill="${c.eyes}" />
    <circle cx="228" cy="201" r="11" fill="${c.eyes}" />
    <!-- Pupil -->
    <circle cx="172" cy="201" r="5.5" fill="#1A1410" />
    <circle cx="228" cy="201" r="5.5" fill="#1A1410" />
    <!-- Big sparkle highlights -->
    <circle cx="177" cy="195" r="3.5" fill="white" opacity="0.9" />
    <circle cx="233" cy="195" r="3.5" fill="white" opacity="0.9" />
    <circle cx="169" cy="205" r="1.8" fill="white" opacity="0.5" />
    <circle cx="225" cy="205" r="1.8" fill="white" opacity="0.5" />
    <!-- Subtle lower lash line -->
    <path d="M155,212 Q172,217 190,212" stroke="#00000015" stroke-width="0.6" fill="none" />
    <path d="M210,212 Q228,217 245,212" stroke="#00000015" stroke-width="0.6" fill="none" />
  `,

  determined: (c) => `
    <!-- Slightly narrowed, determined eyes -->
    <ellipse cx="172" cy="200" rx="20" ry="12" fill="white" />
    <ellipse cx="228" cy="200" rx="20" ry="12" fill="white" />
    <!-- Iris -->
    <circle cx="172" cy="200" r="9" fill="${c.eyes}" />
    <circle cx="228" cy="200" r="9" fill="${c.eyes}" />
    <!-- Pupil -->
    <circle cx="172" cy="200" r="4.5" fill="#1A1410" />
    <circle cx="228" cy="200" r="4.5" fill="#1A1410" />
    <!-- Highlight -->
    <circle cx="176" cy="196" r="2.5" fill="white" opacity="0.85" />
    <circle cx="232" cy="196" r="2.5" fill="white" opacity="0.85" />
    <!-- Upper lid giving determined look -->
    <path d="M154,192 Q172,188 190,192" stroke="${c.skin}" stroke-width="2.5" fill="none" />
    <path d="M210,192 Q228,188 246,192" stroke="${c.skin}" stroke-width="2.5" fill="none" />
  `,

  cool: (c) => `
    <!-- Relaxed, cool/confident eyes -->
    <ellipse cx="172" cy="200" rx="19" ry="11" fill="white" />
    <ellipse cx="228" cy="200" rx="19" ry="11" fill="white" />
    <!-- Iris -->
    <circle cx="172" cy="200" r="8.5" fill="${c.eyes}" />
    <circle cx="228" cy="200" r="8.5" fill="${c.eyes}" />
    <!-- Pupil -->
    <circle cx="172" cy="200" r="4" fill="#1A1410" />
    <circle cx="228" cy="200" r="4" fill="#1A1410" />
    <!-- Subtle highlight -->
    <circle cx="175" cy="197" r="2" fill="white" opacity="0.8" />
    <circle cx="231" cy="197" r="2" fill="white" opacity="0.8" />
    <!-- Slightly hooded upper lid -->
    <path d="M155,194 Q172,190 189,194" stroke="${c.skin}" stroke-width="3" fill="none" />
    <path d="M211,194 Q228,190 245,194" stroke="${c.skin}" stroke-width="3" fill="none" />
    <!-- Lower lid smirk line -->
    <path d="M158,208 Q172,212 186,208" stroke="#00000010" stroke-width="0.5" fill="none" />
    <path d="M214,208 Q228,212 242,208" stroke="#00000010" stroke-width="0.5" fill="none" />
  `,
};
