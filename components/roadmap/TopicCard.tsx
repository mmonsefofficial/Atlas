import Link from "next/link";
import{
    BookOpen,
    PlayCircle,
    Hammer,
    ArrowRight,
    Clock,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

type TopicCardProps = {
    roadmap: string;
    topic:{
        id: string;
        title: string;
        description: string;
        difficulty: string;
        duration: string;
        resources:{
            documentation:{
                title: string;
                url: string;
            };
            video:{
                title: string;
                url: string;
            };
            practice: string[];
        };
    };
};

export default function TopicCard({
    roadmap,
    topic,
}: TopicCardProps){
    return(
        <Card className="p-8 group">
            {/*Header*/}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold">
                        {topic.title}
                    </h2>
                    <p className="mt-2 text-gray-500">
                        {topic.description}
                    </p>
                </div>
                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                    {topic.difficulty}
                </span>

            </div>
            {/*Duration*/}
            <div className="mt-6 flex items-center gap-2 text-gray-500">
                <Clock size={18} />
                {topic.duration}
            </div>
            {/*resources*/}
            <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                    <BookOpen size={18} />
                    <span>{topic.resources.documentation.title}</span>
                </div>
                <div className="flex items-center gap-3">
                    <PlayCircle size={18} />
                    <span> {topic.resources.video.title} </span>
                </div>
                <div className="flex items-center gap-3">
                    <Hammer size={18} />
                    <span>
                        {topic.resources.practice.length} Practice Projects
                    </span>
                </div>
            </div>
            {/*button*/}
            <Link
            href={`/roadmaps/${roadmap}/${topic.id}`}
            >
                <Button className="mt-8 w-full">
                    Continue 

                    <ArrowRight 
                    size={18}
                    className="ml-2 transition group-hover:translate-x-1"
                    />

                </Button>
            </Link>
        </Card>
    );
}