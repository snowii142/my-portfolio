'use client';

import { useSyncExternalStore } from 'react';
import { formatExperience, monthsOfExperience } from '@/content/profile';

const noSubscribe = () => () => {};

/**
 * "4 years 9 months" counted from the career start. The static build prints
 * the value as of build time (`initial`, in months); the browser recounts
 * from today's date, so it stays right without a rebuild.
 */
export function YearsOfExperience({ initial }: { initial: number }) {
  const months = useSyncExternalStore(
    noSubscribe,
    () => monthsOfExperience(),
    () => initial,
  );
  return <>{formatExperience(months)}</>;
}
