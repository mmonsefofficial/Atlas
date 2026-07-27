"use client";

import { BookOpen, Clock3, Trophy } from "lucide-react";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { useProgress, type ProgressData } from "@/lib/useProgress";
import { RoadmapTopic } from "@/types/roadmap";

type Props = {
  roadmap: keyof ProgressData;
  totalTopics: number;
  estimatedWeeks: number;
  roadmapData: RoadmapTopic[];
};

export default function RoadmapProgress({
  roadmap,
  totalTopics,
  estimatedWeeks,
  roadmapData,
}: Props) {
  const { progress, getCompletedCount } = useProgress();

  const completed = getCompletedCount(roadmap);
  const percentage = Math.round((completed / totalTopics) * 100);

  const nextTopic = roadmapData.find(
    (topic) => !progress[roadmap].includes(topic.id)
  );

  const isCompleted = !nextTopic;

  const continueHref = isCompleted
    ? "#"
    : `/roadmaps/${roadmap}/${nextTopic.id}`;

  return (
    <Card className="mt-8 p-5 lg:mt-12 lg:p-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <div className="flex items-center gap-3 lg:gap-4">
          <BookOpen
            size={20}
            className="lg:h-6 lg:w-6"
            style={{ color: "var(--primary)" }}
          />

          <div>
            <p
              className="text-xs lg:text-sm"
              style={{ color: "var(--muted)" }}
            >
              Topics
            </p>

            <p
              className="text-lg font-semibold lg:text-xl"
              style={{ color: "var(--foreground)" }}
            >
              {totalTopics}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 lg:gap-4">
          <Clock3
            size={20}
            className="text-orange-500 lg:h-6 lg:w-6"
          />

          <div>
            <p
              className="text-xs lg:text-sm"
              style={{ color: "var(--muted)" }}
            >
              Duration
            </p>

            <p
              className="text-lg font-semibold lg:text-xl"
              style={{ color: "var(--foreground)" }}
            >
              {estimatedWeeks} Weeks
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 lg:gap-4">
          <Trophy
            size={20}
            className="text-green-500 lg:h-6 lg:w-6"
          />

          <div>
            <p
              className="text-xs lg:text-sm"
              style={{ color: "var(--muted)" }}
            >
              Progress
            </p>

            <p
              className="text-lg font-semibold lg:text-xl"
              style={{ color: "var(--foreground)" }}
            >
              {completed}/{totalTopics}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-7 lg:mt-10">
        <div
          className="mb-2 flex justify-between text-xs lg:mb-3 lg:text-sm"
          style={{ color: "var(--muted)" }}
        >
          <span>Learning Progress</span>
          <span>{percentage}%</span>
        </div>

        <div
          className="h-2 overflow-hidden rounded-full lg:h-3"
          style={{
            background: "color-mix(in srgb, var(--border) 70%, transparent)",
          }}
        >
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${percentage}%`,
              background: "var(--primary)",
            }}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center lg:mt-8 lg:justify-end">
        {isCompleted ? (
          <button
            disabled
            className="cursor-not-allowed rounded-xl px-4 py-2 text-sm font-medium lg:px-5 lg:py-3 lg:text-base"
            style={{
              background: "rgba(34,197,94,.12)",
              color: "#22c55e",
              border: "1px solid rgba(34,197,94,.25)",
            }}
          >
            Roadmap Completed
          </button>
        ) : (
          <Link href={continueHref}>
            <button
              className="rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md lg:px-5 lg:py-3 lg:text-base"
              style={{
                background: "var(--surface)",
                color: "var(--primary)",
                border: "1px solid var(--border)",
              }}
            >
              Continue Learning
            </button>
          </Link>
        )}
      </div>
    </Card>
  );
}