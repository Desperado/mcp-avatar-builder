import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  bloodshot: (c) => {
    const blood = c.blood ?? "#8B0000";
    return `
    <!-- Eye sockets — deep shadows -->
    <ellipse cx="172" cy="200" rx="22" ry="16" fill="#00000030" />
    <ellipse cx="228" cy="200" rx="22" ry="16" fill="#00000030" />
    <!-- Sclera — yellowish, unhealthy -->
    <ellipse cx="172" cy="200" rx="19" ry="13" fill="#E8E0C8" />
    <ellipse cx="228" cy="200" rx="19" ry="13" fill="#E8E0C8" />
    <!-- Blood vessel veins in sclera -->
    <g stroke="${blood}" stroke-width="0.4" fill="none" opacity="0.4">
      <path d="M156,197 Q162,198 168,196" />
      <path d="M158,203 Q164,202 167,204" />
      <path d="M176,195 Q180,197 184,194" />
      <path d="M212,197 Q218,198 224,196" />
      <path d="M214,203 Q220,202 223,204" />
      <path d="M232,195 Q236,197 240,194" />
    </g>
    <!-- Iris -->
    <circle cx="172" cy="200" r="9" fill="${c.eyes}" />
    <circle cx="228" cy="200" r="9" fill="${c.eyes}" />
    <!-- Pupil — dilated -->
    <circle cx="172" cy="200" r="5" fill="#0A0A0A" />
    <circle cx="228" cy="200" r="5" fill="#0A0A0A" />
    <!-- Highlight -->
    <circle cx="176" cy="196" r="2" fill="white" opacity="0.7" />
    <circle cx="232" cy="196" r="2" fill="white" opacity="0.7" />
    <!-- Bags under eyes -->
    <path d="M155,210 Q172,216 190,210" stroke="#4A2040" stroke-width="0.8" fill="none" opacity="0.15" />
    <path d="M210,210 Q228,216 245,210" stroke="#4A2040" stroke-width="0.8" fill="none" opacity="0.15" />
    `;
  },

  mutant: (c) => {
    const blood = c.blood ?? "#8B0000";
    return `
    <!-- Left eye — normal but fearful -->
    <ellipse cx="172" cy="200" rx="22" ry="16" fill="#00000025" />
    <ellipse cx="172" cy="200" rx="19" ry="13" fill="#E0D8C8" />
    <circle cx="172" cy="200" r="9" fill="${c.eyes}" />
    <circle cx="172" cy="200" r="4.5" fill="#0A0A0A" />
    <circle cx="176" cy="196" r="2" fill="white" opacity="0.7" />
    <!-- Right eye — mutated, larger, glowing -->
    <ellipse cx="230" cy="198" rx="26" ry="19" fill="#00000030" />
    <ellipse cx="230" cy="198" rx="23" ry="16" fill="#1A1A10" />
    <circle cx="230" cy="198" r="14" fill="${c.eyes}" opacity="0.7" />
    <circle cx="230" cy="198" r="8" fill="${c.eyes}" />
    <circle cx="230" cy="198" r="5" fill="#0A0A0A" />
    <!-- Mutation glow -->
    <circle cx="230" cy="198" r="18" fill="${c.eyes}" opacity="0.08" />
    <!-- Veins around mutant eye -->
    <g stroke="${blood}" stroke-width="0.5" fill="none" opacity="0.2">
      <path d="M250,190 Q258,188 264,185" />
      <path d="M252,198 Q260,200 266,198" />
      <path d="M248,208 Q256,212 262,210" />
    </g>
    <circle cx="234" cy="193" r="2.5" fill="white" opacity="0.6" />
    `;
  },

  hollow: (c) => `
    <!-- Deeply sunken hollow eyes -->
    <ellipse cx="172" cy="200" rx="22" ry="16" fill="#0A0A0A" opacity="0.5" />
    <ellipse cx="228" cy="200" rx="22" ry="16" fill="#0A0A0A" opacity="0.5" />
    <!-- Deep socket shadows -->
    <ellipse cx="172" cy="200" rx="20" ry="14" fill="#1A1210" />
    <ellipse cx="228" cy="200" rx="20" ry="14" fill="#1A1210" />
    <!-- Tiny pinpoint eyes deep in sockets -->
    <circle cx="172" cy="200" r="5" fill="${c.eyes}" opacity="0.6" />
    <circle cx="228" cy="200" r="5" fill="${c.eyes}" opacity="0.6" />
    <circle cx="172" cy="200" r="2.5" fill="#0A0A0A" />
    <circle cx="228" cy="200" r="2.5" fill="#0A0A0A" />
    <!-- Faint pinpoint highlight -->
    <circle cx="174" cy="198" r="1" fill="white" opacity="0.5" />
    <circle cx="230" cy="198" r="1" fill="white" opacity="0.5" />
    <!-- Heavy dark circles -->
    <path d="M152,208 Q172,218 192,208" fill="#2A1020" opacity="0.15" />
    <path d="M208,208 Q228,218 248,208" fill="#2A1020" opacity="0.15" />
  `,
};
