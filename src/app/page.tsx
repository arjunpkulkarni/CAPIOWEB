import Crafting from "@/components/Crafting";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Experience the best tattoo and piercing services in Westchester, NY. Capio Tattoo offers custom designs from award-winning artists in a state-of-the-art studio.',
};

export default function Home() {
  return (
    <main>
      <Hero />      
    </main>
  );
}
