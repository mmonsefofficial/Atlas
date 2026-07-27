import Hero from "@/components/explore/Hero";
import PopularTopics from "@/components/explore/PopularTopics";
import CategoryGrid from "@/components/explore/CategoryGrid";
import LearningPaths from "@/components/explore/LearningPaths";

export default function ExplorePage(){
    return(
        <>
        <Hero />
        <PopularTopics />
        <CategoryGrid />
        <LearningPaths />
        </>
    );
}