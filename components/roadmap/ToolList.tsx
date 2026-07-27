import { Wrench } from "lucide-react";
import Card from "@/components/ui/Card";

type Tool = {
  title: string;
  url: string;
};

type Props = {
  tools: Tool[];
};

export default function ToolList({
  tools,
}: Props) {
  return (
    <Card className="p-5 lg:p-8">
      <h2
        className="text-xl font-semibold lg:text-2xl"
        style={{ color: "var(--foreground)" }}
      >
        Tools
      </h2>

      <p
        className="mt-2 text-sm lg:text-base"
        style={{ color: "var(--muted)" }}
      >
        Recommended tools for this topic.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-2 lg:mt-8 lg:gap-4">
        {tools.map((tool) => (
          <a
            key={tool.title}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 lg:gap-4 lg:p-5"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <Wrench
              size={20}
              className="shrink-0 lg:h-[22px] lg:w-[22px]"
              style={{ color: "var(--primary)" }}
            />

            <span
              className="text-sm font-medium lg:text-base"
              style={{ color: "var(--foreground)" }}
            >
              {tool.title}
            </span>
          </a>
        ))}
      </div>
    </Card>
  );
}