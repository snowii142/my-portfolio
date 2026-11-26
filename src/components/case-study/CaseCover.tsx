import { coverPath, type Project } from '@/content/projects';
import { t } from '@/i18n/ui';
import { MediaFrame } from '@/components/Media';
import { RevealGroup, RevealItem } from '@/components/motion';
import { Container } from '@/components/ui';

export function CaseCover({ project }: { project: Project }) {
  return (
    <div className="pb-6">
      <Container>
        <RevealGroup onMount delay={0.25}>
          <RevealItem as="figure" variant="scale">
            <MediaFrame
              src={coverPath(project.slug)}
              device={project.media.device}
              alt={project.media.cover.alt}
              pendingLabel={t.image.pending}
              sizes="(min-width: 1280px) 1216px, 94vw"
              priority
              className="rounded-3xl shadow-lift"
            />
            <figcaption className="mt-3 text-sm text-muted">
              {project.media.cover.caption}
            </figcaption>
          </RevealItem>
        </RevealGroup>
      </Container>
    </div>
  );
}
