import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";
import Roadmaps from "@/components/home/Roadmaps";
import Resources from "@/components/home/Resources";
import CTA from "@/components/home/CTA";
import Statistics from "@/components/home/Statistics";
import Footer from "@/components/home/Footer";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Categories />
        <Roadmaps />
        <Resources />
        <Statistics />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}