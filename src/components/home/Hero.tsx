import Link from 'next/link';
import { monthsOfExperience, profile } from '@/content/profile';
import { YearsOfExperience } from '@/components/YearsOfExperience';
import { t } from '@/i18n/ui';
import { HeroParallax, RevealGroup, RevealItem } from '@/components/motion';
import {
  AtIcon,
  ChevronsDown,
  FolderIcon,
  ResumeIcon,
  buttonStyles,
} from '@/components/ui';

export function Hero() {
  const [mono, serif] = profile.roleLines;
  return (
    <section
      id="top"
      className="relative -mt-17 flex min-h-[min(92svh,900px)] flex-col items-center justify-center px-4 pt-28 pb-24 text-center"
    >
      <HeroParallax>
        <RevealGroup
          onMount
          stagger={0.1}
          delay={0.05}
          className="flex flex-col items-center"
        >
          <RevealItem>
            <h1 className="flex flex-col items-center">
              <span className="font-mono text-[clamp(2rem,6.2vw,4.25rem)] leading-[1.1] font-light tracking-[-0.03em]">
                {mono}
              </span>
              <span className="font-serif text-[clamp(2.4rem,7.4vw,5.1rem)] leading-[1.05] font-semibold tracking-[-0.015em] italic">
                {serif}
              </span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-7 max-w-[38ch] text-base leading-relaxed text-ink-soft text-balance sm:text-lg">
              {profile.headline}
            </p>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 text-sm text-muted italic">
              <YearsOfExperience initial={monthsOfExperience()} />
              {' · '}
              {profile.stackLine.join(' · ')}
            </p>
          </RevealItem>
          <RevealItem className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/#work" className={buttonStyles.pill}>
              <FolderIcon />
              {t.hero.projects}
            </Link>
            <a
              href={profile.cvPath}
              target="_blank"
              rel="noopener"
              className={buttonStyles.pill}
            >
              <ResumeIcon />
              {t.hero.resume}
            </a>
            <Link href="/#contact" className={buttonStyles.pill}>
              <AtIcon />
              {t.hero.contact}
            </Link>
          </RevealItem>
        </RevealGroup>
      </HeroParallax>
      <Link
        href="/#work"
        aria-label={t.hero.scroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full p-3 text-ink-soft transition-colors hover:text-ink"
      >
        <ChevronsDown className="nudge size-5" />
      </Link>
    </section>
  );
}
