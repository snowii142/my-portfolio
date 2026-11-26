import type { Project } from '@/content/projects';
import { t } from '@/i18n/ui';
import { Container, Pills } from '@/components/ui';
import { caseH2 } from './headings';

const gridH2 = `${caseH2} mt-10 first:mt-0 lg:mt-0`;

export function CaseOverview({ project }: { project: Project }) {
  const c = t.caseStudy;
  return (
    <Container className="grid gap-x-16 gap-y-5 py-16 sm:py-24 lg:grid-cols-[1fr_2fr] lg:gap-y-16">
      <h2 className={gridH2}>{c.overview}</h2>
      <p className="max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
        {project.context}
      </p>

      <h2 className={gridH2}>{c.built}</h2>
      <ul className="flex max-w-2xl flex-col gap-4 leading-relaxed text-ink-soft">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-3.5 text-pretty">
            <span
              aria-hidden="true"
              className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-ink"
            />
            {item}
          </li>
        ))}
      </ul>

      <h2 className={gridH2}>{c.stack}</h2>
      <Pills items={project.stack} label={c.stack} />
    </Container>
  );
}
