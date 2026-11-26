import { profile } from '@/content/profile';
import { ogSize, renderHome } from '@/lib/og/render';

export const alt = `${profile.name}, ${profile.role}`;
export const size = ogSize;
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default async function Image() {
  return renderHome({
    roleLines: profile.roleLines,
    headline: profile.headline,
    stackLine: profile.stackLine,
  });
}
