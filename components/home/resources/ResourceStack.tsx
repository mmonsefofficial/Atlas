"use client";

import { useState } from "react";
import ResourceCard from "./ResourceCard";
import { resources } from "./resourcesData";


export default function ResourceStack() {

  const [cards, setCards] = useState(resources);


  const nextCard = () => {

    setCards((prev) => {

      const updated = [...prev];

      const first = updated.shift();

      if (first) {
        updated.push(first);
      }

      return updated;

    });

  };


  return (

    <section
      id="resources"
      className="relative overflow-hidden py-28"
    >

      <div className="mx-auto max-w-7xl px-6">


        {/* Header */}

        <div className="mb-20 text-center">


          <p
            className="text-sm font-semibold uppercase tracking-[0.35em]"
            style={{
              color: "var(--primary)",
            }}
          >
            Resources
          </p>


          <h2
            className="mt-5 text-4xl font-bold tracking-tight md:text-6xl"
            style={{
              color: "var(--foreground)",
            }}
          >
            Everything You Need
            <br />
            To Learn Faster
          </h2>


          <p
            className="mx-auto mt-7 max-w-2xl text-lg leading-8"
            style={{
              color: "var(--muted)",
            }}
          >
            Carefully curated resources that help you become a better developer.
          </p>


        </div>



        {/* Card Deck */}

        <div className="flex justify-center">


          <div
            className="
              relative
              h-[460px]
              w-[420px]
              max-w-full

              sm:h-[480px]
            "
          >

            {cards.map((item, index) => (

              <ResourceCard

                key={item.id}

                title={item.title}

                description={item.description}

                icon={item.icon}

                color={item.color}

                level={index}

                onClick={
                  index === 0
                    ? nextCard
                    : undefined
                }

              />

            ))}

          </div>


        </div>



        {/* Indicators */}

        <div
          className="
            mt-14
            flex
            justify-center
            gap-3
          "
        >

          {resources.map((resource) => {


            const active =
              cards[0].id === resource.id;


            return (

              <span

                key={resource.id}

                className="
                  h-2
                  rounded-full
                  transition-all
                  duration-500
                "

                style={{

                  width: active ? 22 : 8,

                  background:
                    active
                      ? "var(--primary)"
                      : "rgba(150,150,150,.25)"

                }}

              />

            );

          })}


        </div>


      </div>

    </section>

  );

}