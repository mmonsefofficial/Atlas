import Image from "next/image";
import { WhyAtlasItem } from "./whyAtlasData";
type Props = {
    item: WhyAtlasItem;
    active: boolean;
};

export default function WhyAtlasCard({
    item,
    active,
}: Props){
    return(
        <div 
        className={`
           absolute inset-0 overflow-hidden rounded-[30px] 
           border
           transition-all duration-700
           ${
            active
            ? "opacity-100 scale-100 translate-x-0"
            : "pointer-events-none opacity-0 scale-[0.98] translate-x-8"
           }
            `}
        style={{
            background: "rgba(255,255,255,.04)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            borderColor: "rgba(255,255,255,.08)",
             boxShadow:
          "0 20px 80px rgba(0,0,0,.18), inset 0 1px rgba(255,255,255,.06)",
        }}
        >
            {/*img*/}
            <div className="relative h-[58%] w-full">
                <Image 
                src={item.image}
                alt={item.title}
                fill
                priority
                className="object-contain p-1"
                />
                {/*img fade*/}
                <div 
                className="absolute inset-0"
                style={{
                    background:
                    "linear-gradient(to top, rgba(0,0,0,.45), transparent 55%)",
                }}
                />
            </div>
            {/*content*/}
            <div className="flex h-[35%] flex-col justify-center px-10 py-8">
                <h3 
                className="text-3xl font-semibold tracking-tight"
                style={{
                    color: "var(--foreground)",
                }}
                >
                    {item.title}
                </h3>
                <p 
                className="mt-5 max-w-2xl text-lg leading-8"
                style={{
                    color: "var(--muted)",
                }}
                >
                    {item.description}
                </p>
            </div>
        </div>
    );
}