import { profile } from '@/content/profile';
import { t } from '@/i18n/ui';
import { RevealGroup, RevealItem } from '@/components/motion';
import {
  Container,
  DownloadIcon,
  MailIcon,
  PhoneIcon,
  buttonStyles,
} from '@/components/ui';

export function Contact() {
  return (
    <section aria-labelledby="contact" className="py-20 sm:py-28">
      <Container>
        <RevealGroup className="flex flex-col items-center text-center">
          <RevealItem>
            <h2
              id="contact"
              className="font-serif text-[clamp(2.75rem,6vw,4.25rem)] leading-none font-semibold tracking-[-0.015em] italic"
            >
              {t.contact.title}
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-6 inline-flex font-bold items-center gap-2 rounded-full bg-surface px-3.5 py-1.5 text-sm shadow-pill">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
              </span>
              {t.contact.status}
            </p>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-5 max-w-[46ch] leading-relaxed text-ink-soft text-pretty">
              {t.contact.lead}
            </p>
          </RevealItem>
          <RevealItem className="mt-8 flex flex-col items-center gap-3 text-sm sm:flex-row sm:gap-8">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
            >
              <MailIcon />
              {profile.email}
            </a>
            <a
              href={profile.phoneHref}
              className="flex items-center gap-2 tabular-nums underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
            >
              <PhoneIcon />
              {profile.phone}
            </a>
          </RevealItem>
          <RevealItem className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href={`mailto:${profile.email}`} className={buttonStyles.solid}>
              <MailIcon />
              {t.contact.email}
            </a>
            <a href={profile.cvPath} download className={buttonStyles.pill}>
              <DownloadIcon />
              {t.contact.downloadCv}
            </a>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}
