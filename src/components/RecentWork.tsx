"use client";
import React, { useState } from "react";
import TitleText from "./TitleText";
import Categories from "./Categories";
import { motion } from "framer-motion";
import { textVarient } from "@/utils/motion";
import { categories, work } from "@/utils/data";
import Products from "./Products";

const RecentWork = () => {
    const [selectedCategoriesID,setSelectedCategoriesID] = useState<number | null>(0)

    const filterdWorks = selectedCategoriesID ? work.filter((product, index) => product.categoryId === selectedCategoriesID) : work;
    
  return (
    <>
      <TitleText title="My Recent Work" />
      <motion.div variants={textVarient} initial="hidden" whileInView="show">
        <p className="text-white text-lg p-5 text-center md:px-[25%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, placeat eaque sunt vero tempora a vel consectetur
        </p>
        <Categories selectedCategoriesID={selectedCategoriesID} setSelectedCategoriesID={setSelectedCategoriesID} categories={categories}/>
        <Products filterdWorks={filterdWorks}/>
      </motion.div>
    </>
  );
};

export default RecentWork;
