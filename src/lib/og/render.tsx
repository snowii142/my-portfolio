import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { publicImageSize } from '@/lib/media';

export const ogSize = { width: 1200, height: 630 };

const C = {
  bg: '#f3f3f2',
  glow: '#fdfdfc',
  surface: '#fbfbfa',
  surface2: '#e7e7e5',
  ink: '#111111',
  soft: '#33332f',
  muted: '#64645f',
  line: '#dcdcd9',
};

const fontDir = path.join(process.cwd(), 'src/lib/og/fonts');

async function fonts() {
  const load = (file: string) => readFile(path.join(fontDir, file));
  const [serif, mono, sans, sansMedium] = await Promise.all([
    load('PlayfairDisplay-SemiBoldItalic.ttf'),
    load('GeistMono-Light.ttf'),
    load('Geist-Regular.ttf'),
    load('Geist-Medium.ttf'),
  ]);
  return [
    {
      name: 'Playfair Display',
      data: serif,
      style: 'italic' as const,
      weight: 600 as const,
    },
    {
      name: 'Geist Mono',
      data: mono,
      style: 'normal' as const,
      weight: 300 as const,
    },
    {
      name: 'Geist',
      data: sans,
      style: 'normal' as const,
      weight: 400 as const,
    },
    {
      name: 'Geist',
      data: sansMedium,
      style: 'normal' as const,
      weight: 500 as const,
    },
  ];
}

async function publicImage(publicPath: string) {
  const size = publicImageSize(publicPath);
  if (!size) return null;
  const data = await readFile(path.join(process.cwd(), 'public', publicPath));
  const ext = path.extname(publicPath).slice(1).replace('jpg', 'jpeg');
  return {
    src: `data:image/${ext};base64,${data.toString('base64')}`,
    ...size,
  };
}

function clip(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,:;]$/, '')}…`;
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        background: C.bg,
        backgroundImage: `radial-gradient(ellipse 70% 60% at 50% 0%, ${C.glow}, ${C.bg} 70%)`,
        fontFamily: 'Geist',
        color: C.ink,
      }}
    >
      {children}
    </div>
  );
}

function Mark() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 22 }}
    >
      <div
        style={{ display: 'flex', fontFamily: 'Geist Mono', color: C.muted }}
      >
        {'{'}
        <span style={{ color: C.ink }}>ps</span>
        {'}'}
      </div>
      <div style={{ display: 'flex', fontWeight: 500 }}>
        Pongsakorn Sornpetch
      </div>
    </div>
  );
}

export async function renderHome({
  roleLines,
  headline,
  stackLine,
}: {
  roleLines: string[];
  headline: string;
  stackLine: string[];
}) {
  const [mono, serif] = roleLines;
  return new ImageResponse(
    <Frame>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          padding: '0 80px',
        }}
      >
        <div style={{ display: 'flex', position: 'absolute', top: 52 }}>
          <Mark />
        </div>
        <div
          style={{
            display: 'flex',
            fontFamily: 'Geist Mono',
            fontSize: 74,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}
        >
          {mono}
        </div>
        <div
          style={{
            display: 'flex',
            fontFamily: 'Playfair Display',
            fontStyle: 'italic',
            fontSize: 96,
            letterSpacing: '-0.015em',
            lineHeight: 1.08,
          }}
        >
          {serif}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 34,
            fontSize: 30,
            color: C.soft,
            textAlign: 'center',
            maxWidth: 980,
          }}
        >
          {headline}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 22,
            fontSize: 22,
            color: C.muted,
          }}
        >
          {stackLine.join('  ·  ')}
        </div>
      </div>
    </Frame>,
    { ...ogSize, fonts: await fonts() },
  );
}

export async function renderProject({
  title,
  meta,
  summary,
  cover,
  device = false,
}: {
  title: string;
  meta: string;
  summary: string;
  cover: string;
  device?: boolean;
}) {
  const image = await publicImage(cover);
  const panel = { width: 500, height: 520 };

  let picture: React.ReactNode = null;
  if (image && device) {
    const h = panel.height - 60;
    const w = Math.round((h * image.width) / image.height);
    picture = (
      // eslint-disable-next-line @next/next/no-img-element -- rendered to PNG by next/og, not the page
      <img
        alt=""
        src={image.src}
        width={w}
        height={h}
        style={{
          borderRadius: 14,
          boxShadow: '0 18px 40px -12px rgba(0,0,0,0.3)',
        }}
      />
    );
  } else if (image) {
    const h = Math.round((panel.width * image.height) / image.width);
    const scale = h < panel.height ? panel.height / h : 1;
    picture = (
      // eslint-disable-next-line @next/next/no-img-element -- rendered to PNG by next/og, not the page
      <img
        alt=""
        src={image.src}
        width={Math.round(panel.width * scale)}
        height={Math.round(h * scale)}
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    );
  }

  return new ImageResponse(
    <Frame>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 600,
          height: '100%',
          padding: '56px 0 56px 64px',
        }}
      >
        <Mark />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Geist Mono',
              fontSize: 22,
              color: C.muted,
            }}
          >
            {meta}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 14,
              fontFamily: 'Playfair Display',
              fontStyle: 'italic',
              fontSize: title.length > 26 ? 62 : 72,
              lineHeight: 1.04,
              letterSpacing: '-0.015em',
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 22,
              fontSize: 25,
              lineHeight: 1.4,
              color: C.soft,
            }}
          >
            {clip(summary, 118)}
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 20, color: C.muted }}>
          Case study
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: (ogSize.height - panel.height) / 2,
          right: 56,
          width: panel.width,
          height: panel.height,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: 24,
          background: C.surface2,
          border: `1px solid ${C.line}`,
          boxShadow: '0 24px 60px -24px rgba(0,0,0,0.28)',
        }}
      >
        {picture}
      </div>
    </Frame>,
    { ...ogSize, fonts: await fonts() },
  );
}
