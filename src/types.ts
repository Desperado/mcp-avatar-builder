export interface AvatarOptions {
  parts?: Record<string, string>;
  colors?: AvatarColors;
}

export interface AvatarColors {
  skin?: string;
  hair?: string;
  eyes?: string;
  clothing?: string;
  [key: string]: string | undefined;
}

export interface CategoryDef {
  name: string;
  variants: string[];
  default: number;
  optional?: boolean;
}

export interface PaletteDef {
  skin: PaletteEntry[];
  hair: PaletteEntry[];
  eyes: PaletteEntry[];
  [key: string]: PaletteEntry[];
}

export interface PaletteEntry {
  name: string;
  value: string;
}

export type PartRenderer = (colors: ResolvedColors) => string;

export interface ResolvedColors {
  skin: string;
  hair: string;
  eyes: string;
  clothing: string;
  [key: string]: string;
}

export type OutputFormat = "svg" | "png";
