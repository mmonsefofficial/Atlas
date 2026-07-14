import{
    BookOpen,
    FileText,
    PlayCircle,
    ExternalLink,
} from "lucide-react";

const resources = [
    {
    title:"Official Documentation",
    type:"Documentation",
    icon:FileText,
    color: "bg-blue-50 text-blue-600",
    },
    {
    title:"Youtube Playlists",
    type:"Video Courses",
    icon: PlayCircle,
    color: "bg-red-50 text-red-600",
    },
    {
    title:"Programming Books",
    type:"Books",
    icon: BookOpen,
    color: "bg-emerald-50 text-emerald-600",
    },
    {
    title:"Useful Websites",
    type:"Tools",
    icon: ExternalLink,
    color: "bg-violet-50 text-violet-600",
    },
    
];

export default function Resources() {
    return(
        <section className="py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <h2 className="text-5xl font-semibold tracking-tight">
                        Everything in one place
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
                        No more searching across dozens of Websites.
                        Atlas organizes the best learning resources for you.
                    </p>
                </div>
            <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
                {resources.map((resource) => {
                    const Icon = resource.icon;
                    return(
                        <div
                        key={resource.title}
                        className="rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                        <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${resource.color}`}
                        >
                            <Icon size={28} />
                        </div>
                        <h3 className="mt-8 text-2xl font-semibold">
                            {resource.title}
                        </h3>
                    <p className="mt-3 text-gray-500">
                        {resource.type}
                    </p>
                    </div>

                    );
                })}
            </div>
            </div>
        </section>
    );
}