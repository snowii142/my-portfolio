// Static export writes share images as extensionless `opengraph-image` files.
// Static hosts then serve them without an image content type, which some link
// previews reject. Rename them to `.png` and point the pages at the new name.
import { readdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';

const out = path.resolve('out');

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let images = 0;
let pages = 0;
for await (const file of walk(out)) {
  const name = path.basename(file);
  if (name === 'opengraph-image') {
    await rename(file, `${file}.png`);
    images++;
  } else if (name.endsWith('.html') || name.endsWith('.txt')) {
    const text = await readFile(file, 'utf8');
    const next = text.replaceAll('/opengraph-image?', '/opengraph-image.png?');
    if (next !== text) {
      await writeFile(file, next);
      pages++;
    }
  }
}
console.log(`og-png: ${images} images renamed, ${pages} files updated`);
