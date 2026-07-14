"use client";
import Image from "next/image";
import{ ArrowRight, Search } from "lucide-react";

const tags = [
    {
        name: "Python",
        logo:"/logos/python.svg",    
    },
    {
        name: "JavaScript",
        logo:"/logos/javascript.svg",    
    },
    {
        name: "React",
        logo:"/logos/react.svg",    
    },
    {
        name: "C++",
        logo:"/logos/cpp.svg",    
    },
    {
        name: "AI & ML",    
    },
    {
        name: "Web Development",    
    },
      
];

export default function Hero() {
    return(
        <section className="relative overflow-hidden">
            {/*background glow*/}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#dbeafe_0%,transparent_45%)]"/>

            <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center justify-between gap-20 px-6">

                {/*left side*/}
                <div className="max-w-xl">
                    <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                        Free • Community Driven
                    </span>
                    <h1 className="mt-8 text-6xl font-semibold leading-tight tracking-tight text-gray-900">
                        Learn programming
                        <br />
                        <span className="text-blue-600">
                            without wasting time.
                        </span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-500">
                        Atlas brings together the best roadmaps, documentation,
                        tutorials and free resources into one clean place,
                        helping you focus on learning instead of searching.
                    </p>
                    {/*search*/}
                    <div className="mt-10 flex h-16 items-center rounded-full border border-gray-200 bg-white px-6 shadow-sm transition focus-within:border-blue-400 focus-within:shadow-md">
                        <Search
                        size={20}
                        className="text-gray-400"
                        />
                        <input
                        type="text"
                        placeholder="search roadmaps, resources..."
                        className="flex-1 bg-trasparent px-4 outline-none placeholder:text-gray-400"
                        />
                        
                        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700">
                            <ArrowRight size={18} />
                        </button>
                    
                    </div>
                    {/*tags*/}
                    <div className="mt-8 flex flex-warp gap-3">
                        {tags.map((tag) => (
                            <span
                            key={tag.name}
                            className="inline-flex items-center gap-1.5 rounded-2xl border border-gray-200 bg-white px-1 py-2 text-sm text-gray-600 transition hover:border-blue-200 hover:bg-blue-50"
                            >
                                {tag.logo && (
                                    <Image 
                                    src={tag.logo}
                                    alt={tag.name}
                                    width={18}
                                    height={18}
                                    />
                                )}
                                {tag.name}
                            </span>
                        ))}

                    </div>

                </div>
                {/*right side*/}
                <div className="relative hidden flex-1 items-center justify-center lg:flex">
                    <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-200/30 blur-3xl" />
                    <div className="relative rounded-[42px] border border-white/70 bg-white/80 p-10 shadow-2xl backdrop-blur-xl">
                        <Image
                        src="/images/atlas-logo.png"
                        alt="Atlas Logo"
                        width={220}
                        height={220}
                        priority
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}
