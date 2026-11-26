import Link from 'next/link';
import type { Project } from '@/content/projects';
import { t } from '@/i18n/ui';
import { RevealGroup, RevealItem } from '@/components/motion';
import { ArrowLeft, ArrowUpRight, buttonStyles } from '@/components/ui';

export function CaseHeader({ project }: { project: Project }) {
  const c = t.caseStudy;
  return (
    <header>
      <RevealGroup
        onMount
        stagger={0.08}
        className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-12 pb-12 text-center sm:px-8 sm:pt-16 sm:pb-16"
      >
        <RevealItem>
          <Link
            href="/#work"
            className={`${buttonStyles.pill} py-2 text-muted hover:text-ink`}
          >
            <ArrowLeft />
            {c.allWork}
          </Link>
        </RevealItem>
        <RevealItem>
          <h1 className="mt-10 font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.04] font-semibold tracking-[-0.015em] text-balance italic">
            {project.title}
          </h1>
        </RevealItem>
        <RevealItem>
          <p className="mx-auto mt-6 max-w-[56ch] text-lg leading-relaxed text-ink-soft text-pretty">
            {project.summary}
          </p>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-line-strong underline-offset-4 hover:decoration-ink"
            >
              {c.visitSite}
              <ArrowUpRight />
            </a>
          )}
        </RevealItem>
        <RevealItem
          as="dl"
          className="mt-12 grid w-full gap-x-10 gap-y-6 rounded-3xl bg-surface p-6 text-left text-sm shadow-card ring-1 ring-line sm:grid-cols-2 sm:p-8 lg:grid-cols-4"
        >
          <div>
            <dt className="text-muted">{c.project}</dt>
            <dd className="mt-1 leading-relaxed font-medium">
              {project.product}
            </dd>
          </div>
          {project.client && (
            <div>
              <dt className="text-muted">{c.client}</dt>
              <dd className="mt-1 leading-relaxed font-medium">
                {project.client}
              </dd>
            </div>
          )}
          <div>
            <dt className="text-muted">{c.industry}</dt>
            <dd className="mt-1 font-medium">{project.domain}</dd>
          </div>
          <div>
            <dt className="text-muted">{c.years}</dt>
            <dd className="mt-1 font-medium tabular-nums">{project.years}</dd>
          </div>
          <div className="sm:col-span-2 lg:col-span-4">
            <dt className="text-muted">{c.role}</dt>
            <dd className="mt-1 leading-relaxed font-medium">
              {project.role}
            </dd>
          </div>
        </RevealItem>
      </RevealGroup>
    </header>
  );
}
