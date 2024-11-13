"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { Product } from "@/utils/data";
import { motion } from "framer-motion";
import { textVarient } from "@/utils/motion";

const Products = ({ filterdWorks }: { filterdWorks: Product[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filterdWorks.map((val, ind) => (
        <motion.div variants={textVarient} initial="hidden" whileInView="show" key={ind}>
        <CardContainer className="inter-var">
          <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              {val.name}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={val.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-white  text-black text-xs font-bold"
              >
                Visit
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        </motion.div>
      ))}
    </div>
  );
};

export default Products;
