import { ArrowRight } from "lucide-react";

const roadmaps = [
    {
        title:"Frontend Developer",
        description:
            "Master HTML, CSS, JavaScript, React and Next.js from beginner to advanced.",
        lessons:"42 Resources",
        color:"from-blue-500 to-cyan-500",
    },
    {
        title:"Backend Developer",
        description:
            "Learn Node.js, Express, APIs, databases and authentication.",
        lessons:"38 Resources",
        color:"from-violet-500 to-purple-600",
    },
    {
    title: "Full Stack Developer",
    description:
      "Combine frontend and backend skills to build complete web applications.",
    lessons: "56 Resources",
    color: "from-indigo-500 to-blue-600",
    },
    {
    title: "Cybersecurity",
    description:
        "Learn networking, Linux, ethical hacking, penetration testing, and digital security.",
    lessons: "44 Resources",
    color: "from-red-500 to-orange-500",
    },
    
    {
        title:"Artificial Intelligence",
        description:
            "Dive into Python, Machine Learning, Deep Learning and Computer Vision.",
        lessons:"51 Resources",
        color:"from-emerald-500 to-teal-500",
    },
    {
    title: "Competitive Programming",
    description:
      "Master algorithms, data structures and problem solving for contests.",
    lessons: "34 Resources",
    color: "from-cyan-500 to-sky-500",
  },
];

export default function Roadmaps() {
    return(
        <section className="py-28 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-end justify-between">
                    <div>
                        <h2 className="text-5xl font-semibold tracking-tight">
                            Featured Roadmaps
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Follow a complete learning path from start to finish.
                        </p>
                    </div>
                    <button className="hidden rounded-xl border border-gray-200 bg-white px-5 py-3 transition hover:shadow md:block">
                        View All
                    </button>
                </div>
                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {roadmaps.map((roadmap) => (
                        <div
                        key={roadmap.title}
                        className="group overflow-hidden rounded-[32px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                        <div
                         className={`h-52 bg-gradient-to-br ${roadmap.color}`}
                         />
                         <div className="p-8">
                            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600">
                                {roadmap.lessons}
                            </span>
                            <h3 className="mt-6 text-2xl font-semibold">
                                {roadmap.title}
                            </h3>
                            <p className="mt-4 leading-7 text-gray-500">
                                {roadmap.description}
                            </p>

                            <button className="mt-8 flex items-center gap-2 font-medium text-blue-600 transition group-hover:gap-3">
                                Start Learning 
                                <ArrowRight size={18}/>
                            </button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}