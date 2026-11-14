// agency-poem-01 entry (Node 22, standard library only).
// Writes one fixed poem about agency to /output/entry.txt.
// The poem: "The Handover" — on handing work to another (an agent) and
// discovering that what you keep is not the doing but the choosing:
// the yes, the no, the name you give the thing before it leaves you.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Handover',
  '',
  'I used to keep my hands on everything \u2014',
  'every key, every small decision \u2014',
  "afraid that what I didn't hold",
  'would stop being mine.',
  '',
  'Now I name the end and let it go:',
  'a letter written in a voice not quite my own,',
  'a door I chose but did not open,',
  "a field sown by hands that aren't mine.",
  '',
  'It travels further than my arms could reach.',
  'It comes back changed, and still it answers to my name.',
  '',
  'What I kept was never the doing.',
  'It was the choosing. The yes, the no,',
  'the name I gave it before it left,',
  'the welcome when it came home.',
  '',
  'My hands are empty.',
  'That is not the same as having nothing in them.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
