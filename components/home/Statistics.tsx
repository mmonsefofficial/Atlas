const stats = [
    {
        number: "2500+",
        label: "Learning Resources",
    },
    {
        number: "120+",
        label: "Learning Roadmaps",
    },
    {
        number: "40+",
        label: "Programming Topics",
    },
    {
        number: "100%",
        label: "Free Forever",
    },
];

export default function Statistics() {
    return(
        <section className="py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-5xl font-semibold tracking-tight">
                        Atlas in Numbers
                    </h2>

                    <p className="mt-6 text-lg text-gray-500">
                        Building one place where developers can learn faster.
                    </p>
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                        key={stat.label}
                        className="rounded-3xl border border-gary-200 bg-white p-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                           <h3 className="text-5xl font-bold text-blue-600">
                            {stat.number}
                           </h3>
                           <p className="mt-4 text-gray-500">
                            {stat.label}
                           </p>
                           </div>
                    ))}
                </div>
            </div>
        </section>
    );
}