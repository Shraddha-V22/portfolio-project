import React from "react";
import { motion } from "framer-motion";
import { componentVarient } from "./varients/varients";

export default function About() {
  return (
    <motion.div className="grid h-full w-full place-items-center font-newCycle">
      <motion.section
        variants={componentVarient}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`mx-auto h-[fit-content] max-w-[500px] text-center leading-7 tracking-widest`}
      >
        <p className="m-2 bg-black/90 p-2 text-white">
          Hey there✨👋, I'm Shraddha Vishwakarma!!
          <br />I have a passion for coding and love to create clean, function,
          user-friendly websites. I have worked on various projects which make
          use of languages such as HTML5, CSS3, JavaScript, React, TypeScript,
          etc. I strive to create websites that are intuitive and easy to
          navigate. When I'm not coding, I enjoy Sketching/drawing✨.
        </p>
      </motion.section>
    </motion.div>
  );
}

const certificationVarients = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function Certification({ institution, course, imgSrc }) {
  return (
    <motion.section
      variants={certificationVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex w-[250px] items-center gap-2 rounded-md border-[1px] border-black/10 py-4 px-1"
    >
      <img
        src={imgSrc}
        alt={`${institution} logo`}
        className="mx-auto h-16 w-16 rounded-full p-2"
      />
      <section>
        <h1 className="text-dark text-xl font-bold">{institution}</h1>
        <p className="text-sm">{course}</p>
      </section>
    </motion.section>
  );
}
