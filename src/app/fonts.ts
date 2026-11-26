import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  style: ['italic'],
  weight: ['500', '600'],
});

export const fontVariables = [
  geistSans.variable,
  geistMono.variable,
  playfair.variable,
].join(' ');
