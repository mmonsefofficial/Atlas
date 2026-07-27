"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";


type Props = {

  title: string;

  description: string;

  icon: IconType;

  color: string;

  level: number;

  onClick?: () => void;

};



export default function ResourceCard({

  title,
  description,
  icon: Icon,
  color,
  level,
  onClick,

}: Props) {


  const positions = [

    {
      y:0,
      scale:1,
      rotate:0,
      opacity:1,
      blur:0,
      z:40
    },

    {
      y:18,
      scale:.96,
      rotate:-1,
      opacity:.75,
      blur:1,
      z:30
    },

    {
      y:36,
      scale:.92,
      rotate:1,
      opacity:.45,
      blur:3,
      z:20
    },

    {
      y:54,
      scale:.88,
      rotate:0,
      opacity:.25,
      blur:5,
      z:10
    }

  ];


  const current = positions[level];



  const titleWords = title.split(" ");



  return (

    <motion.div


      animate={{

        y: current.y,

        scale: current.scale,

        rotate: current.rotate,

        opacity: current.opacity

      }}


      transition={{

        duration:.65,

        ease:[0.22,1,0.36,1]

      }}


      onClick={
        level === 0
          ? onClick
          : undefined
      }


      style={{

        zIndex: current.z,

        filter:
          `blur(${current.blur}px)`

      }}


      className="
        absolute
        inset-0
        cursor-pointer
        select-none
      "

    >


      <div className="atlas-resource-card-inner">


        <div
          className={`
            atlas-resource-content
            ${level === 0 ? "active" : ""}
          `}
        >


          {/* Icon */}

          <div

            className="atlas-resource-icon"

            style={{

              background:`${color}18`

            }}

          >

            <Icon

              size={46}

              color={color}

            />

          </div>




          {/* Title */}

          <h3 className="atlas-resource-title">

            {titleWords.map((word,index)=>(

              <span key={word}>

                {word}

                {index === 0 && titleWords.length > 1 && (
                  <br />
                )}

              </span>

            ))}

          </h3>




          {/* Description */}

          <p className="atlas-resource-description">

            {description}

          </p>


        </div>




        <div className="atlas-resource-hint">

          click anywhere

        </div>


      </div>


    </motion.div>

  );

}