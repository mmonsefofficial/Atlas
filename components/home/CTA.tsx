import{ ArrowRight } from "lucide-react";
export default function CTA() {
    return(
        <section className="py-32">
            <div className="mx-auto max-w-6xl px-6">
                 <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 px-12 py-20 text-center text-white shadow-2xl">
                    <h2 className="text-5xl font-semibold tracking-tight">
                        Ready to start learning?
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
                        Join thousands of learners exploring curated roadmaps,
                        trusted resources and hands-on projects.
                    </p>
                    <button className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-medium text-blue-600 transition hover:scale-105">
                        Explore Roadmaps
                        <ArrowRight size={20} />

                    </button>
                 </div>
            </div>
        </section>
    );
}