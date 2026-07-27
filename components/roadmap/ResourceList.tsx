import {
  ArrowUpRight,
  FileText,
  PlayCircle,
  Code2,
  Clock3,
} from "lucide-react";
import Card from "@/components/ui/Card";

type Resource = {
  id: string;
  title: string;
  url: string;
  recommended?: boolean;
  duration?: string;
};

type ResourceListProps = {
  title: string;
  description: string;
  resources: Resource[];
};

export default function ResourceList({
  title,
  description,
  resources,
}: ResourceListProps) {
  const sectionIcon =
    title === "Documentation" ? (
      <div
        className="flex h-10 w-10 items-center justify-center rounded-lg lg:h-12 lg:w-12 lg:rounded-xl"
        style={{
          background: "color-mix(in srgb, var(--primary) 12%, var(--surface))",
        }}
      >
        <FileText
          size={20}
          className="lg:h-[22px] lg:w-[22px]"
          style={{ color: "var(--primary)" }}
        />
      </div>
    ) : title === "Video Courses" ? (
      <div
        className="flex h-10 w-10 items-center justify-center rounded-lg lg:h-12 lg:w-12 lg:rounded-xl"
        style={{
          background: "rgba(239,68,68,.12)",
        }}
      >
        <PlayCircle
          size={20}
          className="text-red-500 lg:h-[22px] lg:w-[22px]"
        />
      </div>
    ) : (
      <div
        className="flex h-10 w-10 items-center justify-center rounded-lg lg:h-12 lg:w-12 lg:rounded-xl"
        style={{
          background: "rgba(249,115,22,.12)",
        }}
      >
        <Code2
          size={20}
          className="text-orange-500 lg:h-[22px] lg:w-[22px]"
        />
      </div>
    );

  return (
    <Card className="p-5 lg:p-8">
      <div className="flex items-center gap-3 lg:gap-4">
        {sectionIcon}

        <div>
          <h2
            className="text-xl font-semibold lg:text-2xl"
            style={{ color: "var(--foreground)" }}
          >
            {title}
          </h2>

          <p
            className="mt-1 text-sm lg:text-base"
            style={{ color: "var(--muted)" }}
          >
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3 lg:mt-8 lg:space-y-4">
        {resources.map((resource) => (
          <a
            key={resource.id}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 lg:rounded-2xl lg:p-5"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3
                  className="text-sm font-semibold lg:text-base"
                  style={{ color: "var(--foreground)" }}
                >
                  {resource.title}
                </h3>

                {resource.recommended && (
                  <span
                    className="rounded-full px-2 py-1 text-[11px] font-medium lg:text-xs"
                    style={{
                      background:
                        "color-mix(in srgb, var(--primary) 12%, var(--surface))",
                      color: "var(--primary)",
                    }}
                  >
                    Recommended
                  </span>
                )}
              </div>

              {resource.duration && (
                <div
                  className="mt-2 flex items-center gap-2 text-xs lg:text-sm"
                  style={{ color: "var(--muted)" }}
                >
                  <Clock3 size={13} className="lg:h-[14px] lg:w-[14px]" />
                  <span>{resource.duration}</span>
                </div>
              )}
            </div>

            <ArrowUpRight
              size={16}
              className="ml-4 shrink-0 lg:h-[18px] lg:w-[18px]"
              style={{ color: "var(--muted)" }}
            />
          </a>
        ))}
      </div>
    </Card>
  );
}