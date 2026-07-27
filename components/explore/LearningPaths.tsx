import {ArrowRight, Clock3, BookOpen} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { roadmaps } from "@/data/roadmaps";

export default function LearningPaths(){
    return(
        <Section>
            <SectionTitle 
            eyebrow="Learning Paths"
            title="Start your Journey"
            description="Choose a roadmap and follow a structured path from beginner to advanced."
            />
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {roadmaps.map((roadmap)=> (
                    <Card 
                    key={roadmap.id}
                    className="group overflow-hidden p-0"
                    >
                        {/*roadmap image*/}
                        <div className="relative h-44 overflow-hidden bg-gray-100">
                            <Image
    src={roadmap.image}
    alt={roadmap.title}
    width={600}
    height={300}
    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
/>
                        </div>

                        <div className="p-8">
                            <h3 className="text-2xl font-semibold">
                                {roadmap.title}
                            </h3>
                            <p className="mt-4 leading-7 text-gray-500">
                                {roadmap.description}
                            </p>
                            {/*duration & topics*/}
                            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                                <Clock3 size={16} />
                                <span>{roadmap.duration}</span>
                                <span>•</span>
                                <BookOpen size={16} />
                                <span>{roadmap.topics} Topics</span>
                            </div>
                            {/*progress bar*/}
                            <Link href={roadmap.href}>
                            <Button className="mt-8 w-full">
                                Start Learning 
                                <ArrowRight
                                size={18}
                                className="ml-2 transition-transform group-hover:translate-x-1"
                                />
                                
                            </Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}