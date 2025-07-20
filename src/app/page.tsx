import Hero from '@/components/Hero';
import Values from '@/components/Values';
import Crafting from '@/components/Crafting';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <main>
      <Hero />
      <Crafting />
      <Experience />
      <Values />
    </main>
  );
}
