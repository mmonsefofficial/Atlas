"use client";

import { ArrowRight, BookOpen, Clock3, CheckCircle } from "lucide-react";
import { roadmaps } from "@/data/roadmaps";
import Image from "next/image";
import Link from "next/link";
import { useProgress, type ProgressData } from "@/lib/useProgress";

type Props = {
  showHeader?: boolean;
  limit?: number;
  embedded?: boolean;
};

export default function Roadmaps({
  showHeader = true,
  limit,
  embedded = false,
}: Props) {
  const { getCompletedCount } = useProgress();

  return (
    <section className={embedded ? "" : "py-20 lg:py-28"}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {showHeader && (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
                style={{ color: "var(--foreground)" }}
              >
                Featured Roadmaps
              </h2>

              <p
                className="mt-3 text-base sm:text-lg"
                style={{ color: "var(--muted)" }}
              >
                Follow a complete learning path from start to finish.
              </p>
            </div>

            <Link
              href="/roadmaps"
              className="w-full rounded-xl border px-5 py-3 text-center transition-all duration-300 md:w-auto"
              style={{
                background: "var(--surface)",
                color: "var(--foreground)",
                borderColor: "var(--border)",
              }}
            >
              View All
            </Link>
          </div>
        )}

        <div
          className={`grid gap-6 md:grid-cols-2 xl:grid-cols-3 ${
            showHeader ? "mt-12 lg:mt-16" : ""
          }`}
        >
          {roadmaps.slice(0, limit ?? roadmaps.length).map((roadmap) => {
            const completed = getCompletedCount(
              roadmap.id as keyof ProgressData
            );

            const percentage = Math.round(
              (completed / roadmap.topics) * 100
            );

            const isCompleted = completed >= roadmap.topics;

            return (
              <div
                key={roadmap.id}
                className="group overflow-hidden rounded-3xl border shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl lg:rounded-[32px]"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div className="relative h-44 overflow-hidden sm:h-52">
                  <Image
                    src={roadmap.image}
                    alt={roadmap.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <h3
                    className="mt-6 text-xl font-semibold sm:text-2xl"
                    style={{ color: "var(--foreground)" }}
                  >
                    {roadmap.title}
                  </h3>

                  <p
                    className="mt-4 text-sm leading-6 sm:text-base sm:leading-7"
                    style={{ color: "var(--muted)" }}
                  >
                    {roadmap.description}
                  </p>

                  <div
                    className="mt-5 flex items-center gap-2 text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    <Clock3 size={16} />
                    <span>{roadmap.duration}</span>
                    <span>•</span>
                    <BookOpen size={16} />
                    <span>{roadmap.topics} Topics</span>
                  </div>

                  {completed > 0 && (
                    <div className="mt-6">
                      <div
                        className="mb-2 flex justify-between text-sm"
                        style={{ color: "var(--muted)" }}
                      >
                        <span>Progress</span>
                        <span>{percentage}%</span>
                      </div>

                      <div
                        className="h-2 overflow-hidden rounded-full"
                        style={{
                          background:
                            "color-mix(in srgb, var(--border) 70%, transparent)",
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
                  )}

                  <Link
                    href={roadmap.href}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border px-5 py-3 text-center font-medium transition-all duration-300 hover:opacity-90 sm:inline-flex sm:w-auto sm:justify-start"
                    style={{
                      color: "var(--primary)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {isCompleted ? (
                      <>
                        Completed
                        <CheckCircle size={18} />
                      </>
                    ) : completed > 0 ? (
                      <>
                        Continue Learning
                        <ArrowRight size={18} />
                      </>
                    ) : (
                      <>
                        Start Learning
                        <ArrowRight size={18} />
                      </>
                    )}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}