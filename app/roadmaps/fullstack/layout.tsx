import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import RoadmapProgress from "@/components/roadmap/RoadmapProgress";
import RoadmapSidebar from "@/components/roadmap/RoadmapSidebar";
import { fullStackRoadmap } from "@/data/fullstack";
type Props ={
    children: ReactNode;
};

export default function FullStackLayout({children}:Props){
    return(
        <main className="pb-20">
            {/*progress*/}
            <Container>
                <div className="pt-10">
                    <RoadmapProgress 
                    roadmap="fullstack"
                    totalTopics={26}
                    estimatedWeeks={40}
                    roadmapData={fullStackRoadmap}
                    />
                </div>
            </Container>
            {/*workspace*/}
            <div className="mx-auto mt-6 flex max-w-[1800px] gap-6 px-3">
                <RoadmapSidebar
                roadmapName="Fullstack"
                roadmapSlug="fullstack"
                roadmap={fullStackRoadmap}
                />
                {/*lesson*/}
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
        </main>
    );
}