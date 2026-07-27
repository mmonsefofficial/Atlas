"use client";

import { ArrowRight, Flame } from "lucide-react";


export default function CTA() {

  return (

    <section
      className="
        relative
        overflow-hidden
        py-32
      "
    >

      {/* Fire Background Atmosphere */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
      >

        <div className="hack-fire hack-fire-one" />

        <div className="hack-fire hack-fire-two" />

        <div className="hack-fire hack-fire-three" />

      </div>



      <div className="relative mx-auto max-w-6xl px-6">


        <div

          className="
            relative
            overflow-hidden
            rounded-[42px]
            px-8
            py-20
            text-center

            md:px-16
          "

          style={{

            background:
              "color-mix(in srgb, var(--surface) 82%, transparent)",

            border:
              "1px solid var(--border)",

            backdropFilter:
              "blur(30px)",

            boxShadow:
              "0 40px 120px rgba(0,0,0,.25)"

          }}

        >


          {/* Orange Glass Glow */}

          <div

            className="
              absolute
              inset-0
              pointer-events-none
            "

            style={{

              background:
                "radial-gradient(circle at center, rgba(255,120,30,.22), transparent 45%)"

            }}

          />



          <div className="relative z-10">


            {/* Logo */}

            <div

              className="
                mx-auto
                mb-10
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-3xl

              "

              style={{

                background:
                  "rgba(255,255,255,.08)",

                border:
                  "1px solid rgba(255,255,255,.12)"

              }}

            >

              <img

                src="/logos/hackclub-rounded.svg"

                alt="Hack Club"

                className="
                  h-16
                  w-16
                "

              />

            </div>




            {/* Small Badge */}

            <div

              className="
                mx-auto
                mb-6
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                px-5
                py-2
                text-sm
                font-medium
              "

              style={{

                color:
                  "#ff7a18",

                background:
                  "rgba(255,122,24,.12)"

              }}

            >

              <Flame size={16}/>

              Build. Create. Ship.

            </div>




            <h2

              className="
                text-4xl
                font-bold
                tracking-tight

                md:text-6xl
              "

              style={{

                color:
                  "var(--foreground)"

              }}

            >

              Are you a teenager
              <br />

              who loves building?

            </h2>




            <p

              className="
                mx-auto
                mt-7
                max-w-2xl
                text-lg
                leading-8
              "

              style={{

                color:
                  "var(--muted)"

              }}

            >

              Join Hack Club and build amazing projects
              with a community of young creators.

              <br />

              <span className="font-semibold">

                You Ship. We Ship.

              </span>

            </p>




            <a

              href="https://hackclub.com"

              target="_blank"

              rel="noopener noreferrer"

              className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-2xl
                px-8
                py-4
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-1
              "

              style={{

                background:
                  "#ff7a18",

                color:
                  "#ffffff",

                boxShadow:
                  "0 15px 40px rgba(255,122,24,.35)"

              }}

            >

              Join Hack Club

              <ArrowRight size={20}/>

            </a>



          </div>


        </div>


      </div>


    </section>

  );

}