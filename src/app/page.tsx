import { Divider } from '@/components/ui';
import { Hero } from '@/components/home/Hero';
import { Work } from '@/components/home/Work';
import { About } from '@/components/home/About';
import { Experience } from '@/components/home/Experience';
import { Skills } from '@/components/home/Skills';
import { Contact } from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Work />
      <Divider />
      <Experience />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Contact />
    </>
  );
}
