#!/usr/bin/env node
/**
 * Basic avatar generation — one avatar per style, output as SVG files.
 *
 * Usage:
 *   node examples/basic-generation.mjs
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { compose } from '../build/composer.js';
import { getStyle, listStyles } from '../build/styles/index.js';

const outDir = 'examples/output';
mkdirSync(outDir, { recursive: true });

// Generate one avatar per style using a seed
for (const style of listStyles()) {
  const svg = compose(style, {}, 'hello-world');
  const path = `${outDir}/${style.name}.svg`;
  writeFileSync(path, svg);
  console.log(`${style.name} → ${path}`);
}

console.log('\nDone! Open any .svg file in a browser to preview.');
