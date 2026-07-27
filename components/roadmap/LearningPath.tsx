import Card from "@/components/ui/Card";

type LearningPathProps = {
  items: string[];
};

export default function LearningPath({
  items,
}: LearningPathProps) {
  return (
    <Card className="p-5 lg:p-8">
      <h2
        className="text-xl font-semibold transition-colors duration-300 lg:text-2xl"
        style={{ color: "var(--foreground)" }}
      >
        Learning Path
      </h2>

      <p
        className="mt-2 text-sm transition-colors duration-300 lg:text-base"
        style={{ color: "var(--muted)" }}
      >
        Follow these concepts in order to master this topic.
      </p>

      <div className="mt-6 space-y-3 lg:mt-8 lg:space-y-4">
        {items.map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl border p-3 transition-all duration-300 lg:gap-4 lg:p-4"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold lg:h-8 lg:w-8 lg:text-base"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--primary) 15%, var(--surface))",
                color: "var(--primary)",
              }}
            >
              {index + 1}
            </div>

            <span
              className="text-sm font-medium transition-colors duration-300 lg:text-base"
              style={{ color: "var(--foreground)" }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}