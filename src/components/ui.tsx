import type { ReactNode, SVGProps } from 'react';
import { brandIcon } from '@/content/brandIcons';

export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionTitle({
  id,
  title,
  lead,
}: {
  id?: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
      <h2
        id={id}
        className="font-serif text-[clamp(2.25rem,4.5vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.01em] text-balance italic"
      >
        {title}
      </h2>
      {lead && (
        <p className="mt-3 leading-relaxed text-muted text-pretty">{lead}</p>
      )}
    </div>
  );
}

export function Divider() {
  return (
    <Container>
      <hr className="border-line" />
    </Container>
  );
}

export function Pills({
  items,
  label,
}: {
  items: readonly string[];
  label: string;
}) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-xs text-ink-soft"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Checklist({
  items,
  label,
  logos = false,
  className = '',
}: {
  items: readonly string[];
  label?: string;
  logos?: boolean;
  className?: string;
}) {
  return (
    <ul className={`flex flex-col gap-2.5 ${className}`} aria-label={label}>
      {items.map((item) => {
        const icon = logos ? brandIcon(item) : undefined;
        return (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 grid size-4 shrink-0 place-items-center">
              {icon ? (
                <svg
                  viewBox={icon.viewBox}
                  aria-hidden="true"
                  className="size-4"
                  fill="currentColor"
                  dangerouslySetInnerHTML={{ __html: icon.body }}
                />
              ) : (
                <CheckSquare className="size-3.5" />
              )}
            </span>
            <span className="font-medium text-ink-soft">{item}</span>
          </li>
        );
      })}
    </ul>
  );
}

const pillBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-px active:translate-y-0';

export const buttonStyles = {
  pill: `${pillBase} bg-surface text-ink shadow-pill hover:shadow-card`,
  solid: `${pillBase} bg-invert text-invert-ink shadow-pill`,
};

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, className = 'size-4', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </Icon>
);

export const ArrowLeft = (p: IconProps) => (
  <Icon {...p}>
    <path d="M13 8H3M7 4 3 8l4 4" />
  </Icon>
);

export const ArrowUpRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 11 11 5M6 5h5v5" />
  </Icon>
);

export const DownloadIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M8 2.5v8M4.5 7 8 10.5 11.5 7M3 13.5h10" />
  </Icon>
);

export const MailIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
    <path d="m2.5 4.5 5.5 4 5.5-4" />
  </Icon>
);

export const PhoneIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5.5 2.5h-2a1 1 0 0 0-1 1.1A11 11 0 0 0 12.4 13.5a1 1 0 0 0 1.1-1v-2l-2.5-1-1.2 1.2a7 7 0 0 1-3.5-3.5L7.5 6 6.5 3.5Z" />
  </Icon>
);

export const PinIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M8 14s4.5-4 4.5-7.5a4.5 4.5 0 0 0-9 0C3.5 10 8 14 8 14Z" />
    <circle cx="8" cy="6.5" r="1.5" />
  </Icon>
);

export const ImageIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="2" y="2.5" width="12" height="11" rx="1.5" />
    <circle cx="5.5" cy="6" r="1" />
    <path d="m2.5 12 3.5-3.5 2.5 2.5 2-2 3 3" />
  </Icon>
);

export const CheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m3.5 8.5 3 3 6-7" />
  </Icon>
);

export const BriefcaseIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="2" y="4.5" width="12" height="9" rx="1.5" />
    <path d="M6 4.5v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1M2 8.5h12" />
  </Icon>
);

export const FolderIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M2 4.5a1 1 0 0 1 1-1h3l1.5 1.5H13a1 1 0 0 1 1 1V12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z" />
  </Icon>
);

export const ResumeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 1.75h5.5L12.5 4.75v9.5H4Z" />
    <path d="M6.25 7.25h4M6.25 9.75h4M6.25 12h2.5" />
  </Icon>
);

export const AtIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="8" cy="8" r="2.5" />
    <path d="M10.5 8v1a2 2 0 0 0 4 0V8a6.5 6.5 0 1 0-2.6 5.2" />
  </Icon>
);

export const SunIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="8" cy="8" r="2.75" />
    <path d="M8 1.5v1.25M8 13.25v1.25M1.5 8h1.25M13.25 8h1.25M3.4 3.4l.9.9M11.7 11.7l.9.9M3.4 12.6l.9-.9M11.7 4.3l.9-.9" />
  </Icon>
);

export const MoonIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M13.5 9.6A5.75 5.75 0 0 1 6.4 2.5a5.75 5.75 0 1 0 7.1 7.1Z" />
  </Icon>
);

export const ChevronsDown = (p: IconProps) => (
  <Icon {...p}>
    <path d="m4.5 4 3.5 3.5L11.5 4M4.5 8.5 8 12l3.5-3.5" />
  </Icon>
);

export function CheckSquare({
  className = 'size-3.5',
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true" className={className}>
      <rect width="14" height="14" rx="2.5" fill="currentColor" />
      <path
        d="m4 7.2 2 2 4-4.4"
        fill="none"
        stroke="var(--bg)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const CodeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5.5 4.5 2 8l3.5 3.5M10.5 4.5 14 8l-3.5 3.5M9 3 7 13" />
  </Icon>
);

export const StackIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M8 2 14 5 8 8 2 5Z" />
    <path d="m2 8 6 3 6-3M2 11l6 3 6-3" />
  </Icon>
);

export const ServerIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="2" y="2.5" width="12" height="4.5" rx="1" />
    <rect x="2" y="9" width="12" height="4.5" rx="1" />
    <path d="M4.5 4.75h.01M4.5 11.25h.01" />
  </Icon>
);

export const DatabaseIcon = (p: IconProps) => (
  <Icon {...p}>
    <ellipse cx="8" cy="3.75" rx="5.5" ry="2" />
    <path d="M2.5 3.75v8.5c0 1.1 2.46 2 5.5 2s5.5-.9 5.5-2v-8.5M2.5 8c0 1.1 2.46 2 5.5 2s5.5-.9 5.5-2" />
  </Icon>
);

export const PlugIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5.5 1.75v3M10.5 1.75v3M3.5 4.75h9V7a4.5 4.5 0 0 1-9 0ZM8 11.5v2.75" />
  </Icon>
);
