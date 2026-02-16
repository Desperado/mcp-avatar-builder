import type { AvatarOptions, CategoryDef, PaletteDef, ResolvedColors } from "../types.js";

export interface AvatarStyle {
  name: string;
  meta: {
    title: string;
    author: string;
    license: string;
  };
  categories: CategoryDef[];
  palettes: PaletteDef;
  layerOrder: string[];
  viewBox: string;
  render(options: AvatarOptions, colors: ResolvedColors): string;
}
