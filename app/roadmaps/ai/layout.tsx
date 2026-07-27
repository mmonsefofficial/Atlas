import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import RoadmapProgress from "@/components/roadmap/RoadmapProgress";
import RoadmapSidebar from "@/components/roadmap/RoadmapSidebar";
import { aiRoadmapTopic } from "@/data/ai";
type Props ={
    children: ReactNode;
};

export default function AILayout({children}:Props){
    return(
        <main className="pb-20">
            {/*progress*/}
            <Container>
                <div className="pt-10">
                    <RoadmapProgress 
                    roadmap="ai"
                    totalTopics={20}
                    estimatedWeeks={32}
                    roadmapData={aiRoadmapTopic}
                    />
                </div>
            </Container>
            {/*workspace*/}
            <div className="mx-auto mt-6 flex max-w-[1800px] gap-6 px-3">
                <RoadmapSidebar
                roadmapName="AI"
                roadmapSlug="ai"
                roadmap={aiRoadmapTopic}
                />
                {/*lesson*/}
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
        </main>
    );
}