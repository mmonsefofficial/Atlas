import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Roadmaps from "@/components/home/Roadmaps";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/home/FAQ";
import WhyAtlas from "@/components/home/why-atlas/WhyAtlas";
import ResourceStack from "@/components/home/resources/ResourceStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        
          <WhyAtlas />
        

        {/* Roadmaps Section */}
        <section id="roadmaps">
          <Roadmaps limit={3} />
        </section>

        {/* Resources Section */}
        <ResourceStack />
        <section id="about">
          <FAQ />
        </section>
        
        <CTA />
      </main>
      <Footer />
    </>

  );

}