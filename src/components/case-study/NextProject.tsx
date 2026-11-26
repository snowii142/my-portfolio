import Link from 'next/link';
import { coverPath, type Project } from '@/content/projects';
import { t } from '@/i18n/ui';
import { MediaFrame } from '@/components/Media';
import { ArrowRight, Container } from '@/components/ui';

export function NextProject({ project }: { project: Project }) {
  const label = t.caseStudy.next;
  return (
    <nav aria-label={label} className="py-16 sm:py-24">
      <Container>
        <Link
          href={`/work/${project.slug}/`}
          className="group grid items-center gap-8 rounded-3xl bg-surface p-4 shadow-card ring-1 ring-line transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift sm:p-6 md:grid-cols-[1fr_1.2fr] md:p-8"
        >
          <div>
            <p className="font-serif text-3xl leading-tight font-semibold italic sm:text-4xl">
              {project.title}
            </p>
            <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
              {project.summary}
            </p>
            <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
              <span className="underline decoration-line-strong underline-offset-4 group-hover:decoration-ink">
                {label}
              </span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </p>
          </div>
          <MediaFrame
            src={coverPath(project.slug)}
            alt={project.media.cover.alt}
            pendingLabel={t.image.pending}
            ratio="aspect-[16/10]"
            scroll
            device={project.media.device}
            sizes="(min-width: 768px) 600px, 94vw"
            className="rounded-[18px]"
          />
        </Link>
      </Container>
    </nav>
  );
}
