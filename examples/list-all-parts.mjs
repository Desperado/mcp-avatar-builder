#!/usr/bin/env node
/**
 * List every style's categories, variants, and color palettes.
 * Useful for building customization UIs or discovering available options.
 *
 * Usage:
 *   node examples/list-all-parts.mjs
 *   node examples/list-all-parts.mjs cyberpunk    # single style
 */

import { getStyle, listStyles } from '../build/styles/index.js';

const filterStyle = process.argv[2];

for (const style of listStyles()) {
  if (filterStyle && style.name !== filterStyle) continue;

  console.log(`\n${'═'.repeat(50)}`);
  console.log(`  ${style.name.toUpperCase()}  (${style.viewBox})`);
  console.log(`${'═'.repeat(50)}`);

  console.log('\n  Parts:');
  for (const cat of style.categories) {
    const opt = cat.optional ? ' (optional)' : '';
    const def = cat.variants[cat.default] || cat.variants[0];
    console.log(`    ${cat.name}${opt}: ${cat.variants.join(', ')}  [default: ${def}]`);
  }

  console.log('\n  Palettes:');
  for (const [key, entries] of Object.entries(style.palettes)) {
    const swatches = entries.map(e => `${e.name} ${e.value}`).join(', ');
    console.log(`    ${key}: ${swatches}`);
  }
}
