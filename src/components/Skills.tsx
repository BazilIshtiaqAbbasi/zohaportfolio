"use client";
import React from "react";
import TitleText from "./TitleText";
import { textVarient } from "@/utils/motion";
import { motion } from "framer-motion";
import { skills } from "@/utils/data";

const Skills = () => {
  return (
    <div>
      <TitleText title="SKILLs" />
      <motion.p
        variants={textVarient}
        initial="hidden"
        whileInView="show"
        className="text-white text-lg p-5 text-center md:px-[25%]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        placeat eaque sunt vero tempora a vel consectetur
      </motion.p>
      <motion.div
        variants={textVarient}
        initial="hidden"
        whileInView="show"
        className="flex items-center justify-center gap-4 flex-wrap mt-10"
      >
        {skills.map((val, ind) => {
          return (
            <div key={ind} className=" flex flex-col justify-center items-center gap-4">
              <div className="flex flex-col justify-center items-center bg-purple-700/5 border-[1px] border-purple-900 w-40 h-40 p-4 rounded-xl hover:bg-purple-500/30 transition duration-500 ease-in-out">
                <img
                  src={val.image}
                  className="w-16 h-16 object-cover"
                  alt="cover"
                />
                <h5 className="font-extrabold text-xl text-gray-500">
                  {val.percentage}
                </h5>
              </div>
              <h2 className="text-purple-500 font-bold text-xl">{val.name}</h2>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
