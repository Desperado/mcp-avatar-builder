#!/usr/bin/env node
/**
 * Generate deterministic team avatars — same seed always produces the same face.
 * Great for user profiles, placeholder identicons, or team pages.
 *
 * Usage:
 *   node examples/team-avatars.mjs
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { compose } from '../build/composer.js';
import { getStyle } from '../build/styles/index.js';

const outDir = 'examples/output';
mkdirSync(outDir, { recursive: true });

const team = [
  { name: 'alice',   style: 'chibi' },
  { name: 'bob',     style: 'cyberpunk' },
  { name: 'carol',   style: 'retro' },
  { name: 'dave',    style: 'horror' },
  { name: 'eve',     style: 'cyberpunk' },
];

for (const member of team) {
  const style = getStyle(member.style);
  // Seed = username → always the same avatar for this person
  const svg = compose(style, {}, member.name);
  const path = `${outDir}/team-${member.name}.svg`;
  writeFileSync(path, svg);
  console.log(`${member.name} (${member.style}) → ${path}`);
}

console.log('\nRun again — you\'ll get identical avatars (deterministic seeds).');
