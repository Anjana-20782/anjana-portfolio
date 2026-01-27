import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* about section */}
      <section id="about" className="scroll-mt-20">
        <Hero />
      </section>

    {/* Services Section */}
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>
    
    </main>
  );
}
