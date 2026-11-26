import type { ComponentType, SVGProps } from 'react';
import { skills } from '@/content/profile';
import { t } from '@/i18n/ui';
import { RevealGroup, RevealItem } from '@/components/motion';
import {
  Checklist,
  CodeIcon,
  Container,
  DatabaseIcon,
  Pills,
  PlugIcon,
  SectionTitle,
  ServerIcon,
  StackIcon,
} from '@/components/ui';

const skillIcons: ComponentType<SVGProps<SVGSVGElement>>[] = [
  CodeIcon,
  StackIcon,
  ServerIcon,
  DatabaseIcon,
  PlugIcon,
];

export function Skills() {
  return (
    <section aria-labelledby="skills" className="py-20 sm:py-28">
      <Container>
        <RevealGroup>
          <RevealItem>
            <SectionTitle
              id="skills"
              title={t.skills.title}
              lead={t.skills.lead}
            />
          </RevealItem>
        </RevealGroup>
        <RevealGroup
          perItem
          stagger={0.12}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6"
        >
          {skills.map((group, i) => {
            const Icon = skillIcons[i % skillIcons.length];
            return (
              <RevealItem
                key={group.group}
                variant="card"
                className={`flex flex-col rounded-3xl bg-surface p-7 shadow-card ring-1 ring-line sm:p-8 ${
                  i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
                } ${i === skills.length - 1 && skills.length % 2 ? 'sm:max-lg:col-span-2' : ''}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="size-7" strokeWidth={1.25} />
                  <span className="font-mono text-xs text-faint tabular-nums">
                    {String(group.items.length + group.more.length).padStart(
                      2,
                      '0',
                    )}{' '}
                    {t.skills.tools}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-[1.75rem] leading-tight font-semibold italic">
                  {group.group}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">
                  {group.blurb}
                </p>
                <hr className="my-5 border-line" />
                <Checklist
                  items={group.items}
                  label={group.group}
                  logos
                  className="text-sm"
                />
                {group.more.length > 0 && (
                  <>
                    <p className="mt-6 mb-2.5 text-xs text-muted">
                      {t.skills.also}
                    </p>
                    <Pills
                      items={group.more}
                      label={`${group.group}, ${t.skills.also}`}
                    />
                  </>
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
