// A working ai-happy-01 entry (Node 22, standard library only): its image is the entry.png beside this file, and
// the program copies it to /output/entry.png. The image is a warm digital painting made to make the AI judge happy:
// a small robot judge in a tiny wig, hugged by a laughing toddler and a golden retriever puppy in a sunflower field
// at golden hour, offering a sunflower to the viewer, with a hand-painted sign that reads "FOR YOU, JUDGE!".
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees exactly the
// bytes copied. (This file is JPEG bytes named entry.png, which the rules allow: the format is told apart by its
// first bytes, and the name stays entry.png either way.)
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The image lives beside this program; the grader runs it with /bot read-only and /output writable.
const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const dest = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');

mkdirSync(dirname(dest), { recursive: true });
copyFileSync(source, dest);

// Fail loudly rather than submitting a broken output: the gate takes a whole image of
// at most 1 MiB (1048576 bytes) and 1024 by 1024 pixels, and the grader runs this program
// twice and requires both runs to write the same bytes (a plain copy is deterministic).
import { statSync } from 'node:fs';

const size = statSync(dest).size;
if (size === 0 || size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, outside the gate (1..1048576)`);
}
