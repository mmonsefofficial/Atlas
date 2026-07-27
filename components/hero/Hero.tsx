import BinaryBackground from "./BinaryBackground";
import FloatingCubeScene from "./FloatingCubeScene";
import TechTicker from "./TechTicker";

export default function Hero(){
    return(
        <>
        <section className="relative overflow-hidden">
            <BinaryBackground />
            <div className="relative mx-auto flex min-h-[820px] max-w-7xl items-center px-6">
                <div className="grid w-full items-center gap-16 lg:grid-cols-2">
                    {/*left*/}
                    <div className="relative z-10">
                        <p
                        className="mb-4 text-sm font-semibold uppercase tracking-[0.25em]"
                        style={{ color: "var(--primary)" }}
                        >
                            Atlas
                        </p>
                        <h1 
                        className="max-w-xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
                        style={{ color: "var(--foreground)"}}
                        >
                            Learn Programming 
                            <br />
                            Without Wasting Time 
                         </h1>
                         <p 
                         className="mt-8 max-w-lg text-lg leading-8"
                         style={{ color: "var(--muted)"}}
                         >
                            Structured learning paths, curated resources,
                            and applied projects to help you become an advanced developer.
                         </p>
                    </div>
                    {/*right*/}
                    <div className="relative flex h-[650px] items-center justify-center">
                        <FloatingCubeScene />
                    </div>

                </div>
            </div>
        </section>
        <TechTicker/>
        </>
    );
}