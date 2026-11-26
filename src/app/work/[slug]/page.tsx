import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/content/projects';
import { ReadingProgress } from '@/components/motion';
import { CaseHeader } from '@/components/case-study/CaseHeader';
import { CaseCover } from '@/components/case-study/CaseCover';
import { CaseOverview } from '@/components/case-study/CaseOverview';
import { CaseScreens } from '@/components/case-study/CaseScreens';
import { NextProject } from '@/components/case-study/NextProject';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/work/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: PageProps<'/work/[slug]'>) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <ReadingProgress />
      <CaseHeader project={project} />
      <CaseCover project={project} />
      <CaseOverview project={project} />
      <CaseScreens project={project} />
      <NextProject project={next} />
    </article>
  );
}
