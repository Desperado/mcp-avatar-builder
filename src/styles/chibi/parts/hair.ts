import type { PartRenderer } from "../../../types.js";

// hair_back renders behind the head
export const backVariants: Record<string, PartRenderer> = {
  long: (c) => `
    <path d="M36,80 Q30,140 45,190 Q70,200 100,200 Q130,200 155,190 Q170,140 164,80Z" fill="${c.hair}" />
  `,
  short: (c) => `
    <path d="M38,80 Q34,120 50,145 Q60,150 70,145 L70,100 Q100,105 130,100 L130,145 Q140,150 150,145 Q166,120 162,80Z" fill="${c.hair}" />
  `,
  ponytail: (c) => `
    <path d="M36,80 Q30,120 45,150 L55,140 L55,100 Q100,105 145,100 L145,140 L155,150 Q170,120 164,80Z" fill="${c.hair}" />
    <path d="M135,60 Q160,65 155,120 Q150,170 145,190 Q142,180 140,170 Q145,130 142,80 Q140,65 135,60Z" fill="${c.hair}" />
  `,
};

// hair_front renders on top of everything
export const frontVariants: Record<string, PartRenderer> = {
  bangs: (c) => `
    <path d="M40,82 Q45,55 70,48 Q90,44 100,46 Q110,44 130,48 Q155,55 160,82 L155,78 Q140,65 120,62 Q100,60 80,62 Q60,65 45,78Z" fill="${c.hair}" />
  `,
  side_swept: (c) => `
    <path d="M40,82 Q42,50 80,42 Q100,38 115,42 Q100,50 90,62 Q85,70 82,82Z" fill="${c.hair}" />
    <path d="M115,42 Q145,48 158,78 L155,75 Q142,58 120,50Z" fill="${c.hair}" />
  `,
  curtain: (c) => `
    <path d="M40,82 Q45,50 75,42 L78,68 Q82,78 80,82Z" fill="${c.hair}" />
    <path d="M125,42 Q155,50 160,82 L120,82 Q118,78 122,68Z" fill="${c.hair}" />
    <path d="M75,42 Q100,36 125,42 Q110,46 100,44 Q90,46 75,42Z" fill="${c.hair}" />
  `,
};
