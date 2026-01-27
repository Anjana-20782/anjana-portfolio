import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen pt-32 md:pt-40">
      <Navbar />

      {/* about section */}
      <section id="about" className="scroll-mt-20">
        <Hero />
      </section>

    {/* Services Section */}
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>

{/* exprience Section */}
    <section id="experience" className="scroll-mt-24">
        <Experience />
      </section>

{/*  SKILLS SECTION */}
      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>
    
    </main>
  );
}
