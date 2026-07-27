import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import RoadmapProgress from "@/components/roadmap/RoadmapProgress";
import RoadmapSidebar from "@/components/roadmap/RoadmapSidebar";
import { frontendRoadmap } from "@/data/frontend";
type Props ={
    children: ReactNode;
};

export default function FrontendLayout({children}:Props){
    return(
        <main className="pb-20">
            {/*progress*/}
            <Container>
                <div className="pt-10">
                    <RoadmapProgress 
                    roadmap="frontend"
                    totalTopics={12}
                    estimatedWeeks={20}
                    roadmapData={frontendRoadmap}
                    />
                </div>
            </Container>
            {/*workspace*/}
            <div className="mx-auto mt-6 flex max-w-[1800px] gap-6 px-3">
                <RoadmapSidebar
  roadmapName="Frontend"
  roadmapSlug="frontend"
  roadmap={frontendRoadmap}
/>
                {/*lesson*/}
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
        </main>
    );
}