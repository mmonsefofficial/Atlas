import { notFound } from "next/navigation";
import TopicHero from "@/components/roadmap/TopicHero";
import Container from "@/components/ui/Container";
import LearningPath from "@/components/roadmap/LearningPath";
import ResourceList from "@/components/roadmap/ResourceList";
import ProjectList from "@/components/roadmap/ProjectList";
import ToolList from "@/components/roadmap/ToolList";
import TopicNavigation from "@/components/roadmap/TopicNavigation";
import { cybersecurityRoadmap } from "@/data/cybersecurity";
import ProgressButton from "@/components/roadmap/ProgressButton";

type Props = {
  params: Promise<{
    topic: string;
  }>;
};

export default async function TopicPage({ params }: Props) {
  const { topic } = await params;

  const lesson = cybersecurityRoadmap.find(
    (item) => item.id === topic
  );

  if (!lesson) {
    notFound();
  }

  return (
    <main className="py-20">
      <Container>

        <TopicHero
        roadmap="Cybersecurity"
        topic={lesson}
        />

        <div className="mt-16 space-y-10">

          <LearningPath
          items={lesson.learningPath}
          />

          <ResourceList 
          title="Documentation"
          description="Official documentation and references."
          resources={lesson.documentation}
          />

          <ResourceList
          title="Video Courses"
          description="Recommended free video courses."
          resources={lesson.videos}
          />

          <ResourceList 
          title="Practice Websites"
          description="Practice what you've learned."
          resources={lesson.practice}
          />

          <ProjectList
          projects={lesson.projects}
          />

          <ToolList 
          tools={lesson.tools}
          />

          <div className="mt-12 flex justify-center">
            <ProgressButton 
            roadmap="cybersecurity"
            topicId={lesson.id}
            />
          </div>

          <TopicNavigation
          roadmap={cybersecurityRoadmap}
          currentTopic={lesson.id}
          basePath="/roadmaps/cybersecurity"
          />

        </div>

      </Container>
    </main>
  );
}