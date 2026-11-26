'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import {
  MotionConfig,
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type Tag =
  | 'div'
  | 'ul'
  | 'ol'
  | 'li'
  | 'dl'
  | 'figure'
  | 'header'
  | 'tbody'
  | 'tr';

export function RevealGroup({
  children,
  as: Component = 'div',
  className,
  stagger = 0.08,
  delay = 0,
  onMount = false,
  perItem = false,
}: {
  children: ReactNode;
  as?: Tag;
  className?: string;
  stagger?: number;
  delay?: number;
  onMount?: boolean;
  perItem?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(
      el.querySelectorAll<HTMLElement>('[data-reveal-item]'),
    ).filter((item) => item.closest('[data-reveal-group]') === el);
    items.forEach((item, i) => item.style.setProperty('--i', String(i)));

    if (perItem) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) =>
                a.boundingClientRect.top - b.boundingClientRect.top ||
                a.boundingClientRect.left - b.boundingClientRect.left,
            )
            .forEach((entry, i) => {
              const item = entry.target as HTMLElement;
              item.style.setProperty('--i', String(i));
              item.setAttribute('data-state', 'in');
              observer.unobserve(item);
            });
        },
        { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
      );
      items.forEach((item) => observer.observe(item));
      return () => observer.disconnect();
    }

    const play = () => el.setAttribute('data-state', 'in');
    if (onMount) {
      const frame = requestAnimationFrame(play);
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          play();
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [onMount, perItem]);

  return (
    <Component
      ref={ref as never}
      data-reveal-group=""
      className={className}
      style={
        {
          '--stagger': `${stagger * 1000}ms`,
          '--delay': `${delay * 1000}ms`,
        } as CSSProperties
      }
    >
      {children}
    </Component>
  );
}

export function RevealItem({
  children,
  as: Component = 'div',
  className,
  variant = 'rise',
}: {
  children: ReactNode;
  as?: Tag;
  className?: string;
  variant?: 'rise' | 'scale' | 'card';
}) {
  return (
    <Component data-reveal-item={variant} className={className}>
      {children}
    </Component>
  );
}

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-ink"
    />
  );
}

export function HeroParallax({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const blur = useTransform(scrollYProgress, [0.2, 0.8], [0, 6]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y, opacity, scale, filter }}>
        {children}
      </motion.div>
    </div>
  );
}

export function ParallaxLayer({
  children,
  amount = 8,
}: {
  children: ReactNode;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${amount}%`, `${amount}%`],
  );

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div
        className="absolute inset-x-0"
        style={{
          top: `-${amount}%`,
          bottom: `-${amount}%`,
          y: reduce ? 0 : y,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
