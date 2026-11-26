import type { Metadata } from 'next';
import { profile } from '@/content/profile';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { MotionProvider } from '@/components/motion';
import { SmoothScroll } from '@/components/SmoothScroll';
import { fontVariables } from './fonts';
import './globals.css';

const boot = `try{var d=document.documentElement,s=null;try{s=localStorage.getItem("theme")}catch(e){}d.dataset.theme=s==="light"||s==="dark"?s:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";if(!matchMedia("(prefers-reduced-motion: reduce)").matches)d.classList.add("motion-ok")}catch(e){}`;

const siteUrl = process.env.SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl && { metadataBase: new URL(siteUrl) }),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.intro,
  openGraph: {
    type: 'website',
    siteName: profile.name,
    title: `${profile.name} | ${profile.role}`,
    description: profile.intro,
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${fontVariables} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body className="relative isolate flex min-h-full flex-col">
        <div
          aria-hidden="true"
          className="page-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[90svh]"
        />
        <MotionProvider>
          <SmoothScroll />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
