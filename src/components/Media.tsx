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

  // Portrait screens (kiosks, phones) would be cropped to a sliver or stretch
  // the page in a landscape frame: show them whole, centred on a stage.
  if (size.height > size.width) {
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
