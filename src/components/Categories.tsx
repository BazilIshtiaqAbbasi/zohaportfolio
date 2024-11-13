'use client'
import { Category } from '@/utils/data';
import { textVarient } from '@/utils/motion';
import { motion } from 'framer-motion';
import React from 'react'

interface CatListProps {
    selectedCategoriesID?: number | null;
    setSelectedCategoriesID: (categoryId: number) => void;
    categories: Category[];
}
const Categories = ({selectedCategoriesID,setSelectedCategoriesID,categories}:CatListProps) => {
  return (
    <motion.div variants={textVarient} initial="hidden" whileInView="show" className='flex justify-center flex-wrap gap-4'>
      <button onClick={() => setSelectedCategoriesID(0)} className={`${selectedCategoriesID == 0 && "bg-purple-500"} bg-black border-purple-500 border-[1px] text-white font-bold py-2 px-4 rounded-lg`}>
        All
      </button>
      {categories.map((val,ind)=>{
        return(
            <button key={ind} onClick={() =>setSelectedCategoriesID(val.id)} className={`${selectedCategoriesID == val.id  && "bg-purple-500"} border-purple-500 border-[1px] text-white font-bold py-2 px-4 rounded-lg`}>
        {val.name}
      </button>
        )
      })}
    </motion.div>
  )
}

export default Categories
