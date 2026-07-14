import {
    BrainCircuit,
    Code2,
    Database,
    Globe,
    Shield,
    Smartphone,
} from "lucide-react";

const categorise = [
    {
        title: "Web Development",
        describtion:
            "Frontend & Backend",
        icon: Globe,
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Artficial Intelligence",
        describtion:
            "Machine Learning & Deep Learning",
        icon: BrainCircuit,
        color: "bg-violet-50 text-violet-600",
    },
    {
        title: "Mobile Development",
        describtion:
            "Flutter, React Native & kotlin",
        icon: Smartphone,
        color: "bg-green-50 text-green-600",
    },
    {
        title: "Cybersecurity",
        describtion:
            "Ethical Hacking & Security",
        icon: Shield,
        color: "bg-red-50 text-red-600",
    },
    {
        title: "Databases",
        describtion:
            "SQL, MongoDB & PostgreSQL",
        icon: Database,
        color: "bg-amber-50 text-amber-600",
    },
    {
        title: "Competitive Programming",
        describtion:
            "Algorithms & Data Structures",
        icon: Code2,
        color: "bg-cyan-50 text-cyan-600",
    },
];

export default function Categories() {

    return(
        <section className="py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-5xl font-semibold tracking-tight">
                        Explore learning paths
                    </h2>
                    <p className="mt-5 text-lg text-gray-500">
                        Start with the field that interests you and follow a structured roadmap.
                    </p>
                </div>
                <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                    {categorise.map((category) => {
                        const Icon = category.icon;
                        return(
                            <div
                            key={category.title}
                            className="group cursor-pointer rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                            >
                            <div
                            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.color}`}
                            >
                                <Icon size={30} />
                            </div>
                            <h3 className="mt-7 text-2xl font-semibold">
                                {category.title}
                            </h3>
                            <p className="mt-3 text-gray-500">
                                {category.describtion}
                            </p>
                            <span className="mt-8 inline-flex items-center text-sm font-medium text-blue-600 opacity-0 transition group-hover:opacity-100">
                                Explore →
                            </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );

}
