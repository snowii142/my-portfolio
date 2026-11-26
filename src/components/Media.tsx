import type { CSSProperties } from 'react';
import Image from 'next/image';
import { publicImageSize } from '@/lib/media';
import { ImageIcon } from '@/components/ui';
import { ParallaxLayer } from '@/components/motion';

const isDev = process.env.NODE_ENV === 'development';

export function MediaFrame({
  src,
  alt,
  pendingLabel,
  ratio,
  sizes,
  priority = false,
  position = 'object-center',
  fit = 'cover',
  parallax = false,
  scroll = false,
  device = false,
  className = '',
}: {
  src: string;
  alt: string;
  pendingLabel: string;
  ratio?: string;
  sizes: string;
  priority?: boolean;
  position?: string;
  fit?: 'cover' | 'contain';
  parallax?: boolean;
  scroll?: boolean;
  device?: boolean;
  className?: string;
}) {
  const size = publicImageSize(src);
  const frame = `relative overflow-hidden rounded-2xl bg-surface-2 ring-1 ring-line ring-inset ${className}`;

  if (!size) {
    return (
      <div className={`${frame} ${ratio ?? 'aspect-16/10'}`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-muted">
          <ImageIcon className="size-6" />
          <span className="text-sm">{pendingLabel}</span>
          {isDev && (
            <code className="font-mono text-xs opacity-70">public{src}</code>
          )}
        </div>
      </div>
    );
  }

  if (scroll && ratio && !(device && size.height > size.width)) {
    const [, fw, fh] = ratio.match(/(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)/) ?? [];
    const frameHW = fw && fh ? Number(fh) / Number(fw) : 10 / 16;
    const overflow = size.height / size.width / frameHW - 1;
    const pans = overflow > 0.04;
    const seconds = Math.min(9, Math.max(1.4, 1.2 + overflow * 2.2));
    return (
      <div
        className={`group/media ${frame} ${ratio}`}
        style={{ '--pan': `${seconds.toFixed(2)}s` } as CSSProperties}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover object-top dark:brightness-[0.88] ${
            pans
              ? 'transition-[object-position] duration-700 ease-in-out group-hover:object-bottom group-hover:duration-(--pan) group-focus-visible:object-bottom group-focus-visible:duration-(--pan) group-hover/media:object-bottom group-hover/media:duration-(--pan) motion-reduce:transition-none'
              : ''
          }`}
        />
      </div>
    );
  }

  if (device && size.height > size.width) {
    return (
      <div
        className={`${frame} ${ratio ?? 'aspect-16/10'} grid place-items-center`}
      >
        <div
          className="relative h-[88%] overflow-hidden rounded-[10px] shadow-lift ring-1 ring-line"
          style={{ aspectRatio: `${size.width} / ${size.height}` }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover dark:brightness-[0.88]"
          />
        </div>
      </div>
    );
  }

  if (ratio) {
    const image = (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`${fit === 'contain' ? 'object-contain p-3' : `object-cover ${position}`} dark:brightness-[0.88]`}
      />
    );
    return (
      <div className={`${frame} ${ratio}`}>
        {parallax ? <ParallaxLayer>{image}</ParallaxLayer> : image}
      </div>
    );
  }

  return (
    <div className={frame}>
      <Image
        src={src}
        alt={alt}
        width={size.width}
        height={size.height}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full dark:brightness-[0.88]"
      />
    </div>
  );
}
