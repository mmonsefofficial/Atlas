import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import RoadmapProgress from "@/components/roadmap/RoadmapProgress";
import RoadmapSidebar from "@/components/roadmap/RoadmapSidebar";
import { cybersecurityRoadmap } from "@/data/cybersecurity";
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
                    roadmap="cybersecurity"
                    totalTopics={24}
                    estimatedWeeks={18}
                    roadmapData={cybersecurityRoadmap}
                    />
                </div>
            </Container>
            {/*workspace*/}
            <div className="mx-auto mt-6 flex max-w-[1800px] gap-6 px-3">
                <RoadmapSidebar
                roadmapName="Cybersecurity"
                roadmapSlug="cybersecurity"
                roadmap={cybersecurityRoadmap}
                />
                {/*lesson*/}
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
        </main>
    );
}