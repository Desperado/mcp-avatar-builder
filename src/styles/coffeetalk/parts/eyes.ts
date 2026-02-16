import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  warm: (c) => `
    <!-- Warm, friendly anime eyes -->
    <!-- Left eye -->
    <ellipse cx="172" cy="205" rx="18" ry="16" fill="white" />
    <ellipse cx="172" cy="207" rx="13" ry="13" fill="${c.eyes}" />
    <ellipse cx="172" cy="207" rx="7" ry="7" fill="#1A1A2E" />
    <!-- Highlights — warm reflection -->
    <ellipse cx="167" cy="201" rx="4" ry="3.5" fill="white" opacity="0.85" />
    <ellipse cx="177" cy="210" rx="2" ry="1.8" fill="${c.warmth ?? "#D4891C"}" opacity="0.3" />
    <!-- Upper lash line -->
    <path d="M155,196 Q163,190 172,189 Q181,190 189,196" stroke="#1A1A2E" stroke-width="1.8" fill="none" />
    <!-- Lower lash subtle -->
    <path d="M158,218 Q165,222 172,223 Q179,222 186,218" stroke="#00000015" stroke-width="0.5" fill="none" />

    <!-- Right eye -->
    <ellipse cx="228" cy="205" rx="18" ry="16" fill="white" />
    <ellipse cx="228" cy="207" rx="13" ry="13" fill="${c.eyes}" />
    <ellipse cx="228" cy="207" rx="7" ry="7" fill="#1A1A2E" />
    <ellipse cx="223" cy="201" rx="4" ry="3.5" fill="white" opacity="0.85" />
    <ellipse cx="233" cy="210" rx="2" ry="1.8" fill="${c.warmth ?? "#D4891C"}" opacity="0.3" />
    <path d="M211,196 Q219,190 228,189 Q237,190 245,196" stroke="#1A1A2E" stroke-width="1.8" fill="none" />
    <path d="M214,218 Q221,222 228,223 Q235,222 242,218" stroke="#00000015" stroke-width="0.5" fill="none" />
  `,

  sharp: (c) => `
    <!-- Sharp, intense eyes — narrower, more angular -->
    <!-- Left eye -->
    <path d="M154,205 Q163,195 172,194 Q181,195 190,205 Q181,215 172,216 Q163,215 154,205Z" fill="white" />
    <ellipse cx="172" cy="206" rx="11" ry="10" fill="${c.eyes}" />
    <ellipse cx="172" cy="206" rx="6" ry="6" fill="#1A1A2E" />
    <ellipse cx="168" cy="202" rx="3" ry="2.5" fill="white" opacity="0.85" />
    <!-- Sharp upper lash -->
    <path d="M153,204 Q162,194 172,193 Q182,194 191,204" stroke="#1A1A2E" stroke-width="2.2" fill="none" />
    <!-- Outer lash flick -->
    <path d="M189,200 L194,196" stroke="#1A1A2E" stroke-width="1.2" fill="none" stroke-linecap="round" />

    <!-- Right eye -->
    <path d="M210,205 Q219,195 228,194 Q237,195 246,205 Q237,215 228,216 Q219,215 210,205Z" fill="white" />
    <ellipse cx="228" cy="206" rx="11" ry="10" fill="${c.eyes}" />
    <ellipse cx="228" cy="206" rx="6" ry="6" fill="#1A1A2E" />
    <ellipse cx="224" cy="202" rx="3" ry="2.5" fill="white" opacity="0.85" />
    <path d="M209,204 Q218,194 228,193 Q238,194 247,204" stroke="#1A1A2E" stroke-width="2.2" fill="none" />
    <path d="M211,200 L206,196" stroke="#1A1A2E" stroke-width="1.2" fill="none" stroke-linecap="round" />
  `,

  wide: (c) => `
    <!-- Wide, expressive anime eyes — larger, rounder -->
    <!-- Left eye -->
    <ellipse cx="172" cy="205" rx="20" ry="18" fill="white" />
    <ellipse cx="172" cy="207" rx="15" ry="15" fill="${c.eyes}" />
    <ellipse cx="172" cy="207" rx="8" ry="8" fill="#1A1A2E" />
    <!-- Multiple highlights for sparkle -->
    <ellipse cx="166" cy="200" rx="5" ry="4" fill="white" opacity="0.9" />
    <ellipse cx="179" cy="212" rx="2.5" ry="2" fill="white" opacity="0.5" />
    <ellipse cx="175" cy="202" rx="1.5" ry="1.5" fill="${c.warmth ?? "#D4891C"}" opacity="0.25" />
    <!-- Upper lash -->
    <path d="M153,194 Q162,186 172,185 Q182,186 191,194" stroke="#1A1A2E" stroke-width="2" fill="none" />
    <!-- Lower lash -->
    <path d="M156,220 Q164,226 172,227 Q180,226 188,220" stroke="#00000012" stroke-width="0.6" fill="none" />

    <!-- Right eye -->
    <ellipse cx="228" cy="205" rx="20" ry="18" fill="white" />
    <ellipse cx="228" cy="207" rx="15" ry="15" fill="${c.eyes}" />
    <ellipse cx="228" cy="207" rx="8" ry="8" fill="#1A1A2E" />
    <ellipse cx="222" cy="200" rx="5" ry="4" fill="white" opacity="0.9" />
    <ellipse cx="235" cy="212" rx="2.5" ry="2" fill="white" opacity="0.5" />
    <ellipse cx="231" cy="202" rx="1.5" ry="1.5" fill="${c.warmth ?? "#D4891C"}" opacity="0.25" />
    <path d="M209,194 Q218,186 228,185 Q238,186 247,194" stroke="#1A1A2E" stroke-width="2" fill="none" />
    <path d="M212,220 Q220,226 228,227 Q236,226 244,220" stroke="#00000012" stroke-width="0.6" fill="none" />
  `,
};
