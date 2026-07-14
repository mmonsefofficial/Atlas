import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";
import Roadmaps from "@/components/home/Roadmaps";
import Resources from "@/components/home/Resources";
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
      </main>
    </>
  );
}