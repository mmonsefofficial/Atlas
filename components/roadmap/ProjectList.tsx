import { FolderGit2 } from "lucide-react";
import Card from "@/components/ui/Card";

type Project = {
  title: string;
  difficulty: string;
};

type Props = {
  projects: Project[];
};

export default function ProjectList({
  projects,
}: Props) {
  return (
    <Card className="p-5 lg:p-8">
      <h2
        className="text-xl font-semibold lg:text-2xl"
        style={{ color: "var(--foreground)" }}
      >
        Projects
      </h2>

      <p
        className="mt-2 text-sm lg:text-base"
        style={{ color: "var(--muted)" }}
      >
        Apply what you've learned by building real projects.
      </p>

      <div className="mt-6 space-y-3 lg:mt-8 lg:space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex items-center justify-between rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 lg:p-5"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex min-w-0 items-center gap-3 lg:gap-4">
              <FolderGit2
                size={20}
                className="shrink-0 lg:h-[22px] lg:w-[22px]"
                style={{ color: "var(--primary)" }}
              />

              <span
                className="truncate text-sm font-medium lg:text-base"
                style={{ color: "var(--foreground)" }}
              >
                {project.title}
              </span>
            </div>

            <span
              className="ml-4 shrink-0 rounded-full px-2.5 py-1 text-xs font-medium lg:px-3 lg:text-sm"
              style={{
                background:
                  "color-mix(in srgb, var(--primary) 10%, var(--surface))",
                color: "var(--primary)",
              }}
            >
              {project.difficulty}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}