import type { PartRenderer } from "../../../types.js";

export const variants: Record<string, PartRenderer> = {
  led: (c) => {
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- Eye sockets — dark shadow -->
    <ellipse cx="172" cy="200" rx="22" ry="15" fill="#00000025" />
    <ellipse cx="228" cy="200" rx="22" ry="15" fill="#00000025" />
    <!-- Sclera -->
    <ellipse cx="172" cy="200" rx="20" ry="13" fill="#0D0D18" />
    <ellipse cx="228" cy="200" rx="20" ry="13" fill="#0D0D18" />
    <!-- Iris glow halo -->
    <ellipse cx="172" cy="200" rx="14" ry="11" fill="${c.eyes}" opacity="0.15" />
    <ellipse cx="228" cy="200" rx="14" ry="11" fill="${c.eyes}" opacity="0.15" />
    <!-- Iris -->
    <ellipse cx="172" cy="200" rx="10" ry="10" fill="${c.eyes}" />
    <ellipse cx="228" cy="200" rx="10" ry="10" fill="${c.eyes}" />
    <!-- Pupil -->
    <circle cx="172" cy="200" r="4" fill="#0A0A14" />
    <circle cx="228" cy="200" r="4" fill="#0A0A14" />
    <!-- LED ring inside iris -->
    <circle cx="172" cy="200" r="8" fill="none" stroke="${c.eyes}" stroke-width="0.8" opacity="0.7" />
    <circle cx="228" cy="200" r="8" fill="none" stroke="${c.eyes}" stroke-width="0.8" opacity="0.7" />
    <!-- Highlight sparks -->
    <circle cx="176" cy="195" r="2.5" fill="white" opacity="0.9" />
    <circle cx="232" cy="195" r="2.5" fill="white" opacity="0.9" />
    <circle cx="169" cy="203" r="1.2" fill="white" opacity="0.5" />
    <circle cx="225" cy="203" r="1.2" fill="white" opacity="0.5" />
    <!-- Neon under-eye accent line -->
    <path d="M155,212 Q172,218 190,212" stroke="${neon}" stroke-width="0.8" fill="none" opacity="0.3" />
    <path d="M210,212 Q228,218 245,212" stroke="${neon}" stroke-width="0.8" fill="none" opacity="0.3" />
    `;
  },

  visor: (c) => {
    const neon = c.neon ?? "#00E5FF";
    const accent = c.accent ?? "#4A4A5A";
    return `
    <!-- Visor band across eyes -->
    <path d="
      M142,188 L258,188
      Q265,188 265,195
      L265,210
      Q265,217 258,217
      L142,217
      Q135,217 135,210
      L135,195
      Q135,188 142,188Z
    " fill="${accent}" />
    <!-- Visor glass -->
    <path d="
      M145,191 L255,191
      Q259,191 259,195
      L259,210
      Q259,214 255,214
      L145,214
      Q141,214 141,210
      L141,195
      Q141,191 145,191Z
    " fill="#0A0A20" opacity="0.9" />
    <!-- Left eye glow through visor -->
    <ellipse cx="172" cy="202" rx="16" ry="8" fill="${c.eyes}" opacity="0.4" />
    <!-- Right eye glow through visor -->
    <ellipse cx="228" cy="202" rx="16" ry="8" fill="${c.eyes}" opacity="0.4" />
    <!-- Visor edge highlights -->
    <line x1="145" y1="191" x2="255" y2="191" stroke="${neon}" stroke-width="0.6" opacity="0.4" />
    <line x1="145" y1="214" x2="255" y2="214" stroke="${neon}" stroke-width="0.6" opacity="0.3" />
    <!-- Visor side screws -->
    <circle cx="139" cy="202" r="2" fill="#666676" />
    <circle cx="261" cy="202" r="2" fill="#666676" />
    <!-- HUD elements inside visor -->
    <rect x="156" y="196" width="8" height="1" fill="${c.eyes}" opacity="0.3" />
    <rect x="156" y="199" width="12" height="1" fill="${c.eyes}" opacity="0.2" />
    <rect x="236" y="196" width="8" height="1" fill="${c.eyes}" opacity="0.3" />
    <rect x="232" y="199" width="12" height="1" fill="${c.eyes}" opacity="0.2" />
    `;
  },

  cyber: (c) => {
    const neon = c.neon ?? "#00E5FF";
    return `
    <!-- Eye sockets -->
    <ellipse cx="172" cy="200" rx="22" ry="15" fill="#00000020" />
    <ellipse cx="228" cy="200" rx="22" ry="15" fill="#00000020" />
    <!-- Sclera with slight glow -->
    <ellipse cx="172" cy="200" rx="19" ry="12" fill="#0F0F1A" />
    <ellipse cx="228" cy="200" rx="19" ry="12" fill="#0F0F1A" />
    <!-- Outer iris ring -->
    <circle cx="172" cy="200" r="10" fill="none" stroke="${c.eyes}" stroke-width="1.5" />
    <circle cx="228" cy="200" r="10" fill="none" stroke="${c.eyes}" stroke-width="1.5" />
    <!-- Inner iris fill -->
    <circle cx="172" cy="200" r="8" fill="${c.eyes}" opacity="0.7" />
    <circle cx="228" cy="200" r="8" fill="${c.eyes}" opacity="0.7" />
    <!-- Digital pupil — hexagonal -->
    <path d="M172,195 L176,197.5 L176,202.5 L172,205 L168,202.5 L168,197.5Z" fill="#0A0A14" />
    <path d="M228,195 L232,197.5 L232,202.5 L228,205 L224,202.5 L224,197.5Z" fill="#0A0A14" />
    <!-- Circuit traces in iris -->
    <path d="M165,198 L168,198 L170,196" stroke="${c.eyes}" stroke-width="0.5" fill="none" opacity="0.5" />
    <path d="M179,202 L176,202 L174,204" stroke="${c.eyes}" stroke-width="0.5" fill="none" opacity="0.5" />
    <path d="M221,198 L224,198 L226,196" stroke="${c.eyes}" stroke-width="0.5" fill="none" opacity="0.5" />
    <path d="M235,202 L232,202 L230,204" stroke="${c.eyes}" stroke-width="0.5" fill="none" opacity="0.5" />
    <!-- Highlight -->
    <circle cx="176" cy="196" r="2" fill="white" opacity="0.85" />
    <circle cx="232" cy="196" r="2" fill="white" opacity="0.85" />
    <circle cx="170" cy="203" r="1" fill="white" opacity="0.4" />
    <circle cx="226" cy="203" r="1" fill="white" opacity="0.4" />
    <!-- Subtle glow beneath -->
    <ellipse cx="172" cy="200" rx="14" ry="10" fill="${neon}" opacity="0.06" filter="url(#soft-glow)" />
    <ellipse cx="228" cy="200" rx="14" ry="10" fill="${neon}" opacity="0.06" filter="url(#soft-glow)" />
    `;
  },
};
