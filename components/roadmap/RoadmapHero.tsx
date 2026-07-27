import Badge from "../ui/Badge";
import Container from "../ui/Container";
import RoadmapProgress from "./RoadmapProgress";

import { frontendRoadmap } from "@/data/frontend";

export default function RoadmapHero() {
  return (
    <section className="border-b border-gray-100 bg-gradient-to-b from-blue-50 to-white py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Badge>Frontend Roadmap</Badge>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
            Become a Modern
            <br />
            Frontend Developer
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Learn HTML, CSS, JavaScript, React, Next.js, TypeScript and
            everything you need to become a professional frontend developer.
          </p>

          <RoadmapProgress
            roadmap="frontend"
            totalTopics={12}
            estimatedWeeks={20}
            roadmapData={frontendRoadmap}
          />
        </div>
      </Container>
    </section>
  );
}