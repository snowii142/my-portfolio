import Link from 'next/link';
import { profile } from '@/content/profile';
import { t } from '@/i18n/ui';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ArrowUpRight } from '@/components/ui';

const links = [
  { href: '/#work', label: t.nav.work },
  { href: '/#experience', label: t.nav.experience },
  { href: '/#about', label: t.nav.about },
  { href: '/#contact', label: t.nav.contact },
];

export function SiteHeader() {
  return (
    <header className="sticky top-3 z-40 flex justify-center px-3 pt-3 sm:top-4 sm:pt-4">
      <div className="flex items-center gap-1 rounded-full bg-surface/85 py-1.5 pr-1.5 pl-4 shadow-card ring-1 ring-line backdrop-blur-md">
        <Link
          href="/#top"
          className="mr-2 flex items-center gap-2 text-sm font-medium tracking-tight"
          aria-label={`${profile.name}, ${t.nav.home}`}
        >
          <span aria-hidden="true" className="font-mono text-[13px] text-muted">
            {'{'}
            <span className="text-ink">ps</span>
            {'}'}
          </span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </Link>
        <nav aria-label="Sections">
          <ul className="hidden items-center md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-[13px] text-muted transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={profile.cvPath}
          target="_blank"
          rel="noopener"
          className="ml-1 inline-flex items-center gap-1 rounded-full bg-invert px-3.5 py-1.5 text-[13px] font-medium text-invert-ink transition-opacity hover:opacity-85"
        >
          {t.nav.cv}
          <ArrowUpRight className="size-3.5" />
        </a>
        <ThemeToggle className="ml-1 size-8 shadow-none ring-1 ring-line" />
      </div>
    </header>
  );
}
