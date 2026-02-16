#!/usr/bin/env node
/**
 * Export avatars as PNG files using the built-in rasterizer (resvg).
 *
 * Usage:
 *   node examples/png-export.mjs
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { compose } from '../build/composer.js';
import { getStyle } from '../build/styles/index.js';
import { rasterize } from '../build/rasterizer.js';

const outDir = 'examples/output';
mkdirSync(outDir, { recursive: true });

const style = getStyle('retro');

const svg = compose(style, {
  parts: {
    background: 'sunset',
    clothing: 'leather_jacket',
    hair_back: 'feathered',
    hair_front: 'feathered',
    eyes: 'determined',
    accessories: 'shades',
  },
  colors: {
    retro: 'sunset-orange',
    hair: 'auburn',
  },
}, 'retro-hero');

// Export at multiple sizes
for (const size of [64, 200, 512]) {
  const png = rasterize(svg, size);
  const path = `${outDir}/retro-hero-${size}px.png`;
  writeFileSync(path, png);
  console.log(`${size}x${size} → ${path} (${png.length} bytes)`);
}
