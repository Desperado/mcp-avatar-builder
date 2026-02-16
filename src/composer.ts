import type { AvatarStyle } from "./styles/style.js";
import type { AvatarOptions, AvatarColors, ResolvedColors } from "./types.js";

// XorShift32 PRNG for deterministic seed-based randomization
function xorshift32(seed: number): () => number {
  let state = seed | 0 || 1;
  return () => {
    state ^= state << 13;
    state ^= state >> 17;
    state ^= state << 5;
    return (state >>> 0) / 0xFFFFFFFF;
  };
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return hash;
}

function resolveColors(style: AvatarStyle, colors?: AvatarColors, rng?: () => number): ResolvedColors {
  const pick = (key: string, palette: { value: string }[]): string => {
    if (colors?.[key]) return colors[key]!;
    if (rng) return palette[Math.floor(rng() * palette.length)].value;
    return palette[0].value;
  };

  const resolved: ResolvedColors = {
    skin: pick("skin", style.palettes.skin),
    hair: pick("hair", style.palettes.hair),
    eyes: pick("eyes", style.palettes.eyes),
    clothing: colors?.clothing ?? "#4A90D9",
  };

  // Resolve any extra palette categories (e.g. neon, accent)
  for (const key of Object.keys(style.palettes)) {
    if (resolved[key] !== undefined) continue;
    resolved[key] = pick(key, style.palettes[key]);
  }

  return resolved;
}

function resolveParts(style: AvatarStyle, parts?: Record<string, string>, rng?: () => number): Record<string, string> {
  const resolved: Record<string, string> = { ...parts };

  for (const category of style.categories) {
    if (resolved[category.name] !== undefined) continue;
    if (rng) {
      resolved[category.name] = category.variants[Math.floor(rng() * category.variants.length)];
    } else {
      resolved[category.name] = category.variants[category.default];
    }
  }

  return resolved;
}

export function compose(
  style: AvatarStyle,
  options?: AvatarOptions,
  seed?: string,
): string {
  const rng = seed ? xorshift32(hashString(seed)) : undefined;
  const parts = resolveParts(style, options?.parts, rng);
  const colors = resolveColors(style, options?.colors, rng);
  const body = style.render({ parts, colors: options?.colors }, colors);

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${style.viewBox}" width="200" height="200">`,
    body,
    `</svg>`,
  ].join("\n");
}
