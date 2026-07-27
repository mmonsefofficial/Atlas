import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { RoadmapTopic } from "@/types/roadmap";
type Props = {
    roadmap: RoadmapTopic[];
    basePath: string;
};
export default function RoadmapTimeline({
    roadmap,
    basePath,

}: Props){
    return(
        <div className="mx-auto max-w-4xl">
            {roadmap.map((topic, index)=>(
                <div key={topic.id}>
                    <Card className="p-8">
                        <div className="flex items-start justify-between gap-6">
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                                        {index+1}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold">
                                            {topic.title}
                                        </h2>
                                        <p className="mt-1 text-gray-500">
                                            {topic.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-warp gap-3">
                                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                                        {topic.difficulty}
                                    </span>
                                    <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600">
                                        {topic.learningPath.length} Concepts
                                    </span>
                                </div>
                            </div>
                            <Link href={`${basePath}/${topic.id}`}>
                                <Button>
                                    Start
                                     <ArrowRight size={18}/>
                                </Button>
                            </Link>
                        </div>
                    </Card>
                    {index !== roadmap.length - 1 &&(
                        <div className="flex justify-center py-5">
                            <ArrowDown className="text-gray-300" size={28}/>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}