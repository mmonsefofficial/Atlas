import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import { technologies } from "@/data/technologies";
import { Search, ArrowRight } from "lucide-react";
import Image from "next/image";
export default function Hero(){
    return(
        <section className="py-24">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <Badge>
                        Explore Programming
                    </Badge>
                    <h1 className="mt-6 text-5xl font-semibold tracking-tight text-gray-900">
                        Find the perfect
                        <br />
                        programming roadmap.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-500">
                        Discover curated roadmaps, trusted resources and learning paths
                        for every programming field.
                    </p>
                    {/*search*/}
                    <div className="mt-10 flex items-center gap-3">
                        <div className="relative flex-1">
                            <Search 
                            size={20}
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                            <Input 
                            placeholder="Search Python, React, AI..."
                            className="pl-14"
                            />
                        </div>
                        <Button>
                            <ArrowRight size={18} />
                        </Button>
                    </div>
                    {/*popular search*/}
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {technologies.map((technology) =>(
                            <Badge key={technology.name}
                            className="flex items-center gap-2"
                            >
                               {technology.logo &&(
                                <Image
                            src={technology.logo}
                            alt={technology.name}
                            width={18}
                            height={18}
                            />
                               )} 
                                {technology.name}
                            </Badge>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}