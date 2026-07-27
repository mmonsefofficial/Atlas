import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { technologies } from "@/data/technologies";

export default function PopularTopics(){
    return(
        <Section>
            <SectionTitle 
            eyebrow="Popular"
            title="Popular Technologies"
            description="choose a technology and start learning from curated resources."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {technologies.map((technology)=>(
                    <Card 
                    key={technology.name}
                    className="group cursor-pointer p-6"
                    >
                        <div className="flex items-center justify-between">
                            {technology.logo ? (
                                <Image
                                src={technology.logo}
                                alt={technology.name}
                                width={42}
                                height={42}
                                />
                            ):(
                                <div className="h-10 w-10 rounded-xl bg-gray-100"/>
                            )}
                            <ArrowUpRight
                            size={18}
                            className="text-gray-300 transition group-hover:text-blue-600"
                            />

                        </div>
                        <h3 className="mt-8 text-xl font-semibold">
                            {technology.name}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Explore learning resources
                        </p>
                    </Card>
                ))}
            </div>
        </Section>
    );
}