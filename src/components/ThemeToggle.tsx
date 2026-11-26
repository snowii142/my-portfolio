'use client';

import { useEffect } from 'react';
import { MoonIcon, SunIcon } from '@/components/ui';

const KEY = 'theme';

function apply(theme: 'light' | 'dark') {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle({ className = '' }: { className?: string }) {
  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)');
    const follow = () => {
      try {
        if (localStorage.getItem(KEY)) return;
      } catch {}
      apply(media.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', follow);
    return () => media.removeEventListener('change', follow);
  }, []);

  const toggle = () => {
    const next =
      document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(next);
    console.log(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      className={`grid size-9 shrink-0 place-items-center rounded-full bg-surface text-ink shadow-pill transition-transform duration-200 hover:-translate-y-px active:translate-y-0 ${className}`}
    >
      <MoonIcon className="size-4 dark:hidden" />
      <SunIcon className="hidden size-4 dark:block" />
    </button>
  );
}
