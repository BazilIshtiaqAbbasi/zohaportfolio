"use client";
import React from "react";
import TitleText from "./TitleText";
import { motion } from "framer-motion";
import { textVarient } from "@/utils/motion";
import { BackgroundGradient } from "./ui/background-gradient";
import { experience } from "@/utils/data";

const Experience = () => {
  return (
    <div>
      <TitleText title=" My Experience" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 ">
      {experience?.map((val, ind) => {
        return (
          <motion.div
          key={val.id}
            variants={textVarient}
            initial="hidden"
            whileInView="show"
            whileHover={{
              y: -10,
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <BackgroundGradient className="rounded-[22px] bg-zinc-900 p-4">
              <p className="text-base sm:text-xl mt-4 font-bold mb-2 text-neutral-200">{val.startDate} - {val.endDate}</p>
              <p className="text-sm font-bold text-neutral-600">{val.title}</p>
              <p className="text-neutral-400 mt-2">{val.descripton}</p>
            </BackgroundGradient>
          </motion.div>
        );
      })}
      </div>
    </div>
  );
};

export default Experience;
