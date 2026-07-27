import Badge from "@/components/ui/Badge";
import { RoadmapTopic } from "@/types/roadmap";
import Image from "next/image";

type TopicHeroProps = {
  roadmap: string;
  topic: RoadmapTopic;
};

export default function TopicHero({
  roadmap,
  topic,
}: TopicHeroProps) {
  return (
    <section>
      <div className="flex items-center gap-4 lg:gap-6">
        {topic.logo && (
          <div
            className="flex h-14 w-14 items-center justify-center rounded-xl border shadow-sm transition-all duration-300 sm:h-16 sm:w-16 lg:h-20 lg:w-20 lg:rounded-2xl"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            <Image
              src={topic.logo}
              alt={topic.title}
              width={50}
              height={50}
              className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
            />
          </div>
        )}

        <div>
          <Badge>{roadmap} Roadmap</Badge>

          <h1
            className="mt-2 text-3xl font-bold transition-colors duration-300 sm:text-4xl lg:mt-3 lg:text-5xl"
            style={{
              color: "var(--foreground)",
            }}
          >
            {topic.title}
          </h1>
        </div>
      </div>
    </section>
  );
}