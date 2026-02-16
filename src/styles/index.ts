import type { AvatarStyle } from "./style.js";
import { chibiStyle } from "./chibi/index.js";
import { cyberpunkStyle } from "./cyberpunk/index.js";
import { horrorStyle } from "./horror/index.js";
import { retroStyle } from "./retro/index.js";
import { coffeetalkStyle } from "./coffeetalk/index.js";
import { tailsnoirStyle } from "./tailsnoir/index.js";

const registry = new Map<string, AvatarStyle>();

function register(style: AvatarStyle): void {
  registry.set(style.name, style);
}

register(chibiStyle);
register(cyberpunkStyle);
register(horrorStyle);
register(retroStyle);
register(coffeetalkStyle);
register(tailsnoirStyle);

export function getStyle(name: string): AvatarStyle | undefined {
  return registry.get(name);
}

export function listStyles(): AvatarStyle[] {
  return Array.from(registry.values());
}
