import type { AvatarStyle } from "./style.js";
import { chibiStyle } from "./chibi/index.js";

const registry = new Map<string, AvatarStyle>();

function register(style: AvatarStyle): void {
  registry.set(style.name, style);
}

register(chibiStyle);

export function getStyle(name: string): AvatarStyle | undefined {
  return registry.get(name);
}

export function listStyles(): AvatarStyle[] {
  return Array.from(registry.values());
}
