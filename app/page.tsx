import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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

{/*  skills section */}
      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

    {/*  projects section*/}
      <section id="projects" className="scroll-mt-24">
  <Projects />
</section>


    {/*  contact section*/}
    <section id="contacts" className="scroll-mt-24">
      <Contact />
    </section>

    <Footer />
    </main>
  );
}
