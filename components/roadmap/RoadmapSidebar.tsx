"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CheckCircle,
  Circle,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import { useProgress, type ProgressData } from "@/lib/useProgress";
import { RoadmapTopic } from "@/types/roadmap";

type Props = {
  roadmapName: string;
  roadmapSlug: keyof ProgressData;
  roadmap: RoadmapTopic[];
};

export default function RoadmapSidebar({
  roadmapName,
  roadmapSlug,
  roadmap,
}: Props) {
  const { isCompleted } = useProgress();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border shadow-lg lg:hidden"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
          color: "var(--foreground)",
        }}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-72
          transform transition-transform duration-300
          lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)] lg:w-80 lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div
          className="flex h-full flex-col overflow-hidden rounded-none border lg:rounded-3xl"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow)",
          }}
        >
          <div
            className="border-b p-6"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <div className="flex items-center justify-between lg:block">
              <div>
                <h2
                  className="text-xl font-bold"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  {roadmapName} Roadmap
                </h2>

                <p
                  className="mt-2 text-sm"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  Learn step by step
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="lg:hidden"
                style={{
                  color: "var(--foreground)",
                }}
              >
                <X size={22} />
              </button>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4">
            {roadmap.map((topic) => {
              const completed = isCompleted(
                roadmapSlug,
                topic.id
              );

              const active = pathname.endsWith(`/${topic.id}`);

              return (
                <Link
                  key={topic.id}
                  href={`/roadmaps/${roadmapSlug}/${topic.id}`}
                  onClick={() => setOpen(false)}
                  className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300"
                  style={{
                    background: active
                      ? "color-mix(in srgb, var(--primary) 12%, var(--surface))"
                      : "transparent",
                    color: active
                      ? "var(--primary)"
                      : "var(--foreground)",
                  }}
                >
                  {completed ? (
                    <CheckCircle
                      size={20}
                      className="text-green-500"
                    />
                  ) : (
                    <Circle
                      size={20}
                      style={{
                        color: "var(--muted)",
                      }}
                    />
                  )}

                  <span className={active ? "font-semibold" : ""}>
                    {topic.title}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div
            className="border-t p-4"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                color: "var(--muted)",
              }}
            >
              <ChevronDown
                size={20}
                className="animate-bounce"
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}