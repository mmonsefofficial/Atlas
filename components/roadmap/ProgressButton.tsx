"use client";

import Button from "@/components/ui/Button";
import { Check, CheckCircle2 } from "lucide-react";
import { useProgress } from "@/lib/useProgress";
import type { ProgressData } from "@/lib/useProgress";

type Props = {
  roadmap: keyof ProgressData;
  topicId: string;
};

export default function ProgressButton({
  roadmap,
  topicId,
}: Props) {
  const {
    completeTopic,
    isCompleted,
  } = useProgress();

  const completed = isCompleted(
    roadmap,
    topicId
  );

  function handleClick() {
    completeTopic(roadmap, topicId);
  }

  if (completed) {
    return (
      <Button
        className="px-5 py-2.5 text-sm lg:px-6 lg:py-3 lg:text-base"
        style={{
          background: "#059669",
        }}
      >
        <CheckCircle2
          size={16}
          className="lg:h-[18px] lg:w-[18px]"
        />
        Completed
      </Button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      className="px-5 py-2.5 text-sm lg:px-6 lg:py-3 lg:text-base"
    >
      <Check
        size={16}
        className="lg:h-[18px] lg:w-[18px]"
      />
      Mark as Completed
    </Button>
  );
}