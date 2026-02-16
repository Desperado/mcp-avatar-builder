#!/usr/bin/env node
/**
 * Fully customized cyberpunk avatar — pick every part and color.
 *
 * Usage:
 *   node examples/custom-cyberpunk.mjs
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { compose } from '../build/composer.js';
import { getStyle } from '../build/styles/index.js';

const outDir = 'examples/output';
mkdirSync(outDir, { recursive: true });

const style = getStyle('cyberpunk');

const svg = compose(style, {
  parts: {
    background: 'rain_city',
    head: 'angular',
    eyes: 'led',
    eyebrows: 'sharp',
    mouth: 'smirk',
    hair_back: 'mohawk',
    hair_front: 'mohawk',
    face_mods: 'led_tattoo',
    clothing: 'techwear',
    accessories: 'headset',
    effects: 'scanlines',
  },
  colors: {
    skin: 'porcelain',
    hair: 'electric-blue',
    eyes: 'cyan',
    neon: '#FF1744',      // hex works too
    accent: 'chrome',
  },
}, 'custom-punk');

writeFileSync(`${outDir}/custom-cyberpunk.svg`, svg);
console.log('Wrote examples/output/custom-cyberpunk.svg');
