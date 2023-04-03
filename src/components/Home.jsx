import React from "react";
import { motion } from "framer-motion";
import { componentVarient } from "./varients/varients";

export default function Home() {
  return (
    <motion.section className="h-full w-full">
      <section className="relative h-full w-full p-8 font-aboreto">
        <section className="">
          <section className={`mt-12 w-[fit-content] tracking-wider`}>
            <motion.h1
              variants={componentVarient}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-2 w-[fit-content] bg-black/90 px-1 text-7xl text-white max-[800px]:text-5xl max-[500px]:text-3xl"
            >
              Shraddha
            </motion.h1>
            <motion.h1
              variants={componentVarient}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-2 bg-black/90 px-1 text-7xl text-white max-[800px]:text-5xl max-[500px]:text-3xl"
            >
              Vishwakarma
            </motion.h1>
          </section>
        </section>
      </section>
    </motion.section>
  );
}
