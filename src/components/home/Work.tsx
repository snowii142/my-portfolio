import Link from 'next/link';
import { coverPath, otherWork, projects, thumbPath } from '@/content/projects';
import { publicImageSize } from '@/lib/media';
import { t } from '@/i18n/ui';
import { MediaFrame } from '@/components/Media';
import { RevealGroup, RevealItem } from '@/components/motion';
import { ArrowRight, Container, SectionTitle } from '@/components/ui';

export function Work() {
  return (
    <section aria-labelledby="work" className="py-20 sm:py-28">
      <Container>
        <RevealGroup>
          <RevealItem>
            <SectionTitle id="work" title={t.work.title} lead={t.work.lead} />
          </RevealItem>
        </RevealGroup>
        <RevealGroup
          as="ul"
          perItem
          stagger={0.14}
          className="grid gap-6 md:grid-cols-2 lg:gap-8"
        >
          {projects.map((project, index) => (
            <RevealItem as="li" variant="card" key={project.slug}>
              <Link
                href={`/work/${project.slug}/`}
                className="group flex h-full flex-col rounded-3xl bg-surface p-3 shadow-card ring-1 ring-line transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift"
              >
                <MediaFrame
                  src={
                    publicImageSize(thumbPath(project.slug))
                      ? thumbPath(project.slug)
                      : coverPath(project.slug)
                  }
                  alt={project.media.cover.alt}
                  pendingLabel={t.image.pending}
                  ratio="aspect-[16/10]"
                  sizes="(min-width: 768px) 540px, 92vw"
                  priority={index < 2}
                  parallax
                  className="rounded-[18px]"
                />
                <div className="flex flex-1 flex-col gap-2 px-3 pt-5 pb-3">
                  <p className="font-mono text-xs text-muted tabular-nums">
                    {project.years}
                    <span className="mx-2 text-line-strong" aria-hidden="true">
                      /
                    </span>
                    {project.domain}
                  </p>
                  <h3 className="text-xl font-semibold tracking-[-0.015em]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted">{project.product}</p>
                  <p className="mt-1 leading-relaxed text-ink-soft text-pretty">
                    {project.summary}
                  </p>
                  <p className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-medium">
                    <span className="underline decoration-line-strong underline-offset-4 transition-colors group-hover:decoration-ink">
                      {t.work.viewCase}
                    </span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-20 sm:mt-24">
          <RevealItem>
            <h3 className="mb-8 text-center font-serif text-3xl font-medium italic">
              {t.work.moreTitle}
            </h3>
          </RevealItem>
          <RevealItem className="overflow-hidden rounded-3xl bg-surface shadow-card ring-1 ring-line">
            <table className="w-full text-left text-sm">
              <thead className="hidden border-b border-line text-muted sm:table-header-group">
                <tr>
                  <th scope="col" className="w-20 px-6 py-3.5 font-medium">
                    {t.work.year}
                  </th>
                  <th scope="col" className="px-6 py-3.5 font-medium">
                    {t.work.project}
                  </th>
                  <th
                    scope="col"
                    className="hidden px-6 py-3.5 font-medium lg:table-cell"
                  >
                    {t.work.builtWith}
                  </th>
                </tr>
              </thead>
              <RevealGroup
                as="tbody"
                perItem
                stagger={0.09}
                delay={0.15}
                className="divide-y divide-line"
              >
                {otherWork.map((item) => (
                  <RevealItem
                    as="tr"
                    key={item.title}
                    className="flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-surface-2/60 sm:table-row sm:p-0"
                  >
                    <td className="font-mono text-xs text-muted tabular-nums sm:px-6 sm:py-4 sm:align-top sm:text-sm">
                      {item.years}
                    </td>
                    <td className="sm:px-6 sm:py-4">
                      <p className="font-medium text-ink">
                        {item.title}
                        <span className="font-normal text-muted">
                          , {item.product}
                        </span>
                      </p>
                      <p className="mt-1 max-w-xl leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </td>
                    <td className="font-mono text-xs text-muted sm:hidden lg:table-cell lg:px-6 lg:py-4 lg:align-top">
                      {item.stack.join(', ')}
                    </td>
                  </RevealItem>
                ))}
              </RevealGroup>
            </table>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}
