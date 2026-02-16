import type { AvatarStyle } from "../style.js";
import type { AvatarOptions, ResolvedColors } from "../../types.js";
import { retroPalettes } from "./palettes.js";
import { retroDefs } from "./defs.js";
import { variants as backgroundVariants } from "./parts/background.js";
import { variants as headVariants } from "./parts/head.js";
import { variants as eyeVariants } from "./parts/eyes.js";
import { variants as eyebrowVariants } from "./parts/eyebrows.js";
import { variants as mouthVariants } from "./parts/mouth.js";
import { backVariants as hairBackVariants, frontVariants as hairFrontVariants } from "./parts/hair.js";
import { variants as faceModVariants } from "./parts/face_mods.js";
import { variants as clothingVariants } from "./parts/clothing.js";
import { variants as accessoryVariants } from "./parts/accessories.js";
import { variants as effectVariants } from "./parts/effects.js";

const partMap: Record<string, Record<string, (c: ResolvedColors) => string>> = {
  background: backgroundVariants,
  head: headVariants,
  eyes: eyeVariants,
  eyebrows: eyebrowVariants,
  mouth: mouthVariants,
  hair_back: hairBackVariants,
  hair_front: hairFrontVariants,
  face_mods: faceModVariants,
  clothing: clothingVariants,
  accessories: accessoryVariants,
  effects: effectVariants,
};

export const retroStyle: AvatarStyle = {
  name: "retro",
  meta: {
    title: "Retro",
    author: "MCP Avatar Builder",
    license: "MIT",
  },
  categories: [
    { name: "background", variants: Object.keys(backgroundVariants), default: 0 },
    { name: "head", variants: Object.keys(headVariants), default: 0 },
    { name: "eyes", variants: Object.keys(eyeVariants), default: 0 },
    { name: "eyebrows", variants: Object.keys(eyebrowVariants), default: 0 },
    { name: "mouth", variants: Object.keys(mouthVariants), default: 0 },
    { name: "hair_back", variants: Object.keys(hairBackVariants), default: 0 },
    { name: "hair_front", variants: Object.keys(hairFrontVariants), default: 0 },
    { name: "face_mods", variants: Object.keys(faceModVariants), default: 0 },
    { name: "clothing", variants: Object.keys(clothingVariants), default: 0 },
    { name: "accessories", variants: Object.keys(accessoryVariants), default: 0, optional: true },
    { name: "effects", variants: Object.keys(effectVariants), default: 0, optional: true },
  ],
  palettes: retroPalettes,
  layerOrder: [
    "background",
    "hair_back",
    "clothing",
    "head",
    "face_mods",
    "eyes",
    "eyebrows",
    "mouth",
    "accessories",
    "hair_front",
    "effects",
  ],
  viewBox: "0 0 400 400",

  render(options: AvatarOptions, colors: ResolvedColors): string {
    const fragments: string[] = [];

    // Emit SVG defs block first (filters, gradients)
    fragments.push(retroDefs(colors));

    for (const layer of this.layerOrder) {
      const category = this.categories.find((cat) => cat.name === layer);
      if (!category) continue;

      const selectedVariant = options.parts?.[layer] ?? category.variants[category.default];
      const variants = partMap[layer];
      if (!variants) continue;

      const renderer = variants[selectedVariant];
      if (!renderer) continue;

      fragments.push(`<g data-layer="${layer}">${renderer(colors)}</g>`);
    }

    return fragments.join("\n");
  },
};
