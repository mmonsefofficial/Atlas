"use client";

import Image from "next/image";

const technologies = [
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "Git", logo: "/logos/git.svg" },
  { name: "VS Code", logo: "/logos/vscode.svg" },
  { name: "HTML", logo: "/logos/html.svg" },
  { name: "CSS", logo: "/logos/css.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Cloudflare", logo: "/logos/cloudflare.svg" },
  { name: "Vercel", logo: "/logos/Vercel.svg" },
  { name: "TailWind", logo: "/logos/tailwind.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
];

const items = [...technologies, ...technologies];

export default function TechMarquee() {
  return (
    <section className="relative z-30 -mt-10 w-screen overflow-hidden">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-52 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/70 to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-52 bg-gradient-to-l from-[var(--background)] via-[var(--background)]/70 to-transparent" />

      <div
        className="relative mx-auto w-[99%] overflow-hidden rounded-full border"
        style={{
          borderColor: "rgba(255,255,255,.08)",

          background: `
          linear-gradient(
          180deg,
          rgba(255,255,255,.06),
          rgba(255,255,255,.03) 45%,
          rgba(255,255,255,.05)
          )
          `,

          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",

          boxShadow: `
          inset 0 1px rgba(255,255,255,.08),
          0 10px 40px rgba(0,0,0,.18)
          `,
        }}
      >
        {/* top highlight */}

        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,.25), transparent)",
          }}
        />

        {/* bottom glow */}

        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,.08), transparent)",
          }}
        />

        <div className="atlas-marquee">
          {items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="atlas-tech-item"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={30}
                height={30}
                draggable={false}
                className="atlas-tech-logo"
              />

              <span>{item.name}</span>
              <span className="atlas-separator">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}