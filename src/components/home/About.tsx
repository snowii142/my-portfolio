import { profile } from '@/content/profile';
import { t } from '@/i18n/ui';
import { MediaFrame } from '@/components/Media';
import { RevealGroup, RevealItem } from '@/components/motion';
import { Container, PinIcon, SectionTitle } from '@/components/ui';

export function About() {
  return (
    <section aria-labelledby="about" className="py-20 sm:py-28">
      <Container>
        <RevealGroup>
          <RevealItem>
            <SectionTitle id="about" title={t.about.title} />
          </RevealItem>
          <RevealItem
            variant="scale"
            className="mx-auto grid max-w-5xl items-center gap-8 rounded-3xl bg-surface p-4 shadow-card ring-1 ring-line sm:p-6 md:grid-cols-[280px_1fr] md:gap-12 lg:p-8"
          >
            <figure className="mx-auto w-full max-w-70">
              <MediaFrame
                src={profile.portraitPath}
                alt={t.hero.portraitAlt}
                pendingLabel={t.image.portraitPending}
                ratio="aspect-[4/5]"
                sizes="280px"
                position="object-[50%_25%]"
                className="rounded-[18px]"
              />
            </figure>
            <div className="flex flex-col gap-5 pb-2 md:pb-0">
              <p className="text-lg font-semibold tracking-[-0.01em]">
                {profile.name}
                <span className="block text-sm font-normal text-muted">
                  {profile.role}
                </span>
              </p>
              {profile.about.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[62ch] leading-relaxed text-ink-soft text-pretty"
                >
                  {paragraph}
                </p>
              ))}
              <p className="flex items-center gap-2 text-sm text-muted">
                <PinIcon />
                {profile.location}
              </p>
            </div>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}
