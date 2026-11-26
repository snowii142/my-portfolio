import { experience } from '@/content/profile';
import { t } from '@/i18n/ui';
import { RevealGroup, RevealItem } from '@/components/motion';
import { Container, SectionTitle } from '@/components/ui';

export function Experience() {
  return (
    <section aria-labelledby="experience" className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <RevealGroup>
            <RevealItem>
              <SectionTitle id="experience" title={t.experience.title} />
            </RevealItem>
          </RevealGroup>
          <RevealGroup
            as="ol"
            stagger={0.12}
            className="relative ml-1 flex flex-col gap-10 border-l border-line pl-8"
          >
            {experience.map((job, i) => (
              <RevealItem as="li" key={job.period} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute top-1.5 -left-9.25 size-2.25 rounded-full ring-4 ring-bg ${
                    i === 0 ? 'pulsar bg-ink text-ink' : 'bg-line-strong'
                  }`}
                />
                <p className="font-mono text-sm text-muted tabular-nums">
                  {job.period}
                </p>
                <p className="mt-1.5 text-lg font-semibold tracking-[-0.01em]">
                  {job.title}
                  <span className="font-normal text-muted">
                    , {job.company}
                  </span>
                </p>
                <p className="mt-2 leading-relaxed text-ink-soft text-pretty">
                  {job.summary}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
          <dl className="mt-14 grid gap-6 rounded-3xl bg-surface p-6 text-sm shadow-card ring-1 ring-line sm:grid-cols-2 sm:p-8">
            <div>
              <dt className="font-medium">{t.experience.education}</dt>
              <dd className="mt-1 leading-relaxed text-muted">
                {t.experience.educationText}
              </dd>
            </div>
            <div>
              <dt className="font-medium">{t.experience.languages}</dt>
              <dd className="mt-1 leading-relaxed text-muted">
                {t.experience.languagesText}
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
