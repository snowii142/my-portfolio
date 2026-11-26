'use client';

import { useState, type ReactNode } from 'react';

export function ShotGallery({
  frames,
  thumbs,
  label,
}: {
  frames: ReactNode[];
  thumbs: ReactNode[];
  label: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="grid">
        {frames.map((frame, i) => (
          <div
            key={i}
            aria-hidden={i !== active}
            inert={i !== active}
            className={`[grid-area:1/1] transition-[opacity,filter] duration-500 ease-out-expo ${
              i === active
                ? 'opacity-100'
                : 'pointer-events-none opacity-0 blur-[2px]'
            }`}
          >
            {frame}
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2" role="group" aria-label={label}>
        {thumbs.map((thumb, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            aria-label={`${label}: image ${i + 1} of ${thumbs.length}`}
            className={`w-16 overflow-hidden rounded-lg transition-[opacity,box-shadow] duration-200 sm:w-20 ${
              i === active
                ? 'opacity-100 ring-2 ring-ink ring-offset-2 ring-offset-bg'
                : 'opacity-55 hover:opacity-90'
            }`}
          >
            {thumb}
          </button>
        ))}
      </div>
    </div>
  );
}
