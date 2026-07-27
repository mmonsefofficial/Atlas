"use client";

import { useState } from "react";
import WhyAtlasCard from "./WhyAtlasCard";
import { whyAtlasData } from "./whyAtlasData";

export default function WhyAtlas() {
  const [current, setCurrent] = useState(0);

  function nextCard() {
    setCurrent((prev) =>
      prev === whyAtlasData.length - 1 ? 0 : prev + 1
    );
  }

  function previousCard() {
    setCurrent((prev) =>
      prev === 0 ? whyAtlasData.length - 1 : prev - 1
    );
  }

  return (
    <section
      id="home"
      className="relative py-36"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Title */}

        <div className="mb-20 text-center">

          <p
            className="text-sm font-semibold uppercase tracking-[0.35em]"
            style={{
              color: "var(--primary)",
            }}
          >
            Why Atlas
          </p>

          <h2
            className="mt-5 text-5xl font-bold tracking-tight md:text-6xl"
            style={{
              color: "var(--foreground)",
            }}
          >
            Everything you need
            <br />
            to become a developer.
          </h2>

          <p
            className="mx-auto mt-8 max-w-2xl text-lg leading-8"
            style={{
              color: "var(--muted)",
            }}
          >
            Atlas brings structure, clarity and high-quality
            resources together in one place so you can spend
            less time searching and more time building.
          </p>

        </div>

        {/* Card */}

        <div className="relative mx-auto h-[540px] max-w-4xl">

          {/* Left Click Zone */}

          <button
            aria-label="Previous"
            onClick={previousCard}
            className="absolute left-0 top-0 z-30 h-full w-1/2"
          />

          {/* Right Click Zone */}

          <button
            aria-label="Next"
            onClick={nextCard}
            className="absolute right-0 top-0 z-30 h-full w-1/2"
          />

          {whyAtlasData.map((item, index) => (
            <WhyAtlasCard
              key={item.title}
              item={item}
              active={current === index}
            />
          ))}

        </div>

        {/* Dots */}

        <div className="mt-12 flex justify-center gap-4">

          {whyAtlasData.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
              h-3 rounded-full transition-all duration-500
              ${
                current === index
                  ? "w-12"
                  : "w-3"
              }
              `}
              style={{
                background:
                  current === index
                    ? "var(--primary)"
                    : "rgba(255,255,255,.18)",
              }}
            />

          ))}

        </div>

      </div>
    </section>
  );
}