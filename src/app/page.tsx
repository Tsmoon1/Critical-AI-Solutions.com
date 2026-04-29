import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { ValueProp } from "@/components/sections/value-prop";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Hero />
      <Features />
      <ValueProp />
      <About />
      <Footer />
    </main>
  );
}
