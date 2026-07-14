import {
   BookOpen,
   Map,
   Rocket,
} from "lucide-react";

const features = [
    {
        icon: BookOpen,
        title: "Curated Resources",
        description:
            "Hand-Picked documentation, Videos and articles without the clutter.",
    },
    {
        icon: Map,
        title: "Learning Roadmaps",
        description:
            "Clear step-by-step paths for every programming field.",
    },
   {
        icon: Rocket,
        title: "Build Projects",
        description:
            "Practice with real projects that strengthen your portfolio.",
    },

];

export default function Features() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-5xl font-semibold tracking-tight">
                        Everything you need
                        <br />
                        to learn faster.
                    </h2>
                    <p className="mt-6 text-lg text-gray-500">
                        Atlas helps you spend less time searching 
                        and more time building.
                    </p>

                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                            key={feature.title}
                            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                    <Icon size={30} />
                            </div>
                            <h3 className="mt-8 text-2xl font-semibold">
                                {feature.title}
                            </h3>
                            <p className="mt-4 leading-7 text-gray-500">
                                {feature.description}
                            </p>
                        </div>
                        );

                    })}

                </div>
            </div>
        </section>
    );
}