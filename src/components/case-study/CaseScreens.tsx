import { shotPath, type Project, type Slot } from '@/content/projects';
import { publicImageSize } from '@/lib/media';
import { t } from '@/i18n/ui';
import { MediaFrame } from '@/components/Media';
import { RevealGroup, RevealItem } from '@/components/motion';
import { Container } from '@/components/ui';
import { ShotGallery } from './ShotGallery';
import { caseH2 } from './headings';

/** Most extra views a slot looks for (shot-<n>-2.jpg ... shot-<n>-8.jpg). */
const MAX_VIEWS = 8;

/** The slot's main image plus every extra view that exists on disk. */
function slotImages(slug: string, index: number, shot: Slot) {
  const images = [{ src: shotPath(slug, index), alt: shot.alt }];
  for (let v = 2; v <= MAX_VIEWS; v++) {
    const src = shotPath(slug, index, v);
    if (!publicImageSize(src)) break;
    images.push({ src, alt: shot.more?.[v - 2] ?? shot.alt });
  }
  return images;
}

export function CaseScreens({ project }: { project: Project }) {
  if (project.media.shots.length === 0) return null;
  return (
    <section aria-labelledby="screens" className="py-16 sm:py-20">
      <Container>
        <h2 id="screens" className={`mb-10 text-center ${caseH2} sm:text-4xl`}>
          {t.caseStudy.screens}
        </h2>
        <RevealGroup
          stagger={0.1}
          className="grid gap-x-8 gap-y-12 md:grid-cols-2"
        >
          {project.media.shots.map((shot, i) => {
            const images = slotImages(project.slug, i, shot);
            const frame = (image: (typeof images)[number]) => (
              <MediaFrame
                key={image.src}
                src={image.src}
                alt={image.alt}
                pendingLabel={t.image.pending}
                ratio="aspect-[16/10]"
                parallax
                sizes="(min-width: 768px) 540px, 94vw"
                className="shadow-card"
              />
            );
            return (
              <RevealItem as="figure" key={shot.alt}>
                {images.length > 1 ? (
                  <ShotGallery
                    label={shot.caption.split(':')[0]}
                    frames={images.map((image) => frame(image))}
                    thumbs={images.map((image) => (
                      <MediaFrame
                        key={image.src}
                        src={image.src}
                        alt=""
                        pendingLabel=""
                        ratio="aspect-[16/10]"
                        sizes="80px"
                        className="rounded-lg"
                      />
                    ))}
                  />
                ) : (
                  frame(images[0])
                )}
                <figcaption className="mt-3 text-sm leading-relaxed text-muted">
                  {shot.caption}
                </figcaption>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
