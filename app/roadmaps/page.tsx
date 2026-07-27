import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Roadmaps from "@/components/home/Roadmaps";

export default function RoadmapsPage(){
  return(
    <main className="py-20">
      <Container>
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-semibold tracking-tight">
            Roadmaps
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Choose a roadmap and start learning step by step.
          </p>
        </div>
        <Roadmaps 
        showHeader={false}
        embedded
        />
      </Container>
    </main>
  );
}