import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import { RoadmapTopic } from "@/types/roadmap";

type TopicNavigationProps = {
  roadmap: RoadmapTopic[];
  currentTopic: string;
  basePath: string;
};

export default function TopicNavigation({
  roadmap,
  currentTopic,
  basePath,
}: TopicNavigationProps) {
  const currentIndex = roadmap.findIndex(
    (topic) => topic.id === currentTopic
  );

  const previousTopic =
    currentIndex > 0 ? roadmap[currentIndex - 1] : null;

  const nextTopic =
    currentIndex < roadmap.length - 1
      ? roadmap[currentIndex + 1]
      : null;

  return (
    <Card className="mt-8 p-5 lg:mt-12 lg:p-6">
      <div className="flex items-center justify-between gap-4">
        {previousTopic ? (
          <Link
            href={`${basePath}/${previousTopic.id}`}
            className="group flex min-w-0 items-center gap-2 transition-all duration-300 lg:gap-3"
          >
            <ArrowLeft
              size={18}
              className="shrink-0 transition-transform duration-300 group-hover:-translate-x-1 lg:h-5 lg:w-5"
              style={{ color: "var(--primary)" }}
            />

            <div className="min-w-0">
              <p
                className="text-xs lg:text-sm"
                style={{ color: "var(--muted)" }}
              >
                Previous
              </p>

              <p
                className="truncate text-sm font-semibold lg:text-base"
                style={{ color: "var(--foreground)" }}
              >
                {previousTopic.title}
              </p>

              <p
                className="text-xs lg:text-sm"
                style={{ color: "var(--muted)" }}
              >
                {previousTopic.difficulty}
              </p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextTopic ? (
          <Link
            href={`${basePath}/${nextTopic.id}`}
            className="group flex min-w-0 items-center gap-2 text-right transition-all duration-300 lg:gap-3"
          >
            <div className="min-w-0">
              <p
                className="text-xs lg:text-sm"
                style={{ color: "var(--muted)" }}
              >
                Next
              </p>

              <p
                className="truncate text-sm font-semibold lg:text-base"
                style={{ color: "var(--foreground)" }}
              >
                {nextTopic.title}
              </p>

              <p
                className="text-xs lg:text-sm"
                style={{ color: "var(--muted)" }}
              >
                {nextTopic.difficulty}
              </p>
            </div>

            <ArrowRight
              size={18}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 lg:h-5 lg:w-5"
              style={{ color: "var(--primary)" }}
            />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </Card>
  );
}