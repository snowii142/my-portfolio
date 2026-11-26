import { coverPath, getProject, projects } from '@/content/projects';
import { profile } from '@/content/profile';
import { ogSize, renderProject } from '@/lib/og/render';

export const alt = `A case study by ${profile.name}`;
export const size = ogSize;
export const contentType = 'image/png';
// Drawn once at build time for the static export.
export const dynamic = 'force-static';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug)!;
  return renderProject({
    title: project.title,
    meta: `${project.years}  /  ${project.domain}`,
    summary: project.summary,
    cover: coverPath(project.slug),
    device: project.media.device,
  });
}
