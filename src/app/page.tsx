import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Hero />
      <Features />
      <About />
      <Footer />
    </main>
  );
}
