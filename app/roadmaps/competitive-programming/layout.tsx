import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import RoadmapProgress from "@/components/roadmap/RoadmapProgress";
import RoadmapSidebar from "@/components/roadmap/RoadmapSidebar";
import { competitiveProgrammingRoadmap } from "@/data/competitive-programming";
type Props ={
    children: ReactNode;
};

export default function CompetitiveProgrammingLayout({children}:Props){
    return(
        <main className="pb-20">
            {/*progress*/}
            <Container>
                <div className="pt-10">
                    <RoadmapProgress 
                    roadmap="competitive-programming"
                    totalTopics={20}
                    estimatedWeeks={40}
                    roadmapData={competitiveProgrammingRoadmap}
                    />
                </div>
            </Container>
            {/*workspace*/}
            <div className="mx-auto mt-6 flex max-w-[1800px] gap-6 px-3">
                <RoadmapSidebar
                roadmapName="Competitive Programming"
                roadmapSlug="competitive-programming"
                roadmap={competitiveProgrammingRoadmap}
                />
                {/*lesson*/}
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
        </main>
    );
}