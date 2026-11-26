import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { imageSize } from 'image-size';

function publicFile(publicPath: string) {
  return path.join(process.cwd(), 'public', publicPath);
}

export function publicImageSize(
  publicPath: string,
): { width: number; height: number } | null {
  const file = publicFile(publicPath);
  if (!existsSync(file)) return null;
  const { width, height } = imageSize(readFileSync(file));
  return width && height ? { width, height } : null;
}
